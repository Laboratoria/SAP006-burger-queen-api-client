import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { showOrNotShowPassword } from './Functions';
import { moveLabelUpEvenWhenInputValueIsInvalid } from './Functions'
import { processRegisterAnEmployeeRequest } from './Functions';

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
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

  const userData = {name, email, password, confirmPassword, role}

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
          inputValue={name}
          inputOnChange={(e) => setName(e.target.value)}
          labelText='Nome Completo'
          iconSRC={inputName}
          iconAlt='Name'
          eyeClass='display-none'
        />
        <InputContentUserData 
          inputData='email'
          inputType='email'
          inputValue={email}
          inputOnChange={(event) => [setEmail(event.target.value), moveLabelUpEvenWhenInputValueIsInvalid(event)]}
          labelText='Email'
          iconSRC={inputEmail}
          iconAlt='Email'
          eyeClass='display-none'
        />
       <InputContentUserData 
          inputData='password'
          inputType='password'
          inputValue={password}
          inputOnChange={(e) => setPassword(e.target.value)}
          labelText='Senha'
          iconSRC={inputPassword}
          iconAlt='Password'
          eyeClass='show-or-not-password not-show-password'
          buttonEvent={(event) => showOrNotShowPassword(event)}
        />
        <InputContentUserData
          inputData='password'
          inputType='password'
          inputValue={confirmPassword}
          inputOnChange={(e) => setConfirmPassword(e.target.value)}
          labelText='Confirme a Senha'
          iconSRC={inputPassword}
          iconAlt='Password'
          eyeClass='show-or-not-password not-show-password'
          buttonEvent={(event) => showOrNotShowPassword(event)}
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
          buttonEvent = {(event) => processRegisterAnEmployeeRequest(event, {userData})}
        />
        <p> Ou <Link to = '/'> entre </Link> com contas existentes.</p>
      </form>
    </main>
  </div>
  )
}