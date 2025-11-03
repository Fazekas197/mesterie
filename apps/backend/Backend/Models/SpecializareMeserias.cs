using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

[PrimaryKey(nameof(Id_meserias), nameof(Id_specializare))]
public class SpecializareMeserias
{
    [Required]
    [ForeignKey("Meserias")]
    public int Id_meserias { get; set; }
    [Required]
    [ForeignKey("Specializare")]
    public int Id_specializare { get; set; }
    public Specializare Specializare { get; set; } = null!;
    public Meserias Meserias { get; set; } = null!;
}
