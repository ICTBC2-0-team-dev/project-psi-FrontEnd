import React from "react";
import Login from "./pages/freelance/Login";
import LoginVerification from "./pages/freelance/LoginVerification";
import Resetpassword from "./pages/freelance/Resetpassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "./pages/profil/Profil";
import HomeScreen from "./pages/ResponsiveAppBar"
import ProfilEntreprise from "./pages/profil/ProfilEntreprise";
import ProfilReseaux from "./pages/profil/ProfilReseaux";
import ProfilContact from "./pages/profil/ProfilContact";
import EndProfil from "./pages/profil/EndProfil";
import EmailVerification from "./pages/freelance/EmailVerification";
import Account from "./pages/freelance/Account";
import ForgetPassword from "./pages/freelance/ForgetPassword";
import ResponsiveAppBar from "./pages/ResponsiveAppBar";
import DetailProjet from "./pages/DetailProjet";
import DashProfil from "./components/Dashbord1/DashProfil";
import Freelance from "./components/Dashbord1/Freelance";
import ProfilDash from "./components/Dashbord1/ProfilDash";
// import Accueil from "./components/dashbord/Accueil"
// import Projet from "./components/dashbord/Projet"
import AddProjet from "./components/Dashbord1/AddProjet";
import Projet from "./components/Dashbord1/Projet"
import Projets from "./components/DashboadFreelance/Projet";
import Module from "./components/Dashbord1/Module"
//import Paramettre from "./components/DashboadFreelance/Paramettre"
import ProfilFreelance from './pages/freelance/ProfilFre'
import Home from "./pages/spaceMarket/Home";

//import dashbord profil
import DashAccueil from './components/DashboadFreelance/DashAccueil'

import AllProjet from "./pages/AllProjet"
import DetailProduit from "./pages/spaceMarket/DetailProduit";

import Liste from "./components/Dashbord1/ListeProduit"
import Commande from "./components/Dashbord1/CommandeProduit"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen/>} />
          <Route path="/loginVerification" element={<LoginVerification />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/account" element={<Account />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profil/fondation" element={<ProfilEntreprise />} />
          <Route path="/profil/reseau-sociaux" element={<ProfilReseaux />} />
          <Route path="/profil/contact" element={<ProfilContact />} />
          <Route path="/endProfil" element={<EndProfil />} />
          {/* <Route path="/home" element={<HomeScreen/>} /> */}
          <Route path="/responsiveAppBar" element={<ResponsiveAppBar/>}/>
          <Route path="/DetailProjet" element={<DetailProjet/>}/>
          <Route path="/DashProfil" element={<DashProfil/>}/>
          <Route path="/Freelance" element={<Freelance/>}/>
          <Route path="/ProfilDash" element={<ProfilDash/>}/>
          <Route path="/AddProjet" element={<AddProjet />} /> 
          <Route path="/Projet" element={<Projet />} />
          <Route path="/Module" element={<Module />} /> 
          {/* <Route path="/Dashbord/Accueil" element={<Accueil />} />
          <Route path="/Dashbord/projet" element={<Projet />} />*/}
          <Route path="/DashAccueil" element={<DashAccueil />} />
          <Route path="/Projets" element={<Projets />} /> {/** inport as dash freelance */}
          <Route path="/ProfilFreelance" element={<ProfilFreelance />} />
          <Route path="/AllProjet" element={<AllProjet />} />

          {/* module space market */}
          <Route path="/SpaceMarket" element={<Home />} />
          <Route path="/DetailProduit" element={<DetailProduit />} />
          {/* module space market Route dashboard */}
          <Route path="/liste" element={<Liste />} /> 
          <Route path="/commande" element={<Commande />} /> 



          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
