import React, { useState } from 'react';
import { FaBars, FaArrowRight, FaPlus, FaRegStar, FaArrowLeft } from 'react-icons/fa'; // Am adaugat FaArrowLeft
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

// Asigură-te că calea logo-ului e corectă
import logo from '../../assets/Logofarafundal.png';
import "./Home.css";

const mesteri = [
    {
        id: 1,
        nume: 'Alexandru Popescu',
        locatie: 'Cluj Napoca',
        specializari: ['Zugrav', 'Inginer instalator', 'Zidar'],
        descriere: 'Aici va veni descrierea meșterului pe care și-o pune el, în funcție de ce descriere i se potrivește, bla bla bla ...',
        pret: '150 RON',
    },
    {
        id: 2,
        nume: 'Mihai Ionescu',
        locatie: 'Timișoara',
        specializari: ['Zugrav', 'Inginer instalator', 'Zidar'],
        descriere: 'Aici va veni descrierea meșterului pe care și-o pune el, în funcție de ce descriere i se potrivește, bla bla bla ...',
        pret: '200 RON',
    },
    {
        id: 3,
        nume: 'Cristian Dumitru',
        locatie: 'Iași',
        specializari: ['Tâmplar', 'Tâmplărie PVC', 'Climatizare'],
        descriere: 'Aici va veni descrierea meșterului pe care și-o pune el, în funcție de ce descriere i se potrivește, bla bla bla ...',
        pret: '300 RON',
    },
];

const Home = () => {
    // 1. Starea meniului lateral
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Starea pentru Popup-ul de Deconectare (NOU)
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    // Funcții meniu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Funcții Logout
    const handleLogoutClick = () => {
        closeMenu(); // Închidem meniul lateral
        setShowLogoutPopup(true); // Deschidem popup-ul
    };

    const confirmLogout = () => {
        console.log("Utilizatorul s-a deconectat!");
        // Aici vei pune logica reală de logout mai târziu
        setShowLogoutPopup(false);
    };

    return (
        <div className="homepage-container">

            {/* === POPUP DECONECTARE (NOU) === */}
            {showLogoutPopup && (
                <div className="logout-overlay">
                    <div className="logout-modal">
                        <p className="logout-message">Sigur doriți să vă deconectați?</p>

                        <div className="logout-actions">
                            {/* Buton Anulează */}
                            <button className="btn-cancel" onClick={() => setShowLogoutPopup(false)}>
                                <FaArrowLeft size={12} style={{ marginRight: '5px' }} /> Anulează
                            </button>

                            {/* Buton Confirmă */}
                            <button className="btn-confirm-logout" onClick={confirmLogout}>
                                Deconectare
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* === FINAL POPUP === */}


            {/* === MENIUL ASCUNS (NAVBAR) === */}
            <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-header">
                    <button className="nav-back-btn" onClick={closeMenu}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>

                    <div className="nav-logo-container">
                        <img
                            src={logo}
                            alt="Mesterie Logo"
                            style={{ height: '120px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
                        />
                    </div>
                </div>

                <div className="nav-links">
                    <div className="nav-item active" onClick={closeMenu}>
                        <div className="orange-line"></div>
                        <span className="nav-text active-text">Acasă</span>
                    </div>
                    <div className="nav-item"><span className="nav-text">Favorite</span></div>
                    <div className="nav-item"><span className="nav-text">Anunțuri create</span></div>

                    {/* AICI AM MODIFICAT SA DESCHIDA POPUP-UL */}
                    <div className="nav-item logout-item" onClick={handleLogoutClick}>
                        <span className="nav-text">Deconectare</span>
                    </div>
                </div>
            </div>

            {/* === PAGINA PRINCIPALĂ === */}
            {/* HEADER: Fundal alb, fixat sus */}
            <header className="header-fixed-white">
                <img src={logo} alt="Mesterie" className="header-logo-img" />

                {/* === MENIU DESKTOP (Nou - Vizibil doar pe PC) === */}
                <div className="desktop-nav">
                    <span className="desk-link active">Acasă</span>
                    <span className="desk-link">Favorite</span>
                    <span className="desk-link">Anunțuri create</span>

                    {/* Buton Deconectare Desktop - Deschide același POPUP */}
                    <button className="desk-logout-btn" onClick={handleLogoutClick}>
                        Deconectare
                    </button>
                </div>

                {/* === BUTON BURGER (Vizibil doar pe MOBIL) === */}
                <button className="header-menu-btn" onClick={toggleMenu}>
                    <FaBars size={22} color="#2c3e50" />
                </button>
            </header>

            <main className="blue-content-area">
                {/* FOAIA ALBA (Containerul rotunjit principal) */}
                <div className="main-white-sheet">

                    {/* === WRAPPER NOU (Le ține împreună) === */}
                    <div className="header-flex-row">

                        {/* 1. Butoanele (Rămân primele, ca să fie SUS pe mobil) */}
                        <div className="top-action-buttons">
                            <button className="action-btn btn-blue-outline">
                                <HiOutlineAdjustmentsHorizontal size={18} />
                                <span>Filtrează</span>
                            </button>
                            <button className="action-btn btn-orange-outline">
                                <FaPlus size={14} />
                                <span>Creează anunț</span>
                            </button>
                        </div>

                        {/* 2. Titlul (Rămâne al doilea, ca să fie JOS pe mobil) */}
                        <h2 className="sheet-title">Recomandările noastre</h2>

                    </div>
                    {/* === FINAL WRAPPER === */}

                    {/* Lista de carduri (Rămâne la fel) */}
                    {/* Lista de carduri (Aici trebuie să fie codul cu map, nu comentariul!) */}
                    <div className="cards-list-container">
                        {mesteri.map((mester) => (
                            <div key={mester.id} className="mester-full-wrapper">
                                <div className="inner-bordered-card">
                                    <div className="card-header-row">
                                        <div className="header-info-left">
                                            <h3 className="info-name">{mester.nume}</h3>
                                            <p className="info-specs">{mester.specializari.join(', ')}</p>
                                        </div>
                                        <div className="header-loc-right">
                                            <span className="loc-label">Provin din</span>
                                            <div className="loc-city-group">
                                                {mester.locatie.split(' ').map((word, idx) => (
                                                    <span key={idx} className="loc-city-word">{word}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="card-description">{mester.descriere}</p>
                                    <div className="card-footer-row">
                                        <div className="price-block">
                                            <span className="price-label">Preț de începere:</span>
                                            <span className="price-value">{mester.pret}</span>
                                        </div>
                                        <button className="view-profile-link">
                                            Vezi profil <FaArrowRight size={12} style={{ marginLeft: '6px' }} />
                                        </button>
                                    </div>
                                </div>
                                <div className="outer-favorite-row">
                                    <span className="fav-label">Adaugă la favorite</span>
                                    <button className="fav-btn"><FaRegStar size={18} color="#9aa0a6" /></button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
};
export default Home;