import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Container from 'react-bootstrap/Container';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


const ProfilDash = () => {
  return ( 

    <>
      <NavBar/>
      <Box className='mt-5' sx={{ display: 'flex'}}>
        <Sidebar/>
        <Box sx={{ p: 3 }}>
          {/* <h1>Profll</h1> */}
        </Box>
      </Box>
      <Container className='mt-5'>
       <Box>
          <div className='row'>
            <div claassName='col-12'>
              <Card sx={{  }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="data:image/jpeg;base64,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"
                    alt="green iguana"
                  />
                  <CardContent sx={{display:'flex'}}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 76,height: 76 }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'> 
                        Informations
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            
          </div>
        </Box>
        <Box className='mt-3'>
          <div className='row'>
            <div className='col-4'>
              <Card sx={{}}>
                <CardHeader
                 title="Informations" 
                />
                <Divider/>
             
                <CardContent>
                  <List sx={{ bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <EmailOutlinedIcon style={{color: '#005CE8'}} />
                      </ListItemAvatar>
                      <ListItemText secondary="psi@gmail.com" primary="Email"  />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <WorkIcon  style={{color: '#005CE8'}}/>
                      </ListItemAvatar>
                      <ListItemText primary="Numero" secondary="+231 690551990" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <BeachAccessIcon style={{color: '#005CE8'}}/>
                      </ListItemAvatar>
                      <ListItemText primary="Localisation" secondary="Home# 1024/N, Road# 17/A, Adabor, Dhaka-1207, Bangladesh" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon style={{color: '#005CE8'}}/>
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon style={{color: '#005CE8'}}/>
                  </IconButton>
                  
                </CardActions>
               
              </Card>
            </div>
            <div className='col-8'>
            <Card sx={{}}>
                <CardHeader
                 title="Entreprise" 
                />
                <Divider/>
              
                <CardContent className='d-flex justify-content-between'>
                 <div className='col-4 ' >
                    <div className='row'>
                      <Typography sx={{ mb: 1.5 }} color="text.dark">
                        Description
                      </Typography>
                      <Typography variant="body2">
                      This impressive paella is a perfect party dish and 
                      a fun meal to cook together with your guests. Add 1 cup of frozen
                      peas along with the mussels, if you like.
                      </Typography>
                    </div>
                    <div className='row mt-3'>
                      <Typography sx={{ mb: 1.5 }} color="text.dark">
                        Vision
                      </Typography>
                      <Typography variant="body2">
                      This impressive paella is a perfect party dish and 
                      a fun meal to cook together with your guests. Add 1 cup of frozen
                      peas along with the mussels, if you like.
                      </Typography>
                    </div>
                 </div>
                 <div className='col-4'>
                   <ListItemText secondary="Kevin Gilbert" primary="Type d’Organisation"  />  
                   <ListItemText secondary="UI/UX Lead Designer" primary="Type D’industrie:"  />  
                   <ListItemText secondary="psi@gmail.com:" primary="Taille de l’equipe:"  />  
                   <ListItemText secondary="psi@gmail.com:" primary="Date de creation:"  />  
                   <ListItemText secondary="psi@gmail.com:" primary="Langue:"  />
                   <ListItemText secondary="psi@gmail.com:" primary=" Pays:"  />  
                 </div>
                </CardContent>               
              </Card>
            </div>
          </div>
        </Box>
      </Container>
      
        
     
      
    </>
   
  
  )
}

export default ProfilDash