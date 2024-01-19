import React, { useEffect, useState } from "react";
import "./Home.css"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TypeWriterEffect from "react-typewriter-effect";
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import BusinessIcon from '@mui/icons-material/Business';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import LocationOn from "@mui/icons-material/LocationOn";
// import { grey } from "@mui/material/colors";
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import { red ,green,blue} from '@mui/material/colors';
// import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
// import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import CarrouselProfil from "./Carrousel";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useNavigate } from 'react-router-dom';
// import axios from '../axios'
// import { useDispatch } from 'react-redux';
// import { setProjetId } from '../features/projetsSlice'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../../img/Rectangle 10342.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Homme from "../images/homme.jpg";
import { Link } from "react-router-dom";
import axios from "../../axios";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 648,
  height: 566,
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const buttonStyles = {
    backgroundColor: "#413DEE1A",
    border: "none",
    color: "#0A65CC",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  /** les meilleurs produit */
  // useEffect(() => {
  //    axios
  //      .get("/articles/")
  //      .then((response) => {
  //        setPosts(response.data.slice(-4));
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  // }, []);

  const [posts, setPosts] = useState([]);
  console.log("ls article", posts);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get("/articles/");
        setPosts(request.data.slice(-4));
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  /** end meilleurs produit */

  return (

    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div style={{ marginTop: "25%", marginLeft: "12%" }}>
              <p style={{ fontSize: "250%" }}>Explorez l'univers du shopping spatial avec Space Market</p>
              <h1>La destination ultime pour les pasionnes du spatial.</h1>
              <a
                href="/DetailProduit"
                class="btn btn-primary btn-lg active"
                role="button"
                aria-pressed="true"
              >
                Explorer La Marketplace
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={Image} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>

      <div
        className="container-fluid p-5 mt-5 d-flex justify-content-between"
        style={{ background: "#F8F8F8" }}
      >
        <div className="col-sm-6" style={{ marginLeft: "3.5%" }}>
          Nos meilleures offres
        </div>
        <div className="col-sm-6">
          <div style={{ marginLeft: "70%", cursor: "pointer" }}>
            <Link to='/DetailProduit' style={{ color: 'black' }}>
              Explorer <ArrowOutwardIcon />
            </Link>
          </div>
        </div>
      </div>

      <Box className="container-fluid p-5">
        <Box className="Row d-flex justify-content-center align-items-center">
          {posts.map((post) => (
            <div className="col-md-3">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={`http://localhost:8081/${post.photo}`}
                  className="p-2"
                />
                <CardActions className="d-flex justify-content-between">
                  <Button className="btn btn-primary" style={buttonStyles}>
                    Catégorie:  {post.categorie.name}
                  </Button>
                  <p style={{ marginLeft: "25%" }}>${post.prix}</p>
                </CardActions>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
                <CardActions className=" d-flex justify-content-center">
                  <Button variant="contained" onClick={handleOpen}>
                    Acheter maintenant
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.dark"
                        fontWeight="bold"
                        className="fs-5 text-center"
                      >
                        PAIEMENT
                      </Typography>
                      <div className="row ">
                        <div className="col-6">
                          <FormControl
                            fullWidth
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="small"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Nom
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="entrer votre nom"
                            />
                          </FormControl>
                        </div>
                        <div className="col-6">
                          <FormControl
                            fullWidth
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="small"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Email
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="mail@gmail.com"
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-6">
                          <FormControl
                            fullWidth
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="small"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Adresse
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="entrer votre adresse"
                            />
                          </FormControl>
                        </div>
                        <div className="col-6">
                          <FormControl
                            fullWidth
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="small"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Pays
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="entrer votre pays"
                            />
                          </FormControl>
                        </div>
                      </div>

                      <div className="row ">
                        <div className="col">
                          <FormControl
                            fullWidth
                            sx={{ m: 1, height: "40" }}
                            variant="outlined"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Card
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="_ _ _ _    _ _ _ _    _ _ _ _   _ _ _ _"
                            />
                          </FormControl>
                        </div>
                        <div className="col">
                          <FormControl
                            fullWidth
                            sx={{ m: 1, height: "40" }}
                            variant="outlined"
                          >
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              style={{ marginTop: "10%" }}
                              placeholder="_ _/_ _     _ _ _      _ _ _ _ _"
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mt-5 d-flex justify-content-end">
                          <button type="button" class="btn btn-primary btn-lg btn-block">Payer</button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </CardActions>
              </Card>
            </div>
          ))}
        </Box>
      </Box>

      <div
        className="container-fluid p-5 mt-5 d-flex justify-content-between"
        style={{ background: "#F8F8F8" }}
      >
        <div className="col-sm-6" style={{ marginLeft: "3.5%" }}>
          Produit le plus vendu
        </div>
        <div className="col-sm-6">
          <div style={{ marginLeft: "70%", cursor: "pointer" }}>
            <Link to='/DetailProduit' style={{ color: 'black' }}>
              Explorer <ArrowOutwardIcon />
            </Link>
          </div>
        </div>
      </div>

      <Box className="container-fluid p-5">
        <Box className="Row d-flex justify-content-between">
          <div class="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Homme}
                className="p-2"
              />
              <CardActions className="d-flex justify-content-between">
                <Button class="btn btn-primary" style={buttonStyles}>
                  Catégorie
                </Button>
                <p style={{ marginLeft: "25%" }}>$600,000</p>
              </CardActions>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nokia Essential Wireless Headphones Nokia Essential Wireless
                  Headphones 120CM BLACK
                </Typography>
              </CardContent>
              <CardActions className=" d-flex justify-content-center">
                <Button variant="contained" disableElevation>
                  Acheter maintenant
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Homme}
                className="p-2"
              />
              <CardActions className="d-flex justify-content-between">
                <Button class="btn btn-primary" style={buttonStyles}>
                  Catégorie
                </Button>
                <p style={{ marginLeft: "25%" }}>$600,000</p>
              </CardActions>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nokia Essential Wireless Headphones Nokia Essential Wireless
                  Headphones 120CM BLACK
                </Typography>
              </CardContent>
              <CardActions className=" d-flex justify-content-center">
                <Button variant="contained" disableElevation>
                  Acheter maintenant
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Homme}
                className="p-2"
              />
              <CardActions className="d-flex justify-content-between">
                <Button class="btn btn-primary" style={buttonStyles}>
                  Catégorie
                </Button>
                <p style={{ marginLeft: "25%" }}>$600,000</p>
              </CardActions>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nokia Essential Wireless Headphones Nokia Essential Wireless
                  Headphones 120CM BLACK
                </Typography>
              </CardContent>
              <CardActions className=" d-flex justify-content-center">
                <Button variant="contained" disableElevation>
                  Acheter maintenant
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Homme}
                className="p-2"
              />
              <CardActions className="d-flex justify-content-between">
                <Button class="btn btn-primary" style={buttonStyles}>
                  Catégorie
                </Button>
                <p style={{ marginLeft: "25%" }}>$600,000</p>
              </CardActions>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nokia Essential Wireless Headphones Nokia Essential Wireless
                  Headphones 120CM BLACK
                </Typography>
              </CardContent>
              <CardActions className=" d-flex justify-content-center">
                <Button variant="contained" disableElevation>
                  Acheter maintenant
                </Button>
              </CardActions>
            </Card>
          </div>
        </Box>
      </Box>

      <div
        className="container"
        style={{ background: "#0A65CC", borderRadius: "20px" }}
      >
        <div style={{ padding: "10%", color: "white" }}>
          <div style={{ textAlign: "center" }}>
            <h2>S'abonner à notre newsletter</h2>
            <p>
              Ne manquez pas nos meilleures offres ! Ne vous inquiétez pas, nous
              ne vous enverrons pas de spam.
            </p>
            <TextField
              label="Enter your email"
              style={{ background: 'white', borderRadius: "100px" }}
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
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
