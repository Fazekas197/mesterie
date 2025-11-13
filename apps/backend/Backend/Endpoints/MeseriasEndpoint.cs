using Backend.Data;
using Backend.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Backend.Endpoints;

public static class MeseriasEndpoint
{
    public static void MapMeseriasEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/meseriasi");

        // 🔹 GET ALL MESERIASI
        group.MapGet("/", async (AppDbContext db) =>
        {
            var meseriasi = await db.Meseriasi
                .Include(m => m.Utilizator)
                .Include(m => m.Judet)
                .ToListAsync();

            var result = meseriasi.Select(m => new MeseriasDTO(
                m.Id,
                m.Utilizator.Nume,
                m.Utilizator.Telefon,
                m.Desc,
                m.Experienta,
                m.Pret_start,
                m.Disponibilitate,
                m.Judet.Name
            ));

            return Results.Ok(result);
        });

        group.MapGet("/{id:int}", async (AppDbContext db, int id) =>
        {
            var m = await db.Meseriasi
                .Include(m => m.Utilizator)
                .Include(m => m.Judet)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (m == null)
                return Results.NotFound(new { message = $"Meseriaș cu id: {id} nu exista." });

            var dto = new MeseriasDTO(
                m.Id,
                m.Utilizator.Nume,
                m.Utilizator.Telefon,
                m.Desc,
                m.Experienta,
                m.Pret_start,
                m.Disponibilitate,
                m.Judet.Name
            );

            return Results.Ok(dto);
        });
    }
}
