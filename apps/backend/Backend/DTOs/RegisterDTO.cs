namespace Backend.DTOs;

public record RegisterDTO(
    string Nume,
    string Email,
    string Parola,
    string Rol,
    string Telefon,
    DateOnly Data_Nasterii,

    string? Desc,
    int? Experienta,
    float? Pret_start,
    string? Disponibilitate
);