import React from 'react'
import Container from 'react-bootstrap/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardActionArea, Divider, Paper, Button } from '@mui/material';
import Link from '@mui/material/Link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const linksArray = ["Accueil", "Services", "À propos de nous", "Actualités", "Contact"];

const Home = () => {
    return (
        <>
            <Container fluid className="bg-body-tertiary">
                <Header links={linksArray} />
            </Container>
            <Grid fluid component="main"
                style={{
                    backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2023/07/blue-planet-space-connectors-banner.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    flexDirection: 'start',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 500
                }}
            >

                <Grid container
                    sx={{
                        padding: {
                            xs: '10px',
                            sm: '50px',
                            md: '120px'
                        },
                        // margin: 'auto',
                        marginBottom: '20px'

                    }}
                >
                    <Grid className='mt-2 mt-sm-0'>
                        <Grid className='my-5 my-sm-0' >
                            <Box sx={{ padding: 2 }} className='mt-5'>
                                <Typography className='text-white mt-5 fs-1 fw-normal fs-sm-5'>
                                    Ensemble construisons un meilleur monde
                                    <Divider sx={{ backgroundColor: '#413DEE', height: 5, width: 100, borderRadius: 5 }} />
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>


                </Grid>
                <Container style={{ marginTop: '-5%' }} sx={{
                    marginTop: {
                        xs: 'false',
                        md: 'false',
                        lg: 'false',
                    }
                }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }} className='my-5'>

                        <Grid item xs={2} sm={3} md={3} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'center' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Freelance
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                        <Link href="/responsiveAppBar" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>


                        </Grid>
                        <Grid item xs={2} sm={3} md={3} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'center' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Space Market
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                        <Link href="/SpaceMarket" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={2} sm={3} md={3} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'center' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Consultant
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                        <Link href="/" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={2} sm={3} md={3} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'center' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Industrialisation
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                        <Link href="/" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>

            </Grid>

            {/* section value mission et vision */}
            <Container>
                <Grid sx={{
                    marginTop: '180px'
                }}>
                    <Grid sx={{
                        background: '#f1f2f4',
                        padding: {
                            xs: '10px',
                            sm: '50px',
                        },
                        paddingInline: {
                            md: '70px'
                        },
                        borderRadius: 3
                    }}>

                        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                            <Grid item xs={12} md={4}>
                                <Typography className='text-darkblue mb-2 fs-2 fw-normal fs-sm-5'>
                                    Valeurs Fondamentales
                                </Typography>
                                <Link href="/About" underline="none" className='mb-3 fw-ligh lh-sm '>
                                    {' Qui nous sommes et qui nous aspirons à être'}
                                </Link>

                            </Grid>
                            <Grid item xs={12} md={1}></Grid>
                            <Grid item xs={12} md={4}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon  />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography>Excellence</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            description de l'excellence pour PSI
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Diversité</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                         description de la Diversité
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Intégrité</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                         description de la Intégrité par PSI dire ce que sa represente
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Responsabilité</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                         description de la Responsabilité
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </Grid>
                            <Grid item xs={4}>

                            </Grid>

                        </Grid>

                    </Grid>
                    <Container sx={{ borderRadius: 3 }}>
                        <Row >
                            <Col className='text-center activiter'>
                                <h2 className='my-3 text-darkblue'>vision</h2>
                                <Typography className='my-2'>
                                    Être le principal catalyseur du développement et de l’avancement de l’industrie spatiale panafricaine,
                                    en renforçant la participation de l’Afrique aux applications, technologies et services spatiaux mondiaux.
                                </Typography>
                            </Col>
                            <Col className='text-center activiter'>
                                <h2 className='my-3 text-darkblue'>Mission</h2>
                                <Typography className='my-2'>
                                    Fournir des produits et services spatiaux innovants adaptés aux besoins africains, favorisant les
                                    progrès technologiques et le développement durable. Grâce à des partenariats stratégiques,
                                    promouvoir l’inclusion et la diversité dans l’industrie spatiale africaine, en encourageant les talents et
                                    en autonomisant les groupes sous-représentés. Pionnier des systèmes satellitaires indigènes, établir
                                    un marché numérique et donner la priorité à la gestion de l’environnement pour un avenir spatial
                                    durable et responsable en Afrique.
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                </Grid>
            </Container>

            {/* section a propos*/}
            {/* <Container >
                <Grid sx={{ marginBlock: '100px' }}>
                    <Grid>

                        <Grid container component="main" sx={{ height: '400px', borderRadius: 10 }}>
                            <CssBaseline />
                            <Grid component={Paper}
                                item
                                xs={false}
                                sm={4}
                                md={6}
                                sx={{
                                    backgroundImage: 'url(https://media.istockphoto.com/id/1326046108/fr/photo/voyage-cosmique-dans-lespace.jpg?s=612x612&w=0&k=20&c=GVAzDjgECD9lYTpHb8QKVEKoS63La7PgVOL5bHODMM0=)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: (t) =>
                                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            > 
                               
                            </Grid>
                            <Grid item xs={12} sm={8} md={6} component={Paper} square>

                                <Box
                                    sx={{
                                        my: 1,
                                        mx: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                    }}
                                >
                                    <Typography className='text-dark mt-2 fs-1 fw-normal fs-sm-5' underline>
                                        A propos de nous
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" className='mt-5'>
                                        L'industrie spatiale
                                        panafricaine (PSI) est une initiative collaborative dédiée à l'avancement des capacités et de l'impact du secteur spatial africain. PSI
                                        représente un collectif d'organisations visionnaires, unies dans leur engagement à propulser l'Afrique à l'avant-garde de la technologie,
                                        des services et du conseil spatiaux. Grâce à ces partenariats stratégiques, nous visons à façonner l’avenir des technologies, des
                                        opportunités commerciales et du développement socio-économique liés à l’espace en Afrique en utilisant l’innova
                                    </Typography>

                                    <Link href="/About" underline="none" className='mt-5'>
                                        {' En savoir plus'}
                                    </Link>

                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Container> */}

            {/* section entreprise */}
            <Grid fluid sx={{ marginTop: '100px' }}>
                <Grid fluid
                    sx={{
                        padding: {
                            xs: '10px',
                            sm: '50px',
                            md: '50px',
                        },
                        marginTop: '100px',

                    }}
                    style={{
                        backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2021/05/connecting-points-dark-background.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',


                    }}
                >

                    <Grid sx={{
                        padding: {
                            xs: '10px',
                            sm: '50px',
                        },
                        paddingInline: {
                            md: '70px'
                        }
                    }}>

                        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} fluid >
                            <Grid item xs={4} sx={{ textAlign: 'center' }} >
                                <Box>
                                    <img src='https://www.rheagroup.com/wp-content/uploads/2021/03/rhea-group-quality-icon.png' alt='' height='120' width='120' />
                                </Box>
                                <Typography className='text-white mb-2 fs-2 fw-normal fs-sm-5'>
                                    5 Ans
                                </Typography>
                                <Typography className='mb-3 lh-sm text-white' paragraph>
                                    D'experiences et toujours la pour vous servir
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                <Box>
                                    <img src='https://www.rheagroup.com/wp-content/uploads/2021/03/rhea-group-people-icon.png' alt='' height='120' width='120' />
                                </Box>
                                <Typography className='text-white mb-2 fs-2 fw-normal fs-sm-5'>
                                    200 Experts
                                </Typography>
                                <Typography className='mb-3 lh-sm text-white' paragraph>
                                    Qui sont à votre disposition
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                <Box>
                                    <img src='https://www.rheagroup.com/wp-content/uploads/2021/03/rhea-group-global-europe-icon.png' alt='' height='120' width='120' />
                                </Box>
                                <Typography className='text-white mb-2 fs-2 fw-normal fs-sm-5'>
                                    50 Pays
                                </Typography>
                                <Typography className='mb-3 lh-sm text-white' paragraph>
                                    Avec qui nous travaillons depuis plusieurs annees
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            {/* section service */}
            <Container>
                <Grid sx={{
                    marginBlock: '100px'
                }}>
                    <Grid>
                        <Box>
                            <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5'>
                                Services
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='mt-4'>

                        <Grid item xs={2} sm={4} md={6} >
                            <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 160 }}
                                    image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Cabinet de conseil et intelligence d’affaires spatiale
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                aidant les
                                                industries et les start-ups, les gouvernements, les investisseurs, les ONG universitaires, etc. à faire bon usage des sciences, des
                                                applications et des technologies
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Box>

                            </Card>
                        </Grid>
                        <Grid item xs={2} sm={4} md={6} >
                            <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 160 }}
                                    image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Centre d’analyse de données spatiales virtuelles
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                exploiter et
                                                analyser les centres de données existants des agences spatiales et
                                                les aider dans le développement du capital humain pour atteindre le
                                                plein potentiel.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Box>

                            </Card>
                        </Grid>
                        <Grid item xs={2} sm={4} md={6} >
                            <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 160 }}
                                    image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                African Open Concurrent Design Tool Af-OCDT
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                est un HUB au
                                                niveau africain pour renforcer la main-d’œuvre d’ingénierie et
                                                construire l’écosystème spatial africain (base d’abonnement).
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Box>

                            </Card>
                        </Grid>
                        <Grid item xs={2} sm={4} md={6} >
                            <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 160 }}
                                    image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Usines numériques
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Il vise à industrialiser les produits de
                                                l’innovation des entreprises au sein de l’Af-OCDT. En acquérant
                                                une partie de leurs entreprises pour le financement de produits
                                                dédiés, PSI acquerra la technologie et soutiendra l’innovation et la
                                                croissance des startups et des industries à travers l’Afrique.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Box>

                            </Card>
                        </Grid>
                        <Grid item xs={2} sm={4} md={6} >
                            <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 160 }}
                                    image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-pink-circles-globe-earth.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Laboratoire spatial virtuel
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                La technologie est dans le laboratoire,
                                                il est possible d’améliorer l’état actuel de la recherche en
                                                laboratoire en favorisant l’initiative et le cadre existants et en
                                                l’étendant à l’industrie spatiale. L’objectif est de catalyser
                                                l’essaimage et l’essaimage mais aussi de soutenir la fabrication.
                                                Créer aussi le réseau d’incubateurs
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Box>

                            </Card>
                        </Grid>
                        <Grid item xs={2} sm={4} md={6} >
                            <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 160 }}
                                    image="https://www.rheagroup.com/wp-content/uploads/2023/07/blue-planet-space-connectors-banner.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Matières premières spatiales composites fabriqués en Afrique
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                La
                                                cartographie des ressources existantes utiles pour l’industrie
                                                spatiale dans le monde entier est entreprise par le PSI. Il se
                                                concentre sur les cycles de vie des produits en Afrique
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Box>

                            </Card>
                        </Grid>



                    </Grid>
                </Grid>
            </Container>


            {/* Section actualite */}
            <Container>
                <Grid sx={{
                    marginBlock: '100px'
                }}>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box >
                            <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5'>
                                Dernières actualités
                            </Typography>

                        </Box>
                        <Button variant="outlined" sx={{ height: '35px', borderRadius: '20px' }} component={Link} >Tout voir</Button>
                    </Grid>
                    <Grid>
                        <ImageList sx={{ height: 450 }}>
                            <ImageListItem key="Subheader" cols={2}>
                                <ListSubheader component="div">December</ListSubheader>
                            </ImageListItem>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        subtitle={item.author}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
            </Container>
            

            {/* Section partenaire */} 

            <Footer />

        </>
    )
}

