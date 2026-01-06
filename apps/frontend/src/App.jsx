<<<<<<< HEAD
import React, { useState } from 'react';
import Login from './Components/Login.jsx';
import RoleSelection from './SelectareUser/RoleSelection.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // 'login', 'roleSelection', 'home'
  const [userRole, setUserRole] = useState(null); // 'client' sau 'mester'

  // Când login-ul reușește
  const handleLoginSuccess = () => {
    setCurrentPage('roleSelection');
  };

  // Când apasă butonul "Înapoi" din RoleSelection
  const handleGoBack = () => {
    setCurrentPage('login');
    setUserRole(null);
  };

  // Când selectează un rol și apasă "Pasul următor"
  const handleRoleSelection = (role) => {
    setUserRole(role);
    if (role === 'client') {
      setCurrentPage('home');
    } else if (role === 'mester') {
      alert('Pagina pentru meșteri în dezvoltare');
      // setCurrentPage('mesterDashboard'); // când vei avea pagina
    }
  };

  return (
    <div className="App">
      {currentPage === 'login' && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}

      {currentPage === 'roleSelection' && (
        <RoleSelection
          onGoBack={handleGoBack}
          onRoleSelect={handleRoleSelection}
        />
      )}

      {currentPage === 'home' && userRole === 'client' && (
        <Home />
      )}
    </div>
  );
=======
import React, { useState } from "react";
import "./App.css";
import SignUp from "./Components/SignUp/SignUp";
import Inregistrare from "./Components/SignUp/Inregistrare";
import PagParola from "./Components/SignUp/PagParola";
import RoleSelection from "./Components/SignUp/RoleSelection";
import Login from "./Components/SignUp/Login"

function App() {
	const [paginaActiva, setPaginaActiva] = useState("signup");
	const navigeazaLa = (pagina) => {
		setPaginaActiva(pagina);
		console.log("Navigare la pagina:", pagina);
	};

	return (
		<div className="app-main-content">
			{paginaActiva === "signup" && <SignUp onNavigare={navigeazaLa} />}
			{paginaActiva === "login" && <Login onNavigare={navigeazaLa} />}

			{paginaActiva === "inregistrare" && (
				<Inregistrare onNavigare={navigeazaLa} />
			)}

			{paginaActiva === "parola" && (
				<PagParola onNavigare={navigeazaLa} />
			)}
			{paginaActiva === "selectare-rol" && (
				<RoleSelection onNavigare={navigeazaLa} />
			)}
		</div>
	);
>>>>>>> main
}

export default App;
