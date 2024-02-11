import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Logo from '../images/logoPSI.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Entreprise from './Entreprise';
import Informations from './Informations';
import Reseaux from './Reseaux';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../axios";
import { setEmail } from "../../features/entrepriseSlice";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        PSI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Entreprise', 'Informations Générales', 'Réseaux Sociaux', 'Contact'];

function Contact() {
  const [activeStep, setActiveStep] = React.useState(3);


  const user = useSelector((state) => state.userElement.id);
  console.log(user);
  const entrepriseData = useSelector((state) => state.entreprise);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Récupérer toutes les données du store
    const {
      logo,
      banniere,
      name,
      description,
      typeOrganisation,
      typeIndustry,
      teamLength,
      siteWebLink,
      facebookLink,
      instagramLink,
      linkedLink,
      twitterLink,
      creationDate,
      email,
    } = entrepriseData;

    // Créer un objet FormData pour envoyer les données
    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("banniere", banniere);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("typeOrganisation", typeOrganisation);
    formData.append("typeIndustry", typeIndustry);
    formData.append("teamLength", teamLength);
    formData.append("siteWebLink", siteWebLink);
    formData.append("facebookLink", facebookLink);
    formData.append("instagramLink", instagramLink);
    formData.append("linkedLink", linkedLink);
    formData.append("twitterLink", twitterLink);
    formData.append("email", email);
    formData.append("localisation", names);
    formData.append("creationDate", creationDate);
    formData.append("contactNumber ", contactNumber);
    formData.append("user", user);

    try {
      // Envoyer la requête POST vers votre API
      const response = await axios.post("/enterprise", formData);
      console.log(response.data);
      // Réinitialiser le store après la réussite de la requête
      // Vous pouvez ajouter les actions de réinitialisation appropriées dans votre slice Redux
      if (response.status === 200) {
        navigate("/checkout");
      }else{
        alert('Une erreur est survenue lors de l\'enregistrement: Verifier que tout les champ sont bien remplie et le type de fichier que vous importer doit etre .png ou .jpeg ou .jpg');
      }
    } catch (error) {
      console.error(error);
    }
  };
  // navigation
  const [names, setName] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //navigate return to
  const handleBack = () => {
    navigate("/Reseaux");
  };

  /** aujout des indentifiant telephonique */
  const [selectedCountry, setSelectedCountry] = useState("");
  const [contactNumber, setPhoneNumber] = useState("");

  const countryCodes = [
    { country: "Afghanistan", code: "+93" },
    { country: "Algérie", code: "+213" },
    { country: "Angola", code: "+244" },
    // Ajoutez les autres pays africains avec leurs codes téléphoniques ici
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <img src={Logo} alt="" />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Profil de l'entreprise
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>

            <Step key={1}>
              <StepLabel>entreprise</StepLabel>
            </Step>
            <Step key={2}>
              <StepLabel>Informations Générales</StepLabel>
            </Step>

            <Step key={3}>
              <StepLabel>Réseaux Sociaux</StepLabel>
            </Step>

            <Step key={4}>
              <StepLabel>Contact</StepLabel>
            </Step>

          </Stepper>
          {activeStep === 4 ? (
            <React.Fragment >
              <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: 80, height: 80 }}>
                  <DoneAllIcon />
                </Avatar>
              </Stack>
              <Typography variant="h5" gutterBottom align='center' sx={{ mt: 5 }}>
                Félicitation profil crée  avec succès
              </Typography>
              <Typography variant="subtitle1" align='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id purus sodales, pulvinar purus
              </Typography>
              <Stack spacing={2} direction="row" sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button variant="contained">Dashbord</Button>
                <Button variant="outlined">Poster</Button>
              </Stack>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Localisation de l'entreprise"
                    placeholder='localisation'
                    variant="standard"
                    fullWidth
                    value={names}
                    onChange={handleNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-multiline-static"
                    label="Numéro de téléphone"
                    fullWidth
                    placeholder="EX: +237 685 958 959"
                    value={contactNumber}
                    onChange={handlePhoneNumberChange}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-multiline-static"
                    label="Email"
                    fullWidth
                    placeholder='Ex:kamda@gmail.com/'
                    variant="standard"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Précédent
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleFormSubmit}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Suivant
                </Button>
              </Box>

            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  )
}

export default Contact