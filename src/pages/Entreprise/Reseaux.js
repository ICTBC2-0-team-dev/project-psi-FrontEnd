import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddLinkIcon from '@mui/icons-material/AddLink';


   
function Reseaux() {
  return (
    <React.Fragment>
    <Grid container spacing={5}>
      <Grid item xs={12}>
      <TextField
        id="input-with-icon-textfield"
        label="Lien Facebook"
        placeholder='https://facebook.com/'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <AddLinkIcon  sx={{color:'primary'}}/>
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
          label="Lien Instagram"
          fullWidth
          placeholder='https://instagram.com/'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <AddLinkIcon  sx={{color:'primary'}}/>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        </Grid>
        <Grid item xs={12}>
           <TextField
          id="standard-multiline-static"
          label="Lien twitter"
          fullWidth
          placeholder='https://twitter.com/'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <AddLinkIcon  sx={{color:'primary'}}/>
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

export default Reseaux