import { useHistory } from "react-router-dom";
//import { useState } from "react";
//import Button from '../../components/button/button';
import Logo from '../../components/imgs/novologo.png';
import GIF from '../../components/imgs/novologo.gif';
//import {Link} from 'react-router-dom';
import './style.scss';


function Home() {
  const history = useHistory()

  function navigateToNewRegister() {
    history.push('/login')
  }

  return (
    <>

      <div className='container'>
        <div className='content'>
          <div className='first-content'>
            <div className='first-column'>
              <img className='logo-home' src={Logo} alt="Logo" />
              <h2 className='title'>Wellcome Back!</h2>
              <h3 className='description'> Best Burger in Town </h3>
              <button className='btn-primary'>sign in</button>
            </div>
            <div className='second-column'>
              <form className='form'>
                <h2 className='title-second'> Create Account</h2>
                <label className='label-input'>
                  <i className="far fa-user icon-modify"></i>
                  <input type='text' name="fname" className='name-create' autocomplete="off" placeholder='Digite seu Nome' />
                </label>
                <label className='label-input'>
                  <i className="far fa-envelope icon-modify"></i>
                  <input type='email' name="femail" className='email-create' autocomplete="off" placeholder='Digite seu E-mail' />
                </label>
                <label className='label-input'>
                  <i className="fas fa-lock icon-modify"></i>
                  <input type='password' name="fpassword" className='password-create' placeholder='Digite sua Senha' />
                </label>
                <div className='class-option'>
                  <select className='option-style' >
                    <option >  Escolha sua função </option>
                    <option className='option-style' value='garçom'>  Garçom/Garçonete 🍽️ </option>
                    <option className='option-style' value='cozinheiro'>  Cozinheiro 🧑‍🍳 </option>
                  </select>
                  <button className='btn'>sign up</button>
                </div>
              </form>
            </div>
          </div>
          <div className='second-content'>
            <div className='first-column'>
              <img className='logo-home' src={GIF} alt="Logo" />
              <h2 className='title'>New here?</h2>
              <h3 className='description'> Enter you personal details  and start journey with us </h3>
              <button className='btn-primary'>sign up</button>
            </div>
            <div className='second-column'>
              <form className='form'>
                <h2 className='title-second'> Use your email accont</h2>
                <label className='label-input'>
                  <i className="far fa-envelope icon-modify"></i>
                  <input type='email' name="femail" className='email-create' autocomplete="off" placeholder='Digite seu E-mail' />
                </label>
                <label className='label-input'>
                  <i className="fas fa-lock icon-modify"></i>
                  <input type='password' name="fpassword" className='password-create' placeholder='Digite sua Senha' />
                </label>

                <button className='btn'>sign up</button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <footer className='footer'> BOORGIR &#169;</footer>
    </>
  )
}
export default Home;