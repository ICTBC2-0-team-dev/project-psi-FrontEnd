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
import Accueil from "./components/dashbord/Accueil";
import Projet from "./components/dashbord/Pojet"
import AddProjet from "./components/dashbord/AddProjet";

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
          <Route path="/Dashbord/Accueil" element={<Accueil />} />
          <Route path="/Dashbord/projet" element={<Projet />} />
          <Route path="/Dashbord/Add-Projet" element={<AddProjet />} />



          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
