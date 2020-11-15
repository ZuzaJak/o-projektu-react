import React from 'react';
import './style.css';
import TitlePicture from '../img/final-pic.png';

const Header = () => {
  return (
    <div id="header">
      <nav>
        <div className="container_nav">
          <div className="box-1">
            <a className="btn btn-one" href="#header">
              HOME
            </a>
            <a className="btn btn-one" href="#project">
              PROJEKT
            </a>
            <a className="btn btn-one" href="#">
              O NÁS
            </a>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1>KÓDOVÁNÍ PRO DĚTI</h1>
        <img className="photo-index" src={TitlePicture} alt="fotka děti" />
      </div>
    </div>
  );
};

export default Header;
