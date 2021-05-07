// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Formations from 'src/components/Formations';
import Footer from 'src/components/Footer';
import './styles.css';
import WeatherWidget from 'src/components/WeatherWidget';


// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <WeatherWidget city="Saint-Ambroix" />
      <Formations />
      <Footer />
    </div>
  );
}

// == Export
export default App;
