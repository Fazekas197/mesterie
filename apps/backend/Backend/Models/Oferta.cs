using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

[PrimaryKey(nameof(Id))]
public class Oferta
{
    [Required]
    public int Id { get; set; }
    [Required]
    [ForeignKey("Utilizator")]
    public int Id_user { get; set; }
    [Required]
    [ForeignKey("Judet")]
    public int Id_judet { get; set; }
    [Required]
    public string Titlu { get; set; } = null!;
    [Required]
    public string Desc { get; set; } = null!;
    [Required]
    [ForeignKey("Specializare")]
    public int Id_specializare { get; set; }
    [Required]
    public float? Buget { get; set; } = null!;
    [Required]
    public DateOnly Created_at { get; set; } = DateOnly.FromDateTime(DateTime.Now);
    public Utilizator Utilizator { get; set; } = null!;
    public Judet Judet { get; set; } = null!;
    public Specializare Specializare { get; set; } = null!;

}
