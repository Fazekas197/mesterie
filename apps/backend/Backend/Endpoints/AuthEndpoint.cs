using System.Reflection.Metadata.Ecma335;
using Backend.Data;
using System.ComponentModel.DataAnnotations;
using Backend.DTOs;
using Backend.Models;
using BCrypt.Net;
using Microsoft.AspNetCore.Identity;
using System.Text;
using System.Security.Claims;           // for Claim
using System.IdentityModel.Tokens.Jwt;  // for JwtRegisteredClaimNames
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;

using Sprache;

namespace Backend.Endpoints;

public static class AuthEndpoints
{
    // This method will be called in Program.cs to register all routes
    public static void MapAuthEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/auth");

        group.MapPost("/register", async (AppDbContext db, RegisterDTO user) =>
        {
            try
            {
                var createdUser = new Utilizator
                {
                    Nume = user.Nume,                                 // validated in SaveChanges
                    Email = user.Email.Trim().ToLowerInvariant(),
                    Telefon = user.Telefon,
                    EsteMeserias = user.EsteMeserias,
                    Data_Nasterii = user.Data_Nasterii,
                    Parola_Hash = BCrypt.Net.BCrypt.HashPassword(user.Parola),
                    Created_at = DateOnly.FromDateTime(DateTime.UtcNow)
                };

                await db.Utilizatori.AddAsync(createdUser);
                await db.SaveChangesAsync(); // <-- may throw ValidationException

                if (user.EsteMeserias == true)
                {
                    var createdMeserias = new Meserias
                    {
                        Desc = user.Desc,
                        Experienta = user.Experienta,
                        Pret_start = user.Pret_start,
                        Disponibilitate = user.Disponibilitate,
                        Id_user = createdUser.Id,
                        Id_Judet = user.Id_Judet,
                    };
                    await db.Meseriasi.AddAsync(createdMeserias);
                    await db.SaveChangesAsync();

                    foreach (var specializareId in user.SpecializariId)
                    {
                        var link = new SpecializareMeserias
                        {
                            Id_meserias = createdMeserias.Id,
                            Id_specializare = specializareId
                        };
                        await db.SpecializariMeseriasi.AddAsync(link);
                    }
                    await db.SaveChangesAsync();
                }

                return Results.Created($"/auth/{createdUser.Id}", new { id = createdUser.Id });
            }
            catch (ValidationException vex)
            {
                // Comes from AppDbContext.ValidateEntities()
                return Results.BadRequest(new
                {
                    errors = new
                    {
                        Nume = new[] { vex.Message }
                    }
                });
            }
            catch (DbUpdateException dbex)
            {
                // Optional: handle unique email or other DB issues gracefully
                return Results.Problem(
                    title: "Database error",
                    detail: dbex.InnerException?.Message ?? dbex.Message,
                    statusCode: 500);
            }
        });
        group.MapPost("/login", async (AppDbContext db, LoginDTO login) =>
        {
            if (login == null || string.IsNullOrEmpty(login.Email) || string.IsNullOrEmpty(login.Parola))
                return Results.BadRequest(new { message = "Email and password must be provided." });

            var user = await db.Utilizatori.FirstOrDefaultAsync(u => u.Email == login.Email);
            if (user == null)
                return Results.BadRequest(new { message = "User not found." });

            bool passwordValid = BCrypt.Net.BCrypt.Verify(login.Parola, user.Parola_Hash);
            if (!passwordValid)
                return Results.BadRequest(new { message = "Invalid password." });

            var JwtSecret = Environment.GetEnvironmentVariable("JWT_SECRET");
            if (string.IsNullOrEmpty(JwtSecret))
                throw new Exception("Jwt nu este in env");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtSecret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
            };
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddDays(7),
                signingCredentials: creds
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
            return Results.Ok(new { token = tokenString });
        });
        group.MapGet("/test", async (AppDbContext db) =>
        {
            return Results.Ok("Autorizat");
        }).RequireAuthorization();
        group.MapGet("/data", async (AppDbContext db) =>
         {
             var judete = await db.Judete.ToListAsync();
             var specializari = await db.Specializari.ToListAsync();
             return Results.Ok(new { judete, specializari });
         });
    }
}
