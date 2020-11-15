import React from 'react';
import './style.css';

const AboutProject = () => {
  return (
    <div id="project">
      <div className="flex-projekt">
        <h1>O našem projektu</h1>
        <div className="card-projekt">
          <ul className="projekt-ul">
            <li>web přibližující kódování (HTML a CSS) dětem</li>
            <li>cílová skupina 6-10 let</li>
            <li>výuková aplikace a rozcestník pro učitele 1.stupně ZŠ</li>
            <li>
              kódovací wikipedie - základní informace o tvorbě webu, HTML a CSS
            </li>
            <li>
              rozcestník s informacemi o stránkách, kde se děti mohou vzdělávat
              dál
            </li>
            <li>
              interaktivní prvek na stránce, na kterém si děti vyzkouší kódování
              hravou formou
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
