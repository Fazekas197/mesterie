import './PagParola.css';
import LogoAlb from '../Assets/LogoAlb.svg'; // Ajustează calea la Assets
import React, { useState } from 'react';

const PagParola = ({onNavigare}) =>{
    return (
        <div className="page-wrapper">
            <div className="logo">
                <img src={LogoAlb} alt="Logo" />
            </div>
        </div>
    );
}

export default PagParola;
