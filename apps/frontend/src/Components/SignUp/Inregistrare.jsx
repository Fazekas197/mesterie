import React, { useState } from 'react';
// Presupunem că aceste importuri sunt funcționale în mediul dumneavoastră
import './Inregistrare.css';
import LogoAlb from '../Assets/LogoAlb.svg';

const Inregistrare = ({ onNavigare }) => {
    const [formData, setFormData] = useState({
        numeComplet: '',
        email: '',
        dataNastere: '',
        telefon: ''
    });
    // Păstrăm structura de erori pentru a semnaliza chenarul roșu
    const [errors, setErrors] = useState({});

    // Utilitară pentru a obține data curentă în format YYYY-MM-DD
    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();

        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        // CORECTAT: Folosim backticks (``) pentru template literal
        return `${year}-${month}-${day}`; 
    };

    // Funcția pentru a gestiona schimbările și a aplica restricțiile de caractere
    const handleChange = (e) => {
        const { id, value } = e.target;

        let newValue = value;

        if (id === 'numeComplet') {
            // Regex care permite: litere (a-z, A-Z), spații (\s), și diacritice românești
            const nameRegex = /^[a-zA-Z\s\u0102\u0103\u00C2\u00E2\u00CE\u00EE\u0218\u0219\u021A\u021B]*$/;

            if (!nameRegex.test(value) && value !== '') {
                return;
            }
        }


        if (id === 'telefon') {
            const phoneRegex = /^[0-9]*$/;

            if (!phoneRegex.test(value)) {
                return;
            }
            
            // Limităm la 10 cifre pentru a corespunde validării (7-10)
            newValue = value.slice(0, 10); 
        }

        // Actualizarea stării
        setFormData({ ...formData, [id]: newValue });

        // Curăță eroarea la tastare
        if (errors[id]) {
            // Setăm eroarea la 'false' sau ștergem cheia, nu mai avem nevoie de text
            setErrors(prevErrors => {
                const updatedErrors = { ...prevErrors };
                delete updatedErrors[id];
                return updatedErrors;
            });
        }
    };

    // Funcția de validare
    const validateForm = () => {
        // Vom folosi un obiect unde cheia există dacă există o eroare
        const newErrors = {};
        let isValid = true;

        const minDate = new Date('1870-01-01');

        // Validare Nume
        if (!formData.numeComplet.trim()) {
            newErrors.numeComplet = true; // Setează la true pentru a declanșa stilul
            isValid = false;
        }

        // Validare Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = true;
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = true;
            isValid = false;
        }

        // Validare Data Nașterii
        const today = getCurrentDate();
        const dateOfBirth = new Date(formData.dataNastere);

        if (!formData.dataNastere) {
            newErrors.dataNastere = true;
            isValid = false;
        } else if (dateOfBirth > new Date(today) || dateOfBirth < minDate) {
            // Verificare pentru data maximă (viitor) și minimă (1870)
            newErrors.dataNastere = true;
            isValid = false;
        }

        // Validare Telefon - Verificare lungime (min 7, max 10)
        const phoneValue = formData.telefon.trim();
        if (!phoneValue) {
            newErrors.telefon = true;
            isValid = false;
        } else if (phoneValue.length < 7 || phoneValue.length > 10) {
            newErrors.telefon = true;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        // 1. Verifică validarea
        if (validateForm()) {
            // 2. Navighează la Pagina Parola (cheia 'parola' definită în App.jsx)
            onNavigare('parola');

        } else {
            // Dacă validarea eșuează, chenarele roșii se vor afișa
            console.log('Eroare: Formularul nu este completat corect.');
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
                {/* Afișează mesajul de eroare general - PĂSTRAT PENTRU A SEMNALA CĂ SUNT ERORI */}
                {Object.keys(errors).length > 0 && (
                    <div className="error-message">
                        Vă rugăm să corectați câmpurile semnalate.
                    </div>
                )}
                <div className="DejaCont">
                    Aveți deja un cont?
                    {/* A nu se folosi link către Google în aplicațiile reale */}
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigare('login'); }}>Autentificare</a>
                </div>
                <div className="form-content">

                    {/* Câmpul 1: Nume și prenume complet */}
                    <div className="input-field-group">
                        <label htmlFor="numeComplet" className="input-label">Nume și prenume complet</label>
                        <input
                            type="text"
                            id="numeComplet"
                            // CORECTAT: Folosim backticks (``) pentru template literal
                            className={`text-input ${errors.numeComplet ? 'input-error' : ''}`}
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
                            // CORECTAT: Folosim backticks (``) pentru template literal
                            className={`text-input ${errors.email ? 'input-error' : ''}`}
                            placeholder="numeprenume@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Câmpul 3: Data Nașterii */}
                    <div className="input-field-group">
                        <div className="input-field-group">
                            <label htmlFor="dataNastere" className="input-label">Data nașterii</label>
                            <input
                                type="date"
                                id="dataNastere"

                                max={getCurrentDate()}

                                min="1920-01-01"
                                // CORECTAT: Folosim backticks (``) pentru template literal
                                className={`text-input date-input ${errors.dataNastere ? 'input-error' : ''}`}
                                value={formData.dataNastere}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="telefon" className="input-label">Număr de telefon</label>

                        {/* Câmpul 4: Telefon */}
                        {/* CORECTAT: Folosim backticks (``) pentru template literal */}
                        <div className={`phone-input-wrapper ${errors.telefon ? 'input-error' : ''}`}>
                            <div className="country-selector">
                                <span role="img" aria-label="Romania flag">🇷🇴</span>
                                <span>+40</span>
                            </div>

                            <input
                                type="tel"
                                id="telefon"
                                className="phone-input-field"
                                placeholder="0000000000"
                                value={formData.telefon}
                                onChange={handleChange}
                                // Setează max la 10 pentru a corespunde validării
                                maxLength={10} 
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