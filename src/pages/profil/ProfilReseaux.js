import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ProgressBar  } from 'react-bootstrap';
import * as Componentprofil from './Compomentprofil'
import  './profil.css'
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const ProfilReseaux = () => {

    // navigation
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputs !== '') {
      navigate('/profil/contact');
    } else {
      alert('Veuillez remplir tous les champs.');
    }

    const data = {
      lien: inputs
  };
  fetch('https://jsonplaceholder.typicode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Donnee Enregistrer avec success:', result);
      console.log(data);
      // message de succès
    })
    .catch(error => {
      console.error('Erreur lors de l\'enregistrement des données:', error);
      // d'erreur d'erreur
    });



  };
   //navigate return to
   const handleReturn = (event) => {
    event.preventDefault();

    if (inputs === "" || inputs !== "") {
      navigate('/profil/fondation');
    }
  };
  
    /** progress bar  */
    const progress = 60;

    /** ajout d'onglet */
    const [inputs, setInputs] = useState(['']); // Tableau initial avec un champ de saisie vide

    const handleAddInput = () => {
      setInputs([...inputs, '']); // Ajoute un champ de saisie vide à la fin du tableau
    };

    const handleRemoveInput = (index) => {
        const updatedInputs = [...inputs];
        updatedInputs.splice(index, 1); // Supprime l'élément du tableau à l'index donné
        setInputs(updatedInputs);
      };
    
      const handleInputChange = (index, value) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = value;
        setInputs(updatedInputs);
      };

  return (
    <Componentprofil.Employeur11>
        {/** progress bar */}
        <div style={{ width: '25%', marginLeft:"67%"}}>
            <label style={{opacity:"40%"}}>setup progress</label>
            <label style={{color:"blue",marginLeft:"50%"}}>60% Complet</label>
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
                {`Réseaux Sociaux`}
        </Componentprofil.FirstCheckBox2>
        <Componentprofil.FirstCheckBox3>
            <Componentprofil.BxAt1>
            </Componentprofil.BxAt1>
            <Componentprofil.Contact>
                {`Contact`}
            </Componentprofil.Contact>
        </Componentprofil.FirstCheckBox3>
    </Componentprofil.Frame82>
    <Componentprofil.LogoBannière>
        {/** onglet numero 2 */}
        <div className="content content-3">
            <div className="container" >
            <br /><br />
                {inputs.map((input, index) => (
                    <div key={index}>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">https://example.com</span>
                        </div>
                        <input
                                type='text'
                                value={input}
                                className='form-control input-group-text'
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                placeholder='entrer une adresse'
                                style={{width: "650px"}}
                        />&nbsp;&nbsp;
                        <Button className='btn btn-light' style={{borderRadius: "5px"}} onClick={() => handleRemoveInput(index)}>X</Button>
                      </div>
                    </div>
                ))}
                <Button className='btn btn-light btn-sm' onClick={handleAddInput} style={{width: "95%"}}>+Ajouter</Button>
                <br /><br />
            </div>
        </div>
    </Componentprofil.LogoBannière>
    <Componentprofil.Copyright>
        {`PSI`}
    </Componentprofil.Copyright>
        <button type="button" class="btn btn-light"onClick={handleReturn} style={{position: `absolute`, width: `264px`, left: `469px`, top: `615px`}}>Précedant</button>
        <Button class="btn btn-primary " onClick={handleSubmit} style={{position: `absolute`, width: `264px`, left: `769px`, top: `615px`}}>Suivant</Button>
    <Componentprofil.Line1>
    </Componentprofil.Line1>
    <Componentprofil.Line41>
    </Componentprofil.Line41>
    <Componentprofil.LineResau>
    </Componentprofil.LineResau>
</Componentprofil.Employeur11>
  )
}

export default ProfilReseaux
