import React from "react";
import "./CardForCarrouselProfil.css";
import homme from '../pages/images/homme.jpg'

const CardForCarrouselProfil = () => {
  return (
    <div className='smoothie-card '>
      <img className="rectangle" alt="Rectangle" src={homme} />
      <div className="frame">
        <p className="text-wrapper">
          How to make a perfect smoothie at home during lockdown
        </p>
      </div>
      <div className="div">
        <img className="ellipse" alt="Ellipse" src={homme} />
        <div className="frame-2">
          <div className="text-wrapper-2">Ajay Kumar</div>
          <p className="p">Smoothie maker of the year</p>
        </div>
      </div>
    </div>  )
}

export default CardForCarrouselProfil