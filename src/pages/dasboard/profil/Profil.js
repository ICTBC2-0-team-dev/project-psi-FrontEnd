import React from "react";
import "./profil.css";
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
import bannar from "../../../img/Bannar.jpg";
import profils from "../../../img/profils.jpg";
import Envelope from "../../../img/Envelope.svg"; 
import PhoneCall from "../../../img/PhoneCall.svg";
import MapPinLine  from "../../../img/MapPinLine.svg";
import Facebook  from "../../../img/Facebook.svg";
import Linkedin   from "../../../img/Linkedin.svg";
import Twitter    from "../../../img/Twitter.svg";
import epingle    from "../../../img/epingle.svg";
import Instagram    from "../../../img/Instagram.svg";
import { Button } from "react-bootstrap";


const Profil = () => {
  return (
    <div className="profil-employers">
      <div className="div">
        <div className="overlap">
          <div className="overlap">
            <div className="rectangle" />
            <div className="frame">
              <div className="first-check-box">
                <div className="text-wrapper-2">Home</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">Freelance</div>
              </div>
              <div className="first-check-box-2">
                <div className="text-wrapper-4">Space Market</div>
              </div>
              <div className="first-check-box-3">
                <div className="text-wrapper-2">Consultant</div>
              </div>
              <div className="first-check-box-4">
                <div className="text-wrapper-2">Industrialisation</div>
              </div>
            </div>
            <div className="rectangle-2" />
            <img className="logo-PSI" alt="Logo PSI" src={logoPSI} />
            <div className="informations">
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="text-wrapper-5">Projets</div>
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
          <div className="frame-3">
            <div className="sidebar-nav-tabs">
              <img className="img" alt="Phosphor duotone" src={houseLine} />
              <div className="text-wrapper-6">Dashboard</div>
            </div>
            <div className="sidebar-nav-tabs-2">
              <img className="img" alt="Bx user circle" src={user1} />
              <div className="text-wrapper-7">Profil</div>
            </div>
            <div className="sidebar-nav-tabs-3">
              <img className="img" alt="Bx plus circle" src={plus} />
              <div className="text-wrapper-6">Ajouter Un Projet</div>
            </div>
            <div className="sidebar-nav-tabs-3">
              <img className="img" alt="Bx briefcase alt" src={sac} />
              <div className="text-wrapper-6">Mes Projets</div>
            </div>
            <div className="sidebar-nav-tabs-3">
              <img className="img" alt="Bxs user detail" src={user1} />
              <div className="text-wrapper-6">Freelance</div>
            </div>
            <div className="sidebar-nav-tabs-3">
              <img className="img" alt="Bx cog" src={reglage} />
              <div className="text-wrapper-6">Parametres</div>
            </div>
          </div>
          <div className="sidebar-nav-tabs-4">
            <img className="img" alt="Phosphor duotone" src={signOut} />
            <div className="text-wrapper-6">Deconnexion</div>
          </div>
          <div className="profile-bannar">
            <div className="overlap-2">
              <div className="overlap-3">
                <img className="bannar" alt="Bannar" src={bannar} />
                <img className="image" alt="Image" src={profils} />
              </div>
              <div className="content">
                <div className="text-wrapper-8">Kevin Gilbert</div>
                <div className="text-wrapper-9">Software Engineer</div>
              </div>
            </div>
          </div>
          {/** a revoir */}
          <div className="profile-info">
            <p>hello worl</p>
          </div>
        {/** end a revoir */}
          <div className="biography">
            <div className="heading">
              <div className="text-wrapper-10">Entreprise</div>
            </div>
            <div className="frame-4">
              <div className="frame-5">
                <div className="frame-6">
                  <div className="about-me">
                    <div className="text-wrapper-11">Description</div>
                    <p className="p">
                      Suspendisse iaculis tortor tortor, ac convallis quam
                      dictum mattis. Integer leo ex, luctus eget ipsum sit amet,
                      euismod hendrerit velit. Praesent eu vestibulum elit, in
                      rutrum quam. Nulla maximus dolor enim, sed aliquet leo
                      tincidunt sit amet. Sed ac est ac j
                    </p>
                  </div>
                  <div className="about-me-2">
                    <div className="text-wrapper-12">Vision</div>
                    <p className="text-wrapper-13">
                      Suspendisse iaculis tortor tortor, ac convallis quam
                      dictum mattis. Integer leo ex, luctus eget ipsum sit amet,
                      euismod hendrerit velit. Praesent eu
                    </p>
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="div-2">
                  <div className="text-wrapper-14">Type d’Organisation</div>
                  <div className="text-wrapper-15">Kevin Gilbert</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-16">Type D’industrie:</div>
                  <div className="text-wrapper-15">UI/UX Lead Designer</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-16">Taille de l’equipe:</div>
                  <div className="text-wrapper-15">UI/UX Designer</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-16">Date de creation</div>
                  <div className="text-wrapper-15">25 Nov, 1983</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-16">Langue:</div>
                  <div className="text-wrapper-15">English</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-16">Pays:</div>
                  <div className="text-wrapper-15">Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-2">
              <div className="text-wrapper-17">Editer</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-18">copyright</div>
      </div>
    </div>
  );
};

export default Profil;
