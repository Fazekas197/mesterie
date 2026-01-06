import React, { useState } from 'react';
import Login from './Components/SignUp/Login.jsx';
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
}

export default App;
