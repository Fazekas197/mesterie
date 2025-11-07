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
}

export default App;
