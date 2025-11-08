namespace Backend.DTOs;

public record RegisterDTO(
    string Nume,
    string Email,
    string Parola,
    bool EsteMeserias,
    string Telefon,
    DateOnly Data_Nasterii,


    string Desc,
    int Experienta,
    decimal Pret_start,
    string Disponibilitate,
    int Id_User,
    int Id_Judet,
    List<int> SpecializariId
);