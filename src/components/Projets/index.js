import React from 'react';

import './styles.scss';
import Left from 'src/components/Left';
import CaptureAtypeek from 'src/assets/images/captureatypeek.png';
import CaptureSalindres from 'src/assets/images/capturesalindres.png';
import Carousel from 'react-bootstrap/Carousel';

const Projets = () => (
  <div className="container-fluid">
    <div className="row">
      <Left />
      <div className="col-9 bord nopadding">
        <div className="titlea">Projets</div>
        <div className="projets_reas">
          <div className="projets_container">
            <h3>Voici la liste des projets réalisés ou en cours</h3>
            <Carousel>
              <Carousel.Item interval={3000}>
                <a href="http://atypeek.xyz" target="_blank" rel="noreferrer">
                  <img
                    className="d-block w-100 imgd"
                    src={CaptureAtypeek}
                    alt="Atypeek"
                  />
                </a>
                <Carousel.Caption>
                  <h3 className="title-cap">Atypeek</h3>
                  <p className="title-cap">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <a href="https://www.salindrestennis.fr" target="_blank" rel="noreferrer"><img
                  className="d-block w-100 imgd"
                  src={CaptureSalindres}
                  alt="Salindres Tennis"
                />
                </a>
                <Carousel.Caption>
                  <h3 className="title-cap">As Salindres Tennis</h3>
                  <p className="title-cap">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
 
);

export default Projets;
