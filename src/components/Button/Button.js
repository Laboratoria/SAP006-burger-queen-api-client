import React from 'react';
import './Button.scss';

export const Button = ({ Role, Conditional, ButtonOnClick, children}) => {

  const ButtonProps = {
    'authNavigateTo': {
      'ButtonClass':'auth-route-navigation',
    },
    'authSubmitForm': {
      'ButtonClass':'auth-submit-form',
    },
    'authShowOrNotShowPassword':{
      'ButtonClass':`auth-show-or-not-password ${Conditional ? 'auth-show-password' : 'auth-not-show-password'}`
    },
    'authSucessModal-login':{
      'ButtonClass':'auth-modal-button'
    },
    'authErrorModal-login':{
      'ButtonClass':'auth-modal-button'
    },
    'authSucessModal-register':{
      'ButtonClass':'auth-modal-button'
    },
    'authErrorModal-register':{
      'ButtonClass':'auth-modal-button'
    },
    'unauhtorized-sign-out':{
      'ButtonClass':'unauhtorized-sign-out sign-out'
    },
    'sign-out':{
      'ButtonClass':'sign-out'
    },
    'room-sign-out':{
      'ButtonClass':'sign-out room-sign-out'
    },
    'unauhtorized-goback':{
      'ButtonClass':'unauhtorized-goback'
    },
    'room-navbar-menu':{
      'ButtonClass':'room-navbar-button room-navbar-menu',
    },
    'room-navbar-being-prepared-orders':{
      'ButtonClass':'room-navbar-button room-being-prepared-orders',
    },
    'room-navbar-ready-orders':{
      'ButtonClass':'room-navbar-button room-ready-orders',
    },
    'room-navbar-menu-delivered-orders':{
      'ButtonClass':'room-navbar-button room-delivered-orders',
    },
  
    'test':{
      'ButtonClass':'test-class',
    }
  }
  

  return (
    <button 
    data-testid = 'button'
    type='submit' 
    className={ButtonProps[Role].ButtonClass}
    onClick={ButtonOnClick}
    >
      {children}
    </button> 
  )
}
