import React from 'react';
import './style.css';
import zuzkaPic from '../img/zuza.jpg';
import lenaPic from '../img/lena.png';

const AboutUs = () => {
  return (
    <div id="about_us">
      <h1>O nás</h1>
      <div className="flex">
        <div className="col">
          <img className="photo" src={zuzkaPic} alt="Zuzka" />
          <div class="card"></div>
        </div>
        <div className="col">
          <img className="photo" src={lenaPic} alt="Lena" />
          <p class="nadpis_onas">3 NEJ LENY</p>
          <div class="card"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
