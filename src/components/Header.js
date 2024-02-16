import React, { useState } from 'react'
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Grid, AppBar, Toolbar, Typography,
  Tabs, Tab, Box, Button, useTheme, useMediaQuery
} from '@mui/material';
import Logo2 from './full-logo-wide-.svg';
import Menu from './Menu';


const Header = ({ links }) => {
  const theme = useTheme();
  console.log("theme");
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  const [value, setValue] = useState();
  return (

    <AppBar sx={{ background: '#fff' }}>
      <Toolbar >


        {isMatch ? <>

          <Menu links={links}/>
        </> : <Grid sx={{ placeItems: 'center' }} container >
          <Grid item xs={2}>
            <Typography><img src={Logo2} alt="Logo" height={110} /></Typography>
          </Grid>
          <Grid item xs={6} >
            <Tabs
              indicatorColor='primary'
              textColor='primary'
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              {links.map((link, index) => (
                <Tab key={index} label={link} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Box display={'flex'}>
              <Button sx={{ marginLeft: 'auto '}} variant='outlined' > S'inscrire</Button>
              <Button sx={{ marginLeft: 1 }} variant='contained'> Se Connecter</Button>
            </Box>
          </Grid>
        </Grid>
        }
      </Toolbar>
    </AppBar>

  )
}

export default Header 