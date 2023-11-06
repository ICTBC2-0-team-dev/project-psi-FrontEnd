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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const AddProjets = () => {
  const [Domaine, setDomaine] = React.useState('');

  const handleChange = (event) => {
    setDomaine(event.target.value);
  };

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
              <div class="col-8">
                <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                  <FormHelperText id="outlined-projet-helper-text">Tags</FormHelperText>
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
                  <FormHelperText id="outlined-projet-helper-text">Domaines</FormHelperText>
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
                  <FormHelperText id="outlined-projet-helper-text">Devises</FormHelperText>
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
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      endAdornment={<InputAdornment position="end">< CalendarMonthIcon/></InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        'aria-label': 'projet',
                      }}
                    />
                  </FormControl>
                </div>
                <div className='col-4'>
                  <FormControl  fullWidth sx={{ m: 1,}} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">Date D’expiration</FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      endAdornment={<InputAdornment position="end">< CalendarMonthIcon/></InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        'aria-label': 'projet',
                      }}
                    />
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
            <Container>
              <div className='row'> 
                 <div className='row'>
                  <div className='col'>
                    <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'> 
                      localisation
                    </Typography>
                  </div>
               </div>
              </div>
            </Container>
          </Container>
          </Grid>
        </Grid>
      
       
      </Box>
    </>
   
  
  )
}

export default AddProjets