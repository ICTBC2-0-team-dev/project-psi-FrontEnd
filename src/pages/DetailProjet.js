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
// import IconButton from '@mui/material/IconButton';

const DetailProjet = () => {

    return ( 
  
      <>
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
         <Container fluid sx={{backgroundColor:'#f1f2f4'}}>

            <div className='row mb-3 text-center'>
                    
                <Typography sx={{ mb: 1.5 }} color="text.dark" fontWeight="bold" className='fs-5'>
                                Qu'est ce que nous recherchons
                </Typography>
                <Typography variant="body2" className='lh-lg'>
                    Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem.
                    Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim.
                             Nulla tincidunt felis et lectus rhoncus laoreet.
                            </Typography>
    
            </div>
         </Container>
      </>
     
    
    )
  }
  
  export default DetailProjet