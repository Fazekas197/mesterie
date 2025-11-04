import React from "react";
import './SignUp.css';
import Facebook_Logo from '../Assets/Facebook_Logo.svg';
import LogoAlb from '../Assets/LogoAlb.svg';
import Google_Logo from '../Assets/Google_Logo.svg';

const SignUp = () => {
    return (
        <div className="page-wrapper">
            <div className="logo">
                <img src={LogoAlb} alt="Logo" />
            </div>

            <div className="container">
                {/* ✨ SCHIMBARE: Noul titlu */}
                <div className="header">
                    <div className="text">Înregistrează-te pe platforma noastră</div>
                </div>

                <div className="GoogleFB">
                    {/* Buton Google */}
                    <div className="Google">
                        <img src={Google_Logo} alt="Google" />
                        {/* ✨ SCHIMBARE: Noul text al butonului Google */}
                        <a href="https://www.google.com/">Folosind Google</a>
                    </div>
                    {/* Buton Facebook */}
                    <div className="Facebook">
                        <img src={Facebook_Logo} alt="Facebook" />
                        {/* ✨ SCHIMBARE: Noul text al butonului Facebook */}
                        <a href="https://www.facebook.com/">Folosind Facebook</a>
                    </div>
                </div>

                <div className="AltMod">Continuați în alt mod</div>

                <div className="DejaCont">
                    Aveți deja un cont?
                    <a href="https://www.google.com/">Autentificare</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;