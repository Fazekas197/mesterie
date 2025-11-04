using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

public class Review
{
    [Key]
    public int Id { get; set; }
    [Required]
    [ForeignKey("Utilizator")]
    public int Id_User {get; set;} 
    [ForeignKey("Meserias")]
    public int Id_Meserias {get;set;}
    [Required][Range(0, 5, ErrorMessage = "Value must be between 0 and 5.")]
    public int? Rating {get;set;} = null!;

    public string Recenzie {get; set;} = null!;

   public DateOnly Created_at { get; set; } = DateOnly.FromDateTime(DateTime.Now);

    public Utilizator Utilizator {get; set;} = null!;

    public Meserias Meserias{get;set;} = null!;

}