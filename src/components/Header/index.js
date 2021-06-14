import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './styles.scss';
import Sidebar from 'src/components/Sidebar';
// import Photo from 'https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/21739d1393069621-photos-didentite-demande-de-permis-eic-pvt-jp-etc-photo-identite.jpg';

import github from 'src/assets/images/github.png';
import linkedin from 'src/assets/images/linkedin.png';
import contact from 'src/assets/images/contact.png';
import home from 'src/assets/images/logo-home.png';
import projet from 'src/assets/images/projet.png';
import profile from 'src/assets/images/profile.png';
import backtotopicon from 'src/assets/images/bouton-haut.png';

const backToTop = () => {
  console.log('backtotop');
};

const toggle = () => {
  const elements = document.querySelectorAll('.menu_subtitle_actived');
  console.log(elements.length);
  for (let i = 0; i < elements.length; i++) {
    const current = document.getElementsByClassName('menu_subtitle_actived');
    console.log('current', current);
    current[0].classList.remove('menu_subtitle_actived');
    // this.className += '_actived';
  }
};

const Header = () => (
  <>

    <div className="header">

      {/* <div className="bandeaux">Salut</div> */}
      {/* <div className="infos_name">GUILHEM MOËS</div> */}
      <div className="bandeau_head ">
        <Sidebar width={300} height="100%">
          <h1 className="menu_title">MENU</h1>
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
            className="link"
            onClick={(e) => {
              toggle();
              e.target.classList.toggle('menu_subtitle_actived');
            }}
          ><h2 className="menu_subtitle"><img src={home} className="menu_logo" alt="Accueil" />Home</h2>
          </Link>
          <Link
            to="/projets"
            className="link"
            onClick={(e) => {
              toggle();
              e.target.classList.toggle('menu_subtitle_actived');
            }}
          ><h2 className="menu_subtitle"><img src={projet} className="menu_logo" alt="Projets" />Mes Projets
          </h2>
          </Link>
          <Link
            to="/"
            className="link"
            onClick={(e) => {
              toggle();
              e.target.classList.toggle('menu_subtitle_actived');
            }}
          ><h2 className="menu_subtitle"><img src={github} className="menu_logo" alt="Github" />Github</h2>
          </Link>
          <Link
            to="/"
            className="link"
            onClick={(e) => {
              toggle();
              e.target.classList.toggle('menu_subtitle_actived');
            }}
          ><h2 className="menu_subtitle"><img src={linkedin} className="menu_logo" alt="Linkedin" />LinkedIn</h2>
          </Link>
          <Link
            to="/contact"
            className="link"
            onClick={(e) => {
              toggle();
              e.target.classList.toggle('menu_subtitle_actived');
            }}
          ><h2 className="menu_subtitle"><img src={contact} className="menu_logo" alt="Contact" />Contact</h2>
          </Link>

        </Sidebar>Guilhem Moës
        <div className="backtotop"> <a href="#" onClick={backToTop}> <img src={backtotopicon} className="backtotop" alt="Retour en haut de page" /> </a></div>
      </div>
      <div className="infos_intro-container">
        <div className="infos_intro">Je m'appelle Guilhem, passionné d'informatique et de développement Web depuis tout jeune, j'ai décidé d'en faire enfin mon mêtier.</div>
        <div className="infos_intro_text">"Une passion, bien plus qu'un mêtier !"</div>
      </div>
    </div>
    {/* <div className="header__photo">
      <img className="img-profil" src={mypic} alt="myPic" />
    </div> */}
  </>
);

export default Header;