export default Home

const itemData = [
    {
        img: 'https://www.rheagroup.com/wp-content/uploads/2022/08/rhea-group-astral-brochure-english-cover-crop-4x3-1-768x576.jpg',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://www.rheagroup.com/wp-content/uploads/2023/11/blue-transparent-people-graphics-space-4x3-1-768x576.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Alastair Pidgeon, architecte de solutions senior au sein de RHEA Royaume-Uni, explique : « Notre segment sol BEROE est conçu pour assurer des opérations efficaces et hautement automatisées au sein d’une constellation de divers engins spatiaux en orbite terrestre basse qui peuvent utiliser différents protocoles de communication espace-sol pour se connecter à la nouvelle génération de stations terrestres du ministère de la Défense britannique. BEROE permettra d’exploiter les satellites en s’appuyant sur un « concept d’opérations » commun, offrant ainsi aux opérateurs et aux gestionnaires une appréciation globale de la situation de l’ensemble de la constellation et de chaque engin spatial ».',
        author: '@nolanissac',
        cols: 3,
    },
    {
        img: 'https://www.rheagroup.com/wp-content/uploads/2024/02/ground-station-antennas-blue-sky-with-clouds.jpg',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://www.rheagroup.com/wp-content/uploads/2022/08/rhea-group-astral-brochure-english-cover-crop-4x3-1-768x576.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },

];