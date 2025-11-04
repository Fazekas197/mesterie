import './PagParola.css';
import LogoAlb from '../Assets/LogoAlb.svg'; // Ajustează calea la Assets
import React, { useState } from 'react';

const PagParola = ({onNavigare}) =>{
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = (field) => {
    if (field === 'password') {
        setShowPassword(!showPassword);
    } else if (field === 'confirm') { // 👈 S-a corectat: am pus {
        setShowConfirmPassword(!showConfirmPassword);
    }
}

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
            <div className="form-content">
    
    {/* Câmpul 1: Parolă */}
<div className="input-field-group">
    <label htmlFor="parola" className="input-label">Parolă</label>
    <div className="password-input-wrapper">
        <input 
            // Schimbă tipul condițional
            type={showPassword ? "text" : "password"} 
            id="parola"
            className="text-input"
            placeholder="********"
            // ... adaugă value și onChange aici ...
        />
        {/* Butonul/Simbolul pentru afișare/ascundere */}
        <span 
            className="password-toggle"
            onClick={() => togglePasswordVisibility('password')}
        >
            {showPassword ? '👁️' : '🙈'}
        </span> 
    </div>
</div>

{/* Câmpul 2: Confirmare parolă */}
<div className="input-field-group">
    <label htmlFor="confirmaParola" className="input-label">Confirmare parolă</label>
    <div className="password-input-wrapper">
        <input 
            type={showConfirmPassword ? "text" : "password"} 
            id="confirmaParola"
            className="text-input"
            placeholder="********"
            // ... adaugă value și onChange aici ...
        />
        <span 
            className="password-toggle"
            onClick={() => togglePasswordVisibility('confirm')}
        >
            {showConfirmPassword ? '👁️' : '🙈'}
        </span>
    </div>
</div>
<button className="next-step-button">
    Pasul următor
</button>

</div>


        </div>
    </div>
        
    );
    
}

export default PagParola;
