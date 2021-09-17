import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { authSignin } from '../../services/auth';
import { navigateTo } from '../../services/routes';

import { AuthErrorMessages } from '../../components/ErrorMessages/ErrorMessages';
import { AuthModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { InputContentUserData } from '../../components/UserData/UserData';
import { InputRadioUserData } from '../../components/UserData/UserData';

import inputRole from '../../assets/icons/input-role.png';

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
            Error={nameErrorInput}
            InputValue = {name}
            InputOnChange = {(event) => [setName(event.target.value), setNameErrorInput(false)]}
          />
          {nameErrorInput ? <AuthErrorMessages Subject='name'/> : <p className='auth-error-message'>&nbsp;</p>}
          
          <InputContentUserData 
            Subject='email'
            Error={emailErrorInput}
            InputValue = {email}
            InputOnChange = {(event) => [setEmail(event.target.value), setEmailErrorInput(false)]}
          />
          {emailErrorInput ? <AuthErrorMessages Subject='email'/> : <p className='auth-error-message'>&nbsp;</p>}
          
          <InputContentUserData 
            Subject='password'
            Error={passwordErrorInput}
            InputValue = {password}
            InputOnChange = {(event) => [setPassword(event.target.value), setPasswordErrorInput(false), setConfirmPasswordErrorInput(false)]}   
          />
          {passwordErrorInput ? 
          password !== confirmPassword ? 
          <AuthErrorMessages Subject='confirmPassword'/> : <AuthErrorMessages Subject='password'/> 
          : <p className='auth-error-message'>&nbsp;</p>}
         
          <InputContentUserData 
            Subject='confirmPassword'
            InputValue = {confirmPassword}
            Error={passwordErrorInput}
            InputOnChange = {(event) => [setConfirmPassword(event.target.value),  setPasswordErrorInput(false), setConfirmPasswordErrorInput(false)]}   
          />
          {confirmPasswordErrorInput ? 
          password !== confirmPassword ? 
          <AuthErrorMessages Subject='confirmPassword'/> : <AuthErrorMessages Subject='password'/> 
          : <p className='auth-error-message'>&nbsp;</p>}

          <fieldset className = {roleErrorInput ? 'auth-wrong-input' : 'auth-correct-input'}>
            <img src={inputRole} alt='Role'/>
            <InputRadioUserData
              Subject='room'
              InputChecked={role === 'room'}
              InputOnChange={(event) => [setRole(event.target.value), setRoleErrorInput(false)]}
            />
            <InputRadioUserData
              Subject='kitchen'
              InputChecked={role === 'kitchen'}
              InputOnChange={(event) => [setRole(event.target.value), setRoleErrorInput(false)]}
            />
          </fieldset>
          {roleErrorInput ? <AuthErrorMessages Subject='role'/> : <p className='auth-error-message auth-error-message-of-role'>&nbsp;</p>}
        </form>
        <Button 
          Role = 'authSubmitForm'
          ButtonOnClick = {(event) => authSignin(event, {userData}, {setAuthModals}, {setAuthInputs})} 
          children = 'Registrar'
        /> 
        <div className='auth-navigation-div'>
          <p>Ou</p>
          <Button 
            Role = 'authNavigateTo'
            ButtonOnClick = {() => navigateTo(history, '/', setAuthSucessModal)} 
            children = 'entre'
          /> 
          <p> com uma conta existente</p>
        </div>
      </main>
      <section>
        {authSucessModal ? (
          <AuthModal 
            Role = 'authSucessModal-register'
            ButtonOnClick = {() => navigateTo(history, '/register', setAuthSucessModal)} 
          />
        ): null}
      </section>
      <section>
        {authErrorModal ? (
          <AuthModal 
            Role = 'authErrorModal-register'
            ButtonOnClick = {() => navigateTo(history, '/register', setAuthErrorModal)}
            ButtonOnClickSecondOption = {() => navigateTo(history, '/', setAuthErrorModal)}
          />
        ): null}
      </section>
    </div>
  )
}