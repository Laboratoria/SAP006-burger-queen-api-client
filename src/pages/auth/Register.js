import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

import registerBg from '../../assets/images/register-bg.jpg';
import logoCombosBurger from '../../assets/images/logo-combos-burger.png';
import inputName from '../../assets/icons/input-name.png';
import inputEmail from '../../assets/icons/input-email.png';
import inputPassword from '../../assets/icons/input-password.png';
import inputRole from '../../assets/icons/input-role.png';

export const Register = () => {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState ('');
  const userData = {name, email, password, confirmPassword, role};

  const[showPassword, setShowPassword] = useState(false)
  const[showConfirmPassword, setShowConfirmPassword] = useState(false)

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
        headerBackgroundClassName='register-bg'
        headerBackgroundSRC={registerBg}
        headerLogoClassName='logo'
        headerLogoSRC={logoCombosBurger}
      />
      <main>
        <form>
          <InputContentUserData 
            inputClass={nameErrorInput ? 'auth-wrong-input' : 'auth-correct-input'}
            inputType='text'
            inputPlaceholder='Nome Completo'
            inputValue={name}
            inputOnChange={(e) => [setName(e.target.value), setNameErrorInput(false)]}
            labelText='Nome Completo'
            iconSRC={inputName}
            iconAlt='Name'
            buttonClass='display-none'
          />
          <AuthErrorMessages  
            children = {nameErrorInput ? authErrorsMessages.name : 'Input has an error!'}
            errorMessageClass = {nameErrorInput ? 'auth-error-message' : 'auth-error-message visibility-hidden'}
          /> 
          <InputContentUserData 
            inputClass={emailErrorInput ? 'auth-wrong-input' : 'auth-correct-input'}
            inputType='email'
            inputPlaceholder='Email'
            inputValue={email}
            inputOnChange={(event) => [setEmail(event.target.value), setEmailErrorInput(false)]}
            labelClass={`${email ? 'move-label-up' : ''}`}
            labelText='Email'
            iconSRC={inputEmail}
            iconAlt='Email'
            buttonClass='display-none'
          />
          <AuthErrorMessages  
            children = {emailErrorInput ? authErrorsMessages.email : 'Input has an error!'}
            errorMessageClass = {emailErrorInput ? 'auth-error-message' : 'auth-error-message visibility-hidden'}
          /> 
          <InputContentUserData 
            inputClass={passwordErrorInput ? 'auth-wrong-input' : 'auth-correct-input'}
            inputType={showPassword ? 'text' : 'password'}
            inputPlaceholder='Senha'
            inputValue={password}
            inputOnChange={(e) => [setPassword(e.target.value), setPasswordErrorInput(false), setConfirmPasswordErrorInput(false)]}
            labelText='Senha'
            iconSRC={inputPassword}
            buttonClass={`auth-show-or-not-password ${showPassword ? 'auth-show-password' : 'auth-not-show-password'}`}
            buttonEvent={() => showOrNotShowPassword(showPassword, setShowPassword)}
          />
          <AuthErrorMessages  
            children =  {password !== confirmPassword ? authErrorsMessages.confirmPassword : authErrorsMessages.password}
            errorMessageClass = {passwordErrorInput ? 'auth-error-message' : 'auth-error-message visibility-hidden'}
          /> 
          <InputContentUserData
            inputClass={confirmPasswordErrorInput ? 'auth-wrong-input' : 'auth-correct-input'}
              inputType={showConfirmPassword ? 'text' : 'password'}
              inputPlaceholder='Confirme a Senha'
              inputValue={confirmPassword}
              inputOnChange={(e) => [setConfirmPassword(e.target.value), setPasswordErrorInput(false), setConfirmPasswordErrorInput(false)]}
              labelText='Confirme a Senha'
              iconSRC={inputPassword}
              buttonClass={`auth-show-or-not-password ${showConfirmPassword ? 'auth-show-password' : 'auth-not-show-password'}`}
            buttonEvent={() => showOrNotShowPassword(showConfirmPassword, setShowConfirmPassword)}
          />
          <AuthErrorMessages
            children =  {password !== confirmPassword ? authErrorsMessages.confirmPassword : authErrorsMessages.password}
            errorMessageClass = {confirmPasswordErrorInput ? 'auth-error-message' : 'auth-error-message visibility-hidden'}
          /> 
          <div>
            <fieldset>
              <img src={inputRole} alt='Role'/>
              <InputRadioUserData 
                divClass={roleErrorInput ? 'auth-wrong-input' : 'auth-correct-input'}
                inputType='radio'
                inputValue='room'
                inputChecked={role === 'room'}
                inputOnChange={(e) => [setRole(e.target.value), setRoleErrorInput(false)]}
                labelText='Salão'
              />
              <InputRadioUserData 
                divClass={roleErrorInput ? 'auth-wrong-input' : 'auth-correct-input'}
                inputType='radio'
                inputValue='kitchen'
                inputChecked={role === 'kitchen'}
                inputOnChange={(e) => setRole(e.target.value)}
                labelText='Cozinha'
              />
          </fieldset>
          <AuthErrorMessages  
            children = {roleErrorInput ? authErrorsMessages.role: 'Input has an error!'}
            errorMessageClass = {roleErrorInput ? 'auth-error-message' : 'auth-error-message visibility-hidden'}
          /> 
          </div>
          <Button
            buttonType = 'submit'
            buttonEvent = {(event) => authSignin(event, {userData}, {setAuthModals}, {setAuthInputs})}
          >Registrar
          </Button>
          <p> Ou <Link to = '/'> entre </Link> com contas existentes.</p>
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
            modalMessage = 'Este email já está cadastrado no sistema.'
            buttonText = 'Cadastre um novo email.'
            buttonEvent = {() => navigateTo(history, '/register', setAuthErrorModal)}
            buttonIIText = 'Entre com uma conta já existente.'
            buttonIIEvent = {() => navigateTo(history, '/', setAuthErrorModal)}
          />
        ): null}
      </section>
    </div>
  )
}