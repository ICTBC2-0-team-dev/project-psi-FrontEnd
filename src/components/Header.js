import React, { useState } from 'react'
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Grid, AppBar, Toolbar, Typography,
  Tabs, Tab, Box, Button, useTheme, useMediaQuery, Collapse,
} from '@mui/material';
import Logo2 from './full-logo-wide-.svg';
import Menu from './Menu';
import { Link, useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


const Header = ({ links }) => {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const theme = useTheme();
  console.log("theme");
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);
  const location = useLocation();

  let CustomTabs = ({ to, label }) => (
    <Tab
      textColor='primary'
      underline='hover'
      indicatorColor='primary'
      value={value}
      onChange={(e, val) => setValue(val)}
      label={label}
      component={Link}
      to={to}
      selected={to === location.pathname}
    />
  );

  const [value, setValue] = useState();
  return (

    <AppBar sx={{ background: '#fff' }}>
      <Toolbar >


        {isMatch ? <>

          <Menu />
        </> : <Grid sx={{ placeItems: 'center' }} container >
          <Grid item xs={2}>
            <Typography><img src={Logo2} alt="Logo" height={110} /></Typography>
          </Grid>
          <Grid item xs={6} sx={{ textColor: 'dark' }}>
            <Tabs
              // indicatorColor='secondary'
              // textColor='primary'
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              {/* {links.map((link, index) => (
                <Tab key={index} label={link} />
              ))} */}
              <CustomTabs to="/Accueil" label="Accueil" />
              <CustomTabs to="#" label="Services" onClick={handleClick} endIcon={open ? <ExpandLess /> : <ExpandMore />} /> 
              {/* <Collapse in={open} timeout='auto' unmountOnExit>
                <CustomTabs to="/Accueil" label="Accueil" component="div" disablePadding/>
              </Collapse> */}
              <CustomTabs to="/About" label="À propos de nous" />
              <CustomTabs to="/Actualite" label="Média" />
              <CustomTabs to="/Contact_us" label="Contact" />
  
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Box display={'flex'}>
              <Button sx={{ marginLeft: 'auto ' }} variant='outlined' component={Link} to="/account"> S'inscrire</Button>
              <Button sx={{ marginLeft: 1 }} variant='contained' component={Link} to="/"> Se Connecter</Button>
            </Box>
          </Grid>
        </Grid>
        }
      </Toolbar>
    </AppBar>

  )
}

export default Header 