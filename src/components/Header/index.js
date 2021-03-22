import React from 'react';

import './styles.scss';
// import Photo from 'https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/21739d1393069621-photos-didentite-demande-de-permis-eic-pvt-jp-etc-photo-identite.jpg';
import logoFacebook from './logo-facebook.png';
import logoLink from "./logolink.png";

const Header = () => (
  <div className="header">
    <div className="header__photo">
      <img className="img-profil" src="https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/21739d1393069621-photos-didentite-demande-de-permis-eic-pvt-jp-etc-photo-identite.jpg" alt="myPic" />
    </div>
    <div className="infos">

      <div className="container-text">Guilhem Moes</div>
      <div className="infos_autre">Tel : 0622997083</div>
      <div className="infos_autre">Email : mibmae@gmail.com</div>
      <div className="infos_autre">Adresse : 9 rue de la boucherie 30500 Saint-Ambroix</div>
      <div className="vline" />
      <div className="summary container-text2">Développeur Web Javascript FullStack
      </div>
    </div>

    <div className="social">
      <img className="imgreseauFb" src={logoFacebook} alt="Facebook" />
      <div className="login">guilhem.moes</div>
      <img className="imgreseauLi" src={logoLink} alt="Facebook" />
      <div className="login">guilhem.moesd</div>
     
    </div>

  </div>
);

export default Header;
