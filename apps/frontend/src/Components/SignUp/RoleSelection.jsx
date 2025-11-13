import React, { useState } from 'react';
import './RoleSelection.css';
import logo from '../Assets/LogoAlb.svg';
import IconMester from '../Assets/IconMester.svg';
import IconClient from '../Assets/IconClient.svg';

const RoleSelection = ({ onNavigare }) => {
    // Stochează rolul selectat: 'client', 'mester', sau null
    const [selectedRole, setSelectedRole] = useState(null);

    // Funcție pentru navigare înapoi la pagina anterioară ('parola')
    const onGoBack = () => {
        onNavigare('parola');
    };

    // Handler pentru butonul "Pasul următor" - Navigare Condițională
    const handleNextStep = () => {
        if (!selectedRole) {
            console.log('Eroare: Te rog selectează un rol.');
            return;
        }

        if (selectedRole === 'client') {
            console.log('Navigare către finalizare CLIENT');
            // onNavigare('finalizare-client'); 
        } else if (selectedRole === 'mester') {
            console.log('Navigare către Formular MEȘTER');
            // ✨ MODIFICARE: Navigare la noua pagină FormMester
            onNavigare('formular-mester');
        }
    };

    // Funcție utilitară pentru a gestiona clasa CSS (adăugă 'selected' dacă e selectat)
    const getRoleClass = (role) => `role-option ${selectedRole === role ? 'selected' : ''}`;

    return (
        <div className="page-wrapper">

            {/* Logo-ul din stânga */}
            <div className="logo">
                <img src={logo} alt="Mesterie Logo" />
            </div>

            {/* Containerul principal al formularului */}
            <div className="container">

                {/* Săgeata de înapoi */}
                <span
                    className="back-arrow-top"
                    onClick={() => onNavigare('parola')}
                    title="Înapoi la Parola"
                >
                    &larr;
                </span>

                <h1 className="title-text-large">Ce vei fi pe platforma noastră?</h1>

                {/* Containerul opțiunilor de rol */}
                <div className="role-options-container">

                    {/* Opțiunea 1: Client */}
                    <div
                        className={getRoleClass('client')}
                        onClick={() => setSelectedRole('client')}
                    >
                        <img src={IconClient} alt="Client Icon" className="role-icon-img" />
                        <span>Client</span>
                    </div>

                    {/* Opțiunea 2: Meșter */}
                    <div
                        className={getRoleClass('mester')}
                        onClick={() => setSelectedRole('mester')}
                    >
                        <img src={IconMester} alt="Mester Icon" className="role-icon-img" />
                        <span>Meșter</span>
                    </div>
                </div>

                {/* Butonul Pasul următor */}
                <button
                    onClick={handleNextStep}
                    className="next-step-button"
                    disabled={!selectedRole}
                >
                    Pasul următor
                </button>

            </div>
        </div>
    );
};

export default RoleSelection;