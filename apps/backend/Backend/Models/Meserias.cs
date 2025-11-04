using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

[PrimaryKey(nameof(Id), nameof(Id_user))]
public class Meserias
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    [Required]
    [ForeignKey("Utilizator")]
    public int Id_user { get; set; }
    [Required]
    [ForeignKey("Judet")]
    public int Id_Judet { get; set; }
    [Required]
    public string Desc { get; set; } = null!;
    [Required]
    public int Experienta { get; set; }
    [Required]
    public float Pret_start { get; set; }
    [Required]
    public string Disponibilitate { get; set; } = null!;
    public Utilizator Utilizator { get; set; } = null!;
    public Judet Judet { get; set; } = null!;

}
