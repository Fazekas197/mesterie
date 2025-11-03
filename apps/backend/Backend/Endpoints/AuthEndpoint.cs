using Backend.Data;
using Backend.DTOs;
using Backend.Models;
using BCrypt.Net;
using Microsoft.EntityFrameworkCore;

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
                Rol = user.Rol,
                Data_Nasterii = user.Data_Nasterii,
                Parola_Hash = BCrypt.Net.BCrypt.HashPassword(user.Parola)
            };

            await db.Utilizatori.AddAsync(createdUser);
            await db.SaveChangesAsync();
        });
    }
}