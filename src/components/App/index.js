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
import {
  Widget, addResponseMessage, addLinkSnippet, setQuickButtons, addUserMessage,
} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import socket from 'src/socketio';

// == Composant
function App() {
  socket.emit('connection');

  socket.on('private_message', (res) => {
    if (res === "Voici l'adresse de mon repo Github : http://github.com/mibmae") {
      // res = 'Voici l adresse de mon repo Github : <a href="http://www.google.fr"> Github </a>';
      addLinkSnippet(
        {
          title: "Voici l'adresse de mon repo Github",
          link: 'https://github.com/mibmae',
          target: '_blank',
        },
      );
    }
    else {
      addResponseMessage(res);
    }
  });

  setQuickButtons(
    [{
      label: 'Disponibilité',
      value: 'Disponibilité',
    },
    {
      label: 'Mail',
      value: 'Mail',
    },
    {
      label: 'Github',
      value: 'Github',
    },
    {
      label: 'Telephone',
      value: 'Téléphone',
    },
  ]);

  // useEffect(() => {
  //   socket.on('private message', (msg) => {
  //     addResponseMessage(msg);
  //   }, []);
  // });


  const handleQuickButtonClicked = (button) => {
    console.log(button);
    addUserMessage(button);
    socket.emit('client_message', button);
    
  }

  const handleNewUserMessage = (newMessage) => {
    if (newMessage === 'message') {
    //   // toggleWidget();
    //   setQuickButtons(
    //     [{
    //       label: 'Je voudrai savoir si vous êtes disponible ?',
    //       value: 'Je voudrai savoir si vous êtes disponible ?',
    //     },
    //     {
    //       label: 'Je voudrai savoir si vous êtes disponible ?',
    //       value: 'Je voudrai savoir si vous êtes disponible ?',
    //     }])
    }
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
        handleQuickButtonClicked={handleQuickButtonClicked}
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
