import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.scss';

function WeatherWidget({ city }) {
  const [desc, setDesc] = useState('');
  const [temperature, setTemperature] = useState('');
  const [icon, setIcon] = useState('');
  
  // au 1e rendu du composant je veux charger les données météo
  // pour la ville passée en props
  useEffect(() => {
    const loadData = async () => {
      const apiKey = 'e957c727743a6de50f5fab1fccce6b61';

      try {
        const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`);
        setIcon(data.weather[0].icon);
        setTemperature(Math.round(data.main.temp));
        setDesc(data.weather[0].description);
      } catch (error) {
        console.log(`error`, error);
      }
    };

    loadData();
  }, [city]);

  return (
    <div className="weather-widget">
      <div className="weather-widget__left-col">
        <p className="weather-widget__city">{city}</p>
        <p className="weather-widget__desc">{desc}</p>
      </div>
      <div className="weather-widget__right-col">
        <p className="weather-widget__temperature">{temperature} °C</p>
        <img className="weather-widget__icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon"/>
      </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherWidget;
