import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
// import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import Header from 'src/components/Header.js'


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
const DetailProjet = () => {

    return ( 
  
      <>
        {/* <Header/> */}
         <Container>
            <Box  className='border-bottom mt-5'>
                <div className='row mb-3'>
                <div className='col-8 '>
                    <Typography fontWeight="bold" noWrap className='fs-4'>
                    Ingénieur Logiciel 
                    </Typography>
                    <Typography fontWeight="medium" noWrap className='fs-6 mt-1'>
                        San Francisco, CA · Full time
                    </Typography>
                </div>
                <div className='col-4 text-end'>
                        <Button variant="contained" size="medium">
                        Postuler
                        </Button>
                </div>
                </div>
                </Box>  
                <Box className='mt-3'>
                   <div className='row mb-3'>
                       <div className='col-7'>
                           <Typography sx={{ mb: 1.5 }} color="text.dark" fontWeight="bold" className='fs-5'>
                                Qui Sommes-Nous?
                            </Typography>
                            <Typography variant="body2" className='lh-lg'>
                                We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus feugiat elit vitae enim lacinia semper. 
                                Cras nulla lectus, porttitor vitae urna iaculis, 
                                malesuada tincidunt lectus. Proin nec tellus sit 
                                amet massa auctor imperdiet id vitae diam. Aenean gravida 
                                est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et,
                                vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet.
                                Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                            </Typography>
                       </div>
                      
                    </div>

                    <div className='row mb-3'>
                       <div className='col-7'>
                           <Typography sx={{ mb: 1.5 }} color="text.dark" fontWeight="bold" className='fs-5'>
                                Qu'est ce que nous recherchons
                            </Typography>
                            <Typography variant="body2" className='lh-lg'>
                             Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem.
                             Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim.
                             Nulla tincidunt felis et lectus rhoncus laoreet.
                            </Typography>
                       </div>
                       <div className='col-7'>
                          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {[1, 2, 3].map((value) => (
                                    <ListItem
                                    key={value}
                                    disableGutters
                                    
                                    >
                                    <ListItemIcon>
                                        <CheckIcon  />
                                    </ListItemIcon>
                                    <ListItemText primary={`Line item ${value}`} />
                                    </ListItem>
                                ))}
                            </List>

                       </div>
                      
                    </div>
                </Box>
         </Container>
         
         <Container  fluid className='my-5 pb-5'
                style={{
                backgroundColor:'#f1f2f4',
                }}
            >
                <Container>
                    <Container >
                        <Container className='px-5'>
                          <Box>
                               <Container className='px-5'>
                                   <Box className='px-5'>
                                       <Container className='px-5'>
                                       <div className='row mb-3 text-center px-5'>   
                                            <Typography sx={{ mb: 1.5, mt:4 }} color="text.dark" fontWeight="bold" className='fs-4'>
                                                Postuler pour cet emploi
                                            </Typography>
                                            <Typography variant="body2" className='lh-lg'>
                                                We develop intelligent solutions for companies to reduce their operational costs, 
                                                increase their profitability and improve service quality.
                                            </Typography>
                                
                                        </div>
                                        <div className='row px-5'> 
                                
                                            <Box className='pb-4'>
                                                <div className="row ">
                                                    <div className='col'>
                                                    <FormControl fullWidth sx={{ m: 1}} variant="outlined">
                                                        <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Nom</FormHelperText>
                                                        <OutlinedInput className='bg-white'
                                                        id="outlined-adornment-projet"
                                                        aria-describedby="outlined-projet-helper-text"
                                                        inputProps={{
                                                            'aria-label': 'projet',
                                                        }}
                                                        />
                                                    </FormControl>
                                                    </div>
                                                </div>
                                                <div className="row ">
                                                    <div className='col'>
                                                    <FormControl fullWidth sx={{ m: 1}} variant="outlined">
                                                        <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Email</FormHelperText>
                                                        <OutlinedInput className='bg-white'
                                                        id="outlined-adornment-projet"
                                                        aria-describedby="outlined-projet-helper-text"
                                                        inputProps={{
                                                            'aria-label': 'projet',
                                                        }}
                                                        />
                                                    </FormControl>
                                                    </div>
                                                </div>
                                                <div className='row'>

                                                    <div className="col-6">
                                                        <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                                                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                                                Importer le CV
                                                                <VisuallyHiddenInput type="file" />
                                                            </Button>
                                                        </FormControl>
                                                    </div>
                                                   <div className="col-6">
                                                       <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                                                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                                                Importer la lettre de motivation
                                                                <VisuallyHiddenInput type="file" />
                                                            </Button>
                                                        </FormControl>
                                                    </div>
                                                  
                                                </div>
                                                <div className="row ">
                                                        <div className='col'>
                                                            <FormControl fullWidth sx={{ m: 1, height:'10'}} variant="outlined">
                                                                <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Message</FormHelperText>
                                                                <OutlinedInput className='bg-white'
                                                                id="outlined-adornment-projet"
                                                                aria-describedby="outlined-projet-helper-text"
                                                                inputProps={{
                                                                    'aria-label': 'projet',
                                                                }}
                                                                />
                                                            </FormControl>
                                                        </div>
                                                    </div>
                                                    <div className='mt-5 d-flex justify-content-center'>
                                                        <Button variant="contained">Ajouter</Button>
                                                    </div>
                                            
                                            </Box>
                                        </div>
                                        </Container>
                                    </Box>
                                </Container>
                          </Box>
                        </Container>
                       
                        
                    </Container>
                  </Container>
           </Container>
       </>
     
    
    )
  }
  
  export default DetailProjet