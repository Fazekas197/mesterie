// Backend/Data/AppDbContext.cs
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Threading;

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
    public DbSet<Meserias> Meseriasi { get; set; } = null!;
    public DbSet<SpecializareMeserias> SpecializariMeseriasi { get; set; } = null!;
    public DbSet<Favorit> Favorite { get; set; } = null!;
    public DbSet<Oferta> Oferte { get; set; } = null!;
    public DbSet<Review> Reviews { get; set; } = null!;
    public DbSet<Aplicare> Aplicari { get; set; } = null!;

    // Allowed characters: Unicode letters, spaces, hyphen and apostrophe.
    // Adjust regex if you want ASCII-only (e.g. ^[A-Za-z\s'-]+$).
    private static readonly Regex NameRegex = new(@"^[\p{L}\s'-]+$", RegexOptions.Compiled);

    public override int SaveChanges()
    {
        ValidateEntities();
        return base.SaveChanges();
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        ValidateEntities();
        return base.SaveChangesAsync(cancellationToken);
    }

    private void ValidateEntities()
    {
        // Validate Utilizator entities that are Added or Modified
        foreach (var entry in ChangeTracker.Entries<Utilizator>()
                     .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified))
        {
            var u = entry.Entity;

            // Normalize/trim before validating
            var nume = u.Nume?.Trim();

            // Required check + pattern match
            if (string.IsNullOrWhiteSpace(nume) || !NameRegex.IsMatch(nume))
            {
                // Throwing a ValidationException here; endpoints should catch and translate to 400.
                throw new ValidationException("Nume may contain only letters, spaces, hyphens and apostrophes.");
            }

            // Persist the normalized value back into the tracked entity
            u.Nume = nume!;
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Keep composite PK as you have it on the class
        modelBuilder.Entity<Meserias>()
            .HasKey(m => new { m.Id, m.Id_user });

        // Make Id an alternate (unique) principal key so single-col FKs can target it
        modelBuilder.Entity<Meserias>()
            .HasAlternateKey(m => m.Id);
        // Inside AppDbContext.OnModelCreating()
        modelBuilder.Entity<Meserias>()
            .HasKey(m => new { m.Id, m.Id_user });

        modelBuilder.Entity<Meserias>()
            .HasAlternateKey(m => m.Id);

        // ✅ Limit decimals on Pret_start
        modelBuilder.Entity<Meserias>()
            .Property(m => m.Pret_start)
            .HasPrecision(10, 2);
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
        // -------------------------------
        // Favorit
        // -------------------------------
        modelBuilder.Entity<Favorit>()
            .HasKey(f => f.Id);

        modelBuilder.Entity<Favorit>()
            .HasOne(f => f.Utilizator)
            .WithMany() // optionally: .WithMany(u => u.Favoriti)
            .HasForeignKey(f => f.Id_user)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Favorit>()
            .HasOne(f => f.Meserias)
            .WithMany() // optionally: .WithMany(m => m.Favoriti)
            .HasForeignKey(f => f.Id_meserias)
            .HasPrincipalKey(m => m.Id) // FK points to alternate key
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Review>()
            .HasKey(r => r.Id);

        modelBuilder.Entity<Review>()
            .HasOne(r => r.Utilizator)
            .WithMany() // optionally: .WithMany(u => u.Reviews)
            .HasForeignKey(r => r.Id_User)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Review>()
            .HasOne(r => r.Meserias)
            .WithMany() // optionally: .WithMany(m => m.Reviews)
            .HasForeignKey(r => r.Id_Meserias)
            .HasPrincipalKey(m => m.Id) // references Meserias.Id (alternate key)
            .OnDelete(DeleteBehavior.Cascade);

        // -------------------------------
        // Aplicare
        // -------------------------------
        modelBuilder.Entity<Aplicare>()
            .HasKey(a => a.Id);

        modelBuilder.Entity<Aplicare>()
            .HasOne(a => a.Oferta)
            .WithMany() // optionally: .WithMany(o => o.Aplicari)
            .HasForeignKey(a => a.Id_Oferta)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Aplicare>()
            .HasOne(a => a.Meserias)
            .WithMany() // optionally: .WithMany(m => m.Aplicari)
            .HasForeignKey(a => a.Id_Meserias)
            .HasPrincipalKey(m => m.Id) // references alternate key in Meserias
            .OnDelete(DeleteBehavior.Restrict);
    }
}
