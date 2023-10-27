import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ProgressBar  } from 'react-bootstrap';
import * as Componentprofil from './Compomentprofil'
import  './profil.css'
//import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { LinkContainer } from 'react-router-bootstrap';


const ProfilContact = () => {

    // navigation
    const [name, setName] = useState('');
   // const navigate = useNavigate();
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    /*const handleSubmit = (event) => {
      event.preventDefault();
  
      if (name !== '') {
        navigate('/endProfil');
      } else {
        alert('Veuillez remplir tous les champs.');
      }
    };*/
     //navigate return to
    /* const handleReturn = (event) => {
      event.preventDefault();
  
      if (name == "" || name !== "") {
        navigate('/profil/reseau-sociaux');
      }
    };*/
    
    /** progress bar  */
    const progress = 85;

    /** aujout des indentifiant telephonique */
    const [selectedCountry, setSelectedCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const countryCodes = [
      { country: 'Afghanistan', code: '+93' },
      { country: 'Algérie', code: '+213' },
      { country: 'Angola', code: '+244' },
      // Ajoutez les autres pays africains avec leurs codes téléphoniques ici
    ];
  
    const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
    };
  
    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    };


  return (
    <Componentprofil.Employeur11>
        {/** progress bar */}
        <div style={{ width: '25%', marginLeft:"67%"}}>
            <label style={{opacity:"40%"}}>setup progress</label>
            <label style={{color:"blue",marginLeft:"50%"}}>85% Complet</label>
            <ProgressBar>
                <ProgressBar now={progress} style={{ backgroundColor: 'blue' }} />
                <ProgressBar now={100 - progress} style={{ backgroundColor: 'lightgray' }} />
            </ProgressBar>
        </div>
    <Componentprofil.Frame82>
        <Componentprofil.FirstCheckBox>
        <Componentprofil.BxUserCircle1>
            </Componentprofil.BxUserCircle1>
            <Componentprofil.Fondation>
                {`Entreprise`}
            </Componentprofil.Fondation>
        </Componentprofil.FirstCheckBox>
        <Componentprofil.FirstCheckBox1>
            <Componentprofil.BxUserCircle1>
            </Componentprofil.BxUserCircle1>
            <Componentprofil.RéseauxSociaux>
                {`Fondation`}
            </Componentprofil.RéseauxSociaux>
        </Componentprofil.FirstCheckBox1>
        <Componentprofil.FirstCheckBox2>
            <Componentprofil.BxGlobe1>
            </Componentprofil.BxGlobe1>
            <Componentprofil.RéseauxSociaux>
                {`Réseaux Sociaux`}
            </Componentprofil.RéseauxSociaux>
        </Componentprofil.FirstCheckBox2>
        <Componentprofil.FirstCheckBox3>
            <Componentprofil.BxAt1>
            </Componentprofil.BxAt1>
                {`Contact`}
        </Componentprofil.FirstCheckBox3>
    </Componentprofil.Frame82>
    <Componentprofil.LogoBannière>
        <div className="content content-4">
                <br/><br />
            <div className="form-group">
                <label className="form-label"  style={{opacity: "80%", fontSize:'20px'}}>
                    Nom de l'entreprise
                </label>
                <input  value={name} onChange={handleNameChange} style={{width:"950px"}} type="email" class="form-control" placeholder="Entrer le nom de l'entreprise" /> <br/>

                <label className="form-label"  style={{opacity: "80%", fontSize:'20px'}}>
                    Numero
                </label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                            <select class="input-group-text" id="basic-addon3" value={selectedCountry} onChange={handleCountryChange}>
                            <option value="">Sélectionnez un pays</option>
                            {countryCodes.map((country, index) => (
                            <option key={index} value={country.code}>
                                {country.code}
                            </option>
                            ))}
                        </select>
                    </div>
                    <input
                        class="form-control"
                        type="number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="Numéro de téléphone"
                    />
                </div>

                <label className="form-label"  style={{opacity: "80%", fontSize:'20px'}}>
                    Email
                </label>
                <input type="email" class="form-control" placeholder="Entrer votre mail" /> <br/>
            </div>
        </div>
    </Componentprofil.LogoBannière>
    <Componentprofil.Copyright>
        {`PSI`}
    </Componentprofil.Copyright>
        <button type="button" class="btn btn-light"style={{position: `absolute`, width: `264px`, left: `469px`, top: `545px`}}>Précedant</button>
        <LinkContainer  to="/endProfil"> <Button class="btn btn-primary "  style={{position: `absolute`, width: `264px`, left: `769px`, top: `545px`}}>Suivant</Button></LinkContainer>
    <Componentprofil.Line1>
    </Componentprofil.Line1>
    <Componentprofil.Line41>
    </Componentprofil.Line41>
    <Componentprofil.LineContact>
    </Componentprofil.LineContact>
</Componentprofil.Employeur11>
  )
}

export default ProfilContact
