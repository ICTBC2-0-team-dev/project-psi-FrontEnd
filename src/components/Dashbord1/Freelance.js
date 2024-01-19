import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar.js";
import NavBar from "./NavBar.js";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { grey } from "@mui/material/colors";
import LocationOn from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import cv from "../../img/homme.jpg";
import Footer from "./Footer.js";
import axios from "../../axios.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height:"70%",
  weight:"50%",
  overflow:"scroll",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Freelance = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("/users");
        setProfiles(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfiles();
  }, []);

  // const renderCards = () => {
  //   const cardsPerRow = 3;
  //   const rows = Math.ceil(profiles.length / cardsPerRow);
  //   const cardGroups = [];

  //   for (let i = 0; i < rows; i++) {
  //     const start = i * cardsPerRow;
  //     const end = start + cardsPerRow;


  //     const cardGroup = profiles.map((profile) => (
  //       <Box className="mt-5" sx={{ display: "flex", flexDirection: "column"}}>
  //         <Sidebar />
  //       <Container className="mt-5" direction="column">
  //       <div className="row">
  //       <div className="col-4">
  //       <Card>
  //         <Box sx={{ p: 2, display: "flex"}} className="ms-2" key={profile.id} >
  //           <Avatar>{profile.name.charAt(0)}</Avatar>
  //           <Stack spacing={0.5} className="ms-3">
  //             <Typography fontWeight="bold" className="ps-2">
  //               {profile.name}
  //             </Typography>
  //             <Typography variant="body2" color="text.secondary">
  //               <LocationOn sx={{ color: "grey.500" }} /> {profile.wording}
  //             </Typography>
  //           </Stack>
  //         </Box>
  //         <Divider />
  //         <Stack
  //           direction="column"
  //           alignItems="start"
  //           sx={{ px: 2, py: 1, bgcolor: "background.default" }}
  //         >
  //           <Typography fontWeight="body" className="ps-2">
  //             {profile.description}
  //           </Typography>
  //         </Stack>
  //         <Stack
  //           direction="column"
  //           alignItems="center"
  //           sx={{ px: 2, py: 1, bgcolor: "background.default" }}
  //         >
  //           <div>
  //             <Button
  //               href={`http://localhost:8081/${profile.curriculumVitae}`}
  //               variant="outlined"
  //               startIcon={<VisibilityIcon />}
  //             >
  //               Voir CV
  //             </Button>
  //           </div>
  //         </Stack>
  //       </Card>
  //       </div>
  //       </div>
  //       </Container>
  //       </Box>
  //     ));

  //     cardGroups.push(
  //       <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }} key={i}>
  //         {cardGroup}
  //       </Box>
  //     );
  //   }

  //   return cardGroups;
  // };
  
  const filteredUsers = profiles.filter(user => user.userFunction.id === 2);
  // const filteredUser = profiles.find(user => user.userFunction.id === 2);
  console.log(filteredUsers);

  return (
    <>
      <NavBar />
      
      
         <Box className="mt-5" sx={{ display: "flex", flexDirection: "column"}}>
           <Sidebar />
         <Container className="mt-5" direction="column">
         <div className="row d-flex justify-content-center align-items-center">
        {filteredUsers.map(filteredUser => (
         <div className="col-md-3" >
         <Card>
           <Box  className="ms-2" key={filteredUser.id} >
             <Avatar>{filteredUser.userName.charAt(0)}</Avatar>
             <Stack spacing={0.5} className="ms-3">
               <Typography fontWeight="bold" className="ps-2">
                 {filteredUser.userName}
               </Typography>
               <Typography fontWeight="bold" className="ps-2">
                 Lien reseau: {filteredUser.profile.linkedInLink}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                 <LocationOn sx={{ color: "grey.500" }} /> {filteredUser.localisation}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                 Ages: {filteredUser.age}
               </Typography>
             </Stack>
           </Box>
           <Divider />
           <Stack
             direction="column"
             alignItems="start"
             sx={{ px: 2, py: 1, bgcolor: "background.default" }}
           >
             <Typography fontWeight="body" className="ps-2">
               Description: {filteredUser.profile.description}
             </Typography>
           </Stack>
           <Stack
             direction="column"
             alignItems="center"
             sx={{ px: 2, py: 1, bgcolor: "background.default" }}
           >
             <div>
               <Button
                 href={`http://localhost:8081/${filteredUser.profile.curriculumVitae}`}
                 variant="outlined"
                 startIcon={<VisibilityIcon />}
               >
                  Voir CV
               </Button>
             </div>
           </Stack>
         </Card>
         </div>
        ))}
         </div>
         
         </Container>
         </Box>
      <Footer />
    </>
  );
};

export default Freelance;
