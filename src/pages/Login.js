import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { showOrNotShowPassword } from '../services/LoginAndRegister';
import { moveLabelUpEvenWhenInputValueIsInvalid } from '../services/LoginAndRegister'

import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { InputContentUserData } from '../components/UserData';

import '../styles/LoginAndRegister.scss'

import loginBg from '../assets/images/login-bg.jpg';
import logoCombosBurger from '../assets/images/logo-combos-burger.png';
import inputEmail from '../assets/icons/input-email.png';
import inputPassword from '../assets/icons/input-password.png';

export function Login () {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navigateToOrdersSection () {
    history.push('/orders')
  }

  return (
  <div className = 'login-and-register-content login-content'>
    <Header
      headerBackgroundClassName='login-bg'
      headerBackgroundSRC={loginBg}
      headerLogoClassName='logo'
      headerLogoSRC={logoCombosBurger}
    />
    <main>
      <form>
        <InputContentUserData 
          inputId='email'
          inputType='email'
          inputValue={email}
          inputOnChange={(event) => [setEmail(event.target.value), moveLabelUpEvenWhenInputValueIsInvalid(event)]}
          labelText='Email'
          iconSRC={inputEmail}
          iconAlt='Email'
          eyeClass='display-none'
        />
        <InputContentUserData 
          inputType='password'
          inputValue={password}
          inputOnChange={(event) => setPassword(event.target.value)}
          labelText='Senha'
          iconSRC={inputPassword}
          iconAlt='Password'
          eyeClass='show-or-not-password not-show-password'
          buttonEvent={(event) => showOrNotShowPassword(event)}
        />
        <Button
          buttonType = 'button'
          buttonText = 'Entrar'
          buttonEvent = {navigateToOrdersSection}
        />
        <p> Ou <Link to = '/register'> registre-se </Link> </p>
      </form>
    </main>
  </div>
  )
}