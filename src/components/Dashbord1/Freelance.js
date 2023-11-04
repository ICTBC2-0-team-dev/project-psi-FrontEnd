import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'


const Freelance = () => {
  return ( 

    <>
      <NavBar/>
      <Box className='mt-5' sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box sx={{ p: 3 }}>
          <h1>Freelance</h1>
        </Box>
        
      </Box>
      
    </>
   
  
  )
}

export default Freelance