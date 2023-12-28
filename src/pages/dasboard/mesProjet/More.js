import React from "react";
import "./more.css";
import logoPSI from "../../../img/logoPSI.png";
import Homme from "../../images/homme.jpg";
import FolderOpen from "../../images/FolderOpen.svg";
import user from "../../../img/user.svg";
import user1 from "../../../img/user1.svg";
import plus from "../../../img/plus.svg";
import reglage from "../../../img/reglage.svg";
import sac from "../../../img/sac.svg";
import notification from "../../../img/Notification.svg";
import profil from "../../../img/profil.svg";
import signOut from "../../../img/SignOut.svg";
import Vector from "../../../img/Vector.svg";

const More = () => {
  return (
    <div className="voir-projetr">
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
                  <img className="icon-2" alt="Icon" src={notification} />
                  <div className="ellipse" />
                </div>
              </div>
              <div className="profile">
                <img className="ellipse-2" alt="Ellipse" src={profil} />
              </div>
            </div>
          </div>
          <div className="overlap-2">
            <div className="sidebar-nav-tabs-2">
              <img className="img" alt="Bx user circle" src={user1} />
              <div className="text-wrapper-7">Profil</div>
            </div>
            <div className="sidebar-nav-tabs-3">
              <img className="img" alt="Bx plus circle" src={plus} />
              <div className="text-wrapper-7">Ajouter Un Projet</div>
            </div>
            <div className="sidebar-nav-tabs-4">
              <img className="img" alt="Bx briefcase alt" src={sac} />
              <div className="text-wrapper-8">Mes Projets</div>
            </div>
            <div className="sidebar-nav-tabs">
              <img className="img" alt="Bxs user detail" src={user} />
              <div className="text-wrapper-7">Freelance</div>
            </div>
            <div className="sidebar-nav-tabs-5">
              <img className="img" alt="Bx cog" src={reglage} />
              <div className="text-wrapper-7">Parametres</div>
            </div>
          </div>
          <div className="sidebar-nav-tabs-6">
            <img className="img" alt="Phosphor duotone" src={signOut} />
            <div className="text-wrapper-7">Deconnexion</div>
          </div>
          <div className="files">
            <div className="text-wrapper-9">Modules</div>
            <div className="folder-2">
              <div className="floating-container">
                <img src={FolderOpen} alt="Image" className="image" />
                <div className="text-container">
                  <h2 style={{
                        position: 'relative',
                        left: '-38%'
                  }} >1</h2>
                  <p style={{
                        color: '#555555',
                        position: 'relative',
                        left: '-30%'
                  }}>961 files</p>
                </div>
              </div>
              <div className="floating-container-2">
                <img src={FolderOpen} alt="Image" className="image" />
                <div className="text-container">
                  <h2 style={{
                        position: 'relative',
                        left: '-38%'
                  }} >2</h2>
                  <p style={{
                        color: '#555555',
                        position: 'relative',
                        left: '-30%'
                  }}>961 files</p>
                </div>
              </div>
              <div className="floating-container-3">
                <img src={FolderOpen} alt="Image" className="image" />
                <div className="text-container">
                  <h2 style={{
                        position: 'relative',
                        left: '-38%'
                  }} >3</h2>
                  <p style={{
                        color: '#555555',
                        position: 'relative',
                        left: '-30%'
                  }}>961 files</p>
                </div>
              </div>
              <div className="floating-container-4">
                <img src={FolderOpen} alt="Image" className="image" />
                <div className="text-container">
                  <h2 style={{
                        position: 'relative',
                        left: '-38%'
                  }} >4</h2>
                  <p style={{
                        color: '#555555',
                        position: 'relative',
                        left: '-30%'
                  }}>961 files</p>
                </div>
              </div>
            </div>
          </div>
          <div className="biography">
            <div className="heading">
              <div className="text-wrapper-10">Nom du projet</div>
              <div
                className="chart-instance"
                icon={<Homme />}
                status="normal"
              />
            </div>
            <div className="frame-3">
              <div className="frame-4">
                <div className="about-me-wrapper">
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
                </div>
              </div>
              <div className="info">
                <div className="div-2">
                  <div className="text-wrapper-12">Salaire:</div>
                  <div className="text-wrapper-13">250 000 Fcfa</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-14">Domaine:</div>
                  <div className="text-wrapper-13">UI/UX Lead Designer</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-14">Date de creation</div>
                  <div className="text-wrapper-13">25 Nov, 1983</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-14">Date d’expiration:</div>
                  <div className="text-wrapper-13">25 Nov, 1983</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-14">Pays:</div>
                  <div className="text-wrapper-13">Cameroun</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-14">Ville:</div>
                  <div className="text-wrapper-13">yaounde</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-5">
            <div className="smoothie-card">
              <div className="frame-6">
                <div className="frame-7">
                  <img className="ellipse-3" alt="Ellipse" src={Homme} />
                  <div className="frame-8">
                    <div className="text-wrapper-15">Ajay Kumar</div>
                    <p className="text-wrapper-16">
                      Smoothie maker of the year
                    </p>
                  </div>
                </div>
                <div className="frame-9">
                  <p className="text-wrapper-17">
                    How to make a perfect smoothie at home during lockdown
                  </p>
                </div>
                <div className="frame-10">
                  <div className="frame-11">
                    <div className="ellipse-4" />
                    <div className="text-wrapper-18">Domaine</div>
                  </div>
                  <div className="frame-11">
                    <div className="ellipse-4" />
                    <div className="text-wrapper-18">Spécialité</div>
                  </div>
                </div>
              </div>
              <button className="button" style={{ cursor: "pointer" }}>
                <div className="voir-CV">Voir Cv</div>
              </button>
            </div>
            <div className="smoothie-card">
              <div className="frame-6">
                <div className="frame-7">
                  <img className="ellipse-3" alt="Ellipse" src={Homme} />
                  <div className="frame-8">
                    <div className="text-wrapper-15">Ajay Kumar</div>
                    <p className="text-wrapper-16">
                      Smoothie maker of the year
                    </p>
                  </div>
                </div>
                <div className="frame-9">
                  <p className="text-wrapper-17">
                    How to make a perfect smoothie at home during lockdown
                  </p>
                </div>
                <div className="frame-10">
                  <div className="frame-11">
                    <div className="ellipse-4" />
                    <div className="text-wrapper-18">Domaine</div>
                  </div>
                  <div className="frame-11">
                    <div className="ellipse-4" />
                    <div className="text-wrapper-18">Spécialité</div>
                  </div>
                </div>
              </div>
              <button className="button" style={{ cursor: "pointer" }}>
                <div className="voir-CV">Voir Cv</div>
              </button>
            </div>
          </div>
        </div>
        <div className="text-wrapper-19">copyright</div>
      </div>
    </div>
  );
};

export default More;
