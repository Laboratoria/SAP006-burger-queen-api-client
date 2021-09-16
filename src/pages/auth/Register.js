import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { authErrorsMessages } from '../../services/errors';
import { authSignin } from '../../services/auth';
import { showOrNotShowPassword } from '../../services/auth';
import { navigateTo } from '../../services/routes';

import { AuthErrorMessages } from '../../components/ErrorMessages/ErrorMessages';
import { AuthModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { InputContentUserData } from '../../components/UserData/UserData';
import { InputRadioUserData } from '../../components/UserData/UserData';

import '../../styles/Auth.scss'

export const Register = () => {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState ('');
  const userData = {name, email, password, confirmPassword, role};


  const [authErrorModal, setAuthErrorModal] = useState(false);
  const [authSucessModal, setAuthSucessModal] = useState(false);
  const setAuthModals = {setAuthErrorModal, setAuthSucessModal}

  const [nameErrorInput, setNameErrorInput] = useState(false);
  const [emailErrorInput, setEmailErrorInput] = useState(false);
  const [passwordErrorInput, setPasswordErrorInput] = useState(false);
  const [confirmPasswordErrorInput, setConfirmPasswordErrorInput] = useState(false);
  const [roleErrorInput, setRoleErrorInput] = useState(false);

  const setAuthInputs = {setNameErrorInput, setEmailErrorInput, setPasswordErrorInput,
  setConfirmPasswordErrorInput, setRoleErrorInput}

  return (
    <div className = 'login-and-register-content register-content'>
    <Header 
      Location = 'register'/>
      <main>
        <form>
        <InputContentUserData 
          Subject='name'
          InputValue = {name}
          InputOnChange = {(event) => setName(event.target.value)}
        />
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
        <InputContentUserData 
          Subject='confirmPassword'
          InputValue = {confirmPassword}
          InputOnChange = {(event) => setConfirmPassword(event.target.value)}   
        />
        </form>
        <Button 
          Role = 'authSubmitForm'
          ButtonOnClick = {(event) => authSignin(event, {userData}, {setAuthModals}, {setAuthInputs})} 
          ButtonChildren = 'Registrar'
        /> 
        <div className='auth-navigation-div'>
          <p>Ou</p>
          <Button 
            Role = 'authNavigateTo'
            ButtonOnClick = {() => navigateTo(history, '/', setAuthSucessModal)} 
            ButtonChildren = 'entre'
          /> 
          <p> com uma conta existente</p>
        </div>
      </main>
      <section>
        {authSucessModal ? (
          <AuthModal 
            Role = 'authSucessModal'
            ButtonOnClick = {() => navigateTo(history, '/register', setAuthSucessModal)} 
          />
        ): null}
      </section>
      <section>
        {authErrorModal ? (
          <AuthModal 
            Role = 'authErrorModal'
            ButtonOnClick = {() => navigateTo(history, '/', setAuthErrorModal)}
            ButtonOnClickSecondOption = {() => navigateTo(history, '/register', setAuthErrorModal)}
          />
        ): null}
      </section>
    </div>
  )
}