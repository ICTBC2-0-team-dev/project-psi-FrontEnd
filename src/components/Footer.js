import React from "react";
import Container from 'react-bootstrap/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import Logo from '../img/logopsi2.png';
import AOS from "aos";


const Footer = () => {

    React.useEffect(() => {
        AOS.init({duration:2000});
      }, []);
      
  return (
    <>
      {/* footer */}
      <Grid
        fluid
        className="mt-5"
        style={{
          backgroundColor: "#f1f2f4",
        }}
      >
        <Container className="border-bottom" data-aos="fade-up-right">
          <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-12">
              <Typography
                variant="h5"
                className="text-dark  fs-4 fw-bold  pt-5 fs-sm-5"
              >
                Restez à jour
              </Typography>
              <Typography className="mb-3 fw-ligh lh-sm " paragraph>
                Joindre notre newletter pour des mises à jour régulières
              </Typography>
              <Typography className="mt-4 fw-ligh lh-sm " paragraph>
                Enter votre email:
              </Typography>
              <Box
                component="form"
                sx={{
                  // '& > :not(style)': { width: '50ch',height:'50px' },
                  display: "flex",
                  // justifyContent:'space-between'
                }}
                noValidate
                autoComplete="off"
              >
                <Grid className="me-2">
                  <Paper elevation={2}>
                    <TextField label="email" variant="outlined" />
                  </Paper>
                </Grid>
                <Button variant="outline-primary">Souscrire</Button>{" "}
              </Box>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Compagnie
                </Typography>

                <List sx={{ bgcolor: "#f1f2f4", textAlign: "end" }}>
                  <ListItem>
                    <ListItemText primary="A propos" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Vision" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Carriere" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Grid>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Accès Rapide
                </Typography>

                <List sx={{ bgcolor: "#f1f2f4", textAlign: "end" }}>
                  <ListItem>
                    <ListItemText primary="Acceuil" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Space Market" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Consultant" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Industrialisation" />
                  </ListItem>
                </List>
              </Grid>
            </div>
            {/* <div class="col-2 col-md-4 col-sm-6" >
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Contact
              </Typography>
            
              <List sx={{ bgcolor: '#f1f2f4',textAlign:'end' }}>
                  
                <ListItem>
                  <ListItemText primary="contact@panafrican-space.net"  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="info@panafrican-space.net"  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="info@psiafrica.space" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="contact@psiafrica.space"  />
                </ListItem>
                  
                </List>
              
            </Grid>
          </div> */}
          </div>
        </Container>
        <Container>
          <div className="Row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              <Typography className="fw-ligh fs-6 " paragraph>
                <img src={Logo} alt="" style={{ height: "80px" }} />
                Copyright © 2023 PSI.
              </Typography>
            </div>
          </div>
        </Container>
      </Grid>
    </>
  );
};

export default Footer;
