import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
// import Divider from '@mui/material/Divider';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function Entreprise() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{}}>
        Logo & Bannière
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Box sx={{ p: 5, border: '1px dashed grey', borderRadius: 1 }}>
            <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Logo
                <VisuallyHiddenInput type="file" />
              </Button>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Box sx={{ p: 5, border: '1px dashed grey', borderRadius: 1 }}>
            <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Bannière
                <VisuallyHiddenInput type="file" />
              </Button>
            </FormControl>
          </Box>
        </Grid>
        {/* <Grid><Divider/></Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="nom"
            name="nom"
            label="Nom de l’Entreprise"
            fullWidth
            autoComplete="entreprise"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
           <TextField
          id="standard-multiline-static"
          label="Description "
          fullWidth
          multiline
          rows={4}
          defaultValue="Descriptio"
          variant="standard"
        />
        </Grid>
      </Grid>
    </React.Fragment>

  )
}

export default Entreprise