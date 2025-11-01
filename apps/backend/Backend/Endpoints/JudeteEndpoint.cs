using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Endpoints;

public static class JudeteEndpoints
{
    // This method will be called in Program.cs to register all routes
    public static void MapJudeteEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/judete");

        group.MapGet("/", async (AppDbContext db) =>
            await db.Judete.ToListAsync());
    }
}