import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import LocationOn from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import cv from '../../img/homme.jpg'
import Footer from './Footer.js'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Freelance = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return ( 

    <>
      <NavBar/>
      <Box className='mt-5' sx={{ display: 'flex', flexDirection:'column' }} >
        <Sidebar/>
        {/* <Box sx={{ p: 3 }}>
          <h1>Freelance</h1>
        </Box> */}
      
       <Container className='mt-5' direction="column" >
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

export default Freelance