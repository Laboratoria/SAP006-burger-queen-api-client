import { Link } from 'react-router-dom';
import loginRegisterBg from '../assets/images/login-bg.jpg';
import logoCombosBurger from '../assets/images/logo-combos-burger.png';
import inputEmail from '../assets/icons/input-email.png';
import inputPassword from '../assets/icons/input-password.png';
import notShowPassword from '../assets/icons/input-password-not-show.png';

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
        <div>
          <input type='text' required/>
          <label> Email </label>
          <img src={inputEmail} alt='Email'/>
        </div>
        <div>
          <input type='text' required/>
          <label> Senha </label>
          <img src={inputPassword} alt='Password'/>
          <img className = 'show-or-not-password' src={notShowPassword} alt='Senha Oculta'/>
        </div>
        <button> Entrar </button>
        <p> Ou <Link to = '-/'> registre-se </Link> </p>
      </form>
    </main>
  </div>
  )
}