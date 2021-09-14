import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


import { authSignin } from '../../services/auth';
import { showOrNotShowPassword } from '../../services/auth';
import { navigateTo } from '../../services/routes';

import { AuthErrorMessages } from '../../components/ErrorMessages';
import { AuthModal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { InputContentUserData } from '../../components/UserData';
import { InputRadioUserData } from '../../components/UserData';

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

  const[showPassword, setShowPassword] = useState('false')

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
            inputData='name'
            inputType='text'
            inputPlaceholder='Nome Completo'
            inputValue={name}
            inputOnChange={(e) => setName(e.target.value)}
            labelText='Nome Completo'
            iconSRC={inputName}
            iconAlt='Name'
          />
          {nameErrorInput ? (
          <AuthErrorMessages
            textErrorMessage='Por favor, insira um nome válido.'
          />
          ): null}
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
        < InputContentUserData 
            inputData='password'
            inputConfirmPassword='confirmPassword'
            inputType={showPassword ? 'password' : 'text'}
            inputPlaceholder='Senha'
            inputValue={password}
            inputOnChange={(e) => setPassword(e.target.value)}
            labelText='Senha'
            iconSRC={inputPassword}
          />
          <Button 
            buttonClass={`show-or-not-password ${showPassword ? 'not-show-password' : 'show-password'}`}
            buttonEvent={() => showOrNotShowPassword(showPassword, setShowPassword)}
          />
          <InputContentUserData
            inputData='password'
            inputConfirmPassword='confirmPassword'
            inputType={showPassword ? 'password' : 'text'}
            inputPlaceholder='Confirme a Senha'
            inputValue={confirmPassword}
            inputOnChange={(e) => setConfirmPassword(e.target.value)}
            labelText='Confirme a Senha'
            iconSRC={inputPassword}
          />
          <Button 
            buttonClass={`show-or-not-password ${showPassword ? 'not-show-password' : 'show-password'}`}
            buttonEvent={() => showOrNotShowPassword(showPassword, setShowPassword)}
          />
          <div>
            <fieldset>
              <img src={inputRole} alt='Role'/>
              <InputRadioUserData 
                inputData='role'
                inputType='radio'
                inputValue='room'
                inputChecked={role === 'room'}
                inputOnChange={(e) => setRole(e.target.value)}
                labelText='Salão'
              />
              <InputRadioUserData 
                inputData='role'
                inputType='radio'
                inputValue='kitchen'
                inputChecked={role === 'kitchen'}
                inputOnChange={(e) => setRole(e.target.value)}
                labelText='Cozinha'
              />
            </fieldset>
          </div>
          <Button
            buttonType = 'submit'
            buttonText = 'Registrar'
            buttonEvent = {(event) => authSignin(event, {userData}, {setAuthModals}, {setAuthInputs})}
          />
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