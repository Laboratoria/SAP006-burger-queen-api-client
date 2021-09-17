import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './login.css';

import fundo from '../../img/fundo.png'
import fundoDesk from '../../img/fundo-desk.png'
import hamburguer from '../../img/hamburguer-login.png'
import jesus from '../../img/jesus.gif'
import jesusDesk from '../../img/jesus-desk.gif'

const Login = () => {

  const [ infoUser, setInfoUser ] = useState({ email: '', password: '' });
  // const [ show, setShow ] = useState (false);

  return (
    <div className='login'>
      <Link to='/home'>Ir para home</Link>
      <figure className='fundos-login'>
        <img className='fundo-login'
          src={fundo} alt='fundo'/>
        <img className='fundo-desk'
          src={fundoDesk} alt='fundo'/>
        <img className='hamburguer-login'
          src={hamburguer} alt='hamburguer'/>
      </figure>
      <figure className='logos-login'>
        <img className='jesus-logo'
          src={jesus} alt='jesus' />
        <img className='jesus-desk'
          src={jesusDesk} alt='jesus'/>
      </figure>
      <form className='form-login'>
        <fieldset className='form-inner'>
          <input className='input-login'
          type='email' id='email' placeholder='Email' required='' 
          value={infoUser.email} 
          onChange={e => setInfoUser({...infoUser, email: e.target.value})}/>
          <section className ='icons-input'>
          <i className='far fa-envelope icons'></i>
          </section>
        </fieldset>
        <fieldset className="form-inner">
          <input className="input-password" 
            type="password" id="password" placeholder="Password" required="" 
            value={infoUser.password}
            onChange={e => setInfoUser({...infoUser, password: e.target.value})}/>
            <section className="icons-input">
            <i id="show" className="fas fa-lock icons"></i>
            <i id="hide" className="fas fa-lock-open icons"></i>
            </section>
        </fieldset>
        <input className='btn-login'
        type='submit'value='Login'/>
      </form>
    </div>
  )
};

export default Login;