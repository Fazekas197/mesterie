using System.Reflection.Metadata.Ecma335;
using Backend.Data;
using Backend.DTOs;
using Backend.Models;
using BCrypt.Net;
using Microsoft.AspNetCore.Identity;
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
            var createdUser = new Utilizator
            {
                Nume = user.Nume,
                Email = user.Email,
                Telefon = user.Telefon,
                EsteMeserias = user.EsteMeserias,
                Data_Nasterii = user.Data_Nasterii,
                Parola_Hash = BCrypt.Net.BCrypt.HashPassword(user.Parola)
            };

            await db.Utilizatori.AddAsync(createdUser);
            await db.SaveChangesAsync();
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
                for (int i = 0; i < user.SpecializariId.Count; i++)
                {
                    var specializareId = user.SpecializariId[i];

                    var link = new SpecializareMeserias
                    {
                        Id_meserias = createdMeserias.Id,
                        Id_specializare = specializareId
                    };
                    await db.SpecializariMeseriasi.AddAsync(link);
                }
                await db.SaveChangesAsync();
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

            return Results.Ok(new { message = "Login successful!" });
        });
    }
}
