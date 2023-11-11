import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Footer from './Footer.js'


const AddProjets = () => {
  const [Domaine, setDomaine] = React.useState('');

  const handleChange = (event) => {
    setDomaine(event.target.value);
  };
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    height: 20px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  return ( 
   

    <>
      <NavBar/>
     
      <Box className='mt-5' sx={{ display: 'flex' ,flexDirection:'column'}}>
        <Sidebar/>
        <Box sx={{ p: 3 }}>
          <Typography fontWeight="bold" noWrap className='fs-3 text-center'>
            Ajouter Un Projtes
          </Typography>
        </Box>
        <Grid className='mt-5 mt-sm-0'>
          <Grid>
            <Container className='mt-5'>
              <div className="row ">
              <div className="row ">
                <div className='col'>
                  <FormControl fullWidth sx={{ m: 1,}} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">Nom du Projet</FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        'aria-label': 'projet',
                      }}
                    />
                  </FormControl>
                </div>
              </div>
              <div className="row justify-content-between">
                <div class="col-6">
                  <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">Tag</FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        'aria-label': 'projet',
                      }}
                    />
                  </FormControl>
                </div>
                <div class="col-4">
                  <FormControl fullWidth  sx={{ m: 1}}>
                    <FormHelperText id="outlined-projet-helper-text">Domaine</FormHelperText>
                    <InputLabel id="demo-select-small-label"></InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={Domaine}
                      // label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                </div>
                <div className='row'>
                  <div className='row'>
                    <div className='col'>
                      <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'> 
                        Salaires
                      </Typography>
                    </div>
                </div>
                <div className='col-4'>
                  <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">Minimum</FormHelperText>
                     <OutlinedInput
                      id="outlined-adornment-projet"
                      endAdornment={<InputAdornment position="end">XAF</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        'aria-label': 'projet',
                      }}
                    />
                  </FormControl>
                </div>
                <div className='col-4'>
                  <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">Maximum</FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      endAdornment={<InputAdornment position="end">XAF</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        'aria-label': 'projet',
                      }}
                    />
                  </FormControl>
                </div>
                <div class="col-4">
                    <FormControl fullWidth  sx={{ m: 1}}>
                      <FormHelperText id="outlined-projet-helper-text">Devise</FormHelperText>
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
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className='row'>
                  <div className='row'>
                    <div className='col'>
                      <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'> 
                        Informations
                      </Typography>
                    </div>
                </div>
                  <div className='col-4'>
                    <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Date De creation</FormHelperText>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </FormControl>
                  </div>
                  <div className='col-4'>
                    <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Date D’expiration</FormHelperText>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </FormControl>
                  </div>
                  <div class="col-4">
                  <FormControl fullWidth  sx={{ m: 1}}>
                    <FormHelperText id="outlined-projet-helper-text">Modules</FormHelperText>
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
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
             </div>
              <Container className='mt-5'>
                < Box sx={{backgroundColor:'#F9FAFB'}}>
                  <Container className='p-3'>
                    <div className='row'> 
                        <div className='row'>
                          <div className='col'>
                            <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2 text-center'> 
                              localisation
                            </Typography>
                          </div>
                          <Box className='pb-4'>
                            <div className='row'>
                              <div className="col-6">
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
                              <div className="col-6">
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
                            </div>
                          
                          </Box>
                      </div>
                    </div>
                  </Container>
                </Box>
              </Container>
              <div className='row mt-3'>
                <div className='row'>
                  <div className='col'>
                    <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'> 
                      Description
                    </Typography>
                  </div>
                </div>
                
                <div className='col-12'>
                  <Textarea
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    //   ut labore et dolore magna aliqua."
                  />
                </div>
                <div className='mt-5'>
                <Button variant="contained">Ajouter</Button>
                </div>
               
              </div>
            </Container>
          </Grid>
        </Grid>
      
       
      </Box>
      <Footer/>
    </>
   
  
  )
}

export default AddProjets