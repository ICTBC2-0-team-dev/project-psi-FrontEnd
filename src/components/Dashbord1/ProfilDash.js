import React, { useState, useEffect } from 'react'
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
import Footer from './Footer.js'
import LocationOn from '@mui/icons-material/LocationOn';
import axios from '../../axios.js'
import { useSelector } from 'react-redux';


const ProfilDash = () => {

  const userId = useSelector((state) => state.userElement);
  console.log(userId.id);
  const [profileData, setProfileData] = useState(null);
  console.log(profileData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/entrepriseByUser/${userId.id}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    if (userId.id) {
      fetchData();
    }
  }, [userId]);

  return ( 

    <>
      <NavBar/>
      <Box className='mt-5' sx={{ display: 'flex'}}>
        <Sidebar/>
        <Box sx={{ p: 3 }}>
          {/* <h1>Profll</h1> */}
        </Box>
      </Box>
      {profileData && (
        <Container className='mt-5'>
        <Box>
            <div className='row'>
              <div claassName='col-12'>
                <Card sx={{  }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image='http://localhost:8081/banniere/capture.png' 
                      alt="green iguana"
                    />
                    {/* <img  alt="Ellipse" src='http://localhost:8081/banniere/capture.png' /> */}
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
                          {profileData[0].description}
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
                        <ListItemText secondary={profileData[0].email} primary="Email"  />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <WorkIcon  style={{color: '#005CE8'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Numero" secondary={profileData[0].contactNumber}  />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <LocationOn style={{color: '#005CE8'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Localisation" secondary={profileData[0].localisation} />
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
                        <Typography variant="body2" color="text.secondary">
                          {profileData[0].description}
                        </Typography>
                      </div>
                      <div className='row mt-3'>
                        <Typography sx={{ mb: 1.5 }} color="text.dark">
                          Vision
                        </Typography>
                        <Typography variant="body2">
                        {profileData[0].name}
                        </Typography>
                      </div>
                  </div>
                  <div className='col-4'>
                    <ListItemText secondary={profileData[0].typeIndustry.name}  primary="Type d’Organisation"  />  
                    <ListItemText secondary={profileData[0].typeOrganisation.name}  primary="Type D’industrie:"  />  
                    <ListItemText secondary={profileData[0].teamLength}  primary="Taille de l’equipe:"  />  
                    <ListItemText secondary={profileData[0].creationDate}  primary="Date de creation:"  />  
                  </div>
                  </CardContent>               
                </Card>
              </div>
            </div>
          </Box>
        </Container>
      )}
      <Footer/>
    </>
   
  
  )
}

export default ProfilDash