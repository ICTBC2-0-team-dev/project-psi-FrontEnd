import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination'
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
import axios from '../../axios.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Card, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setIdProjet } from '../../features/ModuleSlice.js';


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

  const [openModal, setOpenModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const navigate = useNavigate();

  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
/**delete 
  const handleDeleteItem = () => {
    axios.delete(`/project/${selectedItemId}`)
      .then(response => {
        // Suppression réussie, vous pouvez mettre à jour votre liste de projets ici
        console.log('Projet supprimé avec succès');
        // Fermer la boîte modale
        handleCloseModal();
      })
      .catch(error => {
        // Gérer les erreurs de suppression
        console.error('Erreur lors de la suppression du projet :', error);
        // Fermer la boîte modale si nécessaire
        handleCloseModal();
      });
  };*/

  const handleDeleteItem = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`/project/${selectedItemId}`);
      console.log('Projet supprimé avec succès',response);
      // Fermer la boîte modale
      handleCloseModal();

    } catch (error) {
      console.error('Erreur lors de la suppression du projet :', error);
      // Fermer la boîte modale si nécessaire
      handleCloseModal();    
    }
  };

  /** end delete */

  const user = useSelector((state) => state.userElement);
  console.log(user.id);
  const idUser = user.id

  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/projectUser/${idUser}`);
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleViewClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    setModalOpen(false);
    setTitle('');
    setDescription('');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  console.log(selectedProject);
  const handleSaveClick = () => {
    // Create a new module object with the selected project's information
    
    const newModule = {
      title: title,
      description: description,
      project: selectedProject
    };

    // Send a POST request to the API to create the new module
    axios.post('/module', newModule)
      .then(response => {
        console.log('New module created:', response.data);
        // Close the modal and fetch updated projects
        handleModalClose();
        fetchData();
      })
      .catch(error => {
        console.error('Error creating module:', error);
      });
      alert('Module Ajouter au projet')
  };

  /**pagination */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /** dispacher idprojet */
  const dispatch = useDispatch();

  const handleTitleClick = (projectId) => {
    dispatch(setIdProjet(projectId));
  };

  //voir module
  const handleVoirClick = (projectId) => {
    dispatch(setIdProjet(projectId));
    navigate('/Module');
  };


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
                  <StyledTableCell align="right">title</StyledTableCell>
                  <StyledTableCell align="right">title</StyledTableCell>
                  <StyledTableCell align="right">minAmount</StyledTableCell>
                  <StyledTableCell align="right">maxAmount</StyledTableCell>
                  <StyledTableCell align="right">monnaie</StyledTableCell>
                  <StyledTableCell align="right">dateCreation</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                      {projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((project) => (
                        <StyledTableRow key={project.id}>
                          <StyledTableCell>{project.title}</StyledTableCell>
                          <StyledTableCell onClick={() => handleTitleClick(project.id)} style={{ cursor: 'pointer' }}>{project.title}</StyledTableCell>
                          <StyledTableCell>{project.minAmount}</StyledTableCell>
                          <StyledTableCell>{project.maxAmount}</StyledTableCell>
                          <StyledTableCell>{project.monnaie}</StyledTableCell>
                          <StyledTableCell>{project.dateCreation}</StyledTableCell>
                          <StyledTableCell align="right">
                            <Stack direction="row" spacing={1} className='d-flex justify-content-end'>
                                {/* <IconButton aria-label="delete" onClick={() => handleOpenModal(project.id)}>
                                  <DeleteIcon />
                                </IconButton> */}
                                {/* <IconButton  aria-label="">
                                  <EditIcon />
                                </IconButton> */}
                                {/* <IconButton  aria-label="" onClick={() => handleOpenModal(project.id)}>
                                  <VisibilityIcon />
                                </IconButton> */}
                                <FormControl fullWidth sx={{ width: 110, marginLeft: 1, marginTop: 4 }}>
                                  <InputLabel  type="button" sx={{backgroundColor:'bleu'}}>Freelance</InputLabel>
                                  <Select>
                                      <MenuItem sx={{width:12}}>
                                      </MenuItem>
                                      <MenuItem >
                                        <IconButton  aria-label="" onClick={() => handleViewClick(project)} title='Ajouter un module'>
                                          <EditIcon  />module
                                        </IconButton>
                                      </MenuItem>
                                      <MenuItem>
                                        <IconButton  aria-label="" title='Voir Details' onClick={() => handleVoirClick(project)}>
                                          <VisibilityIcon />Voir
                                        </IconButton>
                                      </MenuItem>
                                  </Select>
                                </FormControl>

                              </Stack>
                            </StyledTableCell>
                          {/* Ajoutez d'autres colonnes en fonction de vos besoins */}
                        </StyledTableRow>
                      ))}

                      {/* Modal */}   
                      <Modal open={modalOpen} onClose={handleModalClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Card sx={{ width: 400, bgcolor: '#fff', border: '1px solid #ccc' }}>
                          <CardContent sx={{ padding: '2rem' }}>
                            <h3>Ajouter un module au projet</h3>
                            <TextField
                              label="Title"
                              margin="normal"
                              required
                              fullWidth
                              name="Title"
                              autoComplete="Title"
                              autoFocus
                              value={title}
                              onChange={handleTitleChange}
                            />
                            <TextField
                              label="Description"
                              margin="normal"
                              required
                              fullWidth
                              name="Description"
                              autoComplete="Description"
                              autoFocus
                              value={description}
                              onChange={handleDescriptionChange}
                            />
                            <br />
                            <div className="modal-buttons" sx={{ display: 'flex', justifyContent: 'space-between'}}>
                              {/* <Button type='reset' style={{marginTop:'5%'}}>Annuler</Button> */}
                              <Button onClick={handleSaveClick} variant="contained"  style={{marginTop:'5%'}}>Enregistrer</Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Modal>
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10, 50, 100]}
              component="div"
              count={projects.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
      </Container>

     <Footer/>
      
    </>
   
  
  )
}

export default Projets