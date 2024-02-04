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

import { useDispatch } from "react-redux";

import { styled } from '@mui/material/styles';

import Contact from './Contact';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Entreprise />;
    case 1:
      return <Informations />;
    case 2:
      return <Reseaux />;
    case 3:
      return <Contact />;
    default:
      throw new Error('Unknown step');
  }
}


function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [name, setNames] = useState("");
  const [content, setContent] = useState("");

  const handleNameChange = (event) => {
    setNames(event.target.value);
  };
  console.log(name);

  const handleChange = (value) => {
    setContent(value);
  };

  //upload file
  const [selectedImages, setSelectedImages] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImages(file);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChanges = (event) => {
    const fil = event.target.files[0];
    setSelectedImage(fil);
  };

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Récupérez les valeurs des champs du formulaire
    // const logoValue = e.target.logo.files[0];
    // const banniereValue = e.target.banniere.files[0];
    // const nameValue = e.target.name.value;
    // const descriptionValue = e.target.description.value;

    // Envoyer les valeurs au store
    // dispatch(setLogo(selectedImages));
    // dispatch(setBanniere(selectedImage));
    // dispatch(setName(name));
    // dispatch(setDescription(content));

    navigate("/Informations");
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
          {activeStep === steps.length ? (
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
              <Typography variant="h6" gutterBottom sx={{}}>
                Logo & Bannière
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                  <Box sx={{ p: 5, border: '1px dashed grey', borderRadius: 1 }}>
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Logo
                        <VisuallyHiddenInput
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileChange}
                        />
                      </Button>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Box sx={{ p: 5, border: '1px dashed grey', borderRadius: 1 }}>
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Bannière
                        <VisuallyHiddenInput
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileChanges}
                        />
                      </Button>
                    </FormControl>
                  </Box>
                </Grid>
                {/* <Grid><Divider/></Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    id="nom"
                    name="nom"
                    label="Nom de l’Entreprise"
                    fullWidth
                    autoComplete="entreprise"
                    variant="standard"
                    value={name}
                    onChange={handleNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-multiline-static"
                    label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    value={content}
                    onChange={handleChange}
                    placeholder='Faites connaître votre entreprise. Faites savoir au candidat qui vous êtes ...'
                    variant="standard"
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

export default Checkout