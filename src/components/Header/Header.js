import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logoBerg from '../../assets/images/logo-berg.png';
import authWelcome from '../../assets/images/auth-welcome.png'

import './Header.scss';

export function Header () {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

  return (
    <header className = 'auth-header' data-testid='header'>
      {isPortrait &&  
        <img data-testid='img-logo'
        className='logo' 
        src={logoBerg} alt='Logo Berg'
        />}
      {isLandscape &&  
        <img data-testid='img-auth-welcome'
          className='auth-welcome' 
          src={authWelcome} alt='Welcome'
        />
      }
    </header>  
  )
}