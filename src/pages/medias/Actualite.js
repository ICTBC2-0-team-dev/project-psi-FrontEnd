import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "../../axios.js";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { setActualiteId } from '../../features/ActualiterSlice.js';
import './actualite.css';


const Actualite = () => {
    const [actualiter, setActualite] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    console.log(actualiter);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await axios.get(`/actualites`);
                setActualite(request.data);
                console.log(request.data);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    /** ffitered */
    const handleSearchTermChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        searchActualiter(term);
    };

    const searchActualiter = (term) => {
        if (typeof term !== "string") {
            return;
        }
        const filteredActualiter = actualiter.filter((actus) =>
            actus.title.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(filteredActualiter);
    };

    const dispatch = useDispatch();

    /** dispacher des projet */

    const navigate = useNavigate();

    const handleVoirClick = () => {
        navigate('/actualite-Detail');
    };
    return (
        <>
            <Header />
            <Grid fluid component="main"
                style={{
                    backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    flexDirection: 'start',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >
                <Grid
                    sx={{
                        height: '470px',
                        backgroundColor: '#30509dbf',
                        padding: {
                            xs: '10px',
                            sm: '50px',
                            md: '200px'
                        },
                        margin: 'auto',
                    }}
                >
                    <Grid className='mt-5 mt-sm-0'>
                        <Grid className='my-5 my-sm-0'>
                            <Box>
                                <Typography className='text-white mb-2 fs-3'>
                                    Acceuil - MEDIAS
                                </Typography>
                                <Typography className='text-white  mb-5 fs-1 fw-normal fs-sm-5'>
                                    Nos Actualites.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Container className="mt-5" direction="column">
                <div className="row-2 d-flex justify-content-center align-items-center">
                    {searchTerm === '' ? (
                        actualiter.length === 0 ? (
                            <h3>Pas d'Actualiter trouves</h3>
                        ) : actualiter.map((actu) => (
                            <div className="col-md-3" style={{ width: '30%' }} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <Box>
                                        <CardMedia
                                            sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                            image={`http://localhost:8081/${actu.image}`}
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            className="text-end text-primary"
                                        >
                                            Date de publication: <span style={{ color: "black" }}>{actu.dateCreation}</span>
                                        </Typography>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {actu.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {actu.description}
                                        </Typography>
                                    </CardContent>
                                    <Typography className='description' style={{ cursor: 'pointer' }} onClick={() => handleVoirClick(dispatch(setActualiteId(actu.id)))} >Lire plus <ArrowOutwardIcon /></Typography>
                                </Card>
                            </div>
                        ))
                    ) : (
                        searchResults.map((actu) => (
                            <div className="col-md-3" style={{ width: '30%' }} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <Box>
                                        <CardMedia
                                            sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                            image={`http://localhost:8081/${actu.image}`}
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            className="text-end text-primary"
                                        >
                                            Date de publication: <span style={{ color: "black" }}>{actu.dateCreation}</span>
                                        </Typography>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {actu.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {actu.description}
                                        </Typography>
                                    </CardContent>
                                    <Typography className='description' style={{ cursor: 'pointer' }} onClick={() => handleVoirClick(dispatch(setActualiteId(actu.id)))}>Lire plus <ArrowOutwardIcon /></Typography>
                                </Card>
                            </div>
                        ))
                    )}
                    <div className="col-md-3" >
                        <div className="row d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f1f7fa', height: '500px' }}>
                            <div className='col-m2'>
                                <TextField placeholder='rechercher' style={{ backgroundColor: 'white' }} value={searchTerm} onChange={handleSearchTermChange} />
                                <SearchIcon style={{
                                    backgroundColor: '#008bd2',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    fontSize: '54px',
                                    marginLeft: '3%',
                                    cursor: 'pointer'
                                }}
                                    className="text-white"
                                    onClick={searchActualiter}
                                />
                            </div>
                            <div style={{ marginBottom: '50%' }}>
                                <Typography>Sujet</Typography>
                                <ul>
                                    <li>
                                        Ingénierie
                                    </li>
                                    <li>
                                        Science
                                    </li>
                                    <li>
                                        Sécurité
                                    </li>
                                    <li>
                                        Espace
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className='p-5 mt-5'>
                <Row>
                    <Col>
                        <Stack className='text-center' spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: 'center' }} >
                            <Pagination count={10} color="primary" />
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
}

export default Actualite