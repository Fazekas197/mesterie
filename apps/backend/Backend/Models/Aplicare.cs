using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;


public class Aplicare
{
    [Key]
    [Required]
    public int Id { get; set; }
    [Required]
    [ForeignKey("Oferta")]
    public int Id_Oferta { get; set; }
    [Required]
    [ForeignKey("Meserias")]
    public int Id_Meserias { get; set; }
    [Required]
    public string Mesaj { get; set; } = null!;
    [Required]
    public DateOnly Created_at { get; set; } = DateOnly.FromDateTime(DateTime.Now);
    [Required]
    public string Status { get; set; } = null!;

    public Meserias Meserias { get; set; } = null!;
    public Oferta Oferta { get; set; } = null!;


}
