import React from 'react';

import './styles.scss';
import Left from 'src/components/Left';

const Projets = () => (
  <div className="container-fluid">
    <div className="row">
    <Left />
      {/*  */}

      <div className="col-8 bordure">
        <div className="titlea">Projects</div>
        <div className="projets_reas">
    <div><img src="http://atypeek.xyz/images/2f97531306cf97117cb3badaa21fc691.png" alt="atypeek" className="logo" /> Atypeek</div>
    <div><img src="https://www.salindrestennis.fr/images/logo.png" alt="atypeek" className="logo" />Salindres Tennis</div>
    
    </div>
    </div>
  </div>
  </div>

);

export default Projets;
