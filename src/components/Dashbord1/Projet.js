import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Footer from './Footer.js'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Projets = () => {
  return ( 

    <>
      <NavBar/>
      <Box className='mt-5' sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box sx={{ p: 3 }}>
          {/* <h1>Projets</h1> */}
        </Box>
      </Box>
      <Container>
        <Box>
          <div class="row">
            <Typography fontWeight="bold" noWrap className='fs-3 text-center'>
              Mes projets
            </Typography>
            </div>
           
        </Box>
      </Container>
     
       <Container className='mt-3'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Emplois</StyledTableCell>
                  <StyledTableCell align="right">Statut</StyledTableCell>
                  <StyledTableCell align="right">Freelance</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Mode
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button  color="error" size="small">
                        expiré
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="right">2</StyledTableCell>
                    <StyledTableCell align="right">
                    <Stack direction="row" spacing={1} className='d-flex justify-content-end'>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton  aria-label="">
                          <EditIcon />
                        </IconButton>
                        <IconButton  aria-label="">
                          <VisibilityIcon />
                        </IconButton>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Mode
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button  color="success" size="small">
                        activé
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="right">2</StyledTableCell>
                    <StyledTableCell align="right">
                    <Stack direction="row" spacing={1} className='d-flex justify-content-end'>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton  aria-label="">
                          <EditIcon />
                        </IconButton>
                        <IconButton  aria-label="">
                          <VisibilityIcon />
                        </IconButton>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
              
              </TableBody>
            </Table>
          </TableContainer>
      </Container>

     <Footer/>
      
    </>
   
  
  )
}

export default Projets