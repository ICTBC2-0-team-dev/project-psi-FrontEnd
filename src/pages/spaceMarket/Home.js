import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Box from "@mui/material/Box";
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
import SendIcon from "@mui/icons-material/Send";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Homme from "../images/homme.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const buttonStyles = {
    backgroundColor: "#413DEE1A",
    border: "none",
    color: "#0A65CC",
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div style={{ marginTop: "25%", marginLeft: "12%" }}>
              <p style={{ fontSize: "250%" }}>NOUS SOMMES TOUJOURS</p>
              <h1>Votre espace commercial</h1>
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
