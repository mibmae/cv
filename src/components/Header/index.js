import React from 'react';

import './styles.scss';
// import Photo from 'https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/21739d1393069621-photos-didentite-demande-de-permis-eic-pvt-jp-etc-photo-identite.jpg';
import logoLink from 'src/assets/images/LinkedIn-Symbole.png';
import logoFacebook from './logo-facebook.png';

const Header = () => (
  <div className="header">
    
    <div className="infos">

      {/*<div className="container-text">Guilhem Moes</div>*/}
      
      <div className="infos_name">GUILHEM MOËS</div>
      <div className="infos_title">Développeur Web Javascript FullStack
      </div>
      <div className="infos_intro">Je m'appelle Guilhem, passionné d'informatique et de développement Web depuis tout jeune,</div>
      <div className="infos_intro"> j'ai décidé d'en faire enfin mon mêtier.</div>
      <div className="infos_intro_text">"Une passion, bien plus qu'un mêtier !"</div>
      {/* <div className="summary container-text2">Développeur Web Javascript FullStack
      </div> */}
    </div>
    <div className="header__photo">
      <img className="img-profil" src="https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/21739d1393069621-photos-didentite-demande-de-permis-eic-pvt-jp-etc-photo-identite.jpg" alt="myPic" />
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
);

export default Header;
