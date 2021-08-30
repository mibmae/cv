// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Formations from 'src/components/Formations';
import Footer from 'src/components/Footer';
import './styles.css';
// import WeatherWidget from 'src/components/WeatherWidget';
import { Switch, Route } from 'react-router-dom';
import Bandeau from 'src/components/Bandeau';
import Projets from 'src/components/Projets';
import Contact from 'src/components/Contact';
import Left from 'src/components/Left';
import Infos from 'src/components/Infos';
import Loadering from 'src/components/Loader';
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  setQuickButtons,
  addUserMessage,
} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import socket from 'src/socketio';
import robot from 'src/assets/images/robot.png';
import cookie from 'src/assets/images/cookies.png';
import CookieConsent from 'react-cookie-consent';
// import WeatherWidget from 'src/components/WeatherWidget';

// == Composant
function App() {
  socket.emit('connection');

  socket.on('private_message', (res) => {
    // if (res === 'Mon adresse mail est : mibmae@gmail.com.') {
    //   addLinkSnippet(
    //     {
    //       title: "Cliquez ici pour m'envoyer un message",
    //       link: 'https://www.guilhem-moes.xyz/contact',
    //       target: '_self',
    //     },
    //   );
    // }
    if (res === "Voici les projets sur lesquels j'ai travaillé ou je travaille encore. As Salindres Tennis, Atypeek") {
      addLinkSnippet(
        {
          title: 'As Salindres Tennis',
          link: 'https://www.salindrestennis.fr',
          target: '_blank',
        },
      );
      addLinkSnippet(
        {
          title: 'Atypeek',
          link: 'https://www.atypeek.xyz',
          target: '_blank',
        },
      );
        <img src="robot.png" />;
        addLinkSnippet(
          {
            title: 'Le Domaine de Cyr',
            link: 'https://cyr.netlify.app',
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
      label: 'Projets',
      value: 'Projets',
    },
    ],
  );

  const handleQuickButtonClicked = (button) => {
    addUserMessage(button);
    if (button === 'Mail') {
      addLinkSnippet(
        {
          title: "Cliquez ici pour m'envoyer un message",
          link: 'https://www.guilhem-moes.xyz/contact',
          target: '_self',
        },
      );
    }
    else if (button === 'Github') {
      addLinkSnippet(
        {
          title: "Voici l'adresse de mon repo Github",
          link: 'https://github.com/mibmae',
          target: '_blank',
        },
      );
    }
    else {
      socket.emit('client_message', button);
    }
  };

  const handleNewUserMessage = (newMessage) => {
    const newMessages = newMessage.toLowerCase();
    if (newMessages === 'github') {
      addLinkSnippet(
        {
          title: "Voici l'adresse de mon repo Github",
          link: 'https://github.com/mibmae',
          target: '_blank',
        },
      );
    }
    else if (newMessages === 'mail' || newMessages === 'Mail') {
      addLinkSnippet(
        {
          title: "Cliquez ici pour m'envoyer un message",
          link: 'https://www.guilhem-moes.xyz/contact',
          target: '_self',
        },
      );
    }
    else {
      socket.emit('client_message', newMessage);
    }
  };

  return (
    <div className="app">
      <Loadering />
      <Header />
      <Bandeau />
      {/* <Left /> */}
      {/* <WeatherWidget city="Saint-ambroix" /> */}
      <Switch>
        <Route path="/" exact>
          <Formations />
          <Widget
            handleNewUserMessage={handleNewUserMessage}
            profileAvatar={robot}
            profileClientAvatar={robot}
            titleAvatar={robot}
            title="Me contacter"
            subtitle="C'est par ici !"
            senderPlaceHolder="Veuillez entrer un message"
            handleQuickButtonClicked={handleQuickButtonClicked}
            autofocus
            showTimeStamp={false}
            emojis
          />
        </Route>
        <Route path="/projets" exact>
          <Projets />
          <Widget
            handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={logo}
            title="Me contacter"
            subtitle="C'est par ici !"
            senderPlaceHolder="Veuillez entrer un message"
            handleQuickButtonClicked={handleQuickButtonClicked}
          />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/infos" exact>
          <Infos />
          <Widget
            handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={logo}
            title="Me contacter"
            subtitle="C'est par ici !"
            senderPlaceHolder="Veuillez entrer un message"
            handleQuickButtonClicked={handleQuickButtonClicked}
          />
        </Route>
      </Switch>
      {/* <WeatherWidget city="Saint-Ambroix" /> */}

      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Miam"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonClasses="buttoncookie"
        expires={150}
      >
        <img src={cookie} alt="cookie" style={{ width: '2%' }} /> Ici on mange des cookies{' '}
        <span style={{ fontSize: '10px' }}>Cela te convient ? </span>
      </CookieConsent>
    </div>
  );
}

// == Export
export default App;
