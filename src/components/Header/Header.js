import React from 'react';

import loginBg from '../../assets/images/login-bg.jpg';
import registerBg from '../../assets/images/register-bg.jpg';
import logoCombosBurger from '../../assets/images/logo-combos-burger.png';

import './Header.scss';

export function Header ({Location}) {

  const HeaderProps= {
    'login':{
      'HeaderClass':'login-bg',
      'HeaderSRC': loginBg ,
    },
    'register':{
      'HeaderClass':'register-bg',
      'HeaderSRC': registerBg ,
    },
    'test':{
      'HeaderClass':'test-class',
      'HeaderSRC': 'test' ,
    }
  }
  return (
    <header data-testid='header'>
      <img data-testid='img-bg'
      className={HeaderProps[Location].HeaderClass} 
      src={HeaderProps[Location].HeaderSRC} alt='Ilustração de Background'/>

      <img data-testid='img-logo'
      className='logo' 
      src={logoCombosBurger} alt='Logo Combos Burguer'/>
    </header>
  )
}