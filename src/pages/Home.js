import React from 'react'
import Container from 'react-bootstrap/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardActionArea, Divider, Paper } from '@mui/material';
import Link from '@mui/material/Link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    CssBaseline

} from '@mui/material';

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
                    {/* <Grid className='my-3'></Grid> */}
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
                                                Consultant
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
                                                Industrialisation
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

                    </Grid>
                </Grid>
            </Grid>

            {/* section cre value */}
            <Grid sx={{
                padding: {
                    xs: '10px',
                    sm: '50px',
                },
                paddingInline: {
                    md: '120px'
                },
                marginTop: '100px'
            }}>
                <Grid sx={{
                    background: '#f1f2f4',
                    padding: {
                        xs: '10px',
                        sm: '50px',
                    },
                    paddingInline: {
                        md: '70px'
                    }
                }}>

                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} fluid >
                        <Grid item xs={4}>
                            <Typography className='text-darkblue mb-2 fs-2 fw-normal fs-sm-5'>
                                Valeurs Fondamentales
                            </Typography>
                            <Typography className='mb-3 fw-ligh lh-sm ' paragraph>
                                Qui nous sommes et qui nous aspirons à être
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5" className='text-dark  fs-5 fw-bold  fs-sm-5' >
                                ethique
                            </Typography>
                            <Typography variant="h5" className='text-dark  fs-5 fw-bold  fs-sm-5 my-3' >
                                Valeurs
                            </Typography>
                            <Typography variant="h5" className='text-dark  fs-5 fw-bold  fs-sm-5' >
                                Integrite
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5" className='text-dark  fs-5 fw-bold  fs-sm-5'>
                                Flexibilite
                            </Typography>
                            <Typography variant="h5" className='text-dark  fs-5 fw-bold  fs-sm-5 my-3'>
                                Independance
                            </Typography>
                            <Typography variant="h5" className='text-dark  fs-5 fw-bold  fs-sm-5'>
                                Excellence
                            </Typography>

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>


            {/* section a propos*/}
            <Grid sx={{
                padding: {
                    xs: '10px',
                    sm: '50px',
                },
                paddingInline: {
                    md: '120px'
                }
            }}>
                <Grid sx={{
                    padding: {
                        xs: '10px',
                        sm: '50px',
                    },
                    paddingInline: {
                        md: '70px'
                    }
                }}>

                    <Grid container component="main" sx={{ height: '400px' }}>
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
                            <Box sx={{
                                height: '460px',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            }} />
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
                                    A Propos
                                </Typography>

                                <Typography variant="body2" color="text.secondary" className='mt-5'>
                                    aidant les
                                    industries et les start-ups, les gouvernements, les investisseurs, les ONG universitaires, etc. à faire bon usage des sciences, des
                                    applications et des technologiesaidant les
                                    industries et les start-ups, les gouvernements, les investisseurs, les ONG universitaires, etc. à faire bon usage des sciences, des
                                    applications et des technologies aidant les
                                    industries et les start-ups, les gouvernements, les investisseurs, les ONG universitaires, etc. à faire bon usage des sciences, des
                                    applications et des technologies
                                </Typography>

                                <Link href="/responsiveAppBar" underline="none" className='mt-5'>
                                            {' En savoir plus'}
                                        </Link>

                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>


            {/* section service */}
            <Grid sx={{
                padding: {
                    xs: '10px',
                    sm: '50px',
                },
                paddingInline: {
                    md: '120px'
                }
            }}>
                <Grid>
                    <Box>
                        <Typography className='text-dark mb-2 fs-1 fw-normal fs-sm-5'>
                            Services
                        </Typography>
                    </Box>
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='mt-4'>

                    <Grid item xs={2} sm={4} md={4} >
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
                    <Grid item xs={2} sm={4} md={4} >
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
                    <Grid item xs={2} sm={4} md={4} >
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
                    <Grid item xs={2} sm={4} md={4} >
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
                    <Grid item xs={2} sm={4} md={4} >
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
                    <Grid item xs={2} sm={4} md={4} >
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

            {/* Section entreprise */}
            <Grid fluid >
                <Grid fluid
                    style={{
                        backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2021/05/connecting-points-dark-background.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',


                    }}
                >

                    {/* <Grid className='my-5'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '380px',
                            backgroundColor: '#000000bf',
                            padding: {
                                xs: '10px',
                                sm: '50px',
                                md: '50px'
                            },
                        }}
                    >
                        <Grid className='mt-5 mt-sm-0'>
                            <Grid className='mt-5 mt-sm-0'>
                                <Box sx={{ display: 'flex' }}>
                                    <Box className='mx-5'>
                                        <Typography className='text-white mb-2 fs-1 fw-bold fs-sm-5 text-center'>4</Typography>
                                        <Typography className='text-white mb-2 fs-4 fw-normal fs-sm-5 text-center'>
                                            ans d’expérience
                                        </Typography>
                                    </Box>

                                    <Box className='mx-5'>
                                        <Typography className='text-white mb-2 fs-1 fw-bold fs-sm-5 text-center'>100</Typography>
                                        <Typography className='text-white mb-2 fs-4 fw-normal fs-sm-5 text-center'>
                                            experts
                                        </Typography>
                                    </Box>
                                    <Box className='mx-5'>
                                        <Typography className='text-white mb-2 fs-1 fw-bold fs-sm-5 text-center'>54</Typography>
                                        <Typography className='text-white mb-2 fs-4 fw-normal fs-sm-5 text-center'>
                                            Pays
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>

            <Footer />


        </>
    )
}

export default Home