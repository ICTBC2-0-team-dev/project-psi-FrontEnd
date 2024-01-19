import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar.js'
import NavBar from './NavBar.js'
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Footer from './Footer.js'
import axios from "../../axios.js"
import { useDispatch } from 'react-redux';
import { setProjetId } from '../../features/projetsSlice'
import { useSelector } from 'react-redux';


const AddProjets = () => {

  const dispatch = useDispatch();
  const [Domaine, setDomaine] = React.useState('');

  const handleChange = (event) => {
    setDomaine(event.target.value);
  };
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    height: 20px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  /** recuperation des pays*/
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const pays = selectedCountry;

  useEffect(() => {
    axios.get('/pays')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };


  // ville
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const ville = selectedCity;
  console.log(selectedCity);

  useEffect(() => {
    axios.get('/villes')
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCityChange = event => {
    setSelectedCity(event.target.value);
  };

  /** recuperationdes domaine */
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('');
  const domain = selectedDomain;
  useEffect(() => {
    fetchDomains();
  }, []);

  const fetchDomains = async () => {
    try {
      const response = await axios.get('/domains');
      setDomains(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedDomain(event.target.value);
  };



  /*const handleSubmit = () => {
    if (selectedCity !== '') {
      const data = { cityId: selectedCity };

      axios.post('http://localhost:8081/projet', data)
        .then(response => {
          console.log(response.data);
          // Traitez la réponse de l'API selon vos besoins
        })
        .catch(error => {
          console.log(error);
        });
    }
  };*/

  const [errorMessage, setErrorMessage] = useState('');
  const [errorWording, setErrorWording] = useState('');
  const [errorMinAmoun, setErrorMinAmoun] = useState('');
  const [errorMaxAmount, setErrorMaxAmount] = useState('');
  const [errorDelay, setErrorDelay] = useState('');
  const [errorMonnaie, setErrorMonnaie] = useState('');
  const [errorDate, setErrorDate] = useState('');
  const [errorDomain, setErrorDomain] = useState('');
  const [errorVille, setErrorVille] = useState('');
  const [errorPays, setErrorPays] = useState('');

  const [errorMessages, setErrorMessages] = useState('');
  const [errorDescriptiom, setErrorDescriptiom] = useState('');

  /** ajouter un projet */
  const user = useSelector((state) => state.userElement);
  const users = user;
  //console.log(user);

  const [title, setTitle] = useState("");
  const [wording, setWording] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [selectedDelay, setSelectedDelay] = useState(null);
  const [monnaie, setMonnaie] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  let maxWords = 100;
  let wordCount = wording.trim().split(/\s+/).length;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleDateChanges = (date) => {
    setSelectedDelay(date);
  };

  const dateCreation = selectedDate

  const delay = selectedDelay

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "") {
      setErrorMessage('Veuillez remplir ce champ.');
    } else if (wording === "") {
      setErrorWording('Veuillez remplir ce champ.');
    }
    else if (minAmount === "") {
      setErrorMinAmoun('Veuillez remplir ce champ.');
    }
    else if (maxAmount === "") {
      setErrorMaxAmount('Veuillez remplir ce champ.');
    }
    else if (delay === "") {
      setErrorDelay('Veuillez remplir ce champ.');
    }
    else if (monnaie === "") {
      setMonnaie('Veuillez remplir ce champ.');
    }
    else if (dateCreation === "") {
      setErrorDate('Veuillez remplir ce champ.');
    }
    else if (domain === "") {
      setErrorDomain('Veuillez remplir ce champ.');
    }
    else if (ville === "") {
      setErrorVille('Veuillez remplir ce champ.');
    }
    else if (pays === "") {
      setErrorPays('Veuillez remplir ce champ.');
    }
    else if (minAmount > maxAmount) {

      setErrorMessages('Le montant minimum doit être inférieur au montant maximum');

    } else if (wordCount > maxWords) {
      setErrorDescriptiom('Le nombre de mots doit être inférieur ou égal à 300.');
    } else {
      // Envoyer la requête à l'API ici
      try {
        const response = await axios.post(`/project`, {
          title,
          wording,
          minAmount,
          maxAmount,
          delay,
          monnaie,
          dateCreation,
          domain,
          ville,
          pays,
          users,
        });

        console.log(cities);
        alert('Projet creer avec success')
        dispatch(setProjetId(response.data.id))

        if (response.status === 200) {
          setTitle("");
          setWording("");
          setMinAmount("");
          setMaxAmount("");
          setSelectedDelay("");
          setMonnaie("");
          setSelectedDate("");
          setSelectedDomain("");
          setSelectedCity("");
          setSelectedCountry("");
        }
      } catch (error) {
        console.error(error);
      }

    }

  };

  return (


    <>
      <NavBar />

      <Box className='mt-5' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Sidebar />
        <Box sx={{ p: 3 }}>
          <Typography fontWeight="bold" noWrap className='fs-3 text-center'>
            Ajouter Un Projtes
          </Typography>
        </Box>
        <Grid className='mt-5 mt-sm-0'>
          <Grid>
            <Container className='mt-5'>
              <div className="row ">
                <div className="row ">
                  <div className='col'>
                    {/* <FormControl fullWidth sx={{ m: 1,}} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">Nom du Projet</FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        'aria-label': 'projet',
                      }}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormControl> */}
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div class="col-6">
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Nom du Projet</FormHelperText>
                      <OutlinedInput
                        id="outlined-adornment-projet"
                        // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-projet-helper-text"
                        inputProps={{
                          'aria-label': 'projet',
                        }}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
                    </FormControl>
                  </div>
                  <div class="col-6">
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <FormHelperText id="outlined-projet-helper-text">Domaine</FormHelperText>
                      <InputLabel id="demo-select-small-label"></InputLabel>
                      <Select value={selectedDomain} onChange={handleSelectChange}>
                        <MenuItem value="">Sélectionnez un domaine</MenuItem>
                        {domains.map((domain) => (
                          <MenuItem key={domain.id} value={domain}>
                            {domain.titled}
                          </MenuItem>
                        ))}
                      </Select>
                      {errorDomain && <span style={{ color: "red" }}>{errorDomain}</span>}
                    </FormControl>
                  </div>
                </div>
                <div className='row'>
                  <div className='row'>
                    <div className='col'>
                      <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'>
                        Salaires
                      </Typography>
                    </div>
                  </div>
                  <div className='col-4'>
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Minimum</FormHelperText>
                      <OutlinedInput
                        id="outlined-adornment-projet"
                        endAdornment={<InputAdornment position="end">XAF</InputAdornment>}
                        aria-describedby="outlined-projet-helper-text"
                        inputProps={{
                          'aria-label': 'projet',
                        }}
                        type='number'
                        value={minAmount}
                        onChange={(e) => setMinAmount(e.target.value)}
                      />
                      {errorMinAmoun && <span style={{ color: "red" }}>{errorMinAmoun}</span>}
                      {errorMessages && <span style={{ color: "red" }}>{errorMessages}</span>}
                    </FormControl>
                  </div>
                  <div className='col-4'>
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Maximum</FormHelperText>
                      <OutlinedInput
                        id="outlined-adornment-projet"
                        endAdornment={<InputAdornment position="end">XAF</InputAdornment>}
                        aria-describedby="outlined-projet-helper-text"
                        inputProps={{
                          'aria-label': 'projet',
                        }}
                        type='number'
                        value={maxAmount}
                        onChange={(e) => setMaxAmount(e.target.value)}
                      />
                      {errorMaxAmount && <span style={{ color: "red" }}>{errorMaxAmount}</span>}
                    </FormControl>
                  </div>
                  <div class="col-4">
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <FormHelperText id="outlined-projet-helper-text">Devise</FormHelperText>
                      <InputLabel id="demo-select-label"></InputLabel>
                      <Select value={monnaie} onChange={(e) => setMonnaie(e.target.value)}>
                        <MenuItem value="CFA">CFA</MenuItem>
                        <MenuItem value="Euro">Euro</MenuItem>
                        <MenuItem value="Dollar">Dollar</MenuItem>
                      </Select>
                      {errorMonnaie && <span style={{ color: "red" }}>{errorMonnaie}</span>}
                    </FormControl>
                  </div>
                </div>
                <div className='row'>
                  <div className='row'>
                    <div className='col'>
                      <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'>
                        Informations
                      </Typography>
                    </div>
                  </div>
                  <div className='col-6'>
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Date De creation</FormHelperText>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {errorDelay && <span style={{ color: "red" }}>{errorDelay}</span>}
                      </LocalizationProvider>
                    </FormControl>
                  </div>
                  <div className='col-6'>
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Date D’expiration</FormHelperText>
                      <LocalizationProvider dateAdapter={AdapterDayjs} value={delay} onChange={(e) => setDelay(e.target.value)}>
                        <DatePicker
                          value={selectedDelay}
                          onChange={handleDateChanges}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {errorDate && <span style={{ color: "red" }}>{errorDate}</span>}
                      </LocalizationProvider>
                    </FormControl>
                  </div>
                </div>
              </div>
              <Container className='mt-5'>
                < Box sx={{ backgroundColor: '#F9FAFB' }}>
                  <Container className='p-3'>
                    <div className='row'>
                      <div className='row'>
                        <div className='col'>
                          <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2 text-center'>
                            localisation
                          </Typography>
                        </div>
                        <Box className='pb-4'>
                          <div className='row'>
                            <div className="col-6">
                              <FormControl fullWidth sx={{ m: 1 }}>
                                <FormHelperText id="outlined-projet-helper-text">Pays</FormHelperText>
                                <Select value={selectedCountry} onChange={handleCountryChange}>
                                  <MenuItem value="">Select a country</MenuItem>
                                  {countries.map(country => (
                                    <MenuItem key={country.id} value={country}>
                                      {country.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                {errorPays && <span style={{ color: "red" }}>{errorPays}</span>}
                              </FormControl>
                            </div>
                            <div className="col-6">
                              <FormControl fullWidth sx={{ m: 1 }}>
                                <FormHelperText id="outlined-projet-helper-text">Ville</FormHelperText>
                                <InputLabel id="demo-select-label"></InputLabel>
                                <Select value={selectedCity} onChange={handleCityChange}>
                                  <MenuItem value="">Select a city</MenuItem>
                                  {cities.map(city => (
                                    <MenuItem key={city.id} value={city}>
                                      {city.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                {errorVille && <span style={{ color: "red" }}>{errorVille}</span>}
                              </FormControl>
                            </div>
                          </div>

                        </Box>
                      </div>
                    </div>
                  </Container>
                </Box>
              </Container>
              <div className='row mt-3'>
                <div className='row'>
                  <div className='col'>
                    <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'>
                      Description
                    </Typography>
                  </div>
                </div>

                <div className='col-12'>
                  <Textarea
                    value={wording}
                    onChange={(e) => setWording(e.target.value)}
                    placeholder="Entrer une description de 200 mots..."
                    required
                    sx={{ mb: 1 }}
                  />
                  {errorWording && <span style={{ color: "red" }}>{errorWording}</span>}
                  {errorDescriptiom && <span style={{ color: "red" }}>{errorDescriptiom}</span>}
                </div>
                <div className='mt-5'>
                  <Button variant="contained" onClick={handleSubmit}>Ajouter</Button>
                </div>

              </div>
            </Container>
          </Grid>
        </Grid>


      </Box>
      <Footer />
    </>


  )
}

export default AddProjets