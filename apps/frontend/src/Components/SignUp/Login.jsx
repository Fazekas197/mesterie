import React, { useState } from "react";
import eyeOff from "../Assets/eye-off.svg";
import eyeOn from "../Assets/eye-on.svg";

import logo from "../Assets/LogoAlb.svg"; // Corectează calea la 'Assets' cu A mare
import "./Login.css";
// MODIFICARE NOUĂ: BAZĂ DE DATE FALSĂ (MOCK)
// În mod normal, aceste date ar veni dintr-un API
const usersDatabase = [
  { email: "numeprenume@gmail.com", parola: "parola123" },
  { email: "user@mesterie.ro", parola: "mesterie" },
  { email: "test@test.com", parola: "123456" },
];

// Componenta acceptă acum 'onNavigare'
const Login = ({ onNavigare }) => {
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Încercare de autentificare cu:", email, parola);

    //Căutăm utilizatorul în "baza de date"
    const userGasit = usersDatabase.find(
      (user) => user.email === email && user.parola === parola
    );

    //Verificăm dacă a fost găsit
    if (userGasit) {
      // SUCCES: Utilizator găsit
      console.log("Utilizator autentificat cu succes:", userGasit);
      setError(false);
      // Aici ai naviga utilizatorul către pagina principală (de ex. /dashboard)
    } else {
      // EROARE: Utilizator negăsit sau parolă greșită
      console.log("Eroare: Datele introduse nu sunt corecte");
      setError(true);
    }
  };

  return (
    <div className="login-page-container">
      <div className="logo-container">
        {/* EROARE CORECTATĂ: Asigură-te că variabila 'logo' este folosită corect */}
        <img src={logo} alt="Mesterie Logo" className="login-logo" />
      </div>

      <div className="login-form-container">
        <div className="login-card">
          <button
            className="back-button"
            // Navigare înapoi la pagina de înregistrare
            onClick={() => onNavigare("signup")}
          ></button>

          <h2>Autentificare</h2>
          <p className="register-link">
            Nu ai un cont?
            {/* Navigare la pagina de Înregistrare */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigare("signup");
              }}
            >
              Înregistrează-te
            </a>
          </p>

          {error && (
            <p className="error-message">
              Datele introduse nu sunt corecte
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Adresă de e-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="numeprenume@gmail.com"
                required
                className={error ? "input-error" : ""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="parola">Parolă</label>
              <div
                className={`password-wrapper ${error ? "input-error" : ""
                  }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="parola"
                  value={parola}
                  onChange={(e) => setParola(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <span
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="password-toggle-icon"
                >
                  {/* SCHIMBAREA CHEIE: Înlocuim iconițele React cu SVG-urile */}
                  <img
                    src={showPassword ? eyeOn : eyeOff}
                    alt="Toggle Password Visibility"
                    style={{
                      width: "24px",
                      height: "24px",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  />
                </span>
              </div>
            </div>

            <button type="submit" className="login-button">
              Conectează-te
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
