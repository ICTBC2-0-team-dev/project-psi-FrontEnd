import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
//import XIcon from '@mui/icons-material/X';
import TwitterIcon from '@mui/icons-material/Twitter';
import { TextareaAutosize } from '@mui/material';


const Contact_us = () => {
  return (
    <>
      <Header />
      <Grid fluid component="main"
        style={{
          backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          flexDirection: 'start',
          justifyContent: 'center',
          alignItems: 'center'

        }}
      >
        <Grid
          sx={{
            height: '470px',
            backgroundColor: '#30509dbf',
            padding: {
              xs: '10px',
              sm: '50px',
              md: '200px'
            },
            margin: 'auto',
          }}
        >
          <Grid className='mt-5 mt-sm-0'>
            <Grid className='my-5 my-sm-0'>
              <Box>
                <Typography className='text-white  mb-5 fs-1 fw-normal fs-sm-5'>
                  Contactez-nous
                </Typography>
              </Box>
            </Grid>
          </Grid>

        </Grid>
      </Grid>

      <Container style={{ marginTop: '-3%', marginBottom: '6%' }}>
        <Card sx={{ minWidth: 275 }}>
          <Row>
            <Col className='p-5' style={{ backgroundColor: '#f1f7fa', width: '20%' }}>
              <div>
                <Typography variant="h5"><AddLocationAltIcon /> Adresse</Typography>
                <Typography className='p-3'> PSI (siège social) <br />Avenue berlin rue 000 (Allemagne)</Typography>
              </div>
              <div>
                <Typography variant="h5"><CallIcon />Téléphone</Typography>
                <Typography className='p-3'> (+000) 000 000 00</Typography>
              </div>
              <div>
                <Typography variant="h5"><UnsubscribeIcon />E-mail</Typography>
                <Typography className='p-3'> info@psi.com</Typography>
              </div>
              <div>
                <Typography variant="h5"><ThumbUpIcon />Réseaux sociaux</Typography>
                <div className='p-3'>
                  <FacebookIcon />
                  <LinkedInIcon />
                  <TwitterIcon />
                </div>
              </div>
            </Col>
            <Col>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <div className="row">
                  <div className="col">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Nom"
                      name="Nom"
                      autoComplete="Nom"
                      autoFocus
                    />
                  </div>
                  <div className="col">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Prénom"
                      name="Prénom"
                      autoComplete="Prénom"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="E-mail"
                      name="E-mail"
                      autoComplete="E-mail"
                      autoFocus
                    />
                  </div>
                  <div className="col">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Nom de l’entreprise"
                      name="Nom de l’entreprise"
                      autoComplete="Nom de l’entreprise"
                      autoFocus
                    />
                  </div>
                </div>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Objet"
                  name="Objet"
                  autoComplete="Objet"
                  autoFocus
                />
                <Typography variant="h6">Description*</Typography>
                <TextareaAutosize
                  aria-label="textarea"
                  placeholder="Enter your text here..."
                  minRows={3} // Nombre minimal de lignes
                  maxRows={6} // Nombre maximal de lignes
                  style={{
                    width: '100%',
                    padding: '8px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Maintenir la connexion"
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Envoyer un message
                </Button>
              </Box>

            </Col>
          </Row>
        </Card>
      </Container>
      <Footer />
    </>
  )
}

export default Contact_us