import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar.js";
import NavBar from "./NavBar.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Footer from "./Footer.js";
import { useSelector } from "react-redux";
import axios from "../../axios.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 648,
  height: 606,
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  height: 1,
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ListeProduit = () => {
  const [nom, setName] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");

  /** recuperationdes categorie */
  const [categories, setCategorie] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState("");

  const categorie = selectedCategorie;
  console.log(categorie);

  useEffect(() => {
    fetchCategorie();
  }, []);

  const fetchCategorie = async () => {
    try {
      const response = await axios.get("/categories");
      setCategorie(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedCategorie(event.target.value);
  };

  //   const categorieGPSId = categories[1]
  //   const categorieDonneesId = categories[0]
  //   const categorieImagerieId = categories[2]
  //end categorie

  const users = useSelector((state) => state.userElement);
  console.log(users.id);
  const user = users.id;

  /** upload image */

  const [selectedPhotos, setSelectedPhotos] = useState(null);

  const handlePhotoChanges = (event) => {
    const file = event.target.files[0];
    setSelectedPhotos(file);
  };
  /** end upload image */

  const [errorNom, setErrorNom] = useState("");
  const [errorPrix, setErrorPrix] = useState("");
  const [errorCategorie, setErrorCategorie] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorPhoto, setErrorPhoto] = useState("");
  const [erroValidateTrue, setErrorValidateTrue] = useState("");
  const [erroValidateFalse, setErrorValidateFalse] = useState("");

  const handleSubmit = async () => {
    if (nom === "") {
      setErrorNom("Veuillez remplir ce champ.");
    } else if (prix === "") {
      setErrorPrix("Veuillez remplir ce champ.");
    } else if (categorie === "") {
      setErrorCategorie("Veuillez remplir ce champ.");
    } else if (description === "") {
      setErrorDescription("Veuillez remplir ce champ.");
    } else if (selectedPhotos === "") {
      setErrorPhoto("Veuillez remplir ce champ.");
    } else {
      try {
        const formData = new FormData();
        console.log("valeur a envoyer", formData);
        formData.append("photo", selectedPhotos);
        formData.append("nom ", nom);
        formData.append("prix", prix);
        formData.append("categorie", categorie.id);
        formData.append("description", description);
        formData.append("user", user);

        const request = await axios.post("/article", formData);
        console.log("valeur envoyer avec success", request);
        alert("Produit creer avec success");
        // Succès de l'envoi de l'API, effectuez les actions supplémentaires nécessaires ici

        // Réinitialiser les champs après l'envoi
        if (request.status === 200) {
          setSelectedPhotos("");
          setSelectedCategorie("");
          setName("");
          setDescription("");
          setPrix("");

          setErrorValidateTrue("Produit creer avec success");
        } else {
          setErrorValidateFalse(
            "Une erreur est survenu lors de l'enregistrement veuillez verifier le type de donne et les valeur entrer"
          );
        }
        setErrorValidateTrue("");
        setErrorValidateFalse("");
      } catch (error) {
        // Gestion des erreurs de l'API ici
        console.error(error);
      }
    }
  };

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  /**modal from imagerie */
  const [openModalImagerie, setOpenModalImagerie] = useState(false);
  const handleCloseImagerie = () => setOpenModalImagerie(false);

  const [selectedIdImagerie, setSelectedIdImagerie] = useState(null);

  const handleOpenModalAcceptImagerie = (id) => {
    setSelectedIdImagerie(id);
    setOpenModalImagerie(true);
  };
  /**traitement de la requette */

  const [nomModifieImagerie, setNomdifieImagerie] = useState('')
  const [prixModifieImagerie, setPrixdifieImagerie] = useState('')
  const [descriptionModifieImagerie, setDescriptiondifieImagerie] = useState('')
  const [selectedPhotosModifieImagerie, setSelectedPhotosModifieImagerie] = useState(null);
  const categorieImage = selectedCategorie;

  const handlePhotoChangesModifieImagerie = (event) => {
    const file = event.target.files[0];
    setSelectedPhotosModifieImagerie(file);
  };

  // modifier des imageries

  const handleValiderClickImagerie = async () => {
    // Vérifiez si l'ID du projet sélectionné est valide

    const formData = new FormData();
    console.log("valeur a envoyer", formData);
    formData.append("photo", selectedPhotosModifieImagerie);
    formData.append("nom ", nomModifieImagerie);
    formData.append("prix", prixModifieImagerie);
    formData.append("categorie", categorieImage.id);
    formData.append("description", descriptionModifieImagerie);
    formData.append("user", user);

    if (nomModifieImagerie === "") {
      setErrorNom("Veuillez remplir ce champ.");
    } else if (prixModifieImagerie === "") {
      setErrorPrix("Veuillez remplir ce champ.");
    } else if (categorieImage === "") {
      setErrorCategorie("Veuillez remplir ce champ.");
    } else if (descriptionModifieImagerie === "") {
      setErrorDescription("Veuillez remplir ce champ.");
    } else if (selectedPhotos === "") {
      setErrorPhoto("Veuillez remplir ce champ.");
    } else {

      if (selectedIdImagerie) {
        axios.put(`/article/update/${selectedIdImagerie}`, formData)
          .then(response => {
            console.log('New module created:', response.data);

            alert('Article mis a jours')
            // Close the modal and fetch updated projects
            handleCloseImagerie();
          })
          .catch(error => {
            console.error('Error update article:', error);
          });

        //   const request = await axios.put(`/article/valide/${selectedIdImagerie}`,newValues {
        //       id: selectedIdImagerie
        //   });
        //   // Traitement de la réponse de la requête
        //   console.log('Imagerie accepter avec success',request.data);
        //   alert('Imagerie accepter avec success')

        // } catch (error) {
        //   console.error('cadidature failled',error);
        // }

      }
    }

  };

  /** end modal from imagerie */

  /**affichage(recuperation des donnees) des imagerie */
  const [imagerie, setImagerie] = useState([]);
  console.log(imagerie);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorieAndUser/1/${user}`);
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

    /**traitement de la requette */

    const [nomModifieGps, setNomdifieGps] = useState('')
    const [prixModifieGps, setPrixdifieGps] = useState('')
    const [descriptionModifieGps, setDescriptiondifieGps] = useState('')
    const [selectedPhotosModifieGps, setSelectedPhotosModifieGps] = useState(null);
    const categorieGps = selectedCategorie;
  
    const handlePhotoChangesModifieGps = (event) => {
      const file = event.target.files[0];
      setSelectedPhotosModifieGps(file);
    };
  
    // modifier des Gpss
  
    const handleValiderClickGps = async () => {
      // Vérifiez si l'ID du projet sélectionné est valide
  
      const formData = new FormData();
      console.log("valeur a envoyer", formData);
      formData.append("photo", selectedPhotosModifieGps);
      formData.append("nom ", nomModifieGps);
      formData.append("prix", prixModifieGps);
      formData.append("categorie", categorieGps.id);
      formData.append("description", descriptionModifieGps);
      formData.append("user", user);
  
      if (nomModifieGps === "") {
        setErrorNom("Veuillez remplir ce champ.");
      } else if (prixModifieGps === "") {
        setErrorPrix("Veuillez remplir ce champ.");
      } else if (categorieImage === "") {
        setErrorCategorie("Veuillez remplir ce champ.");
      } else if (descriptionModifieGps === "") {
        setErrorDescription("Veuillez remplir ce champ.");
      } else if (selectedPhotos === "") {
        setErrorPhoto("Veuillez remplir ce champ.");
      } else {
  
        if (selectedIdGps) {
          axios.put(`/article/update/${selectedIdGps}`, formData)
            .then(response => {
              console.log('New module created:', response.data);
  
              alert('Article mis a jours')
              // Close the modal and fetch updated projects
              handleCloseImagerie();
            })
            .catch(error => {
              console.error('Error update article:', error);
            });
  
        }
      }
  
    };

  /** end modal from Gps */

  /**affichage(recuperation des donnees) des GPS */
  const [gps, setGps] = useState([]);
  console.log("mes donnee gps", gps);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorieAndUser/2/${user}`);
        setGps(request.data);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);


  /**modal from Gps */
  const [openModalmetheorologique, setOpenModalmetheorologique] = useState(false);
  const handleClosemetheorologique = () => setOpenModalmetheorologique(false);

  const [selectedIdmetheorologique, setSelectedIdmetheorologique] = useState(null);

  const handleOpenModalAcceptmetheorologique = (id) => {
    setSelectedIdmetheorologique(id);
    setOpenModalmetheorologique(true);
  };


  /**traitement de la requette */

  
  const [nomModifiemetheo, setNomdifiemetheo] = useState('')
  const [prixModifiemetheo, setPrixdifiemetheo] = useState('')
  const [descriptionModifiemetheo, setDescriptiondifiemetheo] = useState('')
  const [selectedPhotosModifiemetheo, setSelectedPhotosModifiemetheo] = useState(null);
  const categoriemetheo = selectedCategorie;

  const handlePhotoChangesModifiemetheo = (event) => {
    const file = event.target.files[0];
    setSelectedPhotosModifiemetheo(file);
  };

  // modifier des metheos

  const handleValiderClickmetheorologique = async () => {
    // Vérifiez si l'ID du projet sélectionné est valide

    const formData = new FormData();
    console.log("valeur a envoyer", formData);
    formData.append("photo", selectedPhotosModifiemetheo);
    formData.append("nom ", nomModifiemetheo);
    formData.append("prix", prixModifiemetheo);
    formData.append("categorie", categoriemetheo.id);
    formData.append("description", descriptionModifiemetheo);
    formData.append("user", user);

    if (nomModifiemetheo === "") {
      setErrorNom("Veuillez remplir ce champ.");
    } else if (prixModifiemetheo === "") {
      setErrorPrix("Veuillez remplir ce champ.");
    } else if (categorieImage === "") {
      setErrorCategorie("Veuillez remplir ce champ.");
    } else if (descriptionModifiemetheo === "") {
      setErrorDescription("Veuillez remplir ce champ.");
    } else if (selectedPhotos === "") {
      setErrorPhoto("Veuillez remplir ce champ.");
    } else {

      if (selectedIdmetheorologique) {
        axios.put(`/article/update/${selectedIdmetheorologique}`, formData)
          .then(response => {
            console.log('New module created:', response.data);

            alert('Article mis a jours')
            // Close the modal and fetch updated projects
            handleCloseImagerie();
          })
          .catch(error => {
            console.error('Error update article:', error);
          });

      }
    }

  };

  /** end modal from metheorologique */

  /**affichage(recuperation des donnees) des metheorologique */
  const [metheorologique, setmetheorologique] = useState([]);
  console.log(metheorologique);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorieAndUser/3/${user}`);
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
      <NavBar />
      <Box className="mt-5" sx={{ display: "flex", flexDirection: "column" }}>
        <Sidebar />
        <Container className="mt-5" direction="column">
          <Box
            sx={{
              marginBottom: 2,
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button onClick={handleOpen} variant="contained">
              Ajouter
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  {erroValidateTrue && (
                    <span class="alert alert-success" role="alert">
                      {erroValidateTrue}
                    </span>
                  )}
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.dark"
                    fontWeight="bold"
                    className="fs-5 text-center"
                  >
                    Ajouter un article
                  </Typography>
                  <div className="row ">
                    <div className="col">
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
                          value={nom}
                          onChange={(e) => setName(e.target.value)}
                        />
                        {errorNom && (
                          <span style={{ color: "red" }}>{errorNom}</span>
                        )}
                      </FormControl>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col">
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
                          Prix
                        </FormHelperText>
                        <OutlinedInput
                          className="bg-white"
                          id="outlined-adornment-projet"
                          aria-describedby="outlined-projet-helper-text"
                          inputProps={{
                            "aria-label": "projet",
                          }}
                          value={prix}
                          onChange={(e) => setPrix(e.target.value)}
                        />
                        {errorPrix && (
                          <span style={{ color: "red" }}>{errorPrix}</span>
                        )}
                      </FormControl>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
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
                          Catégorie
                        </FormHelperText>
                        <InputLabel id="demo-select-small-label"></InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={selectedCategorie}
                          label="Categorie"
                          onChange={handleSelectChange}
                        >
                          <MenuItem value="">
                            Sélectionnez une categorie
                          </MenuItem>

                          {categories.map((categorie) => (
                            <MenuItem key={categorie.id} value={categorie}>
                              {categorie.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {errorCategorie && (
                          <span style={{ color: "red" }}>{errorCategorie}</span>
                        )}
                      </FormControl>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col">
                      <FormControl
                        fullWidth
                        sx={{ m: 1, height: "40" }}
                        variant="outlined"
                        size="small"
                      >
                        <FormHelperText
                          id="outlined-projet-helper-text"
                          className="fs-6 text-dark fw-bold"
                        >
                          Description
                        </FormHelperText>
                        <OutlinedInput
                          className="bg-white"
                          id="outlined-adornment-projet"
                          aria-describedby="outlined-projet-helper-text"
                          inputProps={{
                            "aria-label": "projet",
                          }}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Description..."
                        />
                        {errorDescription && (
                          <span style={{ color: "red" }}>
                            {errorDescription}
                          </span>
                        )}
                      </FormControl>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                        <label htmlFor="upload-cv">
                          <input
                            style={{ display: "none" }}
                            id="upload-cv"
                            name="upload-cv"
                            type="file"
                            onChange={handlePhotoChanges}
                          />

                          <Button
                            color="secondary"
                            variant="contained"
                            component="span"
                          >
                            Télécharger une photos
                          </Button>
                          {selectedPhotos && (
                            <p>Votre produit: {selectedPhotos.name}</p>
                          )}
                        </label>
                        {errorPhoto && (
                          <span style={{ color: "red" }}>{errorPhoto}</span>
                        )}
                      </FormControl>
                    </div>
                  </div>
                  <div className="mt-2 d-flex justify-content-between">
                    <div>
                      <Button variant="outlined" type="reset" value="Reset">
                        Annuler
                      </Button>
                    </div>
                    <div>
                      <Button variant="contained" onClick={handleSubmit}>
                        Ajouter
                      </Button>
                    </div>
                  </div>
                </Box>
              </Fade>
            </Modal>
          </Box>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{}}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Imageries" value="1" />
                  <Tab label="GPS" value="2" />
                  <Tab label="Données métheorologiques" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="row">
                  {imagerie.length === 0 ? (
                    <h3>Pas d'articles trouves</h3>
                  ) : imagerie.map((image) => (
                    <div className="col-4">
                      <Fab
                        size="small"
                        color="white"
                        aria-label="add"
                        sx={{ zIndex: 1, top: 60, left: 20 }}
                        onClick={() => handleOpenModalAcceptImagerie(image.id)}
                      >
                        <RemoveRedEyeOutlinedIcon color="primary" />
                      </Fab>
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
                          <Box sx={style}>
                            <Typography
                              sx={{ mb: 1.5 }}
                              color="text.dark"
                              fontWeight="bold"
                              className="fs-5 text-center"
                            >
                              Detail de l'article
                            </Typography>
                            <div className="row ">
                              <div className="col">
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
                                    placeholder={`${image.nom}`}
                                    value={nomModifieImagerie}
                                    onChange={(e) => setNomdifieImagerie(e.target.value)}
                                  />
                                  {errorNom && (
                                    <span style={{ color: "red" }}>{errorNom}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col">
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
                                    Prix
                                  </FormHelperText>
                                  <OutlinedInput
                                    className="bg-white"
                                    id="outlined-adornment-projet"
                                    aria-describedby="outlined-projet-helper-text"
                                    inputProps={{
                                      "aria-label": "projet",
                                    }}
                                    placeholder={`${image.prix}`}
                                    value={prixModifieImagerie}
                                    onChange={(e) => setPrixdifieImagerie(e.target.value)}
                                  />
                                  {errorPrix && (
                                    <span style={{ color: "red" }}>{errorPrix}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col">
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
                                    Catégorie
                                  </FormHelperText>
                                  <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={selectedCategorie}
                                    label="Categorie"
                                    onChange={handleSelectChange}
                                    placeholder={image.categorie.name}
                                  >
                                    <MenuItem value="">
                                      Sélectionnez une categorie
                                    </MenuItem>

                                    {categories.map((categorie) => (
                                      <MenuItem key={categorie.id} value={categorie}>
                                        {categorie.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {errorCategorie && (
                                    <span style={{ color: "red" }}>{errorCategorie}</span>
                                  )}
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
                                    Description
                                  </FormHelperText>
                                  <OutlinedInput
                                    className="bg-white"
                                    id="outlined-adornment-projet"
                                    aria-describedby="outlined-projet-helper-text"
                                    inputProps={{
                                      "aria-label": "projet",
                                    }}
                                    value={descriptionModifieImagerie}
                                    onChange={(e) => setDescriptiondifieImagerie(e.target.value)}
                                    placeholder={`${image.description}`}
                                  />
                                  {errorDescription && (
                                    <span style={{ color: "red" }}>
                                      {errorDescription}
                                    </span>
                                  )}
                                </FormControl>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col">
                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                  <label htmlFor="upload-cv">
                                    <input
                                      style={{ display: "none" }}
                                      id="upload-cv"
                                      name="upload-cv"
                                      type="file"
                                      onChange={handlePhotoChangesModifieImagerie}
                                    />

                                    <Button
                                      color="secondary"
                                      variant="contained"
                                      component="span"
                                    >
                                      Télécharger une photos
                                    </Button>
                                    {selectedPhotosModifieImagerie && (
                                      <p>Votre produit: {selectedPhotosModifieImagerie.name}</p>
                                    )}
                                  </label>
                                  {errorPhoto && (
                                    <span style={{ color: "red" }}>{errorPhoto}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                              <Button variant="contained" onClick={handleValiderClickImagerie}>Modifier</Button>
                            </div>
                          </Box>
                        </Fade>
                      </Modal>

                      <Card sx={{ maxWidth: 345 }}>
                        <Box>
                          <CardMedia
                            sx={{ height: 200, margin: 1, borderRadius: 2 }}
                            image={`http://localhost:8081/${image.photo}`}
                          />
                        </Box>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="text-end text-primary"
                          >
                            PRIX: <span style={{ color: "black" }}>{image.prix}</span>
                          </Typography>
                          <Typography gutterBottom variant="h4" component="div">
                            {image.nom}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {image.description}
                          </Typography>
                        </CardContent>
                      </Card>

                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="row">
                  {gps.length === 0 ? (
                    <h3>Pas d'articles trouves</h3>
                  ) : gps.map((donneeGps) => (
                    <div className="col-4">
                      <Fab
                        size="small"
                        color="white"
                        aria-label="add"
                        sx={{ zIndex: 1, top: 60, left: 20 }}
                        onClick={() => handleOpenModalAcceptGps(donneeGps.id)}
                      >
                        <RemoveRedEyeOutlinedIcon color="primary" />
                      </Fab>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={openModalGps}
                        onClose={handleCloseGps}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                          backdrop: {
                            timeout: 500,
                          },
                        }}
                      >
                        <Fade in={openModalGps}>
                          <Box sx={style}>
                            <Typography
                              sx={{ mb: 1.5 }}
                              color="text.dark"
                              fontWeight="bold"
                              className="fs-5 text-center"
                            >
                              Detail de l'article
                            </Typography>
                            <div className="row ">
                              <div className="col">
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
                                    placeholder={`${donneeGps.nom}`}
                                    value={nomModifieGps}
                                    onChange={(e) => setNomdifieGps(e.target.value)}
                                  />
                                  {errorNom && (
                                    <span style={{ color: "red" }}>{errorNom}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col">
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
                                    Prix
                                  </FormHelperText>
                                  <OutlinedInput
                                    className="bg-white"
                                    id="outlined-adornment-projet"
                                    aria-describedby="outlined-projet-helper-text"
                                    inputProps={{
                                      "aria-label": "projet",
                                    }}
                                    placeholder={`${donneeGps.prix}`}
                                    value={prixModifieGps}
                                    onChange={(e) => setPrixdifieGps(e.target.value)}
                                  />
                                  {errorPrix && (
                                    <span style={{ color: "red" }}>{errorPrix}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col">
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
                                    Catégorie
                                  </FormHelperText>
                                  <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={selectedCategorie}
                                    label="Categorie"
                                    onChange={handleSelectChange}
                                    placeholder={donneeGps.categorie.name}
                                  >
                                    <MenuItem value="">
                                      Sélectionnez une categorie
                                    </MenuItem>

                                    {categories.map((categorie) => (
                                      <MenuItem key={categorie.id} value={categorie}>
                                        {categorie.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {errorCategorie && (
                                    <span style={{ color: "red" }}>{errorCategorie}</span>
                                  )}
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
                                    Description
                                  </FormHelperText>
                                  <OutlinedInput
                                    className="bg-white"
                                    id="outlined-adornment-projet"
                                    aria-describedby="outlined-projet-helper-text"
                                    inputProps={{
                                      "aria-label": "projet",
                                    }}
                                    value={descriptionModifieGps}
                                    onChange={(e) => setDescriptiondifieGps(e.target.value)}
                                    placeholder={`${donneeGps.description}`}
                                  />
                                  {errorDescription && (
                                    <span style={{ color: "red" }}>
                                      {errorDescription}
                                    </span>
                                  )}
                                </FormControl>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col">
                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                  <label htmlFor="upload-cv">
                                    <input
                                      style={{ display: "none" }}
                                      id="upload-cv"
                                      name="upload-cv"
                                      type="file"
                                      onChange={handlePhotoChangesModifieGps}
                                    />

                                    <Button
                                      color="secondary"
                                      variant="contained"
                                      component="span"
                                    >
                                      Télécharger une photos
                                    </Button>
                                    {selectedPhotosModifieGps && (
                                      <p>Votre produit: {selectedPhotosModifieGps.name}</p>
                                    )}
                                  </label>
                                  {errorPhoto && (
                                    <span style={{ color: "red" }}>{errorPhoto}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                              <Button variant="contained" onClick={handleValiderClickGps}>Modifier</Button>
                            </div>
                          </Box>
                        </Fade>
                      </Modal>
                      <Card sx={{ maxWidth: 345 }}>
                        <Box>
                          <CardMedia
                            sx={{ height: 200, margin: 1, borderRadius: 2 }}
                            image={`http://localhost:8081/${donneeGps.photo}`}
                          />
                        </Box>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="text-end text-primary"
                          >
                            prix: {donneeGps.prix}
                          </Typography>
                          <Typography gutterBottom variant="h4" component="div">
                            {donneeGps.nom}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {donneeGps.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div className="row">
                  {metheorologique.length === 0 ? (
                    <h3>Pas d'articles trouves</h3>
                  ) : metheorologique.map((metheo) => (
                    <div className="col-4">
                      <Fab
                        size="small"
                        color="white"
                        aria-label="add"
                        sx={{ zIndex: 1, top: 60, left: 20 }}
                        onClick={() => handleOpenModalAcceptmetheorologique(metheo.id)}
                      >
                        <RemoveRedEyeOutlinedIcon color="primary" />
                      </Fab>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={openModalmetheorologique}
                        onClose={handleClosemetheorologique}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                          backdrop: {
                            timeout: 500,
                          },
                        }}
                      >
                        <Fade in={openModalmetheorologique}>
                          <Box sx={style}>
                            <Typography
                              sx={{ mb: 1.5 }}
                              color="text.dark"
                              fontWeight="bold"
                              className="fs-5 text-center"
                            >
                              Detail de l'article
                            </Typography>
                            <div className="row ">
                              <div className="col">
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
                                    placeholder={`${metheo.nom}`}
                                    value={nomModifiemetheo}
                                    onChange={(e) => setNomdifiemetheo(e.target.value)}
                                  />
                                  {errorNom && (
                                    <span style={{ color: "red" }}>{errorNom}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col">
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
                                    Prix
                                  </FormHelperText>
                                  <OutlinedInput
                                    className="bg-white"
                                    id="outlined-adornment-projet"
                                    aria-describedby="outlined-projet-helper-text"
                                    inputProps={{
                                      "aria-label": "projet",
                                    }}
                                    placeholder={`${metheo.prix}`}
                                    value={prixModifiemetheo}
                                    onChange={(e) => setPrixdifiemetheo(e.target.value)}
                                  />
                                  {errorPrix && (
                                    <span style={{ color: "red" }}>{errorPrix}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col">
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
                                    Catégorie
                                  </FormHelperText>
                                  <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={selectedCategorie}
                                    label="Categorie"
                                    onChange={handleSelectChange}
                                    placeholder={metheo.categorie.name}
                                  >
                                    <MenuItem value="">
                                      Sélectionnez une categorie
                                    </MenuItem>

                                    {categories.map((categorie) => (
                                      <MenuItem key={categorie.id} value={categorie}>
                                        {categorie.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {errorCategorie && (
                                    <span style={{ color: "red" }}>{errorCategorie}</span>
                                  )}
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
                                    Description
                                  </FormHelperText>
                                  <OutlinedInput
                                    className="bg-white"
                                    id="outlined-adornment-projet"
                                    aria-describedby="outlined-projet-helper-text"
                                    inputProps={{
                                      "aria-label": "projet",
                                    }}
                                    value={descriptionModifiemetheo}
                                    onChange={(e) => setDescriptiondifiemetheo(e.target.value)}
                                    placeholder={`${metheo.description}`}
                                  />
                                  {errorDescription && (
                                    <span style={{ color: "red" }}>
                                      {errorDescription}
                                    </span>
                                  )}
                                </FormControl>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col">
                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                  <label htmlFor="upload-cv">
                                    <input
                                      style={{ display: "none" }}
                                      id="upload-cv"
                                      name="upload-cv"
                                      type="file"
                                      onChange={handlePhotoChangesModifiemetheo}
                                    />

                                    <Button
                                      color="secondary"
                                      variant="contained"
                                      component="span"
                                    >
                                      Télécharger une photos
                                    </Button>
                                    {selectedPhotosModifiemetheo && (
                                      <p>Votre produit: {selectedPhotosModifiemetheo.name}</p>
                                    )}
                                  </label>
                                  {errorPhoto && (
                                    <span style={{ color: "red" }}>{errorPhoto}</span>
                                  )}
                                </FormControl>
                              </div>
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                              <Button variant="contained" onClick={handleValiderClickmetheorologique}>Modifier</Button>
                            </div>
                          </Box>
                        </Fade>
                      </Modal>
                      <Card sx={{ maxWidth: 345 }}>
                        <Box>
                          <CardMedia
                            sx={{ height: 200, margin: 1, borderRadius: 2 }}
                            image={`http://localhost:8081/${metheo.photo}`}
                          />
                        </Box>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="text-end text-primary"
                          >
                            prix: {metheo.prix}
                          </Typography>
                          <Typography gutterBottom variant="h4" component="div">
                            {metheo.nom}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {metheo.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ListeProduit;
