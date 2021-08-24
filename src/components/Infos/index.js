import React, { useState } from 'react';
import './styles.scss';
import axios from 'axios';
import Meteo from 'src/components/WeatherWidget';

function Infos() {
  const [persons, setPersons] = useState('');
  axios.get('https://server-mibmae.herokuapp.com/test')
    .then((res) => {
      setPersons(res.data);
    });
  return (
    <div className="col-12 bord">
      <Meteo city="Saint-Ambroix" />
      { persons }
    </div>
  );
}

export default Infos;
