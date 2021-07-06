import React from 'react';
import {
  Link,
} from 'react-router-dom';
import github from 'src/assets/images/github.png';
import linkedin from 'src/assets/images/linkedin.png';
import contact from 'src/assets/images/contact.png';
import home from 'src/assets/images/logo-home.png';
import projet from 'src/assets/images/projet.png';
import profile from 'src/assets/images/profile.png';
import backtotopicon from 'src/assets/images/bouton-haut.png';
import extern from 'src/assets/images/symbole-de-lien-externe.png'; // by Dave Gandy


import './styles.scss';

const toggle = () => {
  const elements = document.querySelectorAll('.menu_subtitle_actived');
  for (let i = 0; i < elements.length; i++) {
    const current = document.getElementsByClassName('menu_subtitle_actived');
    current[0].classList.remove('menu_subtitle_actived');
    // this.className += '_actived';
  }
};

const Bandeau = () => (
  <div className="bandeau">
    <Link
      to="/infos"
      className="link_mobile"
      onClick={(e) => {
        toggle();
        e.target.classList.toggle('menu_subtitle_actived');
      }}
    ><h2 className="menu_subtitle "><img src={profile} className="menu_logo" alt="Contact" />A propos de moi</h2>
    </Link>
    <Link
      to="/"
      onClick={(e) => {
        toggle();
        e.target.classList.toggle('menu_subtitle_actived');
      }}
    ><h2 className="menu_subtitle"><img src={projet} className="menu_logo" alt="Projets" />Home</h2>
    </Link>
    <Link
      to="/projets"
      onClick={(e) => {
        toggle();
        e.target.classList.toggle('menu_subtitle_actived');
      }}
    ><h2 className="menu_subtitle"><img src={projet} className="menu_logo" alt="Projets" />Mes Projets</h2>
    </Link>
    <a
      href="https://github.com/mibmae"
      target="_blank"
      onClick={(e) => {
        toggle();
        e.target.classList.toggle('menu_subtitle_actived');
      }}
      rel="noreferrer"
    ><h2 className="menu_subtitle"><img src={github} className="menu_logo" alt="Github" />Github <img src={extern} className="menu_logoext" alt="LinkedIn" /></h2>
    </a>
    <a
      href="https://www.linkedin.com/in/guilhem-moes/"
      target="_blank"
      onClick={(e) => {
        toggle();
        e.target.classList.toggle('menu_subtitle_actived');
      }}
      rel="noreferrer"
    ><h2 className="menu_subtitle"><img src={linkedin} className="menu_logo" alt="LinkedIn" />LinkedIn <img src={extern} className="menu_logoext" alt="LinkedIn" /></h2> 
    </a>
    
    <Link
      to="/contact"
      className="lien"
      onClick={(e) => {
        toggle();
        e.target.classList.toggle('menu_subtitle_actived');
      }}
    ><h2 className="menu_subtitle"><img src={contact} className="menu_logo" alt="Contact" />Contact</h2>
    </Link>

  </div>

);
// const Bandeau = () => (
//   <div className="bandeau">
//     <div className="lang">HTML</div>
//     <div className="lang2">CSS</div>
//     <div className="lang">Javascript</div>
//     <div className="lang2">React-Redux</div>
//   </div>

// );

export default Bandeau;
