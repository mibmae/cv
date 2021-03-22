// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Formations from 'src/components/Formations';
import Infos from 'src/components/Infos';
import Footer from 'src/components/Footer';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Formations />
    <Footer />
    </div>
);

// == Export
export default App;
