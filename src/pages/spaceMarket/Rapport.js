import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from '../../img/logoPSI.png';
import Marcher1 from '../../img/marcher1.jpg';
import Marcher2 from '../../img/marcher2.jpg';
import Marcher3 from '../../img/marcher3.jpg';
import ProduitAvenir1 from '../../img/produitAvenir1.jpg';
import ProduitAvenir2 from '../../img/produitAvenir2.jpg';
import ProduitAvenir3 from '../../img/produitAvenir3.jpg';
import ProduitAvenir4 from "../../img/produitAvenir4.jpg";
import Rapports from "../../img/rapport.jpg";
import Fss from "../../img/rapport1.jpg";
import CarrouselSpace from './CarouselSpace';
import './Rapport.css';


const Rapport = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const navigate = useNavigate();
    const handleGo = (e) => {
        e.preventDefault();

        navigate("/Tendance");
    };
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div style={{ marginTop: "25%", marginLeft: "12%" }}>
                            <p style={{ fontSize: "250%" }}>Explorez nos <span style={{ color: "#fc5e61" }}>données</span>
                                et <span style={{ color: "#fc5e61" }}>informations de marché</span>
                                pour l'industrie spatiale et satellitaire
                            </p>
                            <Stack spacing={2} direction="row" className='mt-5'>
                                <Button variant="contained" data-aos="fade-down-right">REGISTRE</Button>
                                <Button variant="outlined" data-aos="fade-down">TÉLÉCHARGEZ LA LISTE DES PUBLICATIONS</Button>
                                <Button variant="text" data-aos="fade-down-left">CONTACTEZ-NOUS</Button>
                            </Stack>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={Rapports} className="d-block " alt="img" style={{ height: '70ch' }} />
                    </div>
                </div>
            </div>

            <Container className='mt-5' fluid>
                <Row>
                    <Col data-aos="fade-down" style={{
                        height: '500px',
                        backgroundColor: '#ffff',
                        padding: {
                            xs: '5px',
                            sm: '20px',
                            md: '90px'
                        },
                        margin: 'auto',
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <img src={Image} style={{ height: 'auto' }} alt="" />
                            <Typography className='text-center'>
                                Intelligence de marché Euroconsult
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque odio et tortor vestibulum, quis fringilla nisl suscipit. Proin nec urna eu nisl fermentum fermentum. Nullam auctor purus ut dolor posuere, at mattis diam tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et arcu in lorem facilisis hendrerit.
                            </Typography>
                        </Container>
                    </Col>
                    <Col style={{
                        height: 'auto',
                        backgroundColor: '#ffff',
                        marginLeft: '2%'
                    }} >
                        <CarrouselSpace />
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Typography variant='h4'>Catégories de rapports</Typography>
                    <Col className="mt-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-3" data-aos="fade-down-left">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '350px', backgroundRepeat: "no-repeat" }}>

                                    <CardContent>
                                        <Typography variant="body2" className='text-white'>
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained" onClick={handleGo}>
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="col-3" data-aos="fade-down-right">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '350px', backgroundRepeat: "no-repeat" }}>

                                    <CardContent>
                                        <Typography variant="body2" className='text-white'>
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained" onClick={handleGo}>
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="col-3" data-aos="fade-down">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '350px', backgroundRepeat: "no-repeat" }}>

                                    <CardContent>
                                        <Typography variant="body2" className='text-white'>
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
                            <div className="col-3" data-aos="fade-down-left">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '350px', backgroundRepeat: "no-repeat", }}>

                                    <CardContent>
                                        <Typography variant="body2" className='text-white'>
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

            <Container fluid style={{ marginTop: '6%' }}>
                <Row>
                    <Typography variant='h4' style={{ marginLeft: '3%' }}>Produits de données</Typography>
                    <Col className='p-5' data-aos="fade-down">
                        <Container style={{
                            backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            flexDirection: 'start',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '350px',
                            borderRadius: "20px 20px 20px 20px",
                            cursor: 'pointer'
                        }}
                            className='text-white'>
                            <div className='text-center p-5'>
                                <Typography variant='h2' >Catalogue de données</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque odio et tortor vestibulum, quis fringilla nisl suscipit. Proin nec urna eu nisl fermentum fermentum. Nullam auctor purus ut dolor posuere, at mattis diam tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et arcu in lorem facilisis hendrerit.
                                </Typography>
                            </div>
                        </Container>
                    </Col>
                    <Col className='p-5' data-aos="fade-down">
                        <Container style={{
                            backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            flexDirection: 'start',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '350px',
                            borderRadius: "20px 20px 20px 20px",
                            cursor: 'pointer'
                        }}
                            className='text-white' >
                            <div className='text-center p-5'>
                                <Typography variant='h2' >
                                    Base de données sur l'écosystème</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque odio et tortor vestibulum, quis fringilla nisl suscipit. Proin nec urna eu nisl fermentum fermentum. Nullam auctor purus ut dolor posuere, at mattis diam tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et arcu in lorem facilisis hendrerit.
                                </Typography>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container >

            <Container fluid style={{ marginTop: '4%' }}>
                <Row>
                    <Typography variant='h4' style={{ marginLeft: '3%' }}>Aperçus des Tendances</Typography>

                    <div className='p-5 col-3' data-aos="fade-down-right">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="/Tendance">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>

                                <Typography>Satellites définis par logiciel</Typography>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-left">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-right">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                </Row>
            </Container >

            <Container fluid style={{ marginTop: '4%' }}>
                <Row>
                    <Typography variant='h4' style={{ marginLeft: '3%' }}>Rapports récemment publiés</Typography>

                    <div className='p-5 col-3' data-aos="fade-down-right">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Marcher1} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="/Tendance">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Marcher2} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-left">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Marcher3} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-right">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                </Row>
            </Container >

            <Container fluid style={{ marginTop: '4%' }}>
                <Row>
                    <Typography variant='h4' style={{ marginLeft: '3%' }}>Produits à venir</Typography>

                    <div className='p-5 col-3' data-aos="fade-down-right">
                        <div className="ui-card" style={{
                            borderRadius: "20px 20px 20px 20px",
                        }}>
                            <img src={ProduitAvenir1} alt="Mountain Morning" style={{
                                height: '450px',
                                cursor: 'pointer',
                                flexDirection: 'start',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                className='img-bord' />
                            <div className="description">
                                <h3>Mountain Morning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                <a href="/Tendance">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down">
                        <div className="ui-card" style={{
                            borderRadius: "20px 20px 20px 20px",
                        }}>
                            <img src={ProduitAvenir2} alt="Mountain Morning" style={{
                                height: '450px',
                                cursor: 'pointer',
                                flexDirection: 'start',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                className='img-bord' />
                            <div className="description">
                                <h3>Mountain Morning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-left" >
                        <div className="ui-card" style={{
                            borderRadius: "20px 20px 20px 20px",
                        }}>
                            <img src={ProduitAvenir3} alt="Mountain Morning" style={{
                                height: '450px',
                                cursor: 'pointer',
                                flexDirection: 'start',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                className='img-bord' />
                            <div className="description">
                                <h3>Mountain Morning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-right">
                        <div className="ui-card" style={{
                            borderRadius: "20px 20px 20px 20px",
                        }}>
                            <img src={ProduitAvenir4} alt="Mountain Morning" style={{
                                height: '450px',
                                cursor: 'pointer',
                                flexDirection: 'start',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                className='img-bord' />
                            <div className="description">
                                <h3>Mountain Morning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                </Row>
            </Container >

            <Footer />
        </>
    )
}

export default Rapport