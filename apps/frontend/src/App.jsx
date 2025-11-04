import React, { useState } from 'react';
import './App.css';
import SignUp from "./Components/SignUp/SignUp";
import Inregistrare from './Components/SignUp/Inregistrare';
import PagParola from './Components/SignUp/PagParola'; // 👈 Noul Import

function App() {

  const [paginaActiva, setPaginaActiva] = useState('signup'); 
  const navigeazaLa = (pagina) => {
    setPaginaActiva(pagina);
    console.log("Navigare la pagina:", pagina);
  };

  return (
    <div className="app-main-content">
      
      {paginaActiva === 'signup' && (
        <SignUp onNavigare={navigeazaLa} />
      )}
      
      {/* Asigură-te că Inregistrare primește onNavigare pentru săgeata de întoarcere */}
      {paginaActiva === 'inregistrare' && (
        <Inregistrare onNavigare={navigeazaLa} /> 
      )}

      {/* 👈 NOU: Condiția pentru afișarea paginii PagParola */}
      {paginaActiva === 'parola' && (
        <PagParola onNavigare={navigeazaLa} />
      )}
      
    </div>
  );
}

export default App;
