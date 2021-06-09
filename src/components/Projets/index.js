import React from 'react';

import './styles.scss';
import Left from 'src/components/Left';
import CaptureAtypeek from 'src/assets/images/captureatypeek.png';
import CaptureSalindres from 'src/assets/images/capturesalindres.png';

const Projets = () => (
  <div className="container-fluid">
    <div className="row">
      <Left />
      {/*  */}

      <div className="col-8 bord nopadding">
        <div className="titlea">Projets</div>
        <div className="projets_reas">
          <div className="projets_container">

            <div className="projet">
              <a href="http://atypeek.xyz" target="_blank" rel="noreferrer">
                <h2 className="projets_title">Atypeek</h2>

                <p className="link_mobile"><img src={CaptureAtypeek} className="projets_capture_mobile" alt="Site de rencontre pour personne Atypiques" /></p>
              </a>
              <figure className="cap-bot">
                <a href="http://atypeek.xyz" target="_blank" rel="noreferrer">
                  <img src={CaptureAtypeek} className="projets_capture" alt="Site de rencontre pour personne Atypiques" />
                </a>
                <figcaption>
                  <p className="link">Atypeek</p>
                  <p className="p_hover">Rentrer dans le moule, c’est le meilleur moyen de trouver quelqu’un qui vous aime pour ce que vous n’êtes pas !
                    Soyez Atypeek et fier·e de l’être. Épanouissez-vous avec le style qui vous fait
                    vous sentir bien et trouvez la personne qui vous aime tel·le que vous êtes.
                  </p>
                </figcaption>

              </figure>
            </div>
            <div className="projet">
              <a href="https://www.salindrestennis.fr" target="_blank" rel="noreferrer">
                <h2 className="projets_title">As Salindres Tennis</h2>
                <p className="link_mobile"><img src={CaptureSalindres} className="projets_capture_mobile" alt="Site du club de tennis de Salindres" /></p>

              </a>
              <figure className="cap-bot">
                <a href="https://www.salindrestennis.fr" target="_blank" rel="noreferrer">
                  <img src={CaptureSalindres} className="projets_capture" alt="Site du club de tennis de Salindres" />
                </a>
                <figcaption>
                  <p className="link">Salindrestennis</p>
                  <p className="p_hover">Suivre les actualités du club, les résultats, ainsi que les communiqués important de la FFT
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

);

export default Projets;
