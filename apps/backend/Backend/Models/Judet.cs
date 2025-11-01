using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

public class Judet
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
}
