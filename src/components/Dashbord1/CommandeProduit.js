import React from 'react'
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from './Footer.js'



const CommandeProduit = () => {

  return ( 

    <>
      <NavBar/>
      <Box className='mt-5' sx={{ display: 'flex', flexDirection:'column' }} >
        <Sidebar/>
      
       <Container className='mt-5' direction="column" >
          <div className='row'>
            <div className='col-4'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='col-4'>
            
            </div>
            <div className='col-4'>
             
            </div>
          </div>
          
      
        </Container>
      </Box>
      <Footer/>
    </>
   
  
  )
}

export default CommandeProduit