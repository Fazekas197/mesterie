using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Endpoints;

public static class FavoriteEndpoint
{
    public static void MapFavEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/favorite")
            .RequireAuthorization();

        group.MapPost("/{id_meserias}", async (HttpContext http, AppDbContext db, int id_meserias) =>
        {
            var userIdClaim = http.User.FindFirst(ClaimTypes.NameIdentifier)?.Value
                ?? http.User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;

            if (userIdClaim == null)
                return Results.Json(new { message = "User ID not found in token." }, statusCode: 401);

            int userId = int.Parse(userIdClaim);

            bool exists = await db.Favorite.AnyAsync(f =>
                f.Id_user == userId && f.Id_meserias == id_meserias);

            if (exists)
                return Results.Conflict(new { message = "Already added." });

            var favorit = new Favorit
            {
                Id_user = userId,
                Id_meserias = id_meserias
            };

            db.Favorite.Add(favorit);
            await db.SaveChangesAsync();

            return Results.Created($"/favorite/{favorit.Id}", favorit);
        });
        group.MapDelete("/{id_meserias}", async (HttpContext http, AppDbContext db, int id_meserias) =>
        {
            var userIdClaim = http.User.FindFirst(ClaimTypes.NameIdentifier)?.Value
                ?? http.User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;

            if (userIdClaim == null)
                return Results.Json(new { message = "User ID not found in token." }, statusCode: 401);

            int userId = int.Parse(userIdClaim);


            var favorit = await db.Favorite.FirstOrDefaultAsync(f =>
                f.Id_user == userId && f.Id_meserias == id_meserias);
            if (favorit != null)
            {
                db.Favorite.Remove(favorit);
                await db.SaveChangesAsync();
            }
            else
                return Results.NotFound(new { message = "Favorite not found." });
            return Results.NoContent();
        });
    }
}
