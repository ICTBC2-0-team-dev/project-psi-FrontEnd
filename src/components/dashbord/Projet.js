import React from "react";
import "./projet.css";
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
import { LinkContainer } from "react-router-bootstrap";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";


const Projet = () => {
  
  const top100Films = [
    { title: "All", year: 1994 },
    { title: "name", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
  ];

  /** data table */
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "EMPLOI",
      headerName: "EMPLOI",
      width: 150,
      editable: true,
    },
    {
      field: "STATUT",
      headerName: "STATUT",
      width: 150,
      editable: true,
    },
    {
      field: "FREELANCE",
      headerName: "FREELANCE",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "ACTION",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.EMPLOI || ""} ${params.row.STATUT || ""}`,
    },
  ];

  const rows = [
    { id: 1, STATUT: "Snow", EMPLOI: "Jon", FREELANCE: 35 },
    { id: 2, STATUT: "Lannister", EMPLOI: "Cersei", FREELANCE: 42 },
    { id: 3, STATUT: "Lannister", EMPLOI: "Jaime", FREELANCE: 45 },
    { id: 4, STATUT: "Stark", EMPLOI: "Arya", FREELANCE: 16 },
    { id: 5, STATUT: "Targaryen", EMPLOI: "Daenerys", FREELANCE: null },
    { id: 6, STATUT: "Melisandre", EMPLOI: null, FREELANCE: 150 },
    { id: 7, STATUT: "Clifford", EMPLOI: "Ferrara", FREELANCE: 44 },
    { id: 8, STATUT: "Frances", EMPLOI: "Rossini", FREELANCE: 36 },
    { id: 9, STATUT: "Roxie", EMPLOI: "Harvey", FREELANCE: 65 },
  ];

  return (
    <div className="element-employers">
      <div className="div">
        <div className="overlap">
          <div className="overlap">
            <div className="rectangle" />
            <div className="frame">
              <div className="first-check-box">
                <div
                  className="text-wrapper"
                  style={{ cursor: "pointer", color: "#00000080" }}
                >
                  Home
                </div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-2" style={{ cursor: "pointer" }}>
                  Freelance
                </div>
              </div>
              <div className="first-check-box-2">
                <div
                  className="text-wrapper-3"
                  style={{ cursor: "pointer", color: "#00000080" }}
                >
                  Space Market
                </div>
              </div>
              <div className="first-check-box-3">
                <div
                  className="text-wrapper"
                  style={{ cursor: "pointer", color: "#00000080" }}
                >
                  Consultant
                </div>
              </div>
              <div className="first-check-box-4">
                <div
                  className="text-wrapper"
                  style={{ cursor: "pointer", color: "#00000080" }}
                >
                  Industrialisation
                </div>
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
            <img className="line-2" alt="Line" src="line-11.svg" />
          </div>
          <LinkContainer to={`/Dashbord/Accueil`}>
            <div className="sidebar-nav-tabs">
              <img className="img" alt="Phosphor duotone" src={houseLine} />
              <div className="text-wrapper-5" style={{ cursor: "pointer" }}>Dashboard</div>
            </div>
          </LinkContainer>
          <p className="mes-projtes">
            <span className="span">Mes Projtes&nbsp;&nbsp;</span>
            <span className="text-wrapper-6">(50)</span>
          </p>
          <div className="overlap-2">
            <div className="sidebar-nav-tabs-2">
              <img className="img" alt="Bx user circle" src={user1} />
              <div className="text-wrapper-7" style={{ cursor: "pointer" }}>Profil</div>
            </div>
            <LinkContainer to={`/Dashbord/Add-Projet`}>
            <div className="sidebar-nav-tabs-3">
              <img className="img" alt="Bx plus circle" src={plus} />
              <div className="text-wrapper-7" style={{ cursor: "pointer" }}>Ajouter Un Projet</div>
            </div>
            </LinkContainer>
            <div className="sidebar-nav-tabs-4">
              <img className="img" alt="Bx briefcase alt" src={sac} />
              <div
                className="text-wrapper-8"
                style={{ postion: "relative", top: "-0px", cursor: "pointer" }}
              >
                Mes Projets
              </div>
            </div>
            <div className="sidebar-nav-tabs-5">
              <img className="img" alt="Bxs user detail" src={user} />
              <div className="text-wrapper-7" style={{ cursor: "pointer" }}>Freelance</div>
            </div>
            <div className="sidebar-nav-tabs-6">
              <img className="img" alt="Bx cog" src={reglage} />
              <div className="text-wrapper-7" style={{ cursor: "pointer" }}>Parametres</div>
            </div>
          </div>
          <div className="sidebar-nav-tabs-7">
            <img className="img" alt="Phosphor duotone" src={signOut} />
            <div className="text-wrapper-7" style={{ cursor: "pointer" }}>Deconnexion</div>
          </div>
          <div className="element-2">
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>

          <div className="frame-20">
            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="free-solo-demo"
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField {...params} label=" search option" />
                )}
              />
            </Stack>
          </div>
          <div className="frame-23">
            <img
              className="img-2"
              alt="Bx chevron left"
              src="bx-chevron-left-1.svg"
            />
            <div className="frame-24">
              <div className="text-wrapper-20">1</div>
            </div>
            <img
              className="img-2"
              alt="Bx chevron right"
              src="bx-chevron-right-1.svg"
            />
          </div>
        </div>
        <div className="text-wrapper-21">copyright</div>
        <img className="line-3" alt="Line" src="line-4.svg" />
      </div>
    </div>
  );
};

export default Projet;
