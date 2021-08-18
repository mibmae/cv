/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';

import './styles.scss';
import Left from 'src/components/Left';
import CaptureAtypeek from 'src/assets/images/captureatypeek.png';
import CaptureSalindres from 'src/assets/images/capturesalindres.png';
import CaptureCyr from 'src/assets/images/cyr.png';
import image1 from 'src/assets/images/captureatypeek.png';
import image2 from 'src/assets/images/capturesalindres.png';
import image3 from 'src/assets/images/cyr.png';

import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

let myIndex = 0;

function carousel() {
  let i;
  const x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 8000);
}

const Projets = () => {
  useEffect(() => {
    // carousel();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <Left />
        <div className="col-9 bord nopadding">
          <div className="titlea">Projets</div>
          <div className="projets_reas">
            <div className="projets_container">
              <h3>Voici la liste des projets réalisés ou en cours</h3>
              {/* <div className="w3-content w3-section titlepic">
                <img className="mySlides w3-animate-fading titlepic" src={image1} alt="paysage" />
                <img className="mySlides w3-animate-fading" src={image2} alt="paysage" />
                <img className="mySlides w3-animate-fading" src={image3} alt="paysage" />
              </div> */}
              <div className="projets_capt" data-aos="zoom-out" data-aos-duration="2000">
                <figure>
                  <a href="http://www.atypeek.xyz" target="_blank" rel="noreferrer">

                    <img src={image1} className="imga" alt="paysage" />
                  </a>
                  <figcaption>Atypeek : Projet de fin de formation (2021)</figcaption>
                </figure>
              </div>
              <div className="projets_capt2" data-aos="zoom-in-down" data-aos-duration="3000">

                <figure>
                  <a href="http://www.salindrestennis.fr" target="_blank" rel="noreferrer">
                    <img src={image2} className="imga" alt="paysage" />
                  </a>
                  <figcaption>As Salindres Tennis : Site du club de Tennis de Salindres (2019 - Aujourd'hui)</figcaption>
                </figure>
              </div>
              <div className="projets_capt3" data-aos="zoom-in-up" data-aos-duration="3000">

                <figure>
                  <a href="http://cyr.netlify.app" target="_blank" rel="noreferrer">
                    <img src={image3} className="imga" alt="paysage" />
                  </a>
                  <figcaption>La Deumeure de Cyr - Chambre d'hôte dans le pays de Salers (2021 - )</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
