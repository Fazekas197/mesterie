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
    public DbSet<SpecializareMeserias> SpecializariMeseriasi { get; set; } = null!;
   protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    // Keep composite PK as you have it on the class
    modelBuilder.Entity<Meserias>()
        .HasKey(m => new { m.Id, m.Id_user });

    // Make Id an alternate (unique) principal key so single-col FKs can target it
    modelBuilder.Entity<Meserias>()
        .HasAlternateKey(m => m.Id);

    // Ensure SpecializareMeserias composite PK
    modelBuilder.Entity<SpecializareMeserias>()
        .HasKey(s => new { s.Id_meserias, s.Id_specializare });

    // Correct way to configure FK -> principal key (no generic type arg)
    modelBuilder.Entity<SpecializareMeserias>()
        .HasOne(s => s.Meserias)
        .WithMany() // or .WithMany(m => m.Specializari)
        .HasForeignKey(s => s.Id_meserias)
        .HasPrincipalKey(m => m.Id)   // <-- NO generic type parameter here
        .OnDelete(DeleteBehavior.Cascade);

    modelBuilder.Entity<SpecializareMeserias>()
        .HasOne(s => s.Specializare)
        .WithMany()
        .HasForeignKey(s => s.Id_specializare)
        .OnDelete(DeleteBehavior.Restrict);
}



    
}
