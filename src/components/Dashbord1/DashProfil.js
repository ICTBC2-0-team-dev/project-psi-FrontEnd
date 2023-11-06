import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





const DashProfil = () => {


  
  return ( 

    <>
      <NavBar/>
      <Container className='mt-5'>
      <Box className='mt-5' sx={{ display: 'flex', backgroundColor:'#'}}>
        <Sidebar/>
        <Box sx={{ p: 3 }}>
        <Grid className='mt-5 mt-sm-0'>
            <Grid className='my-5 my-sm-0'>
              <Box>
                {/* <Typography className='text-dark mb-2 fs-1 fw-normal fs-sm-5'>
                  Bienvenue sur le site PSI !
                </Typography> */}
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
                    <Grid item xs={false} sm={6} md={6}>
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
                              Emplois
                            </Typography>
                            
                          </Box>
                        </Card>
                        </Item>
                    </Grid>
                   
                    <Grid item xs={false} sm={6} md={6}>
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
                             750,500
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
        </Box>
      </Box>
      
      
        <Box>
          <div class="row justify-content-around">
            <div class="col-4">
             <Typography fontWeight="bold" noWrap className='fs-3 text-center'>
               Offres d’emplois recents
             </Typography>
            </div>
            {/* <div class="col-4">
             <Typography fontWeight="bold" noWrap className='fs-5 text-primary'>
                Tout voir
              </Typography>
            </div> */}
          </div>
        </Box>
     
       <Container className='mt-3'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Emplois</StyledTableCell>
                  <StyledTableCell align="right">Statut</StyledTableCell>
                  <StyledTableCell align="right">Freelance</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Mode
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button color="success" size="small">
                        activé
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="right">2</StyledTableCell>
                    <StyledTableCell align="right">
                    <Stack direction="row" spacing={1} className='d-flex justify-content-end'>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton  aria-label="">
                          <EditIcon />
                        </IconButton>
                        <IconButton  aria-label="">
                          <VisibilityIcon />
                        </IconButton>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
              
              </TableBody>
            </Table>
          </TableContainer>
      </Container>

      
     </Container>
    </>
   
  
  )
}

export default DashProfil