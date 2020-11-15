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
              <img class="logo_github" src={githublogo} />
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
          <p class="nadpis_onas">Lena</p>

          <div class="card">
            <a
              href="https://github.com/lenabacikova?tab=repositories"
              target="_blank"
            >
              <img class="logo_github" src={githublogo} />
            </a>
            <p class="question">Nejoblíbenější html tag?</p>
            <p class="answer">
              Slabost mám pro <em>span</em>, ale jsem rozechvělá i při
              přepočítávání koncových <em>divů.</em>
            </p>
            <p class="question">
              Jakým nejsprostějším slovem jsem pojmenovala komponentu?
            </p>
            <p class="answer">
              <em>const</em> z**********
            </p>
            <p class="question">Nejlepší css vlastnost?</p>
            <p class="answer">Border ve všech podobách.&#128525</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
