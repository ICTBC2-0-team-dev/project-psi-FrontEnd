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
//   
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import LocationOn from '@mui/icons-material/LocationOn';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import cv from '../../img/homme.jpg'
import Footer from './Footer.js'

// import Header from 'src/components/Header.js'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const DetailProjetEm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return ( 
  
      <>
        {/* <Header/> */}
         <NavBar/> 
         <Box className='mt-5' sx={{ display: 'flex', flexDirection:'column' }} >
          <Sidebar/>
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
                <div className='row mb-3'>
                    <div className='col-8 '>
                        <Typography fontWeight="bold" noWrap className='fs-4'>
                         Liste de Freelance
                        </Typography>
                    </div>
                </div>
                <div className='row'>
            <div className='col-4'>
              <Card>
                <Box sx={{ p: 2, display: 'flex'}} className='ms-2'>
                  <Avatar>H</Avatar>
                  <Stack spacing={0.5} className='ms-3'>
                    <Typography fontWeight="bold" className='ps-2'>Lucas Smith</Typography>  
                    <Typography variant="body2" color="text.secondary">
                    <LocationOn sx={{color: grey[500]}} /> Scranton, PA, United States
                    </Typography>
                  </Stack>
            
                </Box>
                <Divider />
                <Stack
                  direction="column"
                  alignItems="start"
                  // justifyContent="space-between"
                  sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                  <Typography fontWeight="body" className='ps-2'>Description :  la gestion des finances d'une organisation effectuent des audits et conseillent sur la gestion financière.</Typography>  
                  
                </Stack>
                <Stack
                  direction="column"
                  alignItems="center"
                  // justifyContent="space-between"
                  sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                 <div>
                    <Button onClick={handleOpen} variant="outlined" startIcon={<VisibilityIcon/>}>Voir CV</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <img src={cv} alt=''/>
                      </Box>
                    </Modal>
                  </div>

                  
                </Stack>
               
              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Box sx={{ p: 2, display: 'flex'}} className='ms-2'>
                  <Avatar>H</Avatar>
                  <Stack spacing={0.5} className='ms-3'>
                    <Typography fontWeight="bold" className='ps-2'>Lucas Smith</Typography>  
                    <Typography variant="body2" color="text.secondary">
                    <LocationOn sx={{color: grey[500]}} /> Scranton, PA, United States
                    </Typography>
                  </Stack>
            
                </Box>
                <Divider />
                <Stack
                  direction="column"
                  alignItems="start"
                  // justifyContent="space-between"
                  sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                  <Typography fontWeight="body" className='ps-2'>Description :  la gestion des finances d'une organisation effectuent des audits et conseillent sur la gestion financière.</Typography>  
                  
                </Stack>
                <Stack
                  direction="column"
                  alignItems="center"
                  // justifyContent="space-between"
                  sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                 <div>
                    <Button onClick={handleOpen} variant="outlined" startIcon={<VisibilityIcon/>}>Voir CV</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <img src={cv} alt=''/>
                      </Box>
                    </Modal>
                  </div>

                  
                </Stack>
               
              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Box sx={{ p: 2, display: 'flex'}} className='ms-2'>
                  <Avatar>H</Avatar>
                  <Stack spacing={0.5} className='ms-3'>
                    <Typography fontWeight="bold" className='ps-2'>Lucas Smith</Typography>  
                    <Typography variant="body2" color="text.secondary">
                    <LocationOn sx={{color: grey[500]}} /> Scranton, PA, United States
                    </Typography>
                  </Stack>
            
                </Box>
                <Divider />
                <Stack
                  direction="column"
                  alignItems="start"
                  // justifyContent="space-between"
                  sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                  <Typography fontWeight="body" className='ps-2'>Description :  la gestion des finances d'une organisation effectuent des audits et conseillent sur la gestion financière.</Typography>  
                  
                </Stack>
                <Stack
                  direction="column"
                  alignItems="center"
                  // justifyContent="space-between"
                  sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                 <div>
                    <Button onClick={handleOpen} variant="outlined" startIcon={<VisibilityIcon/>}>Voir CV</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <img src={cv} alt=''/>
                      </Box>
                    </Modal>
                  </div>

                  
                </Stack>
               
              </Card>
            </div>
          </div>
           </Container>
        </Box>
        <Footer/>
       </>
     
    
    )
  }
  
  export default DetailProjetEm