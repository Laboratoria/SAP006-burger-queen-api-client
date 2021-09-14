import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { authLogin } from '../../services/auth';
import { showOrNotShowPassword } from '../../services/auth';
import { navigateTo } from '../../services/routes';

import { Button } from '../../components/Button'
import { AuthModal } from '../../components/Modal';
import { Header } from '../../components/Header'
import { InputContentUserData } from '../../components/UserData';

import '../../styles/Auth.scss'

import loginBg from '../../assets/images/login-bg.jpg';
import logoCombosBurger from '../../assets/images/logo-combos-burger.png';
import inputEmail from '../../assets/icons/input-email.png';
import inputPassword from '../../assets/icons/input-password.png';

export function Login () {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = {email, password};

  const[showPassword, setShowPassword] = useState('false')

  const [authErrorModal, setAuthErrorModal] = useState(false);
  const [authSucessModal, setAuthSucessModal] = useState(false);
  const setAuthModals = {setAuthErrorModal, setAuthSucessModal}

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
          inputData='email'
          inputType='email'
          inputPlaceholder='Email'
          inputValue={email}
          inputOnChange={(event) => setEmail(event.target.value)}
          labelClass={`${email ? 'move-label-up' : ''}`}
          labelText='Email'
          iconSRC={inputEmail}
          iconAlt='Email'
        />
        <InputContentUserData 
          inputData='password'
          inputType={showPassword ? 'password' : 'text'}
          inputPlaceholder='Senha'
          inputValue={password}
          inputOnChange={(event) => setPassword(event.target.value)}
          labelText='Senha'
          iconSRC={inputPassword}
          iconAlt='Password'
        />
        <Button 
          buttonClass={`show-or-not-password ${showPassword ? 'not-show-password' : 'show-password'}`}
          buttonEvent={() => showOrNotShowPassword(showPassword, setShowPassword)}
        />
        <Button
          buttonType = 'button'
          buttonText = 'Entrar'
          buttonEvent = {(event) => authLogin(event, {userData}, {setAuthModals})}
        />
        <p> Ou <Link to = '/register'> registre-se </Link> </p>
      </form>
    </main>
    <section>
        {authSucessModal ? (
          <AuthModal 
            modalMessage = 'Cadastro realizado com sucesso!'
            buttonText = 'OK'
            buttonEvent = {() => navigateTo(history, '/orders', setAuthSucessModal)}
            buttonIIClass = 'display-none'
          />
        ): null}
      </section>
      <section>
        {authErrorModal ? (
          <AuthModal 
            modalMessage = 'Usuárie não encontrade. Verifique seus dados :)'
            buttonText = 'Tente novamente'
            buttonEvent = {() => navigateTo(history, '/', setAuthErrorModal)}
            buttonIIText = 'Crie uma nova conta'
            buttonIIEvent = {() => navigateTo(history, '/register', setAuthErrorModal)}
          />
        ): null}
      </section>
  </div>
  )
}