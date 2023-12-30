import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
import AOS from "aos";
import Grid from "@mui/material/Grid";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import { Height } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const DetailProduit = () => {
  const buttonStyles = {
    backgroundColor: "#413DEE1A",
    border: "none",
    color: "#0A65CC",
  };

  React.useEffect(() => {
    AOS.init({duration:2000});
  }, []);

  return (
    <>
      <Header />
      {/** section image content */}
      <Grid
        fluid
        component="main"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/product-package-boxes-cart-with-shopping-bag-laptop-computer_38716-306.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flexDirection: "start",
          justifyContent: "center",
          alignItems: "center",
          height: "650px",
        }}
      >
        <Grid
          sx={{
            height: '650px',
            backgroundColor: "#30509dbf",
            padding: {
              xs: "10px",
              sm: "50px",
              md: "236px",
            },
            margin: "auto",
          }}
        >
          <Grid className="mt-5 mt-sm-0">
            <Grid className="my-5 my-sm-0">
              <Box>
                <Typography className="text-white mb-2 fs-1 fw-normal fs-sm-5 text-center" data-aos="fade-down-right">
                  Trouver un emploi qui corresponde à vos intérêts et à vos
                  compétences
                </Typography>
                <Box>
                  {/* <Typography className='mb-5 text-white lh-sm text-wrap' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
                    purus sodales, pulvinar purus dsld;woefjnwamsacda;ellqwfnmwa
                  </Typography> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/** section achat */}
      <Grid style={{overflowX: 'hidden', padding: '3%'}}>
        <Typography className="text-center">Acheter</Typography>
        <Grid className="row" style={{marginLeft:'35%', padding: '2%'}}>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Imageries</Button>
            <Button variant="outlined" disabled>
                GPS
            </Button>
            <Button variant="outlined" disabled>
                Données métheorologiaues
            </Button>
          </Stack>{" "}
        </Grid>
      </Grid>

      {/** section list product */}
      <Box className="container-fluid p-3" style={{ }}>
        <Box className="Row d-flex justify-content-between">
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
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

      <Box className="container-fluid p-3" style={{overflowX: 'hidden',  }}>
        <Box className="Row d-flex justify-content-between">
          <div class="col-3">
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
          <div class="col-3">
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
          <div class="col-3">
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
              style={{background:'white', borderRadius: "100px"}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" color="primary" style={{ borderRadius: "100px"}}>
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

export default DetailProduit;
