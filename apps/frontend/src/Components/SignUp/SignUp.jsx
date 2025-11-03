import React from "react";
import './SignUp.css';
import Facebook_Logo from '../Assets/Facebook_Logo.png';
import LogoAlb from '../Assets/LogoAlb.svg';
import Google_Logo from '../Assets/Google_Logo.png';

const SignUp = () => {
    return (
        <div className="page-wrapper">
            {/* Logo-ul în stânga */}
            <div className="logo">
                <img src={LogoAlb} alt="Logo" />
            </div>

            {/* Containerul cu conținutul de sign-up */}
            <div className="container">
                <div className="header">
                    <div className="text">Sign Up</div>
                </div>

                <div className="GoogleFB">
                    <div className="Google">
                        <img src={Google_Logo} alt="Google" />
                        <a href="https://www.google.com/">Conectare prin Google</a>
                    </div>
                    <div className="Facebook">
                        <img src={Facebook_Logo} alt="Facebook" />
                        <a href="https://www.facebook.com/">Conectare prin Facebook</a>
                    </div>
                </div>

                <div className="AltMod">Continuați în alt mod</div>

                <div className="DejaCont">
                    Aveți deja cont?
                    <a href="https://www.google.com/">Autentificare</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
