import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { InputContentUserData } from '../components/UserData';
import { InputRadioUserData } from '../components/UserData';

import '../styles/Register.scss'

import registerBg from '../assets/images/register-bg.jpg';
import logoCombosBurger from '../assets/images/logo-combos-burger.png';
import inputName from '../assets/icons/input-name.png';
import inputEmail from '../assets/icons/input-email.png';
import inputPassword from '../assets/icons/input-password.png';
import inputRole from '../assets/icons/input-role.png';
import notShowPassword from '../assets/icons/input-password-not-show.png';

export function Register () {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState ('');

  function navigateToOrdersSection () {
    history.push('/orders')
  }

  return (
  <div className = 'register-content'>
    <Header
      headerBackgroundClassName='register-bg'
      headerBackgroundSRC={registerBg}
      headerLogoClassName='logo'
      headerLogoSRC={logoCombosBurger}
    />
    <main>
      <form>
        <InputContentUserData 
          inputType='text'
          inputValue={name}
          inputOnChange={(e) => setName(e.target.value)}
          labelText='Nome'
          iconSRC={inputName}
          iconAlt='Name'
          eyeClass='display-none'
        />
        <InputContentUserData 
          inputType='email'
          inputValue={email}
          inputOnChange={(e) => setEmail(e.target.value)}
          labelText='Email'
          iconSRC={inputEmail}
          iconAlt='Email'
          eyeClass='display-none'
        />
       <InputContentUserData 
          inputType='password'
          inputValue={password}
          inputOnChange={(e) => setPassword(e.target.value)}
          labelText='Senha'
          iconSRC={inputPassword}
          iconAlt='Password'
          eyeClass='show-or-not-password'
          passwordStatusSRC={notShowPassword}
          passwordStatusAlt='Hidden Password'
        />
        <InputContentUserData 
          inputType='password'
          inputValue={confirmPassword}
          inputOnChange={(e) => setConfirmPassword(e.target.value)}
          labelText='Confirme a Senha'
          iconSRC={inputPassword}
          iconAlt='Password'
          eyeClass='show-or-not-password'
          passwordStatusSRC={notShowPassword}
          passwordStatusAlt='Hidden Password'
        />
        <div>
          <form>
            <img src={inputRole} alt='Role'/>
            <InputRadioUserData 
              inputType='radio'
              inputValue='room'
              inputChecked={role === 'room'}
              inputOnChange={(e) => setRole(e.target.value)}
              labelText='Salão'
            />
            <InputRadioUserData 
              inputType='radio'
              inputValue='kitchen'
              inputChecked={role === 'kitchen'}
              inputOnChange={(e) => setRole(e.target.value)}
              labelText='Cozinha'
            />
          </form>
        </div>
        <Button
          buttonType = 'button'
          buttonText = 'Registrar'
          buttonEvent = {navigateToOrdersSection}
        />
        <p> Ou <Link to = '/'> entre </Link> com contas existentes.</p>
      </form>
    </main>
  </div>
  )
}