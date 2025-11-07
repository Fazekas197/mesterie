import './Inregistrare.css';
import LogoAlb from '../Assets/LogoAlb.svg';
import React, { useState } from 'react';

const Inregistrare = ({ onNavigare }) => {
    const [formData, setFormData] = useState({
        numeComplet: '',
        email: '',
        dataNastere: '',
        telefon: ''
    });
    const [errors, setErrors] = useState({});

    // FUNCTIA MODIFICATA PENTRU A RESTRICȚIONA DOAR LA LITERE ȘI SPAȚII PENTRU numeComplet
    const handleChange = (e) => {
        const { id, value } = e.target;

        let newValue = value;

        if (id === 'numeComplet') {
            // Regex care permite: litere (a-z, A-Z), spații (\s), și diacritice românești (Unicode range)
            // [\u0102\u0103\u00C2\u00E2\u00CE\u00EE\u0218\u0219\u021A\u021B] acoperă ĂăÂâÎîȘșȚț
            const nameRegex = /^[a-zA-Z\s\u0102\u0103\u00C2\u00E2\u00CE\u00EE\u0218\u0219\u021A\u021B]*$/;

            if (!nameRegex.test(value) && value !== '') {
                // Dacă valoarea introdusă nu corespunde regex-ului, NU se actualizează starea,
                // prevenind astfel introducerea caracterelor interzise.
                return;
            }
        }

        // Actualizarea stării
        setFormData({ ...formData, [id]: newValue });

        // Curăță eroarea la tastare
        if (errors[id]) {
            setErrors({ ...errors, [id]: false });
        }
    };

    // ... restul funcțiilor și JSX-ul nu sunt modificate

    const validateForm = () => {
        const newErrors = {};
        if (!formData.numeComplet.trim()) newErrors.numeComplet = true;
        if (!formData.email.trim()) newErrors.email = true;
        if (!formData.dataNastere) newErrors.dataNastere = true;
        if (!formData.telefon.trim()) newErrors.telefon = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        // 1. Verifică validarea
        if (validateForm()) {
            // 2. Navighează la Pagina Parola (cheia 'parola' definită în App.jsx)
            onNavigare('parola'); // 👈 ACEASTA ESTE ACȚIUNEA DORITĂ

        } else {
            // Dacă validarea eșuează, erorile roșii se vor afișa
            console.log('Eroare: Formularul nu este completat.');
        }
    };

    return (
        <div className="page-wrapper">

            <div className="logo">
                <img src={LogoAlb} alt="Logo" />
            </div>

            <div className="container">
                <span
                    className="back-arrow-top" // Clasă nouă pentru poziționare
                    onClick={() => onNavigare('signup')}
                    title="Înapoi la Autentificare"
                >
                    &larr;
                </span>

                {/* 2. Titlul într-un alt bloc (sau direct în container) */}
                <h1 className="title-text-large">Înregistrare</h1>
                {Object.keys(errors).length > 0 && (
                    <div className="error-message">
                        Vă rugăm să completați toate câmpurile.
                    </div>
                )}
                <div className="DejaCont">
                    Aveți deja un cont?
                    <a href="https://www.google.com/">Autentificare</a>
                </div>
                <div className="form-content">

                    {/* Câmpul 1: Nume și prenume complet */}
                    <div className="input-field-group">
                        <label htmlFor="numeComplet" className="input-label">Nume și prenume complet</label>
                        <input
                            type="text"
                            id="numeComplet"
                            className={`text-input ${errors.numeComplet ? 'input-error' : ''}`} // Aplicare condițională
                            placeholder="Nume Prenume"
                            value={formData.numeComplet} // Valoarea din stare
                            onChange={handleChange} // Handler la schimbare
                        />
                    </div>

                    {/* Câmpul 2: Adresă de e-mail */}
                    <div className="input-field-group">
                        <label htmlFor="email" className="input-label">Adresă de e-mail</label>
                        <input
                            type="email"
                            id="email"
                            className={`text-input ${errors.email ? 'input-error' : ''}`}
                            placeholder="numeprenume@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field-group">
                        <div className="input-field-group">
                            <label htmlFor="dataNastere" className="input-label">Data nașterii</label>
                            <input
                                type="date"
                                id="dataNastere"
                                // Aplică clasa de eroare dacă errors.dataNastere este true
                                className={`text-input date-input ${errors.dataNastere ? 'input-error' : ''}`}
                                // Valoarea din starea React
                                value={formData.dataNastere}
                                // Handler-ul care actualizează starea și curăță erorile
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="phone" className="input-label">Phone Number</label>

                        {/* Aplicăm clasa condițional pe wrapper, nu pe input-ul din interior! */}
                        <div className={`phone-input-wrapper ${errors.telefon ? 'input-error' : ''}`}>
                            <div className="country-selector">
                                {/* 🇷🇴 Drapelul României ca emoji sau simbol custom */}
                                <span role="img" aria-label="Romania flag">🇷🇴</span>
                                <span>+40</span>
                                {/* Săgeata în jos */}
                                <span>&#9662;</span>
                            </div>

                            {/* Conectăm input-ul la starea formularului */}
                            <input
                                type="tel"
                                id="telefon" // 👈 ID-ul din starea 'formData.telefon'
                                className="phone-input-field"
                                placeholder="000-000-000"
                                value={formData.telefon} // 👈 Valoarea din stare
                                onChange={handleChange}  // 👈 Handler-ul la schimbare
                            />
                        </div>
                    </div>
                    <button className="next-step-button" onClick={handleSubmit}>
                        Pasul următor
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Inregistrare;