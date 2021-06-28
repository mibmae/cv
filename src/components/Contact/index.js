/* eslint-disable no-console */
import React, { useState } from 'react';
import Left from 'src/components/Left';
import './styles.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState('');
  const [firstname, setName] = useState('');
  const [mail, setMail] = useState('');


  const handleSubmitForm = (data, event) => {
    event.preventDefault();
    console.log(data);
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post('https://server-mibmae.herokuapp.com/mail/', data)
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log('envois la sauce', data.name, data.email, data.message);
  };

  const errorMessage = (error) => (
    <div className="invalid-contact">{error}</div>
  );

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const handleChangeMail = (event) => {
    const { value } = event.target;
    setMail(value);
  };
  const handleChangeMessage = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  return (
    <div className="container-fluid contact">
      <div className="row">
        <Left />
        {/*  */}
        <div className="col-9 bord nopadding">
          <div className="titlea">Contactez-moi</div>

          <form className="contact_form" onSubmit={handleSubmit(handleSubmitForm)}>
            <label htmlFor="firstname">
              Votre Nom:
              <input
                className="texte"
                name="firstname"
                id="firstname"
                type="text"
                onChange={handleChangeName}
                {...register('firstname', { required: 'Veuillez entrer votre nom' })}
              />
            </label>
            {errors.firstname && errorMessage('Veuillez entrer votre nom')}

            <label htmlFor="mail">
              Votre Mail:
              <input
                className="texte"
                type="email"
                name="email"
                onChange={handleChangeMail}
                {...register('email', { required: 'Veuillez entrer une adresse mail valide' })}
              />
            </label>
            {errors.email && errorMessage('Veuillez entrer une adresse mail valide')}
            <label htmlFor="message">
              Votre Message:
              <textarea
                rows="4"
                className="texte"
                type="text"
                onChange={handleChangeMessage}
                {...register('message', { required: 'Veuillez entrer un message' })}
              />
              {errors.message && errorMessage('Veuillez entrer un message')}
            </label>
            <input type="submit" className="button_send" value="Envoyer" />
            <p>{firstname}</p>
            <p>{mail}</p>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>

  );
};
export default Contact;
