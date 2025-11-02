using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
    {
    }

    public DbSet<Judet> Judete { get; set; } = null!;
    public DbSet<Specializare> Specializari { get; set; } = null!;
    public DbSet<Utilizator> Utilizatori { get; set; } = null!;
    public DbSet<Meserias> Meseriasi  { get; set; } = null!;




    
}
