import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import * as Componentprofil from './Compomentprofil'
import  './profil.css'
import { useNavigate } from 'react-router-dom';


const Profil = () => {

  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name !== '') {
      navigate('/profil/fondation');
    } else {
      alert('Veuillez remplir tous les champs.');
    }

    /** envoi des donnees au service api */
    // reutilison le hook  const [name, setName] = useState('');
    // reutilison le hook const [content, setContent] = useState('');
    const data = {
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
  
    /** progress bar here 

    const [activeTab, setActiveTab] = useState(1);
    const [progress, setProgress] = useState(0);
  
    const handleNextClick = () => {
      if (activeTab < 5) {
        setActiveTab(activeTab + 1);
        setProgress((activeTab + 1) * 20);
      }
    }; */

    /** zone de texte */
    const [content, setContent] = useState('')

    const handleChange = (value) => {
        setContent(value);
    };

    // upload file
    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileChange = (event) => {
      const files = event.target.files;
      const imageArray = [];
  
      for (let i = 0; i < files.length; i++) {
        imageArray.push({
          name: files[i].name,
          extension: files[i].name.split('.').pop(),
        });
      }
  
      setSelectedImages(imageArray);
    };

    const [selectedImage, setSelectedImage] = useState([]);

    const handleFileChanges = (event) => {
      const fil = event.target.files;
      const imageArrays = [];
  
      for (let i = 0; i < fil.length; i++) {
        imageArrays.push({
          name: fil[i].name,
          extension: fil[i].name.split('.').pop(),
        });
      }
  
      setSelectedImage(imageArrays);
    };

  return (
    <Componentprofil.Employeur11>
    <Componentprofil.Rectangle1362 >
    </Componentprofil.Rectangle1362>
    <Componentprofil.Frame82>
        <Componentprofil.FirstCheckBox>
            <a href='/#' >
                {`Entreprise`}
            </a>
        </Componentprofil.FirstCheckBox>
        <Componentprofil.FirstCheckBox1>
            <Componentprofil.BxUserCircle1>
            </Componentprofil.BxUserCircle1>
            <Componentprofil.Fondation>
                {`Fondation`}
            </Componentprofil.Fondation>
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
        {`Logo & Bannière`}
    </Componentprofil.LogoBannière>
    <Componentprofil.TéléchargerLeLogo>
        {`Télécharger le Logo`}
    </Componentprofil.TéléchargerLeLogo>
    <Componentprofil.NomDeLEntreprise>
        {`Nom de l’Entreprise`}
        <input value={name} onChange={handleNameChange}  class="form-control" placeholder="Entrer le nom de l'entreprise" style={{width:'975px'}} required />
    </Componentprofil.NomDeLEntreprise>
    <Componentprofil.ÀPropos>
        {`À Propos`}
    </Componentprofil.ÀPropos>
    <Componentprofil.Frame83>
        <Componentprofil.Rectangle13632>
        </Componentprofil.Rectangle13632>
        <Componentprofil.ParcourezLesPhotosOu>
            {`Parcourez les photos`}
            <div>
              <input type="file" accept="image/*" multiple onChange={handleFileChange} />
              <div className="image-container">
                {selectedImages.map((image, index) => (
                  <div key={index} className="image-item">
                    <span className="image-name">{image.name}</span>
                    <span className="image-extension">.{image.extension}</span>
                  </div>
                ))}
              </div>
            </div>
        </Componentprofil.ParcourezLesPhotosOu>
        <Componentprofil.BxCloudUpload1>
        </Componentprofil.BxCloudUpload1>
    </Componentprofil.Frame83>
    <Componentprofil.Frame84>
        <Componentprofil.Rectangle13631>
        </Componentprofil.Rectangle13631>
        <Componentprofil.ParcourezLesPhotosOu1>
            {`Parcourez les photos ou déposez-les ici`}
            <div>
              <input type="file" accept="image/*" multiple onChange={handleFileChanges}  />
              <div className="image-container">
                {selectedImage.map((image, index) => (
                  <div key={index} className="image-item">
                    <span className="image-name">{image.name}</span>
                    <span className="image-extension">.{image.extension}</span>
                  </div>
                ))}
              </div>
            </div>
        </Componentprofil.ParcourezLesPhotosOu1>
        <Componentprofil.BxCloudUpload11>
        </Componentprofil.BxCloudUpload11>
    </Componentprofil.Frame84>
    {/** apropos */}
    <Componentprofil.Frame85>
        <ReactQuill style={{width:'975px', height:'80px'}} value={content} onChange={handleChange} placeholder='Faites connaître votre entreprise. Faites savoir au candidat qui vous êtes ...'  required />
    </Componentprofil.Frame85>
    <Componentprofil.Copyright>
        {`PSI`}
    </Componentprofil.Copyright>
    <Button class="btn btn-primary btn-lg" onClick={handleSubmit} style={{position: `absolute`, width: `264px`, left: `469px`, top: `895px`,}}>Suivant</Button>
    <Componentprofil.Line1>
    </Componentprofil.Line1>
    <Componentprofil.Line3>
    </Componentprofil.Line3>
    <Componentprofil.Line41>
    </Componentprofil.Line41>
    <Componentprofil.Line2>
    </Componentprofil.Line2>
</Componentprofil.Employeur11>
  )
}

export default Profil
