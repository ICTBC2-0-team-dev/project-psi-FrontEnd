import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'



const Projets = () => {
  return ( 

    <>
      <NavBar/>
      <Box className='mt-5' sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box sx={{ p: 3 }}>
          <h1>Projets</h1>
        </Box>

      </Box>
      
    </>
   
  
  )
}

export default Projets