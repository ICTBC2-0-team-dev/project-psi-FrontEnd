import React from "react";
import "./Mesprojet.css";
import logoPSI from "../../../img/logoPSI.png";
import Vector from "../../../img/Vector.svg";
import houseLine from "../../../img/HouseLine.svg";
import user from "../../../img/user.svg";
import user1 from "../../../img/user1.svg";
import plus from "../../../img/plus.svg";
import reglage from "../../../img/reglage.svg";
import sac from "../../../img/sac.svg";
import notification from "../../../img/Notification.svg";
import profil from "../../../img/profil.svg";
import signOut from "../../../img/SignOut.svg";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Mesprojet = () => {
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
          <div className="sidebar-nav-tabs">
            <img className="img" alt="Phosphor duotone" src={houseLine} />
            <div className="text-wrapper-5">Dashboard</div>
          </div>
          <p className="mes-projtes">
            <span className="span">Mes Projtes&nbsp;&nbsp;</span>
            <span className="text-wrapper-6">(50)</span>
          </p>
          <div className="overlap-2">
            <div className="sidebar-nav-tabs-2">
              <img className="img" alt="Bx user circle" src={user1} />
              <div className="text-wrapper-7">
                <a href="/dashbord/profil" style={{ color: "black" }}>
                  Profil
                </a>
              </div>
            </div>
            <div className="sidebar-nav-tabs-3">
              <img className="img" alt="Bx plus circle" src={plus} />
              <Link to={`/Dashbord/projet`}>
                <div className="text-wrapper-7" style={{color:'black'}}>Ajouter Un Projet</div>
              </Link>
            </div>
            <div className="sidebar-nav-tabs-4">
              <img className="img" alt="Bx briefcase alt" src={sac} />
              <div className="text-wrapper-8">Mes Projets</div>
            </div>
            <div className="sidebar-nav-tabs-5">
              <img className="img" alt="Bxs user detail" src={user} />
              <div className="text-wrapper-7">Freelance</div>
            </div>
            <div className="sidebar-nav-tabs-6">
              <img className="img" alt="Bx cog" src={reglage} />
              <div className="text-wrapper-7">Parametres</div>
            </div>
          </div>
          <div className="sidebar-nav-tabs-7">
            <img className="img" alt="Phosphor duotone" src={signOut} />
            <div className="text-wrapper-7">Deconnexion</div>
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
            <div className="frame-21">
              <div className="frame-22">
                <div className="text-wrapper-13">All</div>
                <img
                  className="bx-right-arrow-alt"
                  alt="Bx right arrow alt"
                  src="bx-right-arrow-alt-1-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mesprojet;
