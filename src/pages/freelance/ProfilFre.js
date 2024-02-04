import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "react-bootstrap/Container";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import axios from "../../axios.js";
import "./ProfilFre.css";
import { useSelector } from "react-redux";
import { setProfile } from "../../features/profileSlice.js"
import { useDispatch } from "react-redux";




const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  height: 1,
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProfilFreelance = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  /**Upload cv */

  const [selectedFile, setSelectedFile] = useState(null);

  const handleCVChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  /** end Upload cv */

  /** upload photo */

  const [selectedPhotos, setSelectedPhotos] = useState(null);
  console.log(selectedPhotos);
  const handlePhotoChanges = (event) => {
    const photos = event.target.files;
    setSelectedPhotos(photos);
  };

  /** end upload photo */

  
  /**recuperation des domaine */
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("");
  console.log(selectedDomain);
  
  const idValue = selectedDomain.id;
  const valuesList = [idValue];
  console.log(valuesList);
  
  const domain = valuesList
  useEffect(() => {
    fetchTypesDomaine();
  }, []);

  const fetchTypesDomaine = async () => {
    try {
      const response = await axios.get("/domains");
      setDomains(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  /** competence */
  const [competenceByDomaine, setCompetences] = useState([]);
  const [selectedCompetences, setSelectedCompetences] = useState([]);
  const [object, setObject] = useState();

  useEffect(() => {
    const convertedObject = selectedCompetences.map((item) => ({ id: item }));
    setObject(convertedObject);
  }, [selectedCompetences]);

  const competences = selectedCompetences
  console.log(competences);

  /**domaine */
  const handleDomainChange = (event) => {
    const selectedDomainId = event.target.value;
    setSelectedDomain(selectedDomainId);
    console.log(selectedDomainId.id);

    // Fetch competences by domain ID from API
    axios
      .get(`/competencesbydomain/${selectedDomainId.id}`)
      .then((response) => {
        setCompetences(response.data);
      })
      .catch((error) => {
        console.error("Error fetching competences:", error);
      });
  };

  /** competence */
  const handleCompetenceChange = (event) => {
    const selectedCompetences = event.target.value;
    setSelectedCompetences(selectedCompetences);
  };

  const users = useSelector((state) => state.user);
  console.log(users.id);
  const user = users.id
  // const user = {
  //   "id": 23,
  //   "userName": "dave",
  //   "email": "davechedjouun@gmail.com",
  //   "password": "123",
  //   "userFunction": {
  //     "id": 1,
  //     "name": "Employeur"
  //   }
  // };

  /** envoi de donnee */
  const [linkedInLink, setName] = useState("");
  const [description, setDescription] = useState("");
  const linkedIn = linkedInLink

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      console.log('valeur a envoyer',formData);
      Array.from(selectedPhotos).forEach((photo) => {
        formData.append("photo", photo);
      });
      formData.append("cv", selectedFile);
      formData.append("linkedIn", linkedIn);
      formData.append("domain", domain);
      formData.append("competences", competences);
      formData.append("description", description);
      formData.append("user", user);


      const request = await axios.post("/profile", formData);
      // Succès de l'envoi de l'API, effectuez les actions supplémentaires nécessaires ici
      dispatch(setProfile(request.data.id));
      navigate("/DashAccueil");

      // Réinitialiser les champs après l'envoi
      setSelectedPhotos(null);
      setSelectedFile(null);
      setName("");
      setDescription("");
    } catch (error) {
      // Gérer les erreurs de l'API ici
      console.error(error);
    }
  };


  return (
    <div>
      <Card sx={{ 
                my: 0,
                mx: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 1500,
                height: "auto"
              }}>
        <CardContent>
          <Box
            className="mt-5"
          >
            <h2>Enregistrer votre profil</h2>
            {/* <Box sx={{ p: 3 }}>
            <h1>Freelance</h1>
            </Box> */}
            <Container className="mt-5">
              <div className="row ">
                <div className="col">
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">
                      Lien linkedin
                    </FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        "aria-label": "projet",
                      }}
                      value={linkedInLink}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>

              {/* <div className="row ">
                <div className="col">
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">
                      Libelle
                    </FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        "aria-label": "projet",
                      }}
                      value={libelle}
                      onChange={(e) => setLibelle(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div> */}

              <div className="row">
                <div className="col">
                  <FormControl fullWidth sx={{ width: 440, marginLeft: 1, marginTop: 4 }}>
                    <InputLabel id="demo-select-label"></InputLabel>
                    <Select
                      value={selectedDomain}
                      onChange={handleDomainChange}
                    >
                      <MenuItem value="">Sélectionnez un Domaine</MenuItem>
                      {domains.map((domain) => (
                        <MenuItem key={domain.id} value={domain}>
                          {domain.titled}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col">
                  <FormControl sx={{ width: 440, marginLeft: 1, marginTop: 4}}>
                    <InputLabel id="competence-select-label">
                      Sélectionnez une compétence :
                    </InputLabel>
                    <Select
                      labelId="competence-select-label"
                      id="competence-select"
                      multiple
                      value={selectedCompetences}
                      onChange={handleCompetenceChange}
                      input={
                        <OutlinedInput
                          id="select-multiple-chip"
                          label="Sélectionnez une compétence"
                        />
                      }
                    >
                      <MenuItem value="">Sélectionnez une competence</MenuItem>
                      {competenceByDomaine.map((competence) => (
                        <MenuItem key={competence.id} value={competence.id}>
                          {competence.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="row ">
                <div className="col">
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">
                      Description
                    </FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        "aria-label": "projet",
                      }}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>

              <div className="row ">
                <div className="col">
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <label htmlFor="upload-cv">
                      <input
                        style={{ display: "none" }}
                        id="upload-cv"
                        name="upload-cv"
                        type="file"
                        onChange={handleCVChange}
                      />

                      <Button
                        color="secondary"
                        variant="contained"
                        component="span"
                      >
                        Télécharger un CV
                      </Button>
                      {selectedFile && <p>Votre cv: {selectedFile.name}</p>}
                    </label>
                  </FormControl>

                  <FormControl
                    fullWidth
                    sx={{ width: 280, marginLeft: 1 }}
                    variant="outlined"
                  >
                    <Button
                      color="success"
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                    >
                      Télécharger une photos
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handlePhotoChanges}
                      />
                    </Button>
                    {selectedPhotos && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "1rem",
                        }}
                      >
                        {Array.from(selectedPhotos).map((photo, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(photo)}
                            alt={`Selected file ${index + 1}`}
                            style={{
                              borderRadius: "50%",
                              height: "100px",
                              marginLeft: "0.5rem",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </FormControl>
                </div>
              </div>
            </Container>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            sx={{ width: 925, marginLeft: 3 }}
            onClick={handleSubmit}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Enregistrer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProfilFreelance;
