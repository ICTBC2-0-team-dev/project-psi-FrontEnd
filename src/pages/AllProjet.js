import React from "react";
import Grid from '@mui/material/Grid';
import { Container } from "react-bootstrap";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red ,green,blue} from '@mui/material/colors';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import { grey } from '@mui/material/colors';
import LocationOn from '@mui/icons-material/LocationOn';

const AllProjet = () => {
    const [Domaine, setDomaine] = React.useState('');

    const handleChange = (event) => {
      setDomaine(event.target.value);
    };
    return(
        <>
          <Container  fluid className='my-5 pb-5'>
                <Container>
                    <Container >
                        <Container className='px-5'>
                          <Box>
                               <Container className='px-5'>
                                   <Box className='px-5'>
                                       <Container className='px-5'>
                                    
                                        <div className='row px-5'> 
                                
                                            <Box className='pb-4'>
                                            <div className='row'>
                                                <div className="col-4">
                                                    <FormControl fullWidth  sx={{ m: 1}}>
                                                    <FormHelperText id="outlined-projet-helper-text">Pays</FormHelperText>
                                                    <InputLabel id="demo-select-label"></InputLabel>
                                                    <Select
                                                        labelId="demo-select-label"
                                                        id="demo-select-small"
                                                        value={Domaine}
                                                        // label="Age"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value="">
                                                        <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>Cameroun</MenuItem>
                                                        <MenuItem value={2}>France</MenuItem>
                                                        <MenuItem value={3}>Allemagne</MenuItem>
                                                    </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="col-4">
                                                    <FormControl fullWidth  sx={{ m: 1}}>
                                                    <FormHelperText id="outlined-projet-helper-text">Ville</FormHelperText>
                                                    <InputLabel id="demo-select-label"></InputLabel>
                                                    <Select
                                                        labelId="demo-select-label"
                                                        id="demo-select-small"
                                                        value={Domaine}
                                                        // label="Age"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value="">
                                                        <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>Yaounde</MenuItem>
                                                        <MenuItem value={2}>Douala</MenuItem>
                                                        <MenuItem value={3}>Dschang</MenuItem>
                                                    </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="col-4">
                                                    <FormControl fullWidth  sx={{ m: 1}}>
                                                    <FormHelperText id="outlined-projet-helper-text">Domaine</FormHelperText>
                                                    <InputLabel id="demo-select-label"></InputLabel>
                                                    <Select
                                                        labelId="demo-select-label"
                                                        id="demo-select-small"
                                                        value={Domaine}
                                                        // label="Age"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value="">
                                                        <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>Yaounde</MenuItem>
                                                        <MenuItem value={2}>Douala</MenuItem>
                                                        <MenuItem value={3}>Dschang</MenuItem>
                                                    </Select>
                                                    </FormControl>
                                                </div>
                                                </div>
                                               </Box>
                                        </div>
                                        </Container>
                                    </Box>
                                </Container>
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={4}>
                                    
                                    <Card  className='shadow rounded'>
                                        <CardActions disableSpacing>
                                        <IconButton aria-label="calender">
                                            <CalendarMonthRoundedIcon/>
                                        </IconButton>
                                        <Typography>2 janvier 2024</Typography>
                                        </CardActions>
                                        <CardContent>
                                        <Typography  variant="h5" className='text-primary mb-2 fs-4 fw-normal text-center'>
                                        Ingénieur Logiciel
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        concevoir, développer et tester des logiciels informatiques. 
                                        Travailler sur des applications, des systèmes d'exploitation, 
                                        des jeux vidéo, etc.
                                        résolver également des problèmes liés au code et aux performances.
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
                                            Roland Herves
                                        </Typography>
                                        }
                                        subheader={
                                            <Typography variant="body2" color="text.secondary" className='text-start'>
                                           
                                            <Typography variant="body2" color="text.secondary" >
                                            <LocationOn sx={{color: grey[500]}} /> Scranton, PA, United States
                                            </Typography>
                                            ITC
                                        </Typography>
                                        
                                        }
                                        />
                                        
                                    
                                    </Card>
                                    
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                    
                                    <Card  className='shadow rounded'>
                                        <CardActions disableSpacing>
                                        <IconButton aria-label="calender">
                                            <CalendarMonthRoundedIcon/>
                                        </IconButton>
                                        <Typography>5 Decembre 2023</Typography>
                                        </CardActions>
                                        <CardContent>
                                        <Typography  variant="h5" className='text-primary mb-2 fs-4 fw-normal text-center'>
                                            Comptable
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        responsables de la gestion des finances de l'organisation.
                                        tenir des registres financiers, préparer des déclarations fiscales,
                                        effectuer des audits et conseillent sur la gestion financière.
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
                                            Shrimp 
                                        </Typography>
                                        }
                                        subheader={
                                            <Typography variant="body2" color="text.secondary" className='text-start'>
                                                 <Typography variant="body2" color="text.secondary" >
                                            <LocationOn sx={{color: grey[500]}} /> Scranton, PA, United States
                                            </Typography>
                                            UBA
                                        </Typography>
                                        }
                                        />
                                    
                                    </Card>
                                    
                                    </Grid>
                                    <Grid item xs={12} sm={6}  md={4}>
                                    
                                    <Card  className='shadow rounded'>
                                        <CardActions disableSpacing>
                                        <IconButton aria-label="calender">
                                            <CalendarMonthRoundedIcon/>
                                        </IconButton>
                                        <Typography>22 novwmbre 2023</Typography>
                                        </CardActions>
                                        <CardContent>
                                        <Typography  variant="h5" className='text-primary mb-2 fs-4 fw-normal text-center'>
                                        Architecte
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Concevoir des bâtiments et des structures. 
                                        Créer des plans, supervisent la construction,
                                        et veiller à ce que les bâtiments soient esthétiques, 
                                        fonctionnels et conformes aux réglementations.
                                        </Typography>
                                        </CardContent>
                                        <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                            J
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                            <RemoveRedEyeRoundedIcon  />
                                            </IconButton>
                                        }
                                        title={
                                            <Typography  variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                                            Junior Leonel
                                        </Typography>
                                        }
                                        subheader={
                                            <Typography variant="body2" color="text.secondary" className='text-start'>
                                                 <Typography variant="body2" color="text.secondary" >
                                            <LocationOn sx={{color: grey[500]}} /> Scranton, PA, United States
                                            </Typography>
                                            Afrik-Solutions
                                        </Typography>
                                        }
                                        />
                                    
                                    </Card>
                                    
                                    </Grid>
                                    
                                </Grid>
                            </Box>
                        </Container>
                       
                        
                    </Container>
                  </Container>
           </Container>
    
        
        </>
    );
    
};

export default AllProjet;