import React, { useState } from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/LogoAlb.svg';
import "./Login.css";

// MODIFICARE NOUĂ: BAZĂ DE DATE FALSĂ (MOCK)
// În mod normal, aceste date ar veni dintr-un API
const usersDatabase = [
  { email: 'numeprenume@gmail.com', parola: 'parola123' },
  { email: 'user@mesterie.ro', parola: 'mesterie' },
  { email: 'test@test.com', parola: '123456' }
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Încercare de autentificare cu:', email, parola);

    //Căutăm utilizatorul în "baza de date"
    const userGasit = usersDatabase.find(
      (user) => user.email === email && user.parola === parola
    );

    //Verificăm dacă a fost găsit
    if (userGasit) {
      // SUCCES: Utilizator găsit
      console.log('Utilizator autentificat cu succes:', userGasit);
      setError(false);
      // Aici ai naviga utilizatorul către pagina principală (de ex. /dashboard)
    } else {
      // EROARE: Utilizator negăsit sau parolă greșită
      console.log('Eroare: Datele introduse nu sunt corecte');
      setError(true);
    }
  };


  return (
    <div className="login-page-container">
      
      <div className="logo-container">
        <img src={logo} alt="Mesterie Logo" className="login-logo" />
      </div>

      <div className="login-form-container">
        
        <div className="login-card">
          <button className="back-button">
            <FaArrowLeft />
          </button>

          <h2>Autentificare</h2>
          <p className="register-link">
            Nu ai un cont? <a href="/register">Înregistrează-te</a>
          </p>

          {}
          {error && (
            <p className="error-message">Datele introduse nu sunt corecte</p>
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
                className={error ? 'input-error' : ''}
              />
            </div>

            <div className="form-group">
              <label htmlFor="parola">Parolă</label>
              <div className={`password-wrapper ${error ? 'input-error' : ''}`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="parola"
                  value={parola}
                  onChange={(e) => setParola(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <span 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="password-toggle-icon"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
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


//IMPORTANT:
/*Pentru a testa:

Test de succes: Folosește test@test.com și parola 123456. Bordura roșie ar trebui să dispară dacă a fost acolo.

Test de eroare: Folosește test@test.com și parola greșită. Bordura roșie și mesajul vor apărea.*/