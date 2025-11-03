import './Inregistrare.css';
import LogoAlb from '../Assets/LogoAlb.svg';

const Inregistrare = ({onNavigare}) =>{
    return (
        <div className="page-wrapper">

                    <div className="logo">
                        <img src={LogoAlb} alt="Logo" />
                    </div>

                    <div className="container">
                        <div className="header-inregistrare">
                    {/* Săgeata ca element clicabil */}
                    <span 
                        className="back-arrow" 
                        onClick={() => onNavigare('signup')} // 👈 Navighează înapoi la signup
                        title="Înapoi la Autentificare"
                    >
                        &larr;
                    </span>
                    
                    <h1 className="title-text">Înregistrare</h1>
                </div>

                    </div>          
        </div>
    );
}

export default Inregistrare;