import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "../images/blue-earth-from-space-background.jpg";
import Fade from "@mui/material/Fade";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import InputAdornment from "@mui/material/InputAdornment";
import Fab from "@mui/material/Fab";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Modal from "@mui/material/Modal";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Homme from "../images/homme.jpg";
import AOS from "aos";
import Grid from "@mui/material/Grid";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "../../axios.js";


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

const DetailProduit = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyles = {
    backgroundColor: "#413DEE1A",
    border: "none",
    color: "#0A65CC",
  };

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [image, setImage] = useState([])
  /**
   * 1- la fonction se declanche par defau
   * 2- j'affecte le resultat de la function dans un variable
   */

  const [imageId, setImageId] = useState('');
  const [gpsId, setGpsId] = useState('');

  const idCategorie = 4
  let getImagerie = useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorie/${idCategorie}`);
        setImage(request.data.slice(-4));
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  const HandleGetImagerie = () => {

  }

  const HandleGetGps = () => {

  }

  const HandleGetDonnées = () => {

  }

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /**modal from imagerie */
  const [openModalImagerie, setOpenModalImagerie] = useState(false);
  const handleCloseImagerie = () => setOpenModalImagerie(false);

  const [selectedIdImagerie, setSelectedIdImagerie] = useState(null);

  const handleOpenModalAcceptImagerie = (id) => {
    setSelectedIdImagerie(id);
    setOpenModalImagerie(true);
  };

  /**affichage(recuperation des donnees) des imagerie */
  const [imagerie, setImagerie] = useState([]);
  console.log(imagerie);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorie/1`);
        setImagerie(request.data);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  /**modal from Gps */
  const [openModalGps, setOpenModalGps] = useState(false);
  const handleCloseGps = () => setOpenModalGps(false);

  const [selectedIdGps, setSelectedIdGps] = useState(null);

  const handleOpenModalAcceptGps = (id) => {
    setSelectedIdGps(id);
    setOpenModalGps(true);
  };

  /**affichage(recuperation des donnees) des GPS */
  const [gps, setGps] = useState([]);
  console.log("mes donnee gps", gps);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorie/2`);
        setGps(request.data);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  const [openModalmetheorologique, setOpenModalmetheorologique] = useState(false);
  const handleClosemetheorologique = () => setOpenModalmetheorologique(false);

  const [selectedIdmetheorologique, setSelectedIdmetheorologique] = useState(null);

  const handleOpenModalAcceptmetheorologique = (id) => {
    setSelectedIdmetheorologique(id);
    setOpenModalmetheorologique(true);
  };

  /**affichage(recuperation des donnees) des metheorologique */
  const [metheorologique, setmetheorologique] = useState([]);
  console.log(metheorologique);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorie/3`);
        setmetheorologique(request.data);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
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
                  Decouvrez une nouvelle dimension de shopping avec space Market.
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

      {/** afficharge de tout les produit par categorie */}
      <Box sx={{ width: "100%", typography: "body1", marginTop: '5%' }}>
        <Typography className="text-center">Acheter</Typography>
        <TabContext value={value}>
          <Box style={{ marginLeft: '35%', padding: '2%' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Imageries" value="1" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px' }} />
              <Tab label="GPS" value="2" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px', marginLeft: "2%" }} />
              <Tab label="Données métheorologiques" value="3" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px', marginLeft: "2%" }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="row d-flex justify-content-center">
              {imagerie.map((image) => {
                if (image.state !== "Rejette" || image.state !== "EnAttente" && state === "Valide") {
                  return (
                    <div className="col-4">
                      {/** modal from imagerie */}
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={openModalImagerie}
                        onClose={handleCloseImagerie}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                          backdrop: {
                            timeout: 500,
                          },
                        }}
                      >
                        <Fade in={openModalImagerie}>
                        </Fade>
                      </Modal>

                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          alt="image product"
                          height="140"
                          image={`http://localhost:8081/${image.photo}`}
                          className="p-2"
                        />
                        <CardActions className="d-flex justify-content-between">
                          <Button className="btn btn-primary" style={buttonStyles}>
                            Catégorie:  {image.categorie.name}
                          </Button>
                          <p style={{ marginLeft: "25%" }}>${image.prix}</p>
                        </CardActions>

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {image.description}
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
                  );
                } else {
                  return (
                    <div>
                    </div>
                  );
                }
              })}
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="row d-flex justify-content-center">
              {gps.map((donneeGps) => {
                if (donneeGps.state !== "Rejette" || donneeGps.state !== "EnAttente" && state === "Valide") {
                  return (
                    <div className="col-4">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          alt="image product"
                          height="140"
                          image={`http://localhost:8081/${donneeGps.photo}`}
                          className="p-2"
                        />
                        <CardActions className="d-flex justify-content-between">
                          <Button className="btn btn-primary" style={buttonStyles}>
                            Catégorie:  {donneeGps.categorie.name}
                          </Button>
                          <p style={{ marginLeft: "25%" }}>${donneeGps.prix}</p>
                        </CardActions>

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {donneeGps.description}
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
                  );
                } else {
                  return (
                    <div>
                    </div>
                  );
                }
              })}
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="row d-flex justify-content-center">
              {metheorologique.map((metheo) => {
                if (metheo.state !== "Rejette" && metheo.state !== "EnAttente" && state === "Valide") {
                  return (
                    <div className="col-4">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          alt="image product"
                          height="140"
                          image={`http://localhost:8081/${metheo.photo}`}
                          className="p-2"
                        />
                        <CardActions className="d-flex justify-content-between">
                          <Button className="btn btn-primary" style={buttonStyles}>
                            Catégorie:  {metheo.categorie.name}
                          </Button>
                          <p style={{ marginLeft: "25%" }}>${metheo.prix}</p>
                        </CardActions>

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {metheo.description}
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
                  );
                } else {
                  return (
                    <div>
                    </div>
                  );
                }
              })}
            </div>
          </TabPanel>
        </TabContext>
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
              placeholder="Enter your email"
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

export default DetailProduit;
