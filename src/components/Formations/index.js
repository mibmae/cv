import React from 'react';

import './styles.scss';
import Left from 'src/components/Left';
import opquast from 'src/assets/images/opquast.svg';

const Formation = () => (
  <div className="container-fluid">
    <div className="row">
      <Left />
      {/*  */}

      <div className="col-9 bordure">

        <div className="formation_title">Formation</div>
        <div className="formation_content">
          <div className="formation_content-date">2020 / 2021</div>
          <div className="formation_content-degree">Titre Professionnel Développeur Web</div>
        </div>
        <div className="formation_content-where"> O'CLOCK, 700 heures de formation intensives</div>
        <div className="formation_content">
          <div className="formation_content-date">2021</div>
          <div className="formation_content-degree">Certification Opquast <img className="opquast" alt="badge opquast confirmé" src={opquast} /> </div>
        </div>
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
          <div className="experiences_name">Création et maintenance d'un site web pour une maison d'hôtes</div>
          <div className="experiences_date">07.2021 - Aujourd'hui</div>
        </div>
        <div className="experiences_summary-brand">La Demeure de Cyr | <a href="http://cyr.netlify.app" target="_blank" rel="noreferrer">www.lademeuredecyr.fr</a></div>
        <div className="experiences_summary">Lead Dev Front & back</div>
        <div className="experiences_summary">Création d'un projet de développement Web</div>
        <div className="experiences_summary-tasks">- Création du cahier des charges</div>
        <div className="experiences_summary-tasks-under">- Définition des besoins / Moyens / Technos</div>
        <div className="experiences_summary-tasks">- Création des wireframes</div>
        <div className="experiences_summary-tasks">- Etablissement des User-Stories</div>
        <div className="experiences_summary-tasks">- Veille technologique</div>
        <div />
        <div className="experiences_summary">Création de la partie front d'un site de présentation et de réservation de chambres d'hôte</div>
        <div className="experiences_summary-tasks">- React</div>
        <div className="experiences_summary-tasks">- Redux (pour la gestion d'état)</div>
        {/* <div className="experiences_summary-tasks">- Authentification - Login avec JsonWebToken</div>
        <div className="experiences_summary-tasks">- Utilisation de Socket.io pour une fonctionnalité de Chat</div>
        <div className="experiences_summary-tasks">- Consommation d'un API maison, et Publique</div> */}
        <div className="experiences_container">
          <div className="experiences_name">Développeur Web Front</div>
          <div className="experiences_date">04.2021 - 05.2021</div>
        </div>

        <div className="experiences_summary-brand">Atypeek | <a href="https://www.atypeek.io" target="_blank" rel="noreferrer">www.atypeek.io</a></div>
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

        <div className="experiences_space" />
        <div className="experiences_container">
          <div className="experiences_name">Création et maintenance d'un site web pour une association</div>
          <div className="experiences_date">06.2020 - Aujourd'hui</div>
        </div>
        <div className="experiences_summary-brand">Salindres Tennis | <a href="https://www.salindrestennis.fr" target="_blank" rel="noreferrer">www.salindrestennis.fr</a></div>
        <div className="experiences_summary">Création partie front et back</div>
        <div className="experiences_summary">Site de présentation et d'actualités de l'association</div>
        <div />
        <div className="experiences_summary">Création de la partie front d'un site/application de rencontre pour des personnes arborant un look atypique.</div>
        <div className="experiences_summary-tasks">- Html</div>
        <div className="experiences_summary-tasks">- CSS</div>
        <div className="experiences_summary-tasks">- PHP</div>
        <div className="experiences_summary-tasks">- Javascript</div>
        <div className="experiences_summary-tasks">- Partie administration</div>
        <div className="experiences_space" />
        <div className="experiences_container">
          <div className="experiences_name">Vendeur Technique</div>
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
        <div className="experiences_space" />
        <div className="experiences_container">
          <div className="experiences_name">Chef d'entreprise</div>
          <div className="experiences_date">06.2006 - 08.2007</div>
        </div>
        <div className="experiences_summary-brand">2A Micro</div>
        <div className="experiences_summary">- Création de site Internet</div>
        <div className="experiences_summary">- Maintenance de site Internet</div>
        <div className="experiences_summary">- Formation informatique - Web aux particuliers / professionnels</div>
        <div className="experiences_summary">- Montage de machine informatique sur mesure</div>
        <div className="experiences_summary">- Réparation de matériel informatique</div>
      </div>
      <div className="experiences_space_bottom" />
    </div>

  </div>

);

export default Formation;
