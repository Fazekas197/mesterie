import './Inregistrare.css';
import LogoAlb from '../Assets/LogoAlb.svg';

const Inregistrare = ({onNavigare}) =>{
    return (
        <div className="page-wrapper">

                    <div className="logo">
                        <img src={LogoAlb} alt="Logo" />
                    </div>

                    <div className="container">
                        <span 
                    className="back-arrow-top" // Clasă nouă pentru poziționare
                    onClick={() => onNavigare('signup')}
                    title="Înapoi la Autentificare"
                >
                    &larr;
                </span>

                {/* 2. Titlul într-un alt bloc (sau direct în container) */}
                <h1 className="title-text-large">Înregistrare</h1>
                <div className="DejaCont">
                    Aveți deja un cont?
                    <a href="https://www.google.com/">Autentificare</a>
                </div>
                <div className="form-content">
                    
                    {/* Câmpul 1: Nume și prenume complet */}
                    <div className="input-field-group">
                        <label htmlFor="numeComplet" className="input-label">Nume și prenume complet</label>
                        <input 
                            type="text" 
                            id="numeComplet"
                            className="text-input"
                            placeholder="Nume Prenume"
                        />
                    </div>

                    {/* Câmpul 2: Adresă de e-mail */}
                    <div className="input-field-group">
                        <label htmlFor="email" className="input-label">Adresă de e-mail</label>
                        <input 
                            type="email" 
                            id="email"
                            className="text-input"
                            placeholder="numeprenume@gmail.com"
                        />
                    </div>
                    <div className="input-field-group">
                        <label htmlFor="dataNastere" className="input-label">Data nașterii</label>
                        <input 
                            type="date" 
                            id="dataNastere"
                            className="text-input date-input" 
                        />
                    </div>
                    <div className="input-field-group">
                        <label htmlFor="phone" className="input-label">Phone Number</label>
    
                            <div className="phone-input-wrapper">
                            <div className="country-selector">
                            {/* 🇷🇴 Drapelul României ca emoji sau simbol custom */}
                            <span role="img" aria-label="Romania flag">🇷🇴</span> 
                             <span>+40</span>
                            {/* Săgeata în jos */}
                            <span>&#9662;</span>
                        </div>
        
                        <input 
                                type="tel" 
                                id="phone"
                                className="phone-input-field"
                                placeholder="000-000-000"
                            />
                        </div>
                    </div>
                    
                   
                    
                </div>

            </div>          
        </div>
    );
}

export default Inregistrare;