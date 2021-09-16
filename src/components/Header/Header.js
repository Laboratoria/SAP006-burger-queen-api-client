import React from 'react';

import loginBg from '../../assets/images/login-bg.jpg';
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
      'HeaderSRC': '' ,
    },
  }
  return (
    <header>
      <img className={HeaderProps[Location].HeaderClass} src={HeaderProps[Location].HeaderSRC} alt='Ilustração de Background'/>
      <img className='logo' src={logoCombosBurger} alt='Logo Combos Burguer'/>
    </header>
  )
}