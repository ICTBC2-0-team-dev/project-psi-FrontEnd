import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';





const defaultTheme = createTheme();

const EmailVerification = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      text: data.get('text'),
    //   password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme} component={Paper} >
      <Container  component="main" maxWidth="xs" sx={{ height: '860px'}} >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className='my-3 fw-bold'>
            Vérifier votre email
          </Typography>
          <Typography component="h6" variant="h5" className='text-center fw-lighter fs-6 sm-mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id purus sodales, pulvinar purus 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                label="code"
                name="text"
                autoComplete="text"
                autoFocus
              />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Vérifier
            </Button>
           
          </Box>
          <Link href="#" variant="body2" className='text-center'>
              Renvoyer le code
         </Link>
        
        </Box>
        
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default EmailVerification