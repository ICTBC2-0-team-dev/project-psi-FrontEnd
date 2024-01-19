import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TypeWriterEffect from "react-typewriter-effect";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BusinessIcon from '@mui/icons-material/Business';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOn from "@mui/icons-material/LocationOn";
import { grey } from "@mui/material/colors";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import axios from '../axios'
import { useDispatch } from 'react-redux';
import { setProjetId } from '../features/projetsSlice'
import Footer from '../components/Footer';
import Header from '../components/Header';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function ResponsiveAppBar() {

  const dispatch = useDispatch();

  /** dispacher des projet */

  const navigate = useNavigate();

  const handleVoirClick = () => {
    navigate('/DetailProjet');
  };

  const handleLogin = () => {
    navigate('/account');
  };

  const handleSingUp = () => {
    navigate('/login');
  };

    React.useEffect(() => {
      AOS.init({duration:2000});
    }, []);

    /**recuperation des projets */
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await axios.get("/projects");
          setProjects(response.data.slice(-6));
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchProjects();
    }, []);

    /** nombre total de emploi */
    const [projetCount, setProjetCount] = React.useState(0);

    React.useEffect(() => {
      const fetchProjetCount = async () => {
        try {
          const response = await axios.get('/projects');
          const totalCount = response.data.length;
          setProjetCount(totalCount);
        } catch (error) {
          console.error('Error fetching freelance count:', error);
        }
      };
  
      fetchProjetCount();
    }, []);

  /** nombre total de freelance */
  const [freelanceCount, setFreelanceCount] = React.useState(0);

  React.useEffect(() => {
    const fetchFreelanceCount = async () => {
      try {
        const response = await axios.get('/profiles');
        const totalCount = response.data.length;
        setFreelanceCount(totalCount);
      } catch (error) {
        console.error('Error fetching freelance count:', error);
      }
    };

    fetchFreelanceCount();
  }, []);

  /** nombre total de freelance */
  const [interprisesCount, setInterprisesCount] = React.useState(0);

  React.useEffect(() => {
    const fetchInterprisesCount = async () => {
      try {
        const response = await axios.get('/enterprises');
        const totalCount = response.data.length;
        setInterprisesCount(totalCount);
      } catch (error) {
        console.error('Error fetching freelance count:', error);
      }
    };

    fetchInterprisesCount();
  }, []);



  return (
   <>
   <Header/>

      {/* section header */}
      <Grid fluid component="main"
        style={{
        backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        flexDirection: 'start',
        justifyContent:'center',
        alignItems:'center'
       
      }}
      >
        
        <Grid
         sx={{
            // height: '770px',
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
            <Grid className='my-5 my-sm-0'>
              <Box>
                <Typography className='text-white mb-2 fs-1 fw-normal fs-sm-5'>
                  Bienvenue sur l'industrie du spatial en Afrique!
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
                    "Retrouvez ici des postes pour plusieurs domaines...",
                    "Postez une offre d'emploi...",
                    "Retrouvez les meilleurs profils de freelance....",
                    "Parcourez nos differents postes d'employeur...",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={90}
                    multiTextLoop
                  />
                </Typography>
                <Box>
                  {/* <Typography className='mb-5 text-white lh-sm text-wrap' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
                    purus sodales, pulvinar purus dsld;woefjnwamsacda;ellqwfnmwa
                  </Typography> */}
                </Box>
              </Box>
            </Grid>
            <Container  maxWidth="sm" className='mt-5'>
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
                  md:'7px'},
                 }} 
                >
                  <Grid container spacing={2} sx={{padding:{xs:'10px',sm:'20px',md:'4px'}}}>
                    <Grid item xs={false} sm={4} md={4} 
                        data-aos="fade-down-right">
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
                            {projetCount}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'> 
                              Emplois
                            </Typography>
                            
                          </Box>
                        </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={false} sm={4} md={4} data-aos="fade-down">
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
                              {interprisesCount}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                             Employeurs
                            </Typography>
                            
                          </Box>
                        </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={false} sm={4} md={4} data-aos="fade-down-left">
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
                          ><Box sx={{background:'#E7F0FA',padding:'20px'}} className="rounded">< PersonOutlineOutlinedIcon  sx={{color: '#0A65CC'}}/></Box></CardMedia>
                          <Box>
                            <Typography fontWeight="bold" noWrap className='fs-2'>
                            {freelanceCount}
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
        <Row data-aos="fade-left">
          <Col className='fw-bold fs-3'>Offres d'emplois</Col>
          <Col className='d-flex justify-content-end text-primary fs-5'>  <i class="bi bi-arrow-right"><a href='/AllProjet'> Tout Voir </a></i></Col>
        </Row>
      </Container>
       
      
        <Container className='my-5'>
          <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2}  >
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} className=' my-3' key={project.id}>
                <Item>
                <Card  className='shadow rounded'>
                  <CardActions disableSpacing>
                    <IconButton aria-label="calender">
                      <CalendarMonthRoundedIcon/>
                    </IconButton>
                    <Typography>{project.dateCreation}</Typography>
                  </CardActions>
                  <CardContent>
                    <Typography  variant="h5" className='text-primary mb-2 fs-4 fw-normal text-center'>
                    {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {project.wording}
                    </Typography>
                  </CardContent>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {project.users.userName.charAt(0)}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <RemoveRedEyeRoundedIcon onClick={() => handleVoirClick(dispatch(setProjetId(project.id)) )} />
                      </IconButton>
                    }
                    title={
                      <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                        {project.users.userName}
                    </Typography>
                    }
                    subheader={
                      <Typography variant="body2" color="text.secondary" className='text-start'>
                        <LocationOn sx={{ color: grey[500] }} />{" "}
                        {project.ville.pays.name}-{project.ville.name}
                    </Typography>
                    }
                  />
                
                </Card>
                </Item>
              </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      

      {/* section etapes */}
      <Grid  fluid className='my-5'
        style={{
          backgroundColor:'#f1f2f4',
         }}
      >
        <Container data-aos="fade-right">
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
                      Créer un compte
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
                      Télécharger le CV
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
        <Container data-aos="fade-up">
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
          backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2021/05/connecting-points-dark-background.jpg)',
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
             <Grid className='mt-5 mt-sm-0' data-aos="fade-down" >
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


{/* Emploi de premier plan 
      <Grid  fluid className='mb-5'
        style={{
          backgroundColor:'#ffff',
         }}
      >
        <Container data-aos="zoom-in">
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
*/}      
      {/* Temoignage */}
      {/* <Grid  fluid className='mt-5'
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
      </Grid> */}
      
      {/* footer */}
      <Footer/>
      
    </>
  );
}
export default ResponsiveAppBar;