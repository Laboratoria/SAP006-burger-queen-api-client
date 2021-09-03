import { Link } from 'react-router-dom';
import registerBg from '../assets/images/register-bg.jpg';
import logoCombosBurger from '../assets/images/logo-combos-burger.png';
import inputName from '../assets/icons/input-name.png';
import inputEmail from '../assets/icons/input-email.png';
import inputPassword from '../assets/icons/input-password.png';
import inputRole from '../assets/icons/input-role.png';
import inputRestaurant from '../assets/icons/input-restaurant.png';
import notShowPassword from '../assets/icons/input-password-not-show.png';


import '../styles/Register.scss'

export function Register () {
  return (
  <div className = 'register-content'>
    <header>
      <img className = 'register-bg' src={registerBg} alt='Ilustração de Background'/>
      <img className = 'logo' src={logoCombosBurger} alt='Logo Combos Burguer'/>
    </header>
    <main>
      <form>
        <div>
          <input type='text' required/>
          <label> Nome </label>
          <img src={inputName} alt='Name'/>
        </div>
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
        <div>
          <input type='text' required/>
          <label> Confirme a Senha </label>
          <img src={inputPassword} alt='Password'/>
          <img className = 'show-or-not-password' src={notShowPassword} alt='Senha Oculta'/>
        </div>
        <div>
          <input type='text' required/>
          <label> Setor </label>
          <img src={inputRole} alt='Role'/>
        </div>
        <div>
          <input type='text' required/>
          <label> Restaurante </label>
          <img src={inputRestaurant} alt='Restaurant'/>
        </div>
        <button> Entrar </button>
        <p> Ou <Link to = '/register'> registre-se </Link> </p>
      </form>
    </main>
  </div>
  )
}