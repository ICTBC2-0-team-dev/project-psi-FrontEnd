import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Evenement = () => {
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

            <Container className='p-5 mt-5'>
                <Row>
                    <Col>
                        <Typography>
                            Événements à venir
                        </Typography>
                    </Col>
                    <Col>
                        <Button variant="outlined" className='float-end'> Événements à venir passés</Button>
                    </Col>
                </Row>
            </Container>


            <Container fluid>
                <div className="row d-flex justify-content-center align-items-center">

                    <div className="col-md-3" style={{ width: 'auto' }} >
                        <div>
                            <div style={{ backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2024/01/space-comm-logo-purple-4x3-1.jpg)', backgroundRepeat: 'none', height: '300px', width: '70%', cursor: 'pointer' }}>
                                <div className='p-3 title'>
                                    <span className='p-2 text-white text-center title' style={{ background: "#008bd2", height: '100px', cursor: 'pointer' }}>Projet satelite</span>
                                </div>
                            </div>
                            <Typography>5 février 2024</Typography>
                            <div className='description' style={{ cursor: 'pointer' }}>
                                Lancement du projet satelitaire du cameroun
                            </div>
                            <Typography className='description' style={{ cursor: 'pointer' }}>Lire plus <ArrowOutwardIcon /></Typography>
                        </div>

                    </div>
                    <div className="col-md-3" style={{ width: 'auto' }}>
                        <div>
                            <div style={{ backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2024/01/space-comm-logo-purple-4x3-1.jpg', backgroundRepeat: 'none', height: '300px', width: '70%' }}>
                                <div className='p-3'>
                                    <span className='p-2 text-white text-center' style={{ background: "#008bd2", height: '100px', width: '300px' }}>Projet satelite</span>
                                </div>
                            </div>
                            <Typography>5 février 2024</Typography>
                            <div>
                                Lancement du projet satelitaire du cameroun
                            </div>
                            <Typography>Lire plus <ArrowOutwardIcon /></Typography>
                        </div>

                    </div>
                    <div className="col-md-3" style={{ width: 'auto' }}>
                        <div>
                            <div style={{ backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2024/01/space-comm-logo-purple-4x3-1.jpg', backgroundRepeat: 'none', height: '300px', width: '70%' }}>
                                <div className='p-3'>
                                    <span className='p-2 text-white text-center' style={{ background: "#008bd2", height: '100px', width: '300px' }}>Projet satelite</span>
                                </div>
                            </div>
                            <Typography>5 février 2024</Typography>
                            <div>
                                Lancement du projet satelitaire du cameroun
                            </div>
                            <Typography>Lire plus <ArrowOutwardIcon /></Typography>
                        </div>
                    </div>
                </div>

            </Container>

            <Container className='p-5 mt-5'>
                <Row>
                    <Col>
                        <Stack className='text-center' spacing={2} style={{display: "flex", justifyContent:"center", alignItems:'center'}} >
                            <Pagination count={10} color="primary" />
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <Footer />

        </>
    )
}

export default Evenement