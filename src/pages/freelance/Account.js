import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Components from "./Components";
import Container from 'react-bootstrap/Container';
import Logo from '../images/logoPSI.png';
import { styled } from '@mui/material/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';


const defaultTheme = createTheme();


// const defaultTheme = createTheme();
const Account = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name : data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));

  return (
    <Components.Container  maxWidth="xs" className='m-auto mt-5'> 
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '860px'}}>
        <CssBaseline />
        <Grid component={Paper}
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/photos-gratuite/portrait-beau-jeune-homme-affaires-noir-africain-travaillant-ordinateur-portable-au-bureau_231208-680.jpg?w=1380&t=st=1696980256~exp=1696980856~hmac=8d782e9a7ac93aad86bbf995ceb44ae02d2edb83ba5ee9ff3ac1cd4792e7fdcd)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          >
          <Box sx={{
            height: '860px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
           }} /> 
        </Grid>
        <Grid item xs={12} sm={8} md={7} component={Paper} className='d-flex justify-content-center align-items-center' >
          
          <Box
            sx={{
              my: 0,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent:'center'
            }}
          >
            <img src={Logo}/>
            <Typography component="h1" variant="h5" className='fw-bold mb-2'>
            Créer Un Compte
            </Typography>
            <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              <Grid item xs={6}>
                {/* <Item> */}
                <Grid  className='d-flex justify-content-center  p-2 rounded' >
                    <AccountCircleOutlinedIcon sx={{color: 'rgba(0, 0, 0, 0.7)'}}/>
                     <Typography component="h6" variant="h5" className='fw-lighter fs-5 ms-3'>
                     <a href="/#" class="text-decoration-none text-secondary">Freelance</a>
                     </Typography>
                  </Grid>
                {/* </Item> */}
              </Grid>
              <Grid item xs={6}>
                {/* <Item>  */}
                  <Grid  className='d-flex justify-content-center border p-2 px-5 rounded ' style={{background:'#042852'}}>
                    <BusinessOutlinedIcon sx={{color: 'white'}}/>
                     <Typography component="h6" variant="h5" className='fs-5 ms-3'>
                     <a href="/#" class="text-decoration-none text-white">Employeur</a>
                     </Typography>
                  </Grid>
                  {/* </Item> */}
              </Grid>
              
            </Grid>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nom"
                name="name"
                autoComplete="Nom"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirmer le mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Maintenir la connexion"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se Connecter
              </Button>
              <Typography component="h1" variant="h5" className='text-center fs-4 fw-bold'>
                OU
              </Typography>
              <Container maxWidth="xs" className='d-flex justify-content-between  gap-3 sm-w-50'>
                  <Grid  className='d-flex justify-content-center border p-2 rounded' >
                   <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://get-picto.com/wp-content/uploads/2023/01/logo-facebook-icon.png"
                    />
                     <Typography component="h6" variant="h5" className='fw-lighter fs-4 ms-3'>
                     <a href="/#" class="text-decoration-none text-secondary">Facebook</a>
                     </Typography>
                  </Grid>
                  <Grid  className='d-flex justify-content-center border p-2 rounded' >
                   <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                    />
                     <Typography component="h6" variant="h5" className='fw-lighter fs-4 ms-3'>
                     <a href="/#" class="text-decoration-none text-secondary">Google</a>
                     </Typography>
                  </Grid>
                </Container>
              <Grid  className='d-flex align-items-center justify-content-center mt-1'>
                  <Typography  component="h6" variant="h6 body2" className='text-center fw-lighter fs-6'>
                  Vous n’avez pas de compte?
                  </Typography>
                  <Link href="#" variant="body2" className='text-center fw-lighter fs-6'>
                    Creer un Compte
                    </Link>
                </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </Components.Container>
  );
}


export default Account;