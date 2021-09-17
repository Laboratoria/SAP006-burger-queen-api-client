import React from 'react';
import logoBerg from '../../assets/images/logo-berg.png';

import './Header.scss';

export function Header () {

  return (
    <header data-testid='header'>
      <img data-testid='img-logo'
      className='logo' 
      src={logoBerg} alt='Logo Berg'/>
    </header>
  )
}