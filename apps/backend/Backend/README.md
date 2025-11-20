# Documentatie API

# Cuprins

-   [Înregistrare Utilizator](#inregistrare-utilizator)
-   [Autentificare utilizator](#autentificare-utilizator)
-   [Test token JWT](#test-token-jwt)
-   [Obținere județe și specializări](#obținere-județe-și-specializări)

---

## Inregistrare Utilizator

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
	"Desc": "string (opțional)",
	"Experienta": "int (opțional)",
	"Pret_start": "float (opțional)",
	"Disponibilitate": "string (opțional)",
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
	"Disponibilitate": "Ocupat",
	"Id_Judet": 23,
	"SpecializariId": [1, 3, 5]
}
```

#### Response

-   **Status:** 200 OK

## Autentificare utilizator

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

## Test token JWT

-   **Endpoint:** `/auth/test`
-   **Metodă:** GET
-   **Autentificare:** Da
-   **Descriere:** Endpoint de test pentru a verifica dacă tokenul JWT este valid. Returnează mesajul `"Autorizat"` dacă tokenul este corect și utilizatorul este autentificat.

---

### 💻 Usage example

#### Response

-   **Status:** 200 OK
-   **Mesaj:** "Autorizat"

---

## Obținere județe și specializări

-   **Endpoint:** `auth/data`
-   **Metodă:** GET
-   **Autentificare:** Nu
-   **Descriere:** Returnează lista completă de județe și specializări disponibile în sistem.

### 💻 Usage example

#### Response

**Status:** 200 OK

```json
{
	"judete": [
		{ "id": 1, "name": "Alba" },
		{ "id": 2, "name": "Arad" },
		{ "id": 3, "name": "Argeș" }
        ...
	],
	"specializari": [
		{ "id": 1, "name": "Zidar" },
		{ "id": 2, "name": "Dulgher" },
		{ "id": 3, "name": "Constructor" }
        ...
	]
}
```

---

## Adaugare la Favorite

-   **Endpoint:** `/favorite/{id_meserias}`
-   **Metodă:** `POST`
-   **Autentificare:** Da
-   **Descriere:** Adaugă un meseriaș în lista de favorite a utilizatorului conectat.

---

### 💻 Usage example

#### Request

    POST /favorite/5

#### Response

-   **Status:** 201 Created

```json
{
	"id": 1,
	"id_user": 10,
	"id_meserias": 5
}
```

---

## Stergere de la Favorite

-   **Endpoint:** `/favorite/{id_meserias}`
-   **Metodă:** `DELETE`
-   **Autentificare:** Da
-   **Descriere:** Șterge un meseriaș din lista de favorite a utilizatorului.

---

### 💻 Usage example

#### Response

-   **Status:** 204 No Content

---

## Vizualizare Favorite

-   **Endpoint:** `/favorite`
-   **Metodă:** `GET`
-   **Autentificare:** Da
-   **Descriere:** Returnează lista completă a meseriașilor favoriți pentru utilizatorul conectat.

---

### 💻 Usage example

#### Response

-   **Status:** 200 OK

```json
[
	{
		"id": 1,
		"id_user": 10,
		"id_meserias": 5
	},
	{
		"id": 2,
		"id_user": 10,
		"id_meserias": 8
	}
]
```
