import React from 'react';
import './styles.scss';
import logoLink from 'src/assets/images/LinkedIn-Symbole.png';
import tel from 'src/assets/images/tel.png';
import mail from 'src/assets/images/mail.png';
import location from 'src/assets/images/location.png';
import skills from 'src/assets/images/skills.png';
import english from 'src/assets/images/english.png';
import french from 'src/assets/images/french.png';

const Infos = () => (
  <div className="col-3 bord"> <div className="titlea">Suivez-Moi</div>

    <div className="row-followme"><img src={logoLink} className="formation_logo" alt="linkedinlogo" /><a href="http://www.linkedIn.com/in/guilhem-moes" target="_blank" rel="noreferrer">LinkedIn</a></div>
    <div className="titlea">Contact</div>
    <div className="contact_container">
      <div className="row-contact"><img src={tel} className="row-contact_logo" alt="linkedinlogo" /><a href="tel:+33622997083">06 22 99 70 83</a></div>
      <div className="row-contact"><img src={mail} className="row-contact_logo" alt="linkedinlogo" />guilhem.moes@gmail.com</div>
      <div className="row-contact"><img src={location} className="row-contact_logo" alt="linkedinlogo" />9 rue de la boucherie 30500 Saint-Ambroix</div>
    </div>
    <div className="titlea">Compétences</div>
    <div className="skills_container">
      <div className="row-skills"><img src={skills} className="row-skills_logo" alt="linkedinlogo" /></div>
    </div>
    <div className="titlea">Langues</div>
    <div className="langage_container">
      <div className="row-language"><img src={english} className="row-language_logo" alt="linkedinlogo" />Anglais </div>
      <div className="row-language"><img src={french} className="row-language_logo" alt="linkedinlogo" />Français </div>
    </div>
    <div className="titlea">Loisirs</div>
    <div className="contact_container">
      <div className="row-contact"><img src={mail} className="row-contact_logo" alt="linkedinlogo" />Technologies </div>
      <div className="row-contact"><img src={mail} className="row-contact_logo" alt="linkedinlogo" />Musique </div>
      <div className="row-contact"><img src={mail} className="row-contact_logo" alt="linkedinlogo" />Tennis </div>
    </div>
  </div>

);

export default Infos;
