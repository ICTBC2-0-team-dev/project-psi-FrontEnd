import React from "react";
import Login from "./pages/freelance/Login";
import LoginginVerification from "./pages/freelance/LoginginVerification";
import Resetpassword from "./pages/freelance/Resetpassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "./pages/profil/Profil";
import HomeScreen from "./pages/HomeScreen";
import ProfilEntreprise from "./pages/profil/ProfilEntreprise";
import ProfilReseaux from "./pages/profil/ProfilReseaux";
import ProfilContact from "./pages/profil/ProfilContact";
import EndProfil from "./pages/profil/EndProfil";
import EmailVerification from "./pages/freelance/EmailVerification";
import Account from "./pages/freelance/Account";
import ForgetPassword from "./pages/freelance/ForgetPassword";
import Mesprojet from "./pages/dasboard/mesProjet/Mesprojet";
import Projet from "./pages/dasboard/projet/Projet";
import IndexDashboard from "./pages/dasboard/accueil/IndexDashboard";
import More from "./pages/dasboard/mesProjet/More";
import Profils from "./pages/dasboard/profil/Profil";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/loginginVerification" element={<LoginginVerification />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/homeScreen" element={<HomeScreen />} />
          <Route path="/profil/fondation" element={<ProfilEntreprise />} />
          <Route path="/profil/reseau-sociaux" element={<ProfilReseaux />} />
          <Route path="/profil/contact" element={<ProfilContact />} />
          <Route path="/endProfil" element={<EndProfil />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/account" element={<Account />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/mes-projet" element={<Mesprojet />} />
          <Route path="/dashbord/projet" element={<Projet />} />
          <Route path="/dashbord/acceuil" element={<IndexDashboard />} />
          <Route path="/mes-projet/detail" element={<More />} />
          <Route path="/dashbord/profil" element={<Profils />} />


          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
