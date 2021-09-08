import { Link } from 'react-router-dom';

import registerBg from '../assets/images/register-bg.jpg';
import logoCombosBurger from '../assets/images/logo-combos-burger.png';
import inputName from '../assets/icons/input-name.png';
import inputEmail from '../assets/icons/input-email.png';
import inputPassword from '../assets/icons/input-password.png';
import inputRole from '../assets/icons/input-role.png';
import notShowPassword from '../assets/icons/input-password-not-show.png';

import { Button } from '../components/Button'

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
          <form>
            <img src={inputRole} alt='Role'/>
            <div>
              <input type="radio" name='role'/>
              <label>Salão</label>
            </div>
            <div>
              <input type="radio" name='role'/>
              <label>Cozinha</label>
            </div>
          </form>
        </div>
        <Button
          buttonType = 'button'
          buttonText = 'Registrar'
        />
        <p> Ou <Link to = '/'> entre </Link> com contas existentes.</p>
      </form>
    </main>
  </div>
  )
}