import React from 'react';

import './styles.scss';
import { Icon, Label } from 'semantic-ui-react';
import nodelogo from 'src/assets/images/node.png';

const Formation = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4 bord"> <div className="titlea">FOLLOW ME</div>

        <div className="row-formation"><a href="http://www.linkedIn.com/in/guilhem-moes" target="_blank" rel="noreferrer">LinkedIn</a></div>
        <div className="titlea">Contact</div>
        <div className="row-formation">
          <div className="formation-contenu">06 22 99 70 83<div>Diplome</div></div>
          <div className="formation-contenu">2020 - 2021 Oclock <div>Diplome</div></div>
          <div className="formation-contenu">2020 - 2021 Oclock <div>Diplome</div></div>
          <div className="formation-contenu">2020 - 2021 Oclock</div>
        </div>
      </div>
      <div className="col-8 bordure">

        <div className="formation_title">Formation</div>
        <div className="formation_content">
          <div className="formation_content-date">2019 / 2020</div>
          <div className="formation_content-degree">Titre Professionnel Développeur Web</div>
        </div>
        <div className="formation_content-where"> O'CLOCK, 700 heures de formation intensives</div>
        <div className="formation_content">
          <div className="formation_content-date">2004 / 2006</div>
          <div className="formation_content-degree">B.T.S Management des Unités Commerciales</div>
        </div>
        <div className="formation_content-where">I.F.C Languedoc (Montpellier)</div>
        <div className="formation_content">
          <div className="formation_content-date">2000 / 2003</div>
          <div className="formation_content-degree">Baccalauréat S.T.T Option Commerce</div>
        </div>
        <div className="formation_content-where">Lycée Jean Baptiste Dumas (Alès)</div>

        <div className="experiences_title">Expériences</div>
        <div className="experiences_container">
          <div className="experiences_name">Développeur Web Front End</div>
          <div className="experiences_date">04.2021 - 05.2021</div>
        </div>
        <div className="experiences_summary-brand">Atypeek | www.atypeek.xyz</div>
        <div className="experiences_summary">Lead Dev Front & référent Techno</div>
        <div className="experiences_summary">Création d'un projet de développement Web</div>
        <div className="experiences_summary-tasks">- Création du cahier des charges</div>
        <div className="experiences_summary-tasks-under">- Définition des besoins / Moyens / Technos</div>
        <div className="experiences_summary-tasks">- Création des wireframes</div>
        <div className="experiences_summary-tasks">- Etablissement des User-Stories</div>
        <div className="experiences_summary-tasks">- Veille technologique</div>
        <div />
        <div className="experiences_summary">Création de la partie front d'un site/application de rencontre pour des personnes arborant un look atypique.</div>
        <div className="experiences_summary-tasks">- React</div>
        <div className="experiences_summary-tasks">- Redux (pour la gestion d'état)</div>
        <div className="experiences_summary-tasks">- Authentification - Login avec JsonWebToken</div>
        <div className="experiences_summary-tasks">- Utilisation de Socket.io pour une fonctionnalité de Chat</div>
        <div className="experiences_summary-tasks">- Consommation d'un API maison, et Publique</div>
        <div className="experiences_space" />
        <div className="experiences_container">
          <div className="experiences_name">Vendeur Technique - Employé Commercial</div>
          <div className="experiences_date">08.2007 - 09.2020</div>
        </div>
        <div className="experiences_summary-brand">Cora Alès</div>
        <div className="experiences_summary">Vendeur Technique : </div>
        <div className="experiences_summary-tasks">- Matériel TV</div>
        <div className="experiences_summary-tasks">- Matériel Informatique</div>
        <div className="experiences_summary-tasks">- Matériel Audio</div>
        <div className="experiences_summary-tasks">- Matériel Electroménager</div>
        <div className="experiences_summary-tasks">- Matériel de Jardin</div>
        <div className="experiences_summary-tasks">- Jouets</div>
        <div className="experiences_summary">Création d'un projet de développement Web</div>
        <div className="experiences_container">
          <div className="experiences_name">Chef d'entreprise</div>
          <div className="experiences_date">06.2006 - 08.2007</div>
        </div>
        <div className="experiences_summary-brand">2AMicro</div>
        <div className="experiences_summary-tasks">- Création de site Internet</div>
        <div className="experiences_summary-tasks">- Maintenance de site Internet</div>
        <div className="experiences_summary-tasks">- Formation informatique - Web aux particuliers / professionnels</div>
        <div className="experiences_summary-tasks">- Montage de machine informatique sur mesure</div>
        <div className="experiences_summary-tasks">- Réparation de matériel informatique</div>
      </div>
      <div className="experiences_space" />
    </div>
  </div>
);

export default Formation;
