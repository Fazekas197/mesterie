namespace Backend.DTOs;

public record MeseriasDTO(
    //Pt navigare
    int Id,             
    //Utilizator
    string Nume,
    string Telefon,
    //Meserias
    string Desc,
    int Experienta,
    decimal Pret_start,
    string Disponibilitate,
    //Judet
    string Judet
);
