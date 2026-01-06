using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

[Index(nameof(Email), IsUnique = true)]
public class Utilizator
{
    [Key]
    [Required]
    public int Id { get; set; }
    [Required]
    [RegularExpression(@"^[\p{L}\s]+$", ErrorMessage = "Only letters and spaces are allowed.")]
    public string Nume { get; set; } = null!;
    [Required]
    public string Email { get; set; } = null!;
    [Required]
    [MinLength(8)]
    public string Parola_Hash { get; set; } = null!;
    [Required]
    public bool EsteMeserias { get; set; } = false;
    [Required]
    [StringLength(10, MinimumLength = 10, ErrorMessage = "Telefon must be exactly 10 characters long.")]
    [RegularExpression(@"^\d{10}$", ErrorMessage = "Telefon must contain exactly 10 digits.")]
    public string Telefon { get; set; } = null!;

    [Required]
    public DateOnly? Data_Nasterii { get; set; } = null!;
    [Required]
    public DateOnly Created_at { get; set; } = DateOnly.FromDateTime(DateTime.Now);
}
