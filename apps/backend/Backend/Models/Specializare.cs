using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

public class Specializare
{   
    public int Id { get; set; }
    public string Name { get; set; } = "";
}
