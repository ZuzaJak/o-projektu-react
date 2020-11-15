import React from 'react';
import './style.css';
import zuzkaPic from '../img/zuza.jpg';
import lenaPic from '../img/lena.png';
import githublogo from '../img/github_logo.png';

const AboutUs = () => {
  return (
    <div id="about_us">
      <h1>O nás</h1>
      <div className="flex">
        <div className="col">
          <img className="photo" src={zuzkaPic} alt="Zuzka" />
          <p className="nadpis_onas">Zuzka</p>
          <div className="card">
            <a
              href="https://github.com/ZuzaJak?tab=repositories"
              target="_blank"
            >
              <img className="logo_github" src={githublogo} />
            </a>
            <p className="question">Nejoblíbenější html tag?</p>
            <p className="answer">div</p>
            <p className="question">
              Jakým nejsprostějším slovem jsem pojmenovala komponentu?
            </p>
            <p className="answer">
              Zatím žádným. Dokonce jsem u <em>JS</em> ještě ani nebrečela{' '}
              <em>(to přijde?)</em>.
            </p>
            <p className="question">Nejlepší CSS vlastnost? </p>
            <p className="answer">Všechny ❤️ </p>
          </div>
        </div>
        <div className="col">
          <img className="photo" src={lenaPic} alt="Lena" />
          <p className="nadpis_onas">Lena</p>

          <div className="card">
            <a
              href="https://github.com/lenabacikova?tab=repositories"
              target="_blank"
            >
              <img className="logo_github" src={githublogo} />
            </a>
            <p className="question">Nejoblíbenější html tag?</p>
            <p className="answer">
              Slabost mám pro <em>span</em>, ale jsem rozechvělá i při
              přepočítávání koncových <em>divů.</em>
            </p>
            <p className="question">
              Jakým nejsprostějším slovem jsem pojmenovala komponentu?
            </p>
            <p className="answer">
              <em>const</em> z**********
            </p>
            <p className="question">Nejlepší css vlastnost?</p>
            <p className="answer">Border ve všech podobách.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
