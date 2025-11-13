import React from 'react';
import './FormMester.css';
import LogoAlb from '../Assets/LogoAlb.svg';

const FormMester = ({ onNavigare }) => {
    // Navigare înapoi la selectarea rolului
    const onGoBack = () => {
        onNavigare('selectare-rol');
    };

    // Funcție placeholder pentru înregistrare (poate fi dezvoltată ulterior)
    const handleRegister = () => {
        console.log("Înregistrare Meșter finalizată! (Date trimise)");
        // Aici ar urma logica de trimitere a datelor la backend
        // onNavigare('pagina-succes');
    };

    return (
        // Folosește .page-wrapper din SignUp.css pentru layout-ul principal
        <div className="page-wrapper">
            <div className="logo">
                <img src={LogoAlb} alt="Mesterie Logo" />
            </div>

            <div className="container">

                {/* Săgeata de înapoi - Folosim clasa CSS uniformizată (.back-arrow-top) */}
                <span
                    className="back-arrow-top"
                    onClick={onGoBack}
                    title="Înapoi la Selectare Rol"
                >
                    &larr;
                </span>

                <div className="header">
                    {/* Am eliminat marginTop-ul, deoarece săgeata este acum un element de flux normal. */}
                    <div className="text" style={{ textAlign: 'left', width: '100%', fontSize: '30px', fontWeight: 'bold' }}>
                        Înregistrare
                    </div>
                </div>

                {/* Link "Aveți deja un cont? Autentificare" */}
                <div className="DejaCont" style={{ textAlign: 'left', width: '100%', marginTop: '0', marginBottom: '30px' }}>
                    Aveți deja un cont?
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigare('login'); // Navigare la Login
                        }}
                    >
                        Autentificare
                    </a>
                </div>

                {/* Formularul Detaliat */}
                <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} style={{ width: '100%' }}>

                    {/* 1. Domeniul de specialitate */}
                    <label class="input-label">Domeniul de specialitate (Selectați max 3)</label>
                    <div class="input-field select-field">
                        <select defaultValue="">
                            <option value="" disabled>Selectați domeniul</option>
                            <option value="zidar">Zidar</option>
                            <option value="dulgher">Dulgher</option>
                            <option value="constructor">Constructor</option>
                            <option value="mester-acoperisuri">Meșter acoperișuri</option>
                            <option value="electrician">Electrician</option>
                            <option value="instalator-sanitar">Instalator sanitar</option>
                            <option value="specialist-instalatii-termice">Specialist instalații termice</option>
                            <option value="instalator-sisteme-irigatii">Instalator sisteme de irigații</option>
                            <option value="tehnician-fotovoltaice">Tehnician sisteme fotovoltaice</option>
                            <option value="tehnician-aer-conditionat-frigotehnist">Tehnician aer condiționat / Frigotehnist</option>
                            <option value="specialist-ventilatie-climatizare">Specialist ventilație și climatizare</option>
                            <option value="tehnician-sisteme-alarma">Tehnician sisteme de alarmă</option>
                            <option value="tehnician-supraveghere-video">Tehnician supraveghere video</option>
                            <option value="instalator-electric">Instalator electric</option>
                            <option value="instalator-usi-ferestre">Instalator uși și ferestre</option>
                            <option value="zugrav">Zugrav</option>
                            <option value="specialist-finisaje-interioare">Specialist finisaje interioare</option>
                            <option value="placator-ceramic">Placator ceramic (Faianțar / Gresar)</option>
                            <option value="parchetar">Parchetar</option>
                            <option value="aplicator-tapet">Aplicator tapet</option>
                            <option value="specialist-pardoseli">Specialist pardoseli</option>
                            <option value="specialist-amenajari-interioare">Specialist amenajări interioare</option>
                            <option value="specialist-amenajari-exterioare">Specialist amenajări exterioare</option>
                            <option value="tamplar">Tâmplar</option>
                            <option value="asamblor-mobila">Asamblor mobilă</option>
                            <option value="vopsitor">Vopsitor</option>
                            <option value="lacuitor-lemn-metal">Lăcuitor lemn și metal</option>
                            <option value="tapiter">Tapițer</option>
                            <option value="tehnician-automatizari">Tehnician automatizări porți și garaje</option>
                            <option value="specialist-hidroizolatii">Specialist în hidroizolații</option>
                            <option value="specialist-termoizolatii">Specialist în termoizolații</option>
                            <option value="lucrator-curatenie-locuinte">Lucrător curățenie locuințe</option>
                            <option value="servicii-curatenie-renovare">Servicii curățenie după renovare</option>
                            <option value="gradinar-intretinere-spatii-verzi">Grădinar / Întreținere spații verzi</option>
                            <option value="lacatus">Lăcătuș</option>
                            <option value="sudor">Sudor</option>
                            <option value="izolator-termic">Izolator termic</option>
                            <option value="tehnician-reparatii-electrocasnice">Tehnician reparații electrocasnice</option>
                            <option value="arhitect">Arhitect</option>
                        </select>
                    </div>

                    {/* 2. Județul */}
                    <label class="input-label">Județul</label>
                    <div class="input-field select-field">
                        <select defaultValue="">
                            <option value="" disabled>Selectați județul</option>
                            <option value="alba">Alba</option>
                            <option value="arad">Arad</option>
                            <option value="arges">Argeș</option>
                            <option value="bacau">Bacău</option>
                            <option value="bihor">Bihor</option>
                            <option value="bistrita-nasaud">Bistrița-Năsăud</option>
                            <option value="botosani">Botoșani</option>
                            <option value="brasov">Brașov</option>
                            <option value="braila">Brăila</option>
                            <option value="bucuresti">București</option>
                            <option value="buzau">Buzău</option>
                            <option value="caras-severin">Caraș-Severin</option>
                            <option value="calarasi">Călărași</option>
                            <option value="cluj">Cluj</option>
                            <option value="constanta">Constanța</option>
                            <option value="covasna">Covasna</option>
                            <option value="dambovita">Dâmbovița</option>
                            <option value="dolj">Dolj</option>
                            <option value="galati">Galați</option>
                            <option value="giurgiu">Giurgiu</option>
                            <option value="gorj">Gorj</option>
                            <option value="harghita">Harghita</option>
                            <option value="hunedoara">Hunedoara</option>
                            <option value="ialomita">Ialomița</option>
                            <option value="iasi">Iași</option>
                            <option value="ilfov">Ilfov</option>
                            <option value="maramures">Maramureș</option>
                            <option value="mehedinti">Mehedinți</option>
                            <option value="mures">Mureș</option>
                            <option value="neamt">Neamț</option>
                            <option value="olt">Olt</option>
                            <option value="prahova">Prahova</option>
                            <option value="satu-mare">Satu Mare</option>
                            <option value="salaj">Sălaj</option>
                            <option value="sibiu">Sibiu</option>
                            <option value="suceava">Suceava</option>
                            <option value="teleorman">Teleorman</option>
                            <option value="timis">Timiș</option>
                            <option value="tulcea">Tulcea</option>
                            <option value="vaslui">Vaslui</option>
                            <option value="valcea">Vâlcea</option>
                            <option value="vrancea">Vrancea</option>
                        </select>
                    </div>

                    {/* 3. Experiența */}
                    <label className="input-label">Experiența</label>
                    <div className="input-field">
                        <input type="text" placeholder="Precizați anii de experiență" />
                    </div>

                    {/* 4. Descrierea dumneavoastră */}
                    <label className="input-label">Descrierea dumneavoastră</label>
                    <div className="input-field textarea-field">
                        <textarea placeholder="Precizați descrierea dvs aici..." rows="5"></textarea>
                    </div>

                    {/* Butonul de Înregistrare */}
                    <button type="submit" className="submit-button">
                        Înregistrează-te
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormMester;