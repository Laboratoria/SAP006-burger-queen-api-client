import React, { useState, Fragment } from "react";
import { Link, useHistory } from 'react-router-dom';

import { registerUser } from "../../utils/auth";
import { validate } from '../../pages/Login/form-validate'
import { Footer } from '../../components/footer/footer'

import '../Login/login.css';

import fundo from '../../img/fundo.png'
import fundoDesk from '../../img/fundo-desk.png'
import hamburguer from '../../img/hamburguer-login.png'
import jesus from '../../img/jesus.gif'
import jesusDesk from '../../img/jesus-desk.gif'


const Register = () => {

  const [errors, setErrors] = useState({})
  function validateValues(values) {
    setErrors(validate(values))
  }

  const [infoUser, setInfoUser] = useState({ email: '', password: '' });
  
  const handleChange = (e) => {
    const informationUser = e.target.id;
    setInfoUser({ ...infoUser, [informationUser]: e.target.value })
    // if (informationUser === 'password') {      
    // }
  }
  
  //let history = useHistory()
  const handleRegister = (e) => {   
    e.preventDefault();
      console.log('foi')
    validateValues(infoUser)
    registerUser(infoUser.email, infoUser.password)
    // console.log(x, infoUser.email, infoUser.password)
    /* .then((response) => {
        console.log(response.json())
    }) */
    // login('1234')
    // history.push('/home')
  }

  return (
    <Fragment>
    <div className='login'>
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
      <form className='form-login' >
      <fieldset className='form-inner'>
          <div>
          <input className='input-login'
          type='email' id='email' placeholder='Email' required='' 
          value={infoUser.email} 
          onChange={handleChange}/>
        <section className ='icons-input'>
          <i className='far fa-envelope icons'></i>
          </section>
          </div> 
          {errors.email && <span className='form-error email'>{errors.email}</span>}
        </fieldset>
        
        <fieldset className="form-inner">
          <div>
          <input className="input-password" 
            type="password" id="password" placeholder="Password" required="" 
            value={infoUser.password}
            onChange={handleChange} />
          <section className="icons-input">
            <i id="show" className="fas fa-lock icons"></i>
            <i id="hide" className="fas fa-lock-open icons"></i>
          </section>
          </div>
          {errors.password && <span className='form-error'>{errors.password}</span>}
        </fieldset>
        
        <input className='btn-register'
          type='submit' value='Register' 
          onClick={handleRegister}
          />
        <p className='link-register'>Clique <Link to='/'>aqui </Link>para logar-se.</p>
      </form>
      <Footer />
    </div>
    </Fragment>
  )
};

export default Register;