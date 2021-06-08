// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Formations from 'src/components/Formations';
import Footer from 'src/components/Footer';
import './styles.css';
import WeatherWidget from 'src/components/WeatherWidget';
import { Switch, Route } from 'react-router-dom';
import Bandeau from 'src/components/Bandeau';
import Projets from 'src/components/Projets';
import Contact from 'src/components/Contact';
import Infos from 'src/components/Infos';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Bandeau />
      <Switch>
        <Route path="/" exact>
          <Formations />
        </Route>
        <Route path="/projets" exact>
          <Projets />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/infos" exact>
          <Infos />
        </Route>
      </Switch>
      {/* <WeatherWidget city="Saint-Ambroix" /> */}

      <Footer />
    </div>
  );
}

// == Export
export default App;
