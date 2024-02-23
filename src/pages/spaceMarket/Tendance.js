import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "../../img/FSS-Capacity-Pricing-Trends-768x1078.jpg";

const Tendance = () => {

    const [edition, setEdition] = React.useState('');

    const handleChange = (event) => {
        setEdition(event.target.value);
    };

    const [Adhésion, setAdhésion] = React.useState('');

    const handleChanges = (event) => {
        setAdhésion(event.target.value);
    };


    const [value, setValue] = useState("1");

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div style={{ marginTop: "25%", marginLeft: "12%" }}>
                            <p style={{ fontSize: "250%" }}>Tendances actuelles du marcher de l'espace en afrique</p>
                            <h1>Une évaluation de la dynamique actuelle de tarification de la capacité satellitaire.</h1>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <img src={Image} style={{ height: '80ch' }} alt="" />
                    </div>
                </div>
            </div>

            <Container fluid style={{ background: '#f2f3f6', marginTop: "6%" }}>
                <Row>
                    <Col className="container col-sm-12" style={{ padding: '7%' }} >
                        <Stack spacing={2} direction="row" className='ml-2'>
                            <p style={{ fontSize: "250%" }}>Édition</p>
                            <FormControl className='w-25' style={{ marginLeft: '3.5%' }}>
                                <InputLabel id="demo-simple-select-label" >Édition</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={edition}
                                    label="edition"
                                    onChange={handleChange}
                                    style={{ background: 'white' }}
                                >
                                    <MenuItem value={10}>2023</MenuItem>
                                    <MenuItem value={20}>2022</MenuItem>
                                    <MenuItem value={30}>2021</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} direction="row" className='mt-3'>
                            <p style={{ fontSize: "250%" }}>Adhésion</p>
                            <FormControl className='w-25'>
                                <InputLabel id="demo-simple-select-label">Adhésion</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Adhésion}
                                    label="Adhésion"
                                    onChange={handleChanges}
                                    style={{ background: 'white' }}
                                >
                                    <MenuItem value={10}>2023</MenuItem>
                                    <MenuItem value={20}>2022</MenuItem>
                                    <MenuItem value={30}>2021</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>

                        <Stack spacing={2} direction="row" className='mt-5'>
                            <Button variant="text">TÉLÉCHARGEZ L'EXTRAIT GRATUIT</Button>
                            <Button variant="contained">COMMUNIQUÉ DE PRESSE</Button>
                            <Button variant="outlined">VOIR LES PRIX</Button>
                            <Button variant="text">CONTACTEZ-NOUS</Button>
                        </Stack>
                    </Col>

                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <TabContext value={value}>
                            <Box style={{ padding: '2%' }}>
                                <TabList
                                    onChange={handleChangeTabs}
                                    aria-label="lab API tabs example"
                                >
                                    <Tab label="Description" value="1" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px' }} />
                                    <Tab label="Principales caractéristiques" value="2" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px', marginLeft: "2%" }} />
                                    <Tab label="Nouveau dans l'édition actuelle" value="3" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px', marginLeft: "2%" }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className="row d-flex justify-content-center">
                                    <Typography variant='h4'>Description</Typography>
                                    <Typography >
                                        Les tendances en matière de tarification de la capacité satellitaire fournissent une évaluation de la dynamique actuelle de tarification de la capacité satellitaire, dans un contexte d'innovation technologique soutenue et de capacité satellitaire supplémentaire associée aux satellites de nouvelle génération. Le rapport couvre neuf marchés régionaux, ainsi qu'un examen spécifique des marchés verticaux de la mobilité et du gouvernement.
                                    </Typography>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className="row d-flex justify-content-center">
                                    <Typography variant='h4'>Principales caractéristiques</Typography>
                                    <Typography >
                                        <ul>
                                            <li>L'analyse s'appuie sur une vaste base de données de plus de 2 000 contrats et devis de tarification de capacité ;</li>
                                            <li>Plus de 120 nouveaux niveaux de prix ajoutés à partir d’un mélange de recherches documentaires et d’entretiens menés au cours des 12 derniers mois.</li>
                                            <li>Analyse détaillée de l'évolution de la base de coûts de la fourniture de capacité, y compris des références satellitaires, plusieurs études de cas et une évaluation des tendances/projections régionales.</li>
                                            <li>Analyse mise à jour des fourchettes de prix et des niveaux de référence pour toutes les bandes, applications et types d'infrastructures dans 9 grandes régions ;</li>
                                            <li>Projections des prix de référence pour les deux prochaines années.</li>
                                            <li>Liste d'un échantillon de contrats de capacité majeurs des 18 derniers mois.</li>
                                        </ul>
                                    </Typography>
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className="row d-flex justify-content-center">
                                    <Typography variant='h4'>Nouveau dans l'édition actuelle</Typography>
                                    <Typography >
                                        <ul>
                                            <li>Analyse plus approfondie de la tarification des services avec plus de 1 400 niveaux de prix dans tous les segments, y compris l'expansion des prix des services gouvernementaux.</li>
                                            <li>Analyse détaillée des plans commerciaux de Starlink et examen rapide de leur solution « Community Gateway » récemment annoncée.</li>
                                            <li>Simulation de rentabilisation détaillée pour plusieurs systèmes satellitaires, y compris une analyse des coûts économiques de chaque système.</li>
                                        </ul>
                                    </Typography>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Col>
                    <Col>
                        <div className="row d-flex justify-content-center">
                            <div className="col-6">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '300px' }}>

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained">
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '300px' }}>

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained">
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '300px', marginTop: '3%' }}>

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained">
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '300px', marginTop: '3%' }}>

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained">
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>

            <Container className="p-5" fluid style={{ background: '#ccd0db', marginTop: "6%" }}>
                <Typography variant="h3">Tarifs</Typography>
                <Row className="mt-3">
                    <Col style={{
                        height: '700px',
                        backgroundColor: '#ffffff',
                        padding: {
                            xs: '5px',
                            sm: '20px',
                            md: '90px'
                        },
                        margin: 'auto',
                    }} >
                        <Container style={{ padding: '10%' }} >
                            <h2 className='text-center' >Classique​</h2>
                            <hr />
                            <Row className="p-3"> 
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                            </Row>
                            <hr />
                            <Typography className='text-center'>
                                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                            </Typography>
                            <Box className="text-center" style={{marginTop:'50%'}}>
                                <Button variant="contained" >S'ABONNER</Button>
                            </Box>
                        </Container>
                    </Col>
                    <Col style={{
                        height: 'auto',
                        backgroundColor: '#00134d',
                        marginLeft: '2%'
                    }} >
                        <Container style={{ padding: '10%' }}  className='text-white '>
                            <h2 className='text-center' >Prime​</h2>
                            <hr />
                            <Row className="p-3"> 
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                            </Row>
                            <hr />
                            <Typography className='text-center'>
                                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                            </Typography>
                            <Box className="text-center" style={{marginTop:'50%'}}>
                                <Button variant="contained" >S'ABONNER</Button>
                            </Box>
                        </Container>

                    </Col>
                    <Col style={{
                        height: '700px',
                        backgroundColor: '#ffffff',
                        marginLeft: '2%'
                    }} >
                        <Container style={{ padding: '10%' }} >
                            <h2 className='text-center' >Traqueur</h2>
                            <hr />
                            <Row className="p-3"> 
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                            </Row>
                            <hr />
                            <Typography className='text-center'>
                                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                            </Typography>
                            <Box className="text-center" style={{marginTop:'50%'}}>
                                <Button variant="contained" >S'ABONNER</Button>
                            </Box>
                        </Container>
                    </Col>

                </Row>
            </Container>

            <Footer />
        </>
    )
}

export default Tendance