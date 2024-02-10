import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logo from './images/psi.png';
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TypeWriterEffect from "react-typewriter-effect";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BusinessIcon from '@mui/icons-material/Business';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red, green, blue } from '@mui/material/colors';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CarrouselProfil from "./Carrousel";
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';



const Home = () => {
    return (
        <>
            <Container fluid className="bg-body-tertiary">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid className='mx-5'>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="underline">
                                <Nav.Item>
                                    <Nav.Link eventKey="/#" active>Accueil</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventkey="/responsiveAppBar" sx={{ color: 'primary' }}>Freelance</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="/D">Space Market</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="/DetailProjet">Consultant</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ind">Industrialisation</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </Container>
            <Container fluid className='bg-white my-2'>
                <Container>
                    <Row>
                        <Col xs={false} md={4}>
                            <img src={Logo} alt='' style={{ height: '80px' }} />
                        </Col>
                        <Col xs={12} md={4} className='mt-3  justify-content-end '>
                            <Form className="d-flex">

                                <Form.Control
                                    type="search"
                                    placeholder="Rechercher..."
                                    className="me-2"
                                    aria-label="Search"
                                />

                            </Form>
                        </Col>
                        <Col xs={12} md={4} className='mt-3 justify-content-end '>
                            <Button variant="outline-primary">S’inscrire</Button>{' '}
                            <Button variant="primary">Se Connecter</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Grid fluid component="main"
                style={{
                    backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2023/07/blue-planet-space-connectors-banner.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    flexDirection: 'start',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >

                <Grid
                    sx={{
                        padding: {
                            xs: '10px',
                            sm: '50px',
                            md: '120px'
                        },
                        margin: 'auto',
                    }}
                >
                    <Grid className='mt-2 mt-sm-0'>
                        <Grid className='my-5 my-sm-0' >
                            <Box sx={{ borderLeft: 5, borderColor: 'white', borderRadius: 5, padding: 2 }}>
                                <Typography className='text-white mb-2 fs-1 fw-normal fs-sm-5'>
                                    Ensemble construisons un meilleur monde
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }} className='mt-4'>

                            <Grid item xs={2} sm={3} md={3} >
                                <Card sx={{ borderLeft: 4, borderColor: '#135ed7' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Freelance
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Link href="/responsiveAppBar" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={2} sm={3} md={3} >
                                <Card sx={{ borderLeft: 4, borderColor: '#135ed7' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Space Market
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Link href="/responsiveAppBar" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={2} sm={3} md={3} >
                                <Card sx={{ borderLeft: 4, borderColor: '#135ed7' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Consultant
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Link href="/responsiveAppBar" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={2} sm={3} md={3} >
                                <Card sx={{ borderLeft: 4, borderColor: '#135ed7' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Industrialisation
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Link href="/responsiveAppBar" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>

                        </Grid>


                    </Grid>

                </Grid>
            </Grid>
            <Grid sx={{
                padding: {
                    xs: '10px',
                    sm: '50px',
                    md: '120px'
                },
                margin: 'auto',
            }}>
                <Grid>
                    <Box>
                        <Typography className='text-dark mb-2 fs-1 fw-normal fs-sm-5'>
                            Services
                        </Typography>
                    </Box>
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='mt-4'>

                    <Grid item xs={2} sm={4} md={4} >
                        <Card  sx={{ borderLeft: 4, borderColor: '#135ed7', display: 'flex'  }}>
                        <CardMedia
                                component="img"
                                sx={{ width: 160 }}
                                image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cabinet de conseil
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Box>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Card  sx={{ borderLeft: 4, borderColor: '#135ed7', display: 'flex'  }}>
                        <CardMedia
                                component="img"
                                sx={{ width: 160 }}
                                image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cabinet de conseil
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Box>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Card  sx={{ borderLeft: 4, borderColor: '#135ed7', display: 'flex'  }}>
                        <CardMedia
                                component="img"
                                sx={{ width: 160 }}
                                image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cabinet de conseil
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Box>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Card  sx={{ borderLeft: 4, borderColor: '#135ed7', display: 'flex'  }}>
                        <CardMedia
                                component="img"
                                sx={{ width: 160 }}
                                image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cabinet de conseil
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Box>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Card  sx={{ borderLeft: 4, borderColor: '#135ed7', display: 'flex'  }}>
                        <CardMedia
                                component="img"
                                sx={{ width: 160 }}
                                image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cabinet de conseil
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Box>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Card  sx={{ borderLeft: 4, borderColor: '#135ed7', display: 'flex'  }}>
                        <CardMedia
                                component="img"
                                sx={{ width: 160 }}
                                image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-planet-space-connectors-banner.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cabinet de conseil
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Box>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Card  sx={{ borderLeft: 4, borderColor: '#135ed7', display: 'flex'  }}>
                        <CardMedia
                                component="img"
                                sx={{ width: 160 }}
                                image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cabinet de conseil
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Box>
                            
                        </Card>
                    </Grid>
                   

                </Grid>
            </Grid>

            <Grid fluid className='mt-5'
        style={{
          backgroundColor: '#f1f2f4',
        }}
      >

        <Container className='border-bottom'>

          <div class="row">
            <div class="col-8 col-md-4 col-sm-12">

              <Typography variant="h5" className='text-dark  fs-4 fw-bold  pt-5 fs-sm-5'>
                Restez à jour
              </Typography>
              <Typography className='mb-3 fw-ligh lh-sm ' paragraph>
                Joindre notre newletter pour des mises à jour régulières
              </Typography>
              <Typography className='mt-4 fw-ligh lh-sm ' paragraph>
                Enter votre email:
              </Typography>
              <Box
                component="form"
                sx={{
                  // '& > :not(style)': { width: '50ch',height:'50px' },
                  display: 'flex',
                  // justifyContent:'space-between'
                }}
                noValidate
                autoComplete="off"

              >

                <Grid className='me-2'>

                  <Paper elevation={2} >
                    <TextField label="email" variant="outlined" />
                  </Paper>
                </Grid>

                <Button variant="outline-primary">Souscrire</Button>{' '}


              </Box>


            </div>
            <div class="col-2 col-md-4 col-sm-6" >

              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Compagnie
                </Typography>

                <List sx={{ bgcolor: '#f1f2f4', textAlign: 'end' }}>

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
            <div class="col-2 col-md-4 col-sm-6">
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Accès Rapide
                </Typography>

                <List sx={{ bgcolor: '#f1f2f4', textAlign: 'end' }}>

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
          </div>

        </Container>
        <Container>
          <div className='Row'>
            <div className="col-6 col-md-4 col-sm-12 text-center">

              <Typography className='fw-ligh fs-6 ' paragraph>
                <img src={Logo} alt='' style={{ height: '80px' }} />Copyright © 2023 PSI.
              </Typography>
            </div>


          </div>
        </Container>
      </Grid>
        </>
    )
}

export default Home