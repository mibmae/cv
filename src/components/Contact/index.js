import React, { useState, useEffect } from 'react';
import Left from 'src/components/Left';
import './styles.scss';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmitForm = (data, event) => {
    console.log('envois la sauce', data.name, data.email, data.message);
    event.preventDefault();
  };

  const required = 'Ce champ est requis.';
  const errorMessage = (error) => (
    <div className="invalid-feedback">{error}</div>
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
    <div className="container-fluid">
      <div className="row">
        <Left />
        {/*  */}
        <div className="col-8 bord nopadding">
          <div className="titlea">Contactez-moi</div>

          <form className="contact_form" onSubmit={handleSubmit(handleSubmitForm)}>
            <label htmlFor="name">
              Votre Nom:
              <input
                className="texte"
                name="name"
                id="name"
                type="text"
                onChange={handleChangeName}
                {...register('name', { required: 'Veuillez entrer votre nom' })}
              />
            </label>
            {errors.name && errorMessage('Veuillez entrer votre nom')}
            
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
            <p>{name}</p>
            <p>{mail}</p>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>

  );
};
export default Contact;
