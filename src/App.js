import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/ResponsiveAppBar";
import Login from "./pages/freelance/Login";
import LoginVerification from "./pages/freelance/LoginVerification";
import Resetpassword from "./pages/freelance/Resetpassword";

//profile employer
import Checkout from "./pages/Entreprise/Checkout";
import Contact from "./pages/Entreprise/Contact";
import Entreprises from "./pages/Entreprise/Entreprise";
import Informations from "./pages/Entreprise/Informations";
import ProfilEnd from "./pages/Entreprise/ProfilEnd";
import Reseaux from "./pages/Entreprise/Reseaux";


import DashProfil from "./components/Dashbord1/DashProfil";
import Freelance from "./components/Dashbord1/Freelance";
import ProfilDash from "./components/Dashbord1/ProfilDash";
import DetailProjet from "./pages/DetailProjet";
import ResponsiveAppBar from "./pages/ResponsiveAppBar";
import Account from "./pages/freelance/Account";
import EmailVerification from "./pages/freelance/EmailVerification";
import ForgetPassword from "./pages/freelance/ForgetPassword";
// import Accueil from "./components/dashbord/Accueil"
// import Projet from "./components/dashbord/Projet"
import Projets from "./components/DashboadFreelance/Projet";
import AddProjet from "./components/Dashbord1/AddProjet";
import Module from "./components/Dashbord1/Module";
import Projet from "./components/Dashbord1/Projet";
//import Paramettre from "./components/DashboadFreelance/Paramettre"
import ProfilFreelance from './pages/freelance/ProfilFre';

// spameMarket
import DetailProduit from "./pages/spaceMarket/DetailProduit";
import Home from "./pages/spaceMarket/Home";
import Rapport from "./pages/spaceMarket/Rapport";
import Tendance from "./pages/spaceMarket/Tendance";

//import dashbord profil
import DashAccueil from './components/DashboadFreelance/DashAccueil';

import AllProjet from "./pages/AllProjet";

import Commande from "./components/Dashbord1/CommandeProduit";
import Liste from "./components/Dashbord1/ListeProduit";

// import dashbord admin

import Accueil from "./components/Admin/Accueil";
import AddActualite from "./components/Admin/AddActualite";
import Produit from "./components/Admin/Produit";
import SidebarAdmin from "./components/Admin/SidebarAdmin";
import Utilisateur from "./components/Admin/Utilisateur";
import Index from "./pages/Home";

// not found page
import NotFound from './pages/not found/Index';

// About
import About from './pages/about/Index';

//medias
import Actualite from "./pages/medias/Actualite";
import DetailMarcherSPace from "./pages/medias/DetailMarcherSPace";
import Evenement from "./pages/medias/Evenement";
import MarcherSpace from "./pages/medias/MarcherSpace";

//contact
import Contact_us from "./pages/contact/Contact_us";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />

          {/** authentification */}
          <Route path="/loginVerification" element={<LoginVerification />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/account" element={<Account />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />

          {/**section profil */}
          <Route path="/checkout" element={<ProfilEnd />} />
          <Route path="/Entreprises" element={<Entreprises />} />
          <Route path="/Informations" element={<Informations />} />
          <Route path="/Reseaux" element={<Reseaux />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/profi" element={<Checkout />} />


          {/* <Route path="/profil/fondation" element={<ProfilEntreprise />} />
          <Route path="/profil/reseau-sociaux" element={<ProfilReseaux />} />
          <Route path="/profil/contact" element={<ProfilContact />} />
          <Route path="/endProfil" element={<EndProfil />} />
          <Route path="/profil" element={<Profil />} /> */}

          {/* <Route path="/home" element={<HomeScreen/>} /> */}
          <Route path="/responsiveAppBar" element={<ResponsiveAppBar />} />

          {/**section routes des employeurs */}
          <Route path="/DetailProjet" element={<DetailProjet />} />
          <Route path="/DashProfil" element={<DashProfil />} />
          <Route path="/Freelance" element={<Freelance />} />
          <Route path="/ProfilDash" element={<ProfilDash />} />
          <Route path="/AddProjet" element={<AddProjet />} />
          <Route path="/Projet" element={<Projet />} />
          <Route path="/Module" element={<Module />} />

          {/* <Route path="/Dashbord/Accueil" element={<Accueil />} />
          <Route path="/Dashbord/projet" element={<Projet />} />*/}

          {/**section routes des freelance */}
          <Route path="/DashAccueil" element={<DashAccueil />} />
          <Route path="/Projets" element={<Projets />} /> {/** inport as dash freelance */}
          <Route path="/ProfilFreelance" element={<ProfilFreelance />} />
          <Route path="/AllProjet" element={<AllProjet />} />

          {/** Route de l'admin */}
          <Route path="/produitAdmin" element={<Produit />} />
          <Route path="/utilisateur" element={<Utilisateur />} />
          <Route path="/accuiel" element={<Accueil />} />
          <Route path="/sidebarAdmin" element={<SidebarAdmin />} />
          <Route path="/AddActuality" element={<AddActualite />} />

          {/* module space market */}
          <Route path="/SpaceMarket" element={<Home />} />
          <Route path="/DetailProduit" element={<DetailProduit />} />
          <Route path="/Tendance" element={<Tendance />} />
          <Route path="/Rapport" element={<Rapport />} />


          {/* module space market Route dashboard */}
          <Route path="/liste" element={<Liste />} />
          <Route path="/commande" element={<Commande />} />

          <Route path="/freelancePage" element={<HomeScreen />} />

          {/** not found */}
          <Route path="/NotFound" element={<NotFound />} />

          {/** About */}
          <Route path="/about" element={<About />} />

          {/** About */}
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/evenement" element={<Evenement />} />
          <Route path="/MarcherSpace" element={<MarcherSpace />} />
          <Route path="/DetailMarcherSPace" element={<DetailMarcherSPace />} />

          {/** Contact */}
          <Route path="/Contact_us" element={<Contact_us />} />

          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
