import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ProgressBar  } from 'react-bootstrap';
import * as Componentprofil from './Compomentprofil'
import  './profil.css'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ProfilEntreprise = () => {

    // navigation
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [organisation, setOrganisation] = useState('');
  const [industrie, setIndustrie] = useState('');
  const [taille, setTaille] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name !== '') {
      navigate('/profil/reseau-sociaux');
    } else {
      alert('Veuillez remplir tous les champs.');
    }

    /** envoi des donnees au service api */
    // reutilison le hook  const [name, setName] = useState('');
    // reutilison le hook const [content, setContent] = useState('');
    // onChange={(e) => setName(e.target.value)}


   // const [date, setDate] = useState('');

    
    const data = {
        organisation: organisation,
        industrie: industrie,
        taille: taille,
        name: name,
        content: content
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

    if (name === "" || name !== "") {
      navigate('/profil');
    }
  };
  
    /** progress bar  */
    const progress = 30;

    /** zone de texte */
    const [content, setContent] = useState('')

    const handleChange = (value) => {
        setContent(value);
    };

    // function data picker
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

  return (
    <Componentprofil.Employeur11>
        {/** progress bar */}
        <div style={{ width: '25%', marginLeft:"67%"}}>
            <label style={{opacity:"40%"}}>setup progress</label>
            <label style={{color:"blue",marginLeft:"50%"}}>30% Complet</label>
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
                {`Fondation`}
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
            <Componentprofil.Contact>
                {`Contact`}
            </Componentprofil.Contact>
        </Componentprofil.FirstCheckBox3>
    </Componentprofil.Frame82>
    <Componentprofil.LogoBannière>
        {/** onglet numero 2 */}
        <div className="content content-2"><br/><br/>
            <div className="container">
            <div className="row">
                <div className="col">
                <label className="form-label" style={{opacity: "80%", fontSize:'20px'}}>
                    Type d’Organisation
                </label>
                <select value={organisation} onChange={(event) => setOrganisation(event.target.value)} className="form-select" style={{width:"290px"}}>
                   <option value="">SARL</option>
                   <option value="option1">PME</option>
                   <option value="option2">SAS</option>
                   <option value="option3">SA</option>
                   <option value="option3">GIE</option>
                   <option value="option3">Scop</option>
                </select>
                </div>
                <div className="col">
                <label className="form-label" style={{opacity: "80%", fontSize:'20px'}}>
                    Type d’Industrie
                </label>
                <select value={industrie} onChange={(event) => setIndustrie(event.target.value)} className="form-select" style={{width:"290px"}}>
                   <option value="">automobile</option>
                   <option value="option1">aéronautique</option>
                   <option value="option2">électronique</option>
                   <option value="option3">agroalimentaire</option>
                </select>
                </div>
                <div className="col">
                <label className="form-label" style={{opacity: "80%", fontSize:'20px'}}>
                    Taille Des Equipes
                </label>
                <select value={taille} onChange={(event) => setTaille(event.target.value)} className="form-select" style={{width:"290px"}}>
                    <option value="">50</option>
                    <option value="option1">100</option>
                    <option value="option2">150</option>
                    <option value="option3">200</option>
                </select>
                </div>
            </div>
            </div><br /> <br />
            {/**select group 2 */}
            <div className="row">
                <div className="col-md-6" style={{marginLeft:"1.5%"}}>
                    <label className="form-label" style={{opacity: "80%", fontSize:'20px'}}>
                        Date De Création
                    </label><br />
                    <div>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col"  style={{marginLeft:"-25%"}}>
                    <label className="form-label" style={{opacity: "80%", fontSize:'20px'}}>
                        Site Web
                    </label>
                    <div class="input-group mb-2 mr-sm-2" style={{ width: '98.5%' }}>
                        <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                        </div>
                        <input onChange={handleNameChange} value={name}  type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="EX: https://name.com/" />
                    </div>
                </div>
            </div>
            <br />
        </div>
    </Componentprofil.LogoBannière>
    <Componentprofil.ÀPropos style={{ marginTop:"-15.5%", width:"190px"}}>
        {`Vision de l’entreprise`}
        <ReactQuill style={{width:'932px', height:'80px'}} value={content} onChange={handleChange} placeholder='Faites connaître votre entreprise. Faites savoir au candidat qui vous êtes ...'  required />
    </Componentprofil.ÀPropos>
    <Componentprofil.Copyright>
        {`PSI`}
    </Componentprofil.Copyright>
        <button type="button" class="btn btn-light"onClick={handleReturn} style={{position: `absolute`, width: `264px`, left: `469px`, top: `615px`}}>Précedant</button>
        <Button class="btn btn-primary " onClick={handleSubmit} style={{position: `absolute`, width: `264px`, left: `769px`, top: `615px`}}>Suivant</Button>
    <Componentprofil.Line1>
    </Componentprofil.Line1>
    <Componentprofil.Line41>
    </Componentprofil.Line41>
    <Componentprofil.LineFondation>
    </Componentprofil.LineFondation>
</Componentprofil.Employeur11>
  )
}

export default ProfilEntreprise
