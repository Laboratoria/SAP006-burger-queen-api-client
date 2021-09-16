import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { authLogin } from '../../services/auth';
import { navigateTo } from '../../services/routes';

import { AuthModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { InputContentUserData } from '../../components/UserData/UserData';

import '../../styles/Auth.scss'

export function Login () {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = {email, password}

  const [authErrorModal, setAuthErrorModal] = useState(false);
  const [authSucessModal, setAuthSucessModal] = useState(false);
  const setAuthModals = {setAuthErrorModal, setAuthSucessModal}

  return (
  <div className = 'login-and-register-content login-content'>
    <Header 
      Location = 'login'/>
    <main>
      <form>
        <InputContentUserData 
          Subject='email'
          InputValue = {email}
          InputOnChange = {(event) => setEmail(event.target.value)}
        />
        <InputContentUserData 
          Subject='password'
          InputValue = {password}
          InputOnChange = {(event) => setPassword(event.target.value)}   
        />
      </form>
        <Button 
          Role = 'authSubmitForm'
          ButtonOnClick = {(event) => authLogin(event, {userData}, {setAuthModals})} 
          children = 'Entrar'
        /> 
        <div className='auth-navigation-div'>
          <p>Ou</p>
          <Button 
            Role = 'authNavigateTo'
            ButtonOnClick = {() => navigateTo(history, '/register', setAuthSucessModal)} 
            children = 'registre-se'
          /> 
        </div>
          <section>
        {authSucessModal ? (
          <AuthModal 
            Role = 'authSucessModal-login'
            ButtonOnClick = {() => navigateTo(history, '/register', setAuthSucessModal)} 
          />
        ): null}
      </section>
      <section>
        {authErrorModal ? (
          <AuthModal 
            Role = 'authErrorModal-login'
            ButtonOnClick = {() => navigateTo(history, '/', setAuthErrorModal)}
            ButtonOnClickSecondOption = {() => navigateTo(history, '/register', setAuthErrorModal)}
          />
        ): null}
      </section>
    </main>
  </div>
  )
}