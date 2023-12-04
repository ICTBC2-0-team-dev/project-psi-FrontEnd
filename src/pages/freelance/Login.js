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
//import { useLoginMutation } from "../../services/appApi";
//import { Alert } from 'react-bootstrap';
import axios from "../../axios";
import { Navigate } from 'react-router-dom';
import { Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { loginUser  } from '../../features/UserElement';
import { setUser  } from '../../features/UserSlice';
import { useDispatch } from 'react-redux';

const defaultTheme = createTheme();

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [alertVariant, setAlertVariant] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/user/${email}/${password}`);
      const userData = response.data;
      let userId 
      console.log(response.data);
      if (userData) {

        userId = userData.userFunction.id;
        if (userId === 1) {

          navigate('/DashProfil');
          setAlertVariant("success");
          setAlertMessage("Bienvenue a vous");

          dispatch(loginUser (userData));
        } else if (userId === 2) {

          navigate('/');
          setAlertVariant("success");
          setAlertMessage("Bienvenue a vous");

          dispatch(setUser (userData));
        }
      } else {

        setAlertVariant("warning");
        setAlertMessage(". Veuillez réessayer.");

      }
    } catch (error) {
      console.error(error);
      setAlertVariant("danger");
      setAlertMessage(
        "Identifiants incorrects (Mot de passe ou email introuvable) verifier egalement votre connecion au service de donnees. Et réessayer."
      );
    }
  };

  
  /* const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/user/${email}/${password}`);
      const userData = response.data;

      if (userData) {
        isSucces = setIsLoggedIn(true);
        console.log(isSucces);
        const userId = userData.userFunction.id;
        if (userId === 1) {
          setRedirectPath('/dashbord/index');
        } else if (userId === 2) {
          setRedirectPath('/homeScreen');
        }
      } else {
        setIsLoggedIn(false);
        setAlertVariant('danger');
        setAlertMessage('Identifiants incorrects. Veuillez réessayer.');
        console.log(setIsLoggedIn);
      }
    } catch (error) {
      console.error("erreur de test", error.data);
      err = error
    }
  };

  if (isLoggedIn) {
    return <Navigate to={redirectPath} />;
  }*/

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/user/${email}/${password}`);

      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };*/

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`https://419b4bee076a6fde980632ee2d9c17dc.serveo.net/user/davechedjouun@gmail.com/567`, {
      method: "GET",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Donnee recuperer avec success:", result);
        console.log(result);
        // message de succès
      })
      .catch((error) => {
        console.error("Erreur lors de la recuperation des données:", error);
        // d'erreur d'erreur
      });
  };
*/

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
          <Grid item xs={12} sm={8} md={7} component={Paper} square>
            <Box
              sx={{
                my: 1,
                mx: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <img src={Logo} alt="" />
              {alertVariant && alertMessage && (
                <Alert variant={alertVariant}>{alertMessage}</Alert>
              )}{" "}
              <Typography component="h1" variant="h5">
                Connexion
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Maintenir la connexion"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Se Connecter
                </Button>
                {/* <Typography
                  component="h1"
                  variant="h5"
                  className="text-center fs-6"
                >
                  OU
                </Typography> */}
                {/* <Container
                  maxWidth="xs"
                  className="d-flex justify-content-between mt-2 gap-3 sm-w-50"
                >
                  <Grid className="d-flex justify-content-center border p-2 rounded">
                    <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://get-picto.com/wp-content/uploads/2023/01/logo-facebook-icon.png"
                    />
                    <Typography
                      component="h6"
                      variant="h5"
                      className="fw-lighter fs-4 ms-3"
                    >
                      <a href="/#" class="text-decoration-none text-secondary">
                        Facebook
                      </a>
                    </Typography>
                  </Grid>
                  <Grid className="d-flex justify-content-center border p-2 rounded">
                    <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                    />
                    <Typography
                      component="h6"
                      variant="h5"
                      className="fw-lighter fs-4 ms-3"
                    >
                      <a href="/#" class="text-decoration-none text-secondary">
                        Google
                      </a>
                    </Typography>
                  </Grid>
                </Container> */}
                <Grid className="d-flex align-items-center justify-content-center mt-3">
                  <Typography
                    component="h6"
                    variant="h6 body2"
                    className="text-center fw-lighter fs-6"
                  >
                    Vous n’avez pas de compte?
                  </Typography>
                  <Link
                    href="/account"
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

export default Login;
