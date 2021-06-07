
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import React, { useState } from 'react';

import './styles.scss';
import Sidebar from 'src/components/Sidebar';
// import Photo from 'https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/21739d1393069621-photos-didentite-demande-de-permis-eic-pvt-jp-etc-photo-identite.jpg';

import mypic from 'src/assets/images/photo.jpg';

import github from 'src/assets/images/github.png';
import linkedin from 'src/assets/images/linkedin.png';
import facebook from 'src/assets/images/facebook.png';
import contact from 'src/assets/images/contact.png';
import home from 'src/assets/images/logo-home.png';
import homeinverted from 'src/assets/images/logo-homeinverted.png';



const Header = () => (
  <>
    <Sidebar width={300} height="100%">
      <Router>
        <h1 className="menu_title">MENU</h1>
        <NavLink to="/" className="link"><h2 className="menu_subtitle"><img src={homeinverted} className="menu_logo" alt="Accueil" />Home</h2></NavLink>
        <h2 className="menu_subtitle">Mes Projets</h2>
        <NavLink to="/" className="link"><h2 className="menu_subtitle"><img src={github} className="menu_logo" alt="Github" />Github</h2></NavLink>
        <NavLink to="/" className="link"><h2 className="menu_subtitle"><img src={linkedin} className="menu_logo" alt="Linkedin" />LinkedIn</h2></NavLink>
        <NavLink to="/" className="link"><h2 className="menu_subtitle"><img src={facebook} className="menu_logo" alt="Facebook" />Facebook</h2></NavLink>
        <NavLink to="/contact" className="link"><h2 className="menu_subtitle"><img src={contact} className="menu_logo" alt="Contact" />Contact</h2></NavLink>
      </Router>

    </Sidebar>

    <div className="header">
      <div className="infos">
        <div className="infos_name">GUILHEM MOËS</div>
        <div className="bandeau_head">Développeur Web Javascript FullStack
        </div>
        <div className="infos_intro-container">
          <div className="infos_intro">Je m'appelle Guilhem, passionné d'informatique et de développement Web depuis tout jeune, j'ai décidé d'en faire enfin mon mêtier.</div>
          <div className="infos_intro_text">"Une passion, bien plus qu'un mêtier !"</div>
        </div>
        {/* <div className="summary container-text2">Développeur Web Javascript FullStack
      </div> */}
      </div>
      <div className="header__photo">
        <img className="img-profil" src={mypic} alt="myPic" />
      </div>

      {/* <div className="social">

import { Modal, Button } from 'semantic-ui-react';

const Header = (openStatus) => {
  const [open, setOpen] = useState(openStatus);

return (
  <div className="header">
    <div className="infos">
      <div className="infos_name">GUILHEM MOËS</div>
      <div className="bandeau_head">Développeur Web Javascript FullStack
      </div>
      <div className="infos_intro">Je m'appelle Guilhem, passionné d'informatique et de développement Web depuis tout jeune,</div>
      <div className="infos_intro"> j'ai décidé d'en faire enfin mon mêtier.</div>
      <div className="infos_intro_text">"Une passion, bien plus qu'un mêtier !"</div>
      {/* <div className="summary container-text2">Développeur Web Javascript FullStack
      </div> */}
    </div>
    <div className="header__photo">
      <img className="img-profil" src={mypic} alt="myPic" />
    </div>
   
    {/* <div className="social">

      <div className="login">
        <img className="imgreseauFb" src={logoFacebook} alt="Facebook" />
        guilhem.moes
      </div>
      <div className="login">
        <img className="imgreseauLi" src={logoLink} alt="Facebook" />
        guilhem-moes
      </div>

    </div> */}

    </div>
  </>
);
  }

export default Header;
