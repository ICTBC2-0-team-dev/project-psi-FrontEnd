import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import AddLinkIcon from '@mui/icons-material/AddLink';


function Informations() {
  const [organisation, setOrganisation] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOrganisation(event.target.value);
  };

  const [industrie, setIndustrie] = React.useState('');

  const handleChanges = (event: SelectChangeEvent) => {
    setIndustrie(event.target.value);
  };

  const [Equipe, setEquipe] = React.useState('');

  const handleChangesEquipe = (event: SelectChangeEvent) => {
    setEquipe(event.target.value);
  };
  return (
    <React.Fragment>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl variant="standard" sx={{ m: 1,minWidth: 235}}>
          <InputLabel id="demo-simple-select-standard-label">Type d'organisation</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={organisation}
            onChange={handleChange}
            label="Type d'organisation"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>A</MenuItem>
            <MenuItem value={20}>B</MenuItem>
            <MenuItem value={30}>C</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl variant="standard" sx={{ m: 1,minWidth: 235}}>
          <InputLabel id="demo-simple-select-standard-label">Type d'industrie</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={industrie}
            onChange={handleChanges}
            label="Type d'industrie"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl variant="standard" sx={{ m: 1,minWidth: 235}}>
          <InputLabel id="demo-simple-select-standard-label">Taille des équipes</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={Equipe}
            onChange={handleChangesEquipe}
            label="Taille des équipes"
          >
            <MenuItem value="">
              <em>0</em>
            </MenuItem>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="expDate"
          label="Date de création"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField
        id="input-with-icon-textfield"
        label="Site web"
        placeholder='https://name.com/'
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
          label="Vision de Lentreprise"
          fullWidth
          multiline
          rows={4}
          placeholder='Dites-nous quelle est la vision de votre entreprise...'
          variant="standard"
        />
        </Grid>
    </Grid>
  </React.Fragment>

  )
}

export default Informations