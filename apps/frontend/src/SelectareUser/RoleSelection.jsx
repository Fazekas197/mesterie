import React, { useState } from 'react';
import { FaArrowLeft, FaUser, FaWrench } from 'react-icons/fa';
import logo from '../assets/LogoAlb.svg';
import "./RoleSelection.css";

const RoleSelection = ({ onGoBack, onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null); // 'client' sau 'mester'

  const handleNextStep = () => {
    if (selectedRole) {
      console.log('Rolul selectat este:', selectedRole);
      onRoleSelect(selectedRole); // Trimite rolul către App.jsx
    } else {
      console.log('Te rog selectează un rol.');
    }
  };

  return (
    <div className="login-page-container">

      <div className="logo-container">
        <img src={logo} alt="Mesterie Logo" className="login-logo" />
      </div>

      <div className="login-form-container">
        <div className="login-card">

          {/* Butonul Înapoi */}
          <button className="back-button" onClick={onGoBack}>
            <FaArrowLeft />
          </button>

          <h2>Ce vei fi pe platforma noastră?</h2>

          <div className="role-options-container">
            {/* Opțiunea Client */}
            <div
              className={`role-option ${selectedRole === 'client' ? 'selected' : ''}`}
              onClick={() => setSelectedRole('client')}
            >
              <FaUser className="role-icon" />
              <span>Client</span>
            </div>

            {/* Opțiunea Meșter */}
            <div
              className={`role-option ${selectedRole === 'mester' ? 'selected' : ''}`}
              onClick={() => setSelectedRole('mester')}
            >
              <FaWrench className="role-icon" />
              <span>Meșter</span>
            </div>
          </div>

          <button
            onClick={handleNextStep}
            className="login-button"
            disabled={!selectedRole}
          >
            Pasul următor
          </button>

        </div>
      </div>

    </div>
  );
};

export default RoleSelection;