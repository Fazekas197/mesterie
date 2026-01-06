import './PagParola.css';
import LogoAlb from '../Assets/LogoAlb.svg'; // Ajustează calea la Assets
import React, { useState } from 'react';
import eyeOff from '../Assets/eye-off.svg';
import eyeOn from '../Assets/eye-on.svg';

const PagParola = ({ onNavigare }) => {
    // Adăugăm starea de date lipsă
    const [passwordData, setPasswordData] = useState({
        parola: '',
        confirmaParola: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Starea de erori este necesară dacă ai validare (deși le-ai ascuns)
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.id]: e.target.value });
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(prev => !prev);
        } else if (field === 'confirm') {
            setShowConfirmPassword(prev => !prev);
        }
    };

    const handleSubmit = () => {
        // Logica de validare ar veni aici (e.g., verificare lungime, potrivire)
        if (passwordData.parola !== passwordData.confirmaParola) {
            // Setează eroarea dacă nu se potrivesc
            setErrors({ general: true });
            console.log("Eroare: Parolele nu se potrivesc.");
            return;
        }

        // Navigare la pasul următor
        onNavigare('selectare-rol');
    };

    return (
        <div className="page-wrapper">
            <div className="logo">
                <img src={LogoAlb} alt="Logo" />
            </div>
            <div className="container">
                <span
                    className="back-arrow-top"
                    onClick={() => onNavigare('inregistrare')} // Navighează înapoi la 'inregistrare'
                    title="Înapoi la Înregistrare"
                >
                    &larr;
                </span>
                <h1 className="title-text-large">Înregistrare</h1>
                <div className="DejaCont">
                    Aveți deja un cont?
                    <a href="https://www.google.com/">Autentificare</a>
                </div>

                {/* Mesaj de eroare general dacă parolele nu se potrivesc, etc. */}
                {errors.general && (
                    <div className="error-message" style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>
                        Vă rugăm verificați datele introduse.
                    </div>
                )}

                <div className="form-content">

                    {/* Câmpul 1: Parolă */}
                    <div className="input-field-group">
                        <label htmlFor="parola" className="input-label">Parolă</label>
                        <div className="password-input-wrapper" style={{ position: 'relative' }}> {/* Adăugăm position: relative */}
                            <input
                                // Schimbă tipul condițional
                                type={showPassword ? "text" : "password"}
                                id="parola"
                                className={`text-input ${errors.general ? 'input-error' : ''}`}
                                placeholder="********"
                                value={passwordData.parola} // Adăugăm value
                                onChange={handleChange} // Adăugăm onChange
                                style={{ paddingRight: '40px' }} // Spațiu pentru iconiță
                            />
                            {/* Butonul/Simbolul pentru afișare/ascundere - CORECCIE: FOLOSIM <img> */}
                            <span
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility('password')}
                                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 10 }} // Poziționare
                            >
                                <img
                                    src={showPassword ? eyeOn : eyeOff} // Setează SVG-ul ca SRC
                                    alt="Vizibilitate Parolă"
                                    style={{ width: '24px', verticalAlign: 'middle' }}
                                />
                            </span>
                        </div>
                    </div>

                    {/* Câmpul 2: Confirmare parolă */}
                    <div className="input-field-group">
                        <label htmlFor="confirmaParola" className="input-label">Confirmare parolă</label>
                        <div className="password-input-wrapper" style={{ position: 'relative' }}> {/* Adăugăm position: relative */}
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmaParola"
                                className={`text-input ${errors.general ? 'input-error' : ''}`}
                                placeholder="********"
                                value={passwordData.confirmaParola} // Adăugăm value
                                onChange={handleChange} // Adăugăm onChange
                                style={{ paddingRight: '40px' }} // Spațiu pentru iconiță
                            />
                            <span
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility('confirm')}
                                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 10 }} // Poziționare
                            >
                                <img
                                    src={showConfirmPassword ? eyeOn : eyeOff} // Setează SVG-ul ca SRC
                                    alt="Vizibilitate Confirmare Parolă"
                                    style={{ width: '24px', verticalAlign: 'middle' }}
                                />
                            </span>
                        </div>
                    </div>

                    <button
                        className="next-step-button"
                        onClick={handleSubmit}
                    >
                        Pasul următor
                    </button>

                </div>
            </div>
        </div>
    );
}

export default PagParola;