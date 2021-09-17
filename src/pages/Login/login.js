import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './login.css';

import jesus from '../../img/jesus.gif'

const Login = () => {

  const [ infoUser, setInfoUser ] = useState({ email: '', password: '' });
  console.log(infoUser);
  

  const handleChange = (e) => {        
    const informationUser = e.target.id;  
    setInfoUser({ ...infoUser, [informationUser]: e.target.value })

    // if (informationUser === 'password') {      
    // }
  }

  return (
    <div className='login'>
      <Link to='/home'>Ir para home</Link>

      <figure className='imagem-login'>
        <img className='hamburguer-login'
          src={jesus} alt='Login APP' />
      </figure>
      <form className='form-login'>
        <fieldset className='form-inner'>
          <input className='input-login'
          type='email' id='email' placeholder='Email' required='' 
          value={infoUser.email} 
          onChange={handleChange}/>
          <section className ='icons-input'>
          <i className='far fa-envelope'></i>
          </section>
        </fieldset>
        <fieldset className="form-inner">
          <input className="input-password" 
            type="password" id="password" placeholder="Password" required="" 
            value={infoUser.password}
            onChange={handleChange} />
          <section className="icons-input">
            <i id="show" className="fas fa-lock icons"></i>
            <i id="hide" className="fas fa-lock-open icons"></i>
          </section>
        </fieldset>
        <input className='btn-login'
          type='submit' value='login' />
      </form>
    </div>
  )
};

export default Login;