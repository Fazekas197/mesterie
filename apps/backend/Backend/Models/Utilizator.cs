using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace Backend.Models;

public class Utilizator
{   
    [Key] [Required]
    public int Id{ get; set; } 
    [Required]
    public string Nume{get; set;} = null!;
    [Required]
    public string Email{get; set;} = null!;
    [Required] [MinLength(8)]
    public string Parola_Hash{get; set;}= null!;
    [Required]
    public string Rol{get; set;}= null!;
    [Required]
    public string Telefon{get; set;}= null!;
    [Required]
    public DateOnly? Data_Nasterii {get; set;} = null!; 
    [Required]
    public DateOnly Created_at {get; set;} = DateOnly.FromDateTime(DateTime.Now);
}
