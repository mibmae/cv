// == Import npm
import React, { useEffect } from 'react';

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
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import socket from 'src/socketio';

// == Composant
function App() {


  socket.emit('connection');

  socket.on('private_message', (res) => {
    addResponseMessage(res);
  });


  useEffect(() => {
    socket.on('private message', (msg) => {
      addResponseMessage(msg);
    }, []);
  });

  // useEffect(() => {
  //   socket.on('news', (res) => addResponseMessage(res));
  //   // addResponseMessage('Laissez moi un message, je vous répondrai le plus vite possible.');
  // }, []);

  const handleNewUserMessage = (newMessage) => {
    // socket.on('message', newMessage);
    //  addResponseMessage(newMessage);

    // console.log(`New message incoming! ${newMessage}`);
    // socket.emit('sendmessage', newMessage);
    socket.emit('client_message', newMessage);
    // Now send the message throught the backend API
  };

  return (
    <div className="app">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={logo}
        title="Me contacter"
        subtitle="C'est par ici !"
        senderPlaceHolder="Veuillez entrer un message"
      />
      <Header />
      <Bandeau />
      {/* <WeatherWidget city="Saint-ambroix" /> */}
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
