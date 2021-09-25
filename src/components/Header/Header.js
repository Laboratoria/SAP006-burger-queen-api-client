import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logoBerg from '../../assets/images/logo-berg.png';
import authWelcome from '../../assets/images/auth-welcome.png'

import './Header.scss';

export function Header () {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    isPortrait ? 
    <img data-testid='img-logo'
      className='logo' 
      src={logoBerg} alt='Logo Berg'
    />
    : 
    <img data-testid='img-auth-welcome'
      className='auth-welcome' 
      src={authWelcome} alt='Welcome'
    />
      
   
  )
}