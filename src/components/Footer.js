import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Avatar, Box, Button, Divider, Grid, Link, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Logo2 from '../img/PIS Logo Package (1)/PIS Logo Package/01 Wide Logo/01 Full Color/Digital/SVG/full-logo-wide-.svg';

const preventDefault = (event) => event.preventDefault();

function Footer(props) {
    return (
        <>
        <Grid sx={{backgroundColor: '#f1f2f4'}}> 
        <Grid sx={{ padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} fluid >
            <Grid item xs={3}>
                
                <Typography className='mb-3 fw-ligh lh-sm ' paragraph>
                Joindre notre newletter pour des mises à jour régulières
              </Typography>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                 
                }}
                noValidate
                autoComplete="off"

              >

                <Grid className='me-2'>

                  <Paper elevation={2} >
                    <TextField label="email" variant="outlined" />
                  </Paper>
                </Grid>

                <Button variant="outlined">Souscrire</Button>{' '}


              </Box>
              <Typography><img src={Logo2} alt="Logo" height={150} /></Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h5" className='text-dark  fs-6 fw-bold  fs-sm-5' >
                    Accès Rapide
                </Typography>
                <Box
                    sx={{
                        display: 'inline-block',
                        typography: 'body1',
                        '& > :not(style) ~ :not(style)': {
                            ml: 2,
                        },
                    }}
                    onClick={preventDefault}
                > <List>
                        <Link href="/responsiveAppBar" underline="none">
                            <ListItemButton sx={{}}>
                                <ListItemIcon>
                                    <ListItemText primary="Freelance" />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="/SpaceMarket" underline="none" >
                            <ListItemButton sx={{}}>
                                <ListItemIcon>
                                    <ListItemText primary="SpaceMarket" />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="/NotFound" underline="none">
                            <ListItemButton sx={{}}>
                                <ListItemIcon>
                                    <ListItemText primary="Consulting" />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="/NotFound" underline="none">
                            <ListItemButton sx={{}}>
                                <ListItemIcon>
                                    <ListItemText primary="Industrialisation" />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h5" className='text-dark  fs-6 fw-bold  fs-sm-5'>
                    Compagnie
                </Typography>
                <Box
                    sx={{
                        display: 'inline-block',
                        typography: 'body1',
                        '& > :not(style) ~ :not(style)': {
                            ml: 2,
                        },
                    }}
                    onClick={preventDefault}
                > <List>
                        <Link href="/about" underline="none">
                            <ListItemButton sx={{}}>
                                <ListItemIcon>
                                    <ListItemText primary="A propos" />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="/actualite" underline="none" >
                            <ListItemButton sx={{}}>
                                <ListItemIcon>
                                    <ListItemText primary="Actualités" />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="/NotFound" underline="none">
                            <ListItemButton sx={{}}>
                                <ListItemIcon>
                                    <ListItemText primary="Service d'assistance" />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="/NotFound" underline="none">
                            <ListItemButton sx={{}}>
                                <ListItemIcon>
                                    <ListItemText primary="Politique de confidentialité" />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h5" className='text-dark  fs-6 fw-bold  fs-sm-5 mb-3'>
                    Nous contacter
                </Typography>
                <Box>
                    <Button>
                        <Avatar sx={{ backgroundColor: '#413DEE' }}>
                            <FacebookRoundedIcon sx={{ color: 'dark' }} />
                        </Avatar>
                    </Button>
                    <Button>
                        <Avatar sx={{ backgroundColor: '#413DEE' }}>
                            <WhatsAppIcon sx={{ color: 'white' }} />
                        </Avatar>
                    </Button>
                    <Button>
                        <Avatar sx={{ backgroundColor: '#413DEE' }}>
                            <InstagramIcon sx={{ color: 'white' }} />
                        </Avatar>
                    </Button>
                    <Button>
                        <Avatar sx={{ backgroundColor: '#413DEE' }}>
                            <LinkedInIcon sx={{ color: 'white' }} />
                        </Avatar>
                    </Button>
                    <Box className='mt-3'>
                        <Link href="#" color="inherit" underline='hover'>
                          hello@yourcompany.com
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <Divider />
        <Grid >
        <Typography className='fw-ligh fs-6 py-3 text-center' paragraph>
            Copyright © 2023 ICT Business Center.
          </Typography>
        </Grid>
        </Grid>
       
        </>
    );
}

export default Footer;