import React, { useState } from 'react'
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, AppBar, Toolbar, Typography, Tabs, Tab, Box, Button} from '@mui/material';
// import Logo2 from './full-logo-wide-.svg';


const Header = ({links}) => {
  const [value, setValue] = useState();
  return (

    <AppBar>
      <Toolbar>
        <Grid container >
          <Grid item xs={2}>
            {/* <Typography><img src={Logo2} alt="Logo" height={100}/></Typography> */}
            <Typography>Logo</Typography>
          </Grid>
          <Grid item xs={6
          } >
            <Tabs 
              indicatorColor='secondary' 
              textColor='inherit' 
              value={value} 
              onChange={(e, val)=> setValue(val)}
           >
              {links.map((link, index) => (
                <Tab key={index} label={link} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={3}>
            <Box display={'flex'}>
              <Button sx={{marginLeft: 'auto '}} variant='contained'> S'inscrire</Button>
              <Button sx={{marginLeft: 1}} variant='contained'> Se Connecter</Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

  )
}

export default Header 