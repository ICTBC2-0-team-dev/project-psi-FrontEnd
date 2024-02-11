import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Homme from '../../img/homme.jpg';
import { styled } from "@mui/material/styles"; import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from "@mui/material/InputAdornment";
import './about.css'

// const useStyles = styled((theme) => ({
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginTop: theme.spacing(4),
//     },
//     textField: {
//       marginRight: theme.spacing(2),
//     },
//   }));

const Index = () => {
    // const classes = useStyles();

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
                                <Typography className='text-white mb-2 fs-1 fw-normal fs-sm-5'>
                                    Acceuil - A propos
                                </Typography>
                                <Typography className='text-white  mb-5'>
                                    Qui sommes nous ?
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Container className='p-5 mt-5'>
                <Row>
                    {/* <Col>
                        <Box sx={{ flexGrow: 1 }} >
                            <Grid container  >
                                <img src={Homme} alt="" style={{ height: "400px", boxShadow: "5px black", width: 'auto' }} />
                            </Grid>
                        </Box>

                    </Col> */}
                    <Col>
                        <h1>Get your projects off the ground​</h1>
                        <Typography className='mt-5'>
                            Privately owned and fully independent, we provide first-class strategic consulting, develop comprehensive market intelligence products, organize executive-level annual summits and training programs for the satellite industry. We have forty years of experience accompanying private companies and government entities in strategic decision making. A reference for high quality market knowledge worldwide, we use our deep industry knowledge and analytical rigor to help our clients understand their business environment and provide them with the tools they need to make informed decisions and develop their business.
                        </Typography>
                    </Col>
                </Row>
            </Container>


            <Container className='mt-5' fluid>
                <Row>
                    <Col style={{
                        height: '500px',
                        backgroundColor: '#ccd0db',
                        padding: {
                            xs: '5px',
                            sm: '20px',
                            md: '90px'
                        },
                        margin: 'auto',
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <h2 className='text-center' >Notre mission​</h2>
                            <Typography className='text-center'>
                                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                            </Typography>
                        </Container>
                    </Col>
                    <Col style={{
                        height: 'auto',
                        backgroundColor: '#00134d',
                        marginLeft: '2%'
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <h2 className='text-center text-white' >Notre vision​</h2>
                            <Typography className='text-center text-white'>
                                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                            </Typography>
                        </Container>
                    </Col>
                </Row>

                <Container style={{ padding: '10%', height: 'auto', backgroundColor: '#00134d', marginTop: '2%' }}>
                    <h2 className='text-center text-white' >Nos valeurs​</h2>
                    <Typography className='text-center text-white'>
                        The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                    </Typography>
                </Container>
            </Container>

            <Grid fluid component="main" className='mt-5'>
                <Grid
                    sx={{
                        height: '370px',
                        backgroundColor: '#f2f3f6',
                        padding: {
                            xs: '5px',
                            sm: '20px',
                            md: '90px'
                        },
                        margin: 'auto',
                    }}
                >
                    <Container className='mt-5'>
                        <Row>
                            <Col>
                                <h2>Core values​</h2>
                                <Typography>
                                    Who we are and who we aspire to be
                                </Typography>
                            </Col>
                            <Col className='text-center'>
                                <h4>
                                    Independence
                                </h4>
                                <h4>
                                    Integrity
                                </h4>
                                <h4>
                                    Flexibility
                                </h4>
                            </Col>
                            <Col className='text-center'>
                                <h4>
                                    Excellence
                                </h4>
                                <h4>
                                    Diligence
                                </h4>
                                <h4>
                                    Ethicality
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                </Grid>
            </Grid>

            <Container className='mt-5'
                style={{
                    height: 'auto',
                    backgroundColor: '#f2f3f6',
                    padding: {
                        xs: '5px',
                        sm: '20px',
                        md: '90px'
                    },
                    margin: 'auto',
                }}>
                <Row>
                    <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h2 className='text-center' >Nos activitees principaux​</h2>
                        <Typography className='text-center'>
                            The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality                        </Typography>
                    </Col>
                    <Col>
                        <img src={Homme} style={{ width: "101.9%", height: 'auto' }} alt="" />
                    </Col>
                </Row>
            </Container>

            <Container
                style={{
                    height: 'auto',
                    padding: {
                        xs: '5px',
                        sm: '20px',
                        md: '90px'
                    },
                    margin: 'auto',
                }}>
                <Row >
                    <Col className='text-center activiter'>
                        <h2>Active 1​</h2>
                        <Typography>
                            Privately owned and fully independent, we provide first-class strategic consulting,
                        </Typography>
                    </Col>
                    <Col className='text-center activiter'>
                        <h2>Active 2</h2>
                        <Typography>
                            Privately owned and fully independent, we provide first-class strategic consulting,
                        </Typography>
                    </Col>
                    <Col className='text-center activiter'>
                        <h2>Active 3</h2>
                        <Typography>
                            Privately owned and fully independent, we provide first-class strategic consulting,
                        </Typography>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5' >
                <Row>
                    {/* <Col>
                        <Box sx={{ flexGrow: 1 }} >
                            <Grid container  >
                                <img src={Homme} alt="" style={{ height: "400px", boxShadow: "5px black", width: 'auto' }} />
                            </Grid>
                        </Box>

                    </Col> */}
                    <Col>
                        <h2>Notre historique</h2>
                        <Typography>
                            Created in 1983, Euroconsult started life as a market intelligence firm focusing on the economic impact of innovative technologies. The firm soon started to specialize in strategic decision making in the space sector, which then extended to cover satellite-enabled vertical markets, such as connectivity, remote sensing and analytics. A truly global company, Euroconsult has opened offices around the world with the aim to provide both local and regional knowledge and services to its clients. A leader in its sector, Euroconsult enjoys a reputation for quality and is a trusted business partner of most of the major actors worldwide. The Euroconsult Group is trusted by 1,200 clients in over 60 countries. The Group is headquartered in France, with offices in the U.S., Canada, Japan, Singapore, and Australia.
                        </Typography>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5' fluid
                style={{
                    height: '250px',
                    backgroundColor: '#f2f3f6',
                    padding: {
                        xs: '5px',
                        sm: '20px',
                        md: '90px'
                    },
                    margin: 'auto',
                }}>
                <Container className="text-center p-5"  >
                    <Typography variant="h4" component="h2">
                        En savoir plus sur nous
                    </Typography>
                    <Typography>Abonnez-vous à notre newsletter pour en savoir plus.</Typography>

                    <TextField
                        className="mt-5"
                        label="Enter your email"
                        style={{ background: 'white' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button variant="contained" color="primary" style={{ borderRadius: "100px" }}>
                                        Subscribe
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>

            </Container>

            <Footer />
        </>
    )
}

export default Index