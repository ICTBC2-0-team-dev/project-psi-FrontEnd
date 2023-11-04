import React from "react";
import "./Accueil.css";
import logoPSI from "../../img/logoPSI.png";
import Vector from "../../img/Vector.svg";
import houseLine from "../../img/HouseLine.svg";
import user from "../../img/user.svg";
import user1 from "../../img/user1.svg";
import plus from "../../img/plus.svg";
import reglage from "../../img/reglage.svg";
import sac from "../../img/sac.svg";
import sacjaune from "../../img/sacJaune.svg";
import sacBleu from "../../img/sacBleu.svg";
import notification from "../../img/Notification.svg";
import profil from "../../img/profil.svg";
import signOut from "../../img/SignOut.svg";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Index = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="element-employers" style={{overflowX:'hidden', overflowY:'scroll'}}>
      <div className="div" style={{height:'916px'}}>
        <div className="overlap">
          <div className="overlap">
            <div className="rectangle" />
            <div className="frame">
              <div className="first-check-box">
                <div className="text-wrapper" style={{ cursor: "pointer" }}>
                  Home
                </div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-2" style={{ cursor: "pointer" }}>
                  Freelance
                </div>
              </div>
              <div className="first-check-box-2">
                <div className="text-wrapper-3" style={{ cursor: "pointer" }}>
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
          </div>
          <Link to={`/Dashbord/Accueil`}>
            <div className="sidebar-nav-tabs">
              <img className="img" alt="Phosphor duotone" src={houseLine} />
              <div className="text-wrapper-5" style={{ cursor: "pointer" }}>
                Dashboard
              </div>
            </div>
          </Link>
          <div className="breadcrumbs">
            <div className="text-wrapper-6">👋 Hey, Kevin.</div>
            <div className="breadcrumbs-2">
              <p className="p">Here is all your Relik analytics overview</p>
            </div>
          </div>
          <div className="frame-3">
            <div className="frame-4" style={{position:'relative', top:"8px"}}>
              <div className="group">
                <div className="overlap-group-2">
                  <div className="text-wrapper-7">520</div>
                  <div className="text-wrapper-8"  style={{position:'relative', top:"8px"}}>Emploi</div>
                </div>
              </div>
              <div className="frame-5">
                <div className="rectangle-3" style={{position:'relative',left:'70px'}} />
                <img
                  className="bx-briefcase-alt"
                  alt="Bx briefcase alt"
                  src={sacBleu}
                  style={{position:'relative', top:"3px", left:'15px'}}
                />
              </div>
            </div>
          </div>
          <div className="frame-6" style={{position:'relative', top:"170px", width:'350px'}}>
            <div className="frame-7" style={{position:'relative', top:"8px"}}>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="text-wrapper-7">2750</div>
                  <div className="text-wrapper-8" style={{position:'relative', top:"8px"}}>Freelance</div>
                </div>
              </div>
              <div className="frame-8">
                <div className="rectangle-3" style={{position:'relative',left:'70px'}} />
                <img
                  className="bx-briefcase-alt"
                  alt="Bx briefcase alt"
                  src={sacjaune}
                  style={{position:'relative', top:"3px", left:'15px'}}
                />
              </div>
            </div>
          </div>
          <div className="text-wrapper-9">Offres d’emploi recents</div>
          <div className="overlap-2">
            <div className="sidebar-nav-tabs-2">
              <img className="img" alt="Bx user circle" src={user1} />
              <div className="text-wrapper-10">Profil</div>
            </div>
            <Link to={`/Dashbord/Add-Projet`}>
            <div className="sidebar-nav-tabs-3">
              <img className="img" alt="Bx plus circle" src={plus} />
              <div className="text-wrapper-10"style={{cursor:'pointer'}} >Ajouter Un Projet</div>
            </div>
            </Link>
            <Link to={`/Dashbord/projet`}>
              <div className="sidebar-nav-tabs-5">
                <img className="img" alt="Bx briefcase alt" src={sac} style={{position: 'relative', marginBottom:'33%'}} />
                <div className="text-wrapper-10" style={{cursor:'pointer', position: 'relative', marginBottom:'33%'}} >Mes Projets</div>
              </div>
            </Link>
            <Link to={`/Dashbord/Freelance`}>
              <div className="sidebar-nav-tabs-5">
                <img className="img" alt="Bxs user detail" src={user} />
                <div className="text-wrapper-10">Freelance</div>
              </div>
            </Link>
            <div className="sidebar-nav-tabs-6">
              <img className="img" alt="Bx cog" src={reglage} />
              <div className="text-wrapper-10">Parametres</div>
            </div>
          </div>
          <div className="sidebar-nav-tabs-7">
            <img className="img" alt="Phosphor duotone" src={signOut} />
            <div className="text-wrapper-10" style={{ cursor: "pointer" }}>
              Deconnexion
            </div>
          </div>
          <div style={{
                left: '640px',
                padding: ' 20px',
                position: 'absolute',
                top: '536px',
                width: '1030px',
          }}>
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
        </div>
        <div className="text-wrapper-24">copyright</div>
        <img className="line-3" alt="Line" src="line-4.svg" />
      </div>
    </div>
  );
};

export default Index;
