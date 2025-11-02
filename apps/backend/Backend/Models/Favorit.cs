using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

[PrimaryKey(nameof(Id))]
public class Favorit
{
    [Required]
    public int Id { get; set; }
    [Required]
    [ForeignKey("Utilizator")]
    public int Id_user { get; set; }
    [Required]
    [ForeignKey("Meserias")]
    public int Id_meserias { get; set; }
    public Utilizator Utilizator { get; set; } = null!;
    public Meserias Meserias { get; set; } = null!;
}
