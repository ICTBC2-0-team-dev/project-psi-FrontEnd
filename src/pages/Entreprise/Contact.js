import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function Contact() {
  return (
    <React.Fragment>
    <Grid container spacing={5}>
      <Grid item xs={12}>
      <TextField
        id="input-with-icon-textfield"
        label="Localisation de l'entreprise"
        placeholder='localisation'
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
          variant="standard"
        />
        </Grid>
        <Grid item xs={12}>
           <TextField
          id="standard-multiline-static"
          label="Email"
          fullWidth
          placeholder='Ex:kamda@gmail.com/'
          variant="standard"
        />
        </Grid>
    </Grid>
  </React.Fragment>
  )
}

export default Contact