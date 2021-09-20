import React from 'react';
import './Button.scss';

export const Button = ({ Role, Conditional, ButtonOnClick, children}) => {

  const ButtonProps = {
    'test':{
      'ButtonClass':'test-class',
    },
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
    'menu-all':{
      'ButtonClass':'menu-filter menu-filter-all',
    },
    'menu-petit-dej':{
      'ButtonClass':'menu-filter menu-filter-petit-dej',
    },
    'menu-pour-la-journee':{
      'ButtonClass':'menu-filter menu-filter-pour-la-journee',
    },
    'menu-to-drink':{
      'ButtonClass':'menu-filter menu-filter-to-drink',
    },
    'menu-to-eat':{
      'ButtonClass':'menu-filter menu-filter-to-eat',
    },
    'menu-open-ingredients-modal':{
      'ButtonClass':'menu-open-ingredients-modal'
    },
    'menu-close-ingredients-modal':{
      'ButtonClass':'menu-close-ingredients-modal'
    },
    'menu-go-back':{
      'ButtonClass':'menu-go-back'
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
