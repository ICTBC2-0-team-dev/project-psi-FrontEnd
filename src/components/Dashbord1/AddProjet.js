import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Container from 'react-bootstrap/Container';


const AddProjets = () => {
  return ( 

    <>
      <NavBar/>
      <Container>
      <Box className='mt-5' sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box sx={{ p: 3 }}>
          <h1>AddProjets</h1>
        </Box>
       
      </Box>
      </Container>
    </>
   
  
  )
}

export default AddProjets