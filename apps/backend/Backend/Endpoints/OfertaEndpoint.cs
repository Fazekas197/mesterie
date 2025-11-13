using Backend.Data;

using Backend.Models;

using System.Security.Claims;

using System.IdentityModel.Tokens.Jwt;

using Microsoft.EntityFrameworkCore;

using Backend.DTOs;



namespace Backend.Data;



public static class OfertaEndpoint

{

    public static void MapOfertaEndpoints(this WebApplication app)

    {

        var group = app.MapGroup("/oferte")

            .RequireAuthorization();



        // SINGLE, CLEAN POST ENDPOINT

        group.MapPost("/", async (HttpContext http, AppDbContext db, OfertaDto dto, int id_meserias) =>

        {

            // Extract user ID from token

            var userIdClaim = http.User.FindFirst(ClaimTypes.NameIdentifier)?.Value

                ?? http.User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;



            if (userIdClaim == null)

                return Results.Json(new { message = "User ID not found in token." }, statusCode: 401);



            int userId = int.Parse(userIdClaim);



            // Check if user already made an offer

            bool exists = await db.Oferte.AnyAsync(o => o.Id_user == userId);

            if (exists)

                return Results.Conflict(new { message = "Oferta exista deja." });



            // Validate Judet

            var judet = await db.Judete.FirstOrDefaultAsync(j => j.Name == dto.Name);

            if (judet == null)

                return Results.NotFound(new { message = "Judet invalid." });



            // Validate Specializare

            var specializare = await db.Specializari.FirstOrDefaultAsync(s => s.Name == dto.Denumire);

            if (specializare == null)

                return Results.NotFound(new { message = "Specializare invalida." });



            // Create Oferta

            var oferta = new Oferta

            {

                Id_user = userId,

                Id_judet = judet.Id,

                Id_specializare = specializare.Id,



                Titlu = dto.Titlu,

                Desc = dto.Desc,

                Buget = dto.Buget,

                Created_at = dto.Created_At

            };



            db.Oferte.Add(oferta);

            await db.SaveChangesAsync();



            // Return oferta with user, judet and specializare

            var response = await db.Oferte

                .Include(o => o.Utilizator)

                .Include(o => o.Judet)

                .Include(o => o.Specializare)

                .Where(o => o.Id == oferta.Id)

                .Select(o => new

                {

                    o.Id,

                    o.Titlu,

                    o.Desc,

                    o.Buget,

                    o.Created_at,



                    Judet = o.Judet.Name,

                    Specializare = o.Specializare.Name,



                    User = new

                    {

                        o.Utilizator.Nume,

                        o.Utilizator.Telefon,

                        o.Utilizator.Email

                    }

                })

                .FirstOrDefaultAsync();



            return Results.Ok(response);

        });


        

    }

}