namespace Backend.DTOs;

public record RegistrationDto(
    string Name,
    string Email,
    string Parola,
    string Rol,
    string Telefon,
    DateOnly Data_Nasterii,

    string Desc,
    int Experienta,
    float Pret_start,
    string Disponibilitate
);