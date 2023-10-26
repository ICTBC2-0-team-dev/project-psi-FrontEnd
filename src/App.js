import React from "react";
import Login from "./pages/freelance/Login";
import LoginVerification from "./pages/freelance/LoginVerification";
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
import ResponsiveAppBar from "./pages/ResponsiveAppBar";
// import FloatingActionButtonZoom from "./pages/FloatingActionButtonZoom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/loginVerification" element={<LoginVerification />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="account" element={<Account />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/homeScreen" element={<HomeScreen />} />
          <Route path="/profil/fondation" element={<ProfilEntreprise />} />
          <Route path="/profil/reseau-sociaux" element={<ProfilReseaux />} />
          <Route path="/profil/contact" element={<ProfilContact />} />
          <Route path="/endProfil" element={<EndProfil />} />
          <Route path="/home" element={<HomeScreen/>} />
          <Route path="/responsiveAppBar" element={<ResponsiveAppBar/>}/>

          {/* <Route path="/floatingActionButtonZoom" element={<FloatingActionButtonZoom/>}/> */}
          {/* <Route path="/Dashbord/Accueil" element={<Accueil />} />
          <Route path="/Dashbord/projet" element={<Projet />} />
          <Route path="/Dashbord/Add-Projet" element={<AddProjet />} /> */}



          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
