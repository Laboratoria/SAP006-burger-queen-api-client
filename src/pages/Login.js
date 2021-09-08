import { Link } from 'react-router-dom';
import loginRegisterBg from '../assets/images/login-bg.jpg';
import logoCombosBurger from '../assets/images/logo-combos-burger.png';
import inputEmail from '../assets/icons/input-email.png';
import inputPassword from '../assets/icons/input-password.png';
import notShowPassword from '../assets/icons/input-password-not-show.png';

import { Button } from '../components/Button.js'
import { InputUserData } from '../components/UserData';

import '../styles/Login.scss'

export function Login () {

  return (
  <div className = 'login-content'>
    <header>
      <img className = 'login-bg' src={loginRegisterBg} alt='Ilustração de Background'/>
      <img className = 'logo' src={logoCombosBurger} alt='Logo Combos Burguer'/>
    </header>
    <main>
      <form>
        <InputUserData 
          inputType='email'
          inputValue=''
          inputOnChange={(e) => setEmailLogin(e.target.value)}
          labelText='Email'
          iconSRC={inputEmail}
          iconAlt='Email'
          eyeClass='display-none'
        />
        <InputUserData 
          inputType='password'
          inputValue=''
          inputOnChange={(e) => e.target.value}
          labelText='Senha'
          iconSRC={inputPassword}
          iconAlt='Password'
          eyeClass='show-or-not-password'
          passwordStatusSRC={notShowPassword}
          passwordStatusAlt='Hidden Password'
        />
        <Button
          buttonType = 'button'
          buttonText = 'Entrar'
        />
        <p> Ou <Link to = '/register'> registre-se </Link> </p>
      </form>
    </main>
  </div>
  )
}