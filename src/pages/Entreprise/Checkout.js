import React from 'react'
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
// import Logo from '../images/logoPSI.png';
import Logo2 from '../images/full-logo-wide-ldpi.png'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Entreprise from './Entreprise';
import Informations from './Informations';
import Reseaux from './Reseaux';
import Contact from './Contact';

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

const steps = ['Entreprise', 'Informations Générales', 'Réseaux Sociaux','Contact'];

function getStepContent(step) {
    switch (step) {
      case 0:
        return <Entreprise />;
      case 1:
        return <Informations />;
      case 2:
        return <Reseaux/>;
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
        <Toolbar sx={{height:80}}>
          <img src={Logo2} alt="" />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Profil de l'entreprise
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment >
              <Stack direction="row" sx={{display:'flex', justifyContent:'center'}}>
                <Avatar sx={{width: 80, height: 80}}>
                  <DoneAllIcon/>
                </Avatar>
              </Stack>
              <Typography variant="h5" gutterBottom align='center'sx={{mt:5}}>
                Félicitation profil crée  avec succès
              </Typography>
              <Typography variant="subtitle1" align='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id purus sodales, pulvinar purus 
              </Typography>
              <Stack spacing={2} direction="row" sx={{display:'flex', justifyContent:'center', mt: 3}}>
                <Button variant="contained">Dashbord</Button>
                <Button variant="outlined">Poster</Button>
              </Stack>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Précédent
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
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