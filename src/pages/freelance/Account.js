import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Components from "./Components";
import Container from "react-bootstrap/Container";
import Logo from "../images/logoPSI.png";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/UserElement";
import { setUser } from "../../features/UserSlice";
import { useDispatch } from "react-redux";

const defaultTheme = createTheme();

// const defaultTheme = createTheme();
const Account = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userName, setuserName] = React.useState("");
  const [alertVariant, setAlertVariant] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const [userNameError, setuserNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [age, setAges] = React.useState('');
  const [localisation, setLocalisation] = React.useState('');

  const handleAgesChange = (event) => {
    setAges(event.target.value);
  };

  const handleLocalisationChange = (event) => {
    setLocalisation(event.target.value);
  };

  const dispatch = useDispatch();

  let activer;
  let userFunctionData;

  const [alignment, setAlignment] = React.useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  activer = alignment;
  console.log("activer est", activer);

  const handleFreelanceClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/functions`);
      userFunctionData = response.data;
      console.log('freelance', response.data);
    } catch (error) {
      console.error("panne", error);
    }
  };

  // const [val, setVal] = React.useState([]);

  // let idEmployeur = val[0].id
  // let idFreelance = val[1].id

  // React.useEffect(() => {
  //   axios.get('/functions')
  //     .then(response => {
  //       setVal(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log('tout', val);

  const sms = {
    userName,
    email,
    password,
    userFunction: {
      id: 1,
      name: "Employeur",
    },
  };
  console.log(isValid);

  const handleClick = async (e) => {
    e.preventDefault();

    // Vérifier les champs
    const emailPattern = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Le mot de passe doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule et un chiffre."
      );
      setIsValid(false);
    } else if (userName.trim() === "") {
      setuserNameError("Le nom est requis.");
      setIsValid(false);
    } else if (!emailPattern.test(email)) {
      setEmailError("Adresse e-mail invalide");
      setIsValid(false);
    } else if (email.trim() === "") {
      setEmailError(" L'Email est requis.");
      setIsValid(false);
    } else if (password.trim() === "") {
      setPasswordError("Le mot de passe est requis.");
      setIsValid(false);
    } else if (password !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas.");
      setIsValid(false);
    } else if (!specialChars.test(password)) {
      setPasswordError("Le mot de passe doit contenir au moins un caractère spécial.");
      setIsValid(false);
      return;
    }else if (isValid === true) {
      // Effectuer d'autres validations, appeler une API, etc.
      console.log("Formulaire valide");

      // Envoyer les données du formulaire à l'API
      if (activer === "employeur") {
        try {
          const request = await axios.post(`/user`, {
            userName,
            email,
            password,
            age,
            localisation,
            userFunction: {
              id: 1
            },
          });

          navigate("/Entreprises");
          setAlertVariant("success");
          setAlertMessage("Votre compte a été créé avec succès");
          const reponse = request.data;
          console.log("success", reponse);

          dispatch(loginUser(request.data));
        } catch (error) {
          console.log("erreur lors de l'enregistrement de l'employeur", error);
        }
      } else if (activer === "Freelance") {
        try {
          const request = await axios.post(`/user`, {
            userName,
            email,
            password,
            age,
            localisation,
            userFunction: {
              id: 2
            },
          });

          navigate("/ProfilFreelance");
          setAlertVariant("success");
          setAlertMessage("Votre compte a été créé avec succès");
          const reponse = request.data;
          console.log("success freelance", reponse);

          dispatch(setUser(request.data));
        } catch (error) {
          console.log("erreur lors de l'enregistrement du freelance", error);
        }
      } else {
        setAlertVariant("danger");
        setAlertMessage(
          "Vérifiez également votre connexion au service de données. Réessayez."
        );
        console.log("problème de connexion");
      }
    }else{
      // Envoyer les données du formulaire à l'API
      if (activer === "employeur") {
        try {
          const request = await axios.post(`/user`, {
            userName,
            email,
            password,
            age,
            localisation,
            userFunction: {
              id: 1
            },
          });

          navigate("/Entreprises");
          setAlertVariant("success");
          setAlertMessage("Votre compte a été créé avec succès");
          const reponse = request.data;
          console.log("success", reponse);

          dispatch(loginUser(request.data));
        } catch (error) {
          console.log("erreur lors de l'enregistrement de l'employeur", error);
        }
      } else if (activer === "Freelance") {
        try {
          const request = await axios.post(`/user`, {
            userName,
            email,
            password,
            age,
            localisation,
            userFunction: {
              id: 2
            },
          });

          navigate("/ProfilFreelance");
          setAlertVariant("success");
          setAlertMessage("Votre compte a été créé avec succès");
          const reponse = request.data;
          console.log("success freelance", reponse);

          dispatch(setUser(request.data));
        } catch (error) {
          console.log("erreur lors de l'enregistrement du freelance", error);
        }
      } else {
        setAlertVariant("danger");
        setAlertMessage(
          "Vérifiez également votre connexion au service de données. Réessayez."
        );
        console.log("problème de connexion");
      }
    }
  };

  return (
    <Components.Container maxWidth="xs" className="m-auto mt-5">
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "860px" }}>
          <CssBaseline />
          <Grid
            component={Paper}
            item
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1326046108/fr/photo/voyage-cosmique-dans-lespace.jpg?s=612x612&w=0&k=20&c=GVAzDjgECD9lYTpHb8QKVEKoS63La7PgVOL5bHODMM0=)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                height: "860px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            component={Paper}
            className="d-flex justify-content-center align-items-center"
          >
            <Box
              sx={{
                my: 0,
                mx: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Logo} alt="" />
              <Typography component="h1" variant="h5" className="fw-bold mb-2">
                Créer Un Compte
              </Typography>

              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="Freelance">
                  <AccountCircleOutlinedIcon
                    sx={{ color: "primary" }}
                    className="mx-2"
                    onClick={handleFreelanceClick}
                  />
                  Freelance
                </ToggleButton>
                <ToggleButton value="employeur">
                  {" "}
                  <BusinessOutlinedIcon
                    className="mx-2"
                    onClick={handleFreelanceClick}
                  />
                  Employeur
                </ToggleButton>
              </ToggleButtonGroup>
              {/* <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              <Grid item xs={6}>
               
                <Grid  className='d-flex justify-content-center  p-2 rounded' >
                    <AccountCircleOutlinedIcon sx={{color: 'rgba(0, 0, 0, 0.7)'}}/>
                     <Typography component="h6" variant="h5" className='fw-lighter fs-5 ms-3'>
                     <a href="/#" class="text-decoration-none text-secondary">Freelance</a>
                     </Typography>
                  </Grid>
               
              </Grid>
              <Grid item xs={6}>
               
                  <Grid  className='d-flex justify-content-center border p-2 px-5 rounded ' style={{background:'#042852'}}>
                    <BusinessOutlinedIcon sx={{color: 'white'}}/>
                     <Typography component="h6" variant="h5" className='fs-5 ms-3'>
                     <a href="/#" class="text-decoration-none text-white">Employeur</a>
                     </Typography>
                  </Grid>
                 
              </Grid>
              
            </Grid> */}
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Nom"
                  name="name"
                  autoComplete="Nom"
                  value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                  autoFocus
                />
                 {userNameError && <span style={{color: "red"}}>{userNameError}</span>}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <span style={{color: "red"}}>{emailError}</span>}
                <div className="row">
                  <div className="col">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Ages"
                      name="Ages"
                      autoComplete="Ages"
                      autoFocus
                      sx={{ width: 340, marginLeft: 1,
                        backgroundColor: activer !== 'Freelance' ? '#f1f1f1' : 'transparent',}}
                      disabled={activer !== 'Freelance'}
                      value={age}
                      onChange={handleAgesChange}
                    />
                  </div>
                  <div className="col">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Localisation"
                      name="Localisation"
                      autoComplete="Localisation"
                      autoFocus
                      sx={{ width: 345, marginLeft: 1,
                        backgroundColor: activer !== 'Freelance' ? '#f1f1f1' : 'transparent',}}
                      disabled={activer !== 'Freelance'}
                      value={localisation}
                      onChange={handleLocalisationChange}
                    />
                  </div>
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                {passwordError && <span style={{color: "red"}}>{passwordError}</span>}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Confirmer le mot de passe"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                />
                {isValid && <p>Le formulaire est valide.</p>}
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Maintenir la connexion"
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClick}
                >
                  Se Connecter
                </Button>
                {/* <Typography component="h1" variant="h5" className='text-center fs-6'>
                OU
              </Typography>
              <Container maxWidth="xs" className='d-flex justify-content-between  gap-3 sm-w-50'>
                  <Grid  className='d-flex justify-content-center border p-2 rounded' >
                   <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://get-picto.com/wp-content/uploads/2023/01/logo-facebook-icon.png"
                    />
                     <Typography component="h6" variant="h5" className='fw-lighter fs-4 ms-3'>
                     <a href="/#" class="text-decoration-none text-secondary">Facebook</a>
                     </Typography>
                  </Grid>
                  <Grid  className='d-flex justify-content-center border p-2 rounded' >
                   <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                    />
                     <Typography component="h6" variant="h5" className='fw-lighter fs-4 ms-3'>
                     <a href="/#" class="text-decoration-none text-secondary">Google</a>
                     </Typography>
                  </Grid>
                </Container> */}
                <Grid className="d-flex align-items-center justify-content-center mt-1">
                  <Typography
                    component="h6"
                    variant="h6 body2"
                    className="text-center fw-lighter fs-6"
                  >
                    Vous n’avez pas de compte?
                  </Typography>
                  <Link
                    href="/login"
                    variant="body2"
                    className="text-center fw-lighter fs-6"
                  >
                    Creer un Compte
                  </Link>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Components.Container>
  );
};

export default Account;
