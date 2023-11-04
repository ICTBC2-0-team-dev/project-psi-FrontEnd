import React, { useState } from "react";
import "./AddProjet.css";
import logoPSI from "../../img/logoPSI.png";
import Vector from "../../img/Vector.svg";
import houseLine from "../../img/HouseLine.svg";
import user from "../../img/user.svg";
import user1 from "../../img/user1.svg";
import plus from "../../img/plus.svg";
import reglage from "../../img/reglage.svg";
import sac from "../../img/sac.svg";
import notification from "../../img/Notification.svg";
import profil from "../../img/profil.svg";
import signOut from "../../img/SignOut.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import NativeSelect from "@mui/material/NativeSelect";
import DatePicker from "./DataPiker";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

const AddProjet = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [monaie, setMonaie] = React.useState("");

  const handleChanges = (event) => {
    setMonaie(event.target.value);
  };

  const [experience, setExperience] = React.useState("");
  const handleChangesexperience = (event) => {
    setExperience(event.target.value);
  };
  const [modules, setModules] = React.useState("");
  const handleChangesmodules = (event) => {
    setModules(event.target.value);
  };

  const [domaines, setDomaines] = React.useState("");

  const handleChangeDomaines = (event) => {
    setDomaines(event.target.value);
  };

  /** for reactquil text zone */
  const [content, setContent] = useState("");

  const handleChangezone = (value) => {
    setContent(value);
  };

  return (
    <div className="element-employers">
      <div className="div">
        <div className="overlap">
          <div className="overlap">
            <div className="rectangle" />
            <div className="frame">
              <div className="first-check-box">
                <div className="text-wrapper">Home</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-2">Freelance</div>
              </div>
              <div className="first-check-box-2">
                <div className="text-wrapper-3">Space Market</div>
              </div>
              <div className="first-check-box-3">
                <div className="text-wrapper">Consultant</div>
              </div>
              <div className="first-check-box-4">
                <div className="text-wrapper">Industrialisation</div>
              </div>
            </div>
            <div className="rectangle-2" />
            <img className="logo-PSI" alt="Logo PSI" src={logoPSI} />
            <div className="informations">
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="text-wrapper-4">Projets</div>
                  <img className="vector" alt="Vector" src={Vector} />
                </div>
              </div>
              <div className="img">
                <div className="overlap-group">
                  <img className="icon" alt="Icon" src={notification} />
                  <div className="ellipse" />
                </div>
              </div>
              <div className="profile">
                <img className="ellipse-2" alt="Ellipse" src={profil} />
              </div>
            </div>
          </div>
          <div className="overlap-2">
            <Link to={`/Dashbord/Accueil`}>
              <div
                className="sidebar-nav-tabs"
                style={{ position: "relative", top: "-30px" }}
              >
                <img className="img" alt="Phosphor duotone" src={houseLine} />
                <div className="text-wrapper-5" style={{cursor:'pointer'}}>Dashboard</div>
              </div>
            </Link>
            <div className="sidebar-nav-tabs-2">
              <img className="img" alt="Bx user circle" src={user1} />
              <div className="text-wrapper-6">Profil</div>
            </div>
            <Link to={`/Dashbord/Add-Projet`}>
              <div className="sidebar-nav-tabs-3">
                <img className="img" alt="Bx plus circle" src={plus} />
                <div className="text-wrapper-7" style={{cursor:'pointer'}}>Ajouter Un Projet</div>
              </div>
            </Link>
            <Link to={`/Dashbord/projet`}>
              <div className="sidebar-nav-tabs-4">
                <img className="img" alt="Bx briefcase alt" src={sac} />
                <div className="text-wrapper-5" style={{cursor:'pointer'}}>Mes Projets</div>
              </div>
            </Link>
            <div className="sidebar-nav-tabs-5">
              <img className="img" alt="Bxs user detail" src={user} />
              <div className="text-wrapper-6">Freelance</div>
            </div>
            <div className="sidebar-nav-tabs-6">
              <img className="img" alt="Bx cog" src={reglage} />
              <div className="text-wrapper-6">Parametres</div>
            </div>
          </div>
          <div className="text-wrapper-8">Ajouter Un Projtes</div>
          <div className="text-wrapper-9">Salaires</div>
          <div className="text-wrapper-10">Informations</div>
          <div
            className="sidebar-nav-tabs-8"
            style={{ position: "relative", top: "65%" }}
          >
            <img className="img" alt="Phosphor duotone" src={signOut} />
            <div className="text-wrapper-6">Deconnexion</div>
          </div>
          <div className="group">
            <Box
              sx={{
                width: 900,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Nom Du Projet" id="fullWidth" />
            </Box>
          </div>
          <div className="group-wrapper">
            <Box
              sx={{
                width: 600,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Tags" id="fullWidth" />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "34ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl
                style={{ position: "relative", top: "-65px", left: "599px" }}
              >
                <InputLabel id="demo-select-small-label">Domaines</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="frame-6">
            <div
              class="input-group mb-3 col-6"
              style={{ width: "320px", height: "55px" }}
            >
              <input
                type="text"
                class="form-control"
                placeholder="MINIMUM"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text"
                  id="basic-addon2"
                  style={{ height: "55px" }}
                >
                  XAF
                </span>
              </div>
            </div>
            <div className="group-4">
              <div
                class="input-group mb-3 col-6"
                style={{ width: "350px", height: "55px" }}
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="MAXIMUM"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text"
                    id="basic-addon2"
                    style={{ height: "55px" }}
                  >
                    XAF
                  </span>
                </div>
              </div>
            </div>
            <div
              className="group-5"
              style={{ postion: "relative", left: "30px", top: "-8px" }}
            >
              <FormControl sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  monaie
                </InputLabel>
                <Select
                  id="demo-controlled-open-select"
                  value={monaie}
                  label="manaie"
                  onChange={handleChanges}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="frame-10">
            <div
              className="group-6"
              style={{ postion: "relative", left: "-3px" }}
            >
              <div>
                <FormControl sx={{ m: 1, minWidth: 320 }}>
                  <InputLabel id="demo-controlled-open-select-label">
                    experience
                  </InputLabel>
                  <Select
                    id="demo-controlled-open-select"
                    value={experience}
                    label="manaie"
                    onChange={handleChangesexperience}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="group-6">
              <div
                className="group-6"
                style={{
                  postion: "relative",
                  left: "-25px",
                  top: "12px",
                  height: "48px",
                  width: "444px",
                }}
              >
                <div>
                  <DatePicker />
                </div>
              </div>
            </div>
            <div
              className="group-5"
              style={{ postion: "relative", left: "-180px" }}
            >
              <div>
                <FormControl sx={{ m: 1, minWidth: 350 }}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Module
                  </InputLabel>
                  <Select
                    id="demo-controlled-open-select"
                    value={modules}
                    label="manaie"
                    onChange={handleChangesmodules}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-17" style={{ marginLeft: "-85px" }}>
              Localisation
            </div>
            <div className="group-7" style={{ left: "102px" }}>
              <div>
                <Box
                  sx={{
                    width: 600,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Pays"
                    placeholder="entrer le pays"
                    id="fullWidth"
                  />
                </Box>
              </div>
            </div>
            <div className="group-8" style={{ left: "462px" }}>
              <div>
                <Box
                  sx={{
                    width: 600,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Ville"
                    placeholder="entrer la viller"
                    id="fullWidth"
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="text-wrapper-18">Description</div>
          <div
            style={{
              height: "163px",
              left: "640px",
              position: "absolute",
              top: "1190px",
              width: "1030px",
            }}
          >
            <ReactQuill
              style={{ width: "905px", height: "80px" }}
              value={content}
              onChange={handleChangezone}
              placeholder="Entrer une description ..."
              required
            />
          </div>
          <div className="frame-14">
            <div className="frame-15">
              <div className="text-wrapper-19" style={{ cursor: "pointer" }}>
                Ajouter
              </div>
            </div>
          </div>
          <div className="frame-16">
            <div className="text-wrapper-20" style={{ marginLeft: "-55px" }}>
              Module1
            </div>
            <div style={{ position: "relative", top: "55px" }}>
              <Box
                sx={{
                  width: 600,
                  maxWidth: "100%",
                }}
              >
                <TextField fullWidth label="Tags" id="fullWidth" />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "34ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl
                  style={{ position: "relative", top: "-65px", left: "599px" }}
                >
                  <InputLabel id="demo-select-small-label">Domaines</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={domaines}
                    label="Age"
                    onChange={handleChangeDomaines}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
        <div className="text-wrapper-23">copyright@PSI</div>
        <img className="line-5" alt="Line" src="line-4.svg" />
      </div>
    </div>
  );
};

export default AddProjet;
