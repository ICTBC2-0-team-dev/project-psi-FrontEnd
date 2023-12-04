import React, { useEffect, useState }  from "react";
import "./CardForCarrouselProfil.css";
import StarIcon from '@mui/icons-material/Star';
import axios from '../axios'

export function ProfilFisrt() {
  
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('/profiles');
        setProfiles(response.data);
        console.log('valeurs de result', response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [])

  const myFirstProfile = profiles.length > 0 && (
    <div className='smoothie-card '>
      <img className="rectangle" alt="Rectangle" src='http://localhost:8081/photo/480538.png' />
      <div className="frame">
        <p className="text-wrapper">
          {profiles[0].description} 
        </p>
      </div>
      <div className="div">
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <div className="frame-2"><br />
          <div className="text-wrapper-2" style={{marginLeft:'-45%'}}>"Je suis très satisfait de travailler avec ce freelance.<br /> Il a fait preuve d'un excellent professionnalisme et a <br /> livré un travail de haute qualité dans les délais impartis"</div>
        </div>
      </div>
    </div> 
  );

    return (
      <div>
        {myFirstProfile}
      </div>
    );
}

export function ProfilSecond() {
  
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('/profiles');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [])

  const mySecondProfile  = profiles.length > 0 && (
    <div className='smoothie-card '>
      <img className="rectangle" alt="Rectangle" src='http://localhost:8081/photo/afr.jpg' />
      <div className="frame">
        <p className="text-wrapper">
          {profiles[1].description} 
        </p>
      </div>
      <div className="div">
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <div className="frame-2"><br />
          <div className="text-wrapper-2" style={{marginLeft:'-45%'}}>"Je suis très satisfait de travailler avec ce freelance.<br /> Il a fait preuve d'un excellent professionnalisme et a <br /> livré un travail de haute qualité dans les délais impartis"</div>
        </div>
      </div>
    </div> 
  );

    return (
      <div>
        {mySecondProfile}
      </div>
    )
}

export function ProfilThird() {
  
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('/profiles');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [])

  const myThirdProfile   = profiles.length > 0 && (
    <div className='smoothie-card '>
      <img className="rectangle" alt="Rectangle" src='http://localhost:8081/photo/afr.jpg' />
      <div className="frame">
        <p className="text-wrapper">
          {profiles[0].description} 
        </p>
      </div>
      <div className="div">
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <div className="frame-2"><br />
          <div className="text-wrapper-2" style={{marginLeft:'-45%'}}>"Je suis très satisfait de travailler avec ce freelance.<br /> Il a fait preuve d'un excellent professionnalisme et a <br /> livré un travail de haute qualité dans les délais impartis"</div>
        </div>
      </div>
    </div> 
  );

    return (
      <div>
        {myThirdProfile}
      </div>
    )
}

export function ProfilFour() {
  
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('/profiles');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [])

  const myFourProfile   = profiles.length > 0 && (
    <div className='smoothie-card '>
      <img className="rectangle" alt="Rectangle" src='http://localhost:8081/photo/480538.png' />
      <div className="frame">
        <p className="text-wrapper">
          {profiles[1].description} 
        </p>
      </div>
      <div className="div">
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <div className="frame-2"><br />
          <div className="text-wrapper-2" style={{marginLeft:'-45%'}}>"Je suis très satisfait de travailler avec ce freelance.<br /> Il a fait preuve d'un excellent professionnalisme et a <br /> livré un travail de haute qualité dans les délais impartis"</div>
        </div>
      </div>
    </div> 
  );

    return (
      <div>
        {myFourProfile}
      </div>
    )
}