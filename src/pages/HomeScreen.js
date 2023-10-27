import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logo from './images/logoPSI.png';
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
import { red ,green,blue} from '@mui/material/colors';
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





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomeScreen = () => {
  return (
    <>
            <Container fluid className="bg-body-tertiary">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className='mx-5'>
              
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="underline">
                <Nav.Item>
                  <Nav.Link eventKey="hom">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="freelance">Freelance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="con">Consultant</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ind">Industrialisation</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      </Container>

      {/* Logo */}
     <Container fluid className='bg-white my-2'>
       <Container>
         <Row>
            <Col xs={false} md={4}>
            <img src={Logo} alt='' style={{height:'80px'}}/>
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

      {/* section header */}
      <Grid fluid component="main"
        style={{
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJWZ3TJQHnMmYYHsMC7Y9KKaWBemsOdhPAgzyugiGzR0HjVukTUVuUOT6fWXzRrZfjIQ&usqp=CAU)',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        flexDirection: 'start',
        justifyContent:'center',
        alignItems:'center'
       
      }}
      >
        
        <Grid
         sx={{
            height: '770px',
            backgroundColor: '#30509dbf',
            padding: {
              xs:'10px',
              sm:'50px',
              md:'200px'
            },
            margin: 'auto',
          }}
        >
          <Grid className='mt-5 mt-sm-0'>
            <Grid className='mt-5 mt-sm-0'>
              <Box>
                <Typography className='text-white mb-2 fs-1 fw-normal fs-sm-5'>
                  Bienvenue sur le site PSI !
                </Typography>
                <Typography className=' mb-5'>
                  <TypeWriterEffect 
                    textStyle={{
                    fontFamily: "Red Hat Display",
                    fontWeight: 500,
                    fontSize: "1.5em",
                    color: "white",
                    }}
                    startDelay={2000}
                    cursorColor="#FFFFFF"
                    multiText={[
                    "Trouver un emploi qui corresponde à vos intérêts et à vos compétences",
                    "Retrouver ici des postes pour plusieurs domaines...",
                    "Poster une offre d'emploi...",
                    "Retrouver les meilleurs profils de freelance....",
                    "Parcourez nos differents poste d'employeur...",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={90}
                    multiTextLoop
                  />
                </Typography>
                <Box>
                  <Typography className='mb-5 text-white lh-sm text-wrap' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
                    purus sodales, pulvinar purus dsld;woefjnwamsacda;ellqwfnmwa
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Container  maxWidth="sm">
              <Grid 
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <Box 
                 sx={{ flexGrow: 1 ,
                  padding:{xs:'10px',
                  sm:'20px',
                  md:'75px'},
                 }} 
                >
                  <Grid container spacing={2} sx={{padding:{xs:'10px',sm:'20px',md:'40px'}}}>
                    <Grid item xs={false}  md={4}>
                     <Item>
                      <Card
                        
                        sx={{
                          p: 4,
                          boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                          display: 'flex',
                          flexDirection: {
                            xs: 'column', // mobile
                            sm: 'row', // tablet and up
                          },
                        }}
                      >
                        <CardMedia
                          width="50"
                          height="50"
                          
                            sx={{
                              
                              width: { xs: '100%', sm: 100 },
                              mr: { sm: 1 },
                              mb: { xs: 0, sm: 0 },
                              display:'flex',
                              alignItems: 'center',
                              justifyContent:'center'
                            }}
                          ><Box sx={{background:'#E7F0FA',padding:'20px'}} className="rounded">< BusinessCenterIcon  sx={{color: '#0A65CC'}}/></Box></CardMedia>
                          <Box>
                            <Typography fontWeight="bold" noWrap className='fs-2'>
                              1,750,500
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'> 
                              Emploi
                            </Typography>
                            
                          </Box>
                        </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={false} md={4}>
                     <Item>
                      <Card
                        
                        sx={{
                          p: 4,
                          boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                          display: 'flex',
                          flexDirection: {
                            xs: 'column', // mobile
                            sm: 'row', // tablet and up
                          },
                        }}
                      >
                        <CardMedia
                          width="50"
                          height="50"
                          
                            sx={{
                              
                              width: { xs: '100%', sm: 100 },
                              mr: { sm: 1 },
                              mb: { xs: 0, sm: 0 },
                              display:'flex',
                              alignItems: 'center',
                              justifyContent:'center'
                            }}
                          ><Box sx={{background:'#0A65CC',padding:'20px'}} className="rounded">< BusinessIcon  sx={{color: '#fff'}}/></Box></CardMedia>
                          <Box sx={{}}>
                            <Typography fontWeight="bold" noWrap className='fs-2'>
                              1,750,500
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                             Employeurs
                            </Typography>
                            
                          </Box>
                        </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={false} md={4}>
                      <Item>
                      <Card
                        
                        sx={{
                          p: 4,
                          // p:{xs:'1', sm:'2',md:'4'},
                          boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                          display: 'flex',
                          flexDirection: {
                            xs: 'column', // mobile
                            sm: 'colunm', // tablet and up
                            md: 'row'
                          },
                        }}
                      >
                        <CardMedia
                          width="50"
                          height="50"
                          
                            sx={{
                             
                              width: { xs: '100%', sm: 100 },
                              mr: { sm: 1 },
                              mb: { xs: 0, sm: 0 },
                              display:'flex',
                              alignItems: 'center',
                              justifyContent:'center'
                            }}
                          ><Box sx={{background:'#E7F0FA',padding:'20px'}} className="rounded"><  PersonOutlineOutlinedIcon  sx={{color: '#0A65CC'}} xs={false} md={false} /></Box></CardMedia>
                          <Box sx={{}}>
                            <Typography fontWeight="bold" noWrap className='fs-2 fs-xs-1'>
                              1,750,500
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                              Freelances
                            </Typography>
                            
                          </Box>
                        </Card>
                        </Item>
                    </Grid>

                  </Grid>
                </Box>
                    
              </Grid>
            </Container>
          </Grid> 
      
        </Grid>
      </Grid>

      {/* section des offres d'emploi */}
      <Container className='mt-5'>
        <Row>
          <Col className='fw-bold fs-3'>Offres d'emploi</Col>
          <Col className='d-flex justify-content-end text-primary fs-5'>  <i class="bi bi-arrow-right">Tout Voir</i></Col>
        </Row>
      </Container>
       
      
      <Container className='my-5'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Item>
              <Card  className='shadow rounded'>
                <CardActions disableSpacing>
                  <IconButton aria-label="calender">
                    <CalendarMonthRoundedIcon/>
                  </IconButton>
                  <Typography>22 janvier 2022</Typography>
                </CardActions>
                <CardContent>
                  <Typography  variant="h5" className='text-primary mb-2 fs-4 fw-normal text-start'>
                  Light energy capture in solar cells.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <RemoveRedEyeRoundedIcon  />
                    </IconButton>
                  }
                  title={
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                    Shrimp and Chorizo Paella
                  </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary" className='text-start'>
                    This impressive
                  </Typography>
                  }
                />
              
              </Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item>
              <Card  className='shadow rounded'>
                <CardActions disableSpacing>
                  <IconButton aria-label="calender">
                    <CalendarMonthRoundedIcon/>
                  </IconButton>
                  <Typography>22 janvier 2022</Typography>
                </CardActions>
                <CardContent>
                  <Typography  variant="h5" className='text-primary mb-2 fs-4 fw-normal text-start'>
                  Light energy capture in solar cells.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                      s
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <RemoveRedEyeRoundedIcon  />
                    </IconButton>
                  }
                  title={
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                    Shrimp and Chorizo Paella
                  </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary" className='text-start'>
                    This impressive
                  </Typography>
                  }
                />
              
              </Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6}  md={4}>
              <Item> 
              <Card  className='shadow rounded'>
                <CardActions disableSpacing>
                  <IconButton aria-label="calender">
                    <CalendarMonthRoundedIcon/>
                  </IconButton>
                  <Typography>22 janvier 2022</Typography>
                </CardActions>
                <CardContent>
                  <Typography  variant="h5" className='text-primary mb-2 fs-4 fw-normal text-start'>
                  Light energy capture in solar cells.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <RemoveRedEyeRoundedIcon  />
                    </IconButton>
                  }
                  title={
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                    Shrimp and Chorizo Paella
                  </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary" className='text-start'>
                    This impressive
                  </Typography>
                  }
                />
              
              </Card>
              </Item>
            </Grid>
            
          </Grid>
        </Box>
      </Container>

      {/* section etapes */}
      <Grid  fluid className='my-5'
        style={{
          backgroundColor:'#f1f2f4',
         }}
      >
        <Container>
          <Typography  variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
           Comment nous travaillons
          </Typography>
        </Container>

        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}> 
               <Grid item xs={6} sm={6}  md={3} className=' my-5'>
                  <Item>
                  <Card>
                    
                    <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                      <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                      1
                    </Avatar>
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-center my-2'>
                      Creer un compte
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>

                  
                  </Card>
                  </Item>
                </Grid>
               
               <Grid item xs={6} sm={6}  md={3} className=' my-5'>
                  <Item>
                  <Card>
                    
                    <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                      <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                      2
                    </Avatar>
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-center my-2'>
                      Telecharger le CV
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>

                  
                  </Card>
                  </Item>
                </Grid>
                <Grid item xs={6} sm={6}  md={3} className=' my-5'>
                  <Item>
                  <Card>
                    
                    <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                      <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                      3
                    </Avatar>
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-center my-2'>
                      Trouver un emploi convenable
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup o
                       
                      </Typography>
                    </CardContent>

                  
                  </Card>
                  </Item>
                </Grid>
                <Grid item xs={6} sm={6}  md={3} className=' my-5'>
                  <Item>
                  <Card>
                    
                    <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                      <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                      4
                    </Avatar>
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-center my-2'>
                      Postuler
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>

                  
                  </Card>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          
        </Container>
      </Grid>

      <Grid  fluid className='mb-5'
        style={{
          backgroundColor:'#ffff',
          height:'700px'
         }}
       >
        <Container>
          <Typography  variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
            Les meilleurs profils
          </Typography>
        </Container>

        <Container className='mb-5'>
        <Grid className="my-5">
          <CarrouselProfil />
        </Grid>
        </Container>
      </Grid>

      <Grid fluid className='mt-5'>
        <Grid fluid 
          style={{
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJWZ3TJQHnMmYYHsMC7Y9KKaWBemsOdhPAgzyugiGzR0HjVukTUVuUOT6fWXzRrZfjIQ&usqp=CAU)',
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover',
          
        
        }}
        >
          
          <Grid className='my-5'
          sx={{
             display:'flex',
              justifyContent:'center',
             alignItems:'center',
              height: '380px',
              backgroundColor: '#000000bf',
              padding: {
                xs:'10px',
                sm:'50px',
                md:'100px'
              },
            }}
          >
            <Grid className='mt-5 mt-sm-0'>
             <Grid className='mt-5 mt-sm-0'>
                <Box>
                  <Typography className='text-white mb-2 fs-1 fw-normal fs-sm-5 text-center'>
                    Explorer les professionnels
                  </Typography>
                  
                <Typography className='mb-5 text-white lh-sm text-center' paragraph>
                  Votre équipe créative est à portée de clics
                </Typography>
                <Box sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center',}}
                    >
                  <Button variant="primary" >Commencer</Button>
                </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>



      <Grid  fluid className='mb-5'
        style={{
          backgroundColor:'#ffff',
         }}
      >
        <Container>
          <Typography  variant="h5" className='text-dark  fs-2 fw-bold text-start pt-5 fs-sm-5'>
           Emploi de premier plan
          </Typography>
        </Container>

        <Container className='my-5'>
          <Box sx={{ flexGrow: 1,marginBottom:2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                <Card  className='shadow rounded'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        A
                      </Avatar>
                    }
                    action={
                      
                      <button type="button" class="btn" style={{backgroundColor:'#FCEEEE', color:'#EB9292'}} >En vedette</button>
                      
                    }
                    title={
                      <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                      Adela Parkson
                    </Typography>
                    }
                    subheader={
                     <Typography variant="body2" color="text.secondary" className='text-start'>
                       <AddLocationAltRoundedIcon/>This impressive
                    </Typography>
                    }
                  />
                  <CardContent>
                  <button type="button" class="btn text-primary " style={{backgroundColor:'#E7F0FA'}}>Postes à pourvoir (1)</button>
                  </CardContent>
                  
                </Card>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                <Card  className='shadow rounded'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                        s
                      </Avatar>
                    }
                    action={
                      <button type="button" class="btn" style={{backgroundColor:'#FCEEEE', color:'#EB9292'}} >En vedette</button>
                    }
                    title={
                      <Typography  variant="h5" className='text-dark  fs-6 fw-bold text-start'>
                      Shrimp and Ch
                    </Typography>
                    }
                    subheader={
                    <Typography variant="body2" color="text.secondary" className='text-start'>
                     <AddLocationAltRoundedIcon/> This impressive
                    </Typography>
                    }
                  />
                <CardContent>
                  <button type="button" class="btn text-primary " style={{backgroundColor:'#E7F0FA'}}>Postes à pourvoir (1)</button>
                  </CardContent>
                
                
                </Card>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6}  md={4}>
                <Item> 
                <Card  className='shadow rounded'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        S
                      </Avatar>
                    }
                    action={
                      <button type="button" class="btn" style={{backgroundColor:'#FCEEEE', color:'#EB9292'}} >En vedette</button>
                    }
                    title={
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                      Shrimp 
                    </Typography>
                    }
                    subheader={
                      <Typography variant="body2" color="text.secondary" className='text-start'>
                       <AddLocationAltRoundedIcon/>This impressive
                     </Typography>
                    }
                  />
                  <CardContent>
                  <button type="button" class="btn text-primary " style={{backgroundColor:'#E7F0FA'}}>Postes à pourvoir (1)</button>
                  </CardContent>
                  
                
                </Card>
                </Item>
              </Grid>
              
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                <Card  className='shadow rounded'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        A
                      </Avatar>
                    }
                    action={
                      
                      <button type="button" class="btn" style={{backgroundColor:'#FCEEEE', color:'#EB9292'}} >En vedette</button>
                      
                    }
                    title={
                      <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                      Adela Parkson
                    </Typography>
                    }
                    subheader={
                     <Typography variant="body2" color="text.secondary" className='text-start'>
                       <AddLocationAltRoundedIcon/>This impressive
                    </Typography>
                    }
                  />
                  <CardContent>
                  <button type="button" class="btn text-primary " style={{backgroundColor:'#E7F0FA'}}>Postes à pourvoir (1)</button>
                  </CardContent>
                  
                </Card>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                <Card  className='shadow rounded'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                        s
                      </Avatar>
                    }
                    action={
                      <button type="button" class="btn" style={{backgroundColor:'#FCEEEE', color:'#EB9292'}} >En vedette</button>
                    }
                    title={
                      <Typography  variant="h5" className='text-dark  fs-6 fw-bold text-start'>
                      Shrimp and Ch
                    </Typography>
                    }
                    subheader={
                    <Typography variant="body2" color="text.secondary" className='text-start'>
                     <AddLocationAltRoundedIcon/> This impressive
                    </Typography>
                    }
                  />
                <CardContent>
                  <button type="button" class="btn text-primary " style={{backgroundColor:'#E7F0FA'}}>Postes à pourvoir (1)</button>
                  </CardContent>
                
                
                </Card>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6}  md={4}>
                <Item> 
                <Card  className='shadow rounded'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        S
                      </Avatar>
                    }
                    action={
                      <button type="button" class="btn" style={{backgroundColor:'#FCEEEE', color:'#EB9292'}} >En vedette</button>
                    }
                    title={
                    <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                      Shrimp 
                    </Typography>
                    }
                    subheader={
                      <Typography variant="body2" color="text.secondary" className='text-start'>
                       <AddLocationAltRoundedIcon/>This impressive
                     </Typography>
                    }
                  />
                  <CardContent>
                  <button type="button" class="btn text-primary " style={{backgroundColor:'#E7F0FA'}}>Postes à pourvoir (1)</button>
                  </CardContent>
                  
                
                </Card>
                </Item>
              </Grid>
              
            </Grid>
          </Box>
        </Container>
      </Grid>
      
      {/* Temoignage */}
      <Grid  fluid className='mt-5'
        style={{
          backgroundColor:'#f1f2f4',
          height:'700px'
         }}
       >
        <Container>
          <Typography  variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
            Témoignages
          </Typography>
        </Container>

        <Container className='mb-5'>
        <Grid className="my-5">
          <CarrouselProfil />
        </Grid>
        </Container>
      </Grid>
      
      {/* footer */}
      <Grid  fluid className='mt-5'
        style={{
          backgroundColor:'#fff',
         }}
       >
      
        <Container className='border-bottom'>
         
         <div class="row">
          <div class="col-8 col-md-4 col-sm-12">
          
            <Typography  variant="h5" className='text-dark  fs-4 fw-bold  pt-5 fs-sm-5'>
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
                display:'flex',
                // justifyContent:'space-between'
              }}
              noValidate
              autoComplete="off"
              
            >
            
              <Grid className='me-2'>
                
                <Paper elevation={2} >
                <TextField  label="email" variant="outlined" /> 
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
            
              <List sx={{ bgcolor: 'background.paper',textAlign:'end' }}>
                  
                <ListItem>
                  <ListItemText primary="A propos"  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Vision"  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Carriere" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Contact"  />
                </ListItem>
                  
                </List>
              
            </Grid>
          </div>
          <div class="col-2 col-md-4 col-sm-6">
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Accès Rapide
                </Typography>
              
                <List sx={{  bgcolor: 'background.paper',textAlign:'end' }}>
                    
                  <ListItem>
                    <ListItemText primary="Acceuil"  />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Space Market"  />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Consultant" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Industrialisation"  />
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
              <img src={Logo} alt='' style={{height:'80px'}}/>Copyright © 2023 PSI.
              </Typography>
            </div>
           
            
          </div>
        </Container>
      </Grid>
    </>
  );
};

export default HomeScreen;