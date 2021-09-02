import loginRegisterBg from '../assets/images/login-register-bg.jpg';
import logoCombosBurger from '../assets/images/logo-combos-burger.png'
import '../styles/Login.scss'

export function Login () {
  return (
  <div className = 'login-content'>
    <header>
      <img className = 'login-register-bg' src={loginRegisterBg} alt='Ilustração de Background'/>
      <img className = 'login-register-logo' src={logoCombosBurger} alt='Logo Combos Burguer'/>
    </header>
    <main>
      <form>
        <input type='text' placeholder='Email'/>
        <label> Email </label>
        <input type='text' placeholder='Senha'/>
        <label> Senha </label>
        <button> Entrar </button>
        <p> Ou <a href='#'>registre-se</a></p>
      </form>
    </main>
  </div>
  )
}