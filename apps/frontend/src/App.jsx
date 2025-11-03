import React, { useState } from 'react';
import './App.css';
import SignUp from "./Components/SignUp/SignUp";
import Inregistrare from './Components/SignUp/Inregistrare';


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
      {paginaActiva === 'inregistrare' && (
        <Inregistrare />
      )}
      
    </div>
  );
}

export default App;
