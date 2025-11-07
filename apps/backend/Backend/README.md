# Documentatie API

# Cuprins

## 1. Inregistrare Utilizator

-   **Endpoint:** `/auth/register`
-   **Metodă:** `POST`
-   **Autentificare:** Nu
-   **Descriere:** Creează un nou utilizator în baza de date. Dacă `EsteMeserias = true`, se creează automat și un profil de meseriaș cu datele și specializările corespunzătoare.

---

### 🧩 Body

```json
{
	"Nume": "string",
	"Email": "string",
	"Parola": "string",
	"EsteMeserias": "bool",
	"Telefon": "string",
	"Data_Nasterii": "date (YYYY-MM-DD)",
	"Desc": "string (opțional, necesar dacă EsteMeserias = true)",
	"Experienta": "int (opțional)",
	"Pret_start": "float (opțional)",
	"Disponibilitate": "string (opțional)",
	"Id_User": "int (ignoră la înregistrare)",
	"Id_Judet": "int (opțional)",
	"SpecializariId": "list<int> (opțional)"
}
```

---

### 💻 Usage example

#### Body

```json
{
	"Nume": "Ion Popescu",
	"Email": "ion.popescu@example.com",
	"Parola": "parola123",
	"EsteMeserias": true,
	"Telefon": "0712345678",
	"Data_Nasterii": "1990-05-12",
	"Desc": "Instalator cu experiență în lucrări rezidențiale",
	"Experienta": 8,
	"Pret_start": 150.0,
	"Disponibilitate": "Luni-Vineri, 09:00-18:00",
	"Id_User": 0,
	"Id_Judet": 23,
	"SpecializariId": [1, 3, 5]
}
```

#### Response

-   **Status:** 200 OK

## 2. Autentificare utilizator

-   **Endpoint:** `/auth/login`
-   **Metodă:** `POST`
-   **Autentificare:** Nu
-   **Descriere:** Permite autentificarea unui utilizator existent în sistem. Returnează un token JWT valabil 7 zile, folosit ulterior pentru accesarea endpoint-urilor protejate.

---

### 🧩 Body

```json
{
	"Email": "string",
	"Parola": "string"
}
```

---

### 💻 Usage example

#### Body

```json
{
	"Email": "ion.popescu@example.com",
	"Parola": "parola123"
}
```

#### Response

-   **Status:** 200 OK

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
