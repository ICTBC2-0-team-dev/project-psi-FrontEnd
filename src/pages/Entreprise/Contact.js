import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'; 
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <React.Fragment>
    <Grid container spacing={5}>
      <Grid item xs={12}>
      <TextField
        id="input-with-icon-textfield"
        label="Localisation de l'entreprise"
        placeholder='localisation'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <AddLocationIcon  sx={{color:'primary'}}/>
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
      />
      </Grid>
      <Grid item xs={12}>
           <TextField
          id="standard-multiline-static"
          label="Numéro de téléphone"
          fullWidth
          placeholder='Ex: 690 551 993'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <PhoneIcon  sx={{color:'primary'}}/>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        </Grid>
        <Grid item xs={12}>
           <TextField
          id="standard-multiline-static"
          label="Email"
          fullWidth
          placeholder='Ex:kamda@gmail.com/'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <EmailIcon  sx={{color:'primary'}}/>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        </Grid>
    </Grid>
  </React.Fragment>
  )
}

export default Contact