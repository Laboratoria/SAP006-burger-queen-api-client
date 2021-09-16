import React from 'react';
import './Button.scss';

export const Button = ({ Role, Conditional, ButtonOnClick, ButtonChildren }) => {

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
      'ButtonClass':'auth-modal-button '
    },
    'authErrorModal-login':{
      'ButtonClass':'auth-modal-button '
    },
    'authSucessModal-register':{
      'ButtonClass':'auth-modal-button '
    },
    'authErrorModal-register':{
      'ButtonClass':'auth-modal-button '
    },
  }

  return (
    <button 
    className={ButtonProps[Role].ButtonClass}
    type='submit' 
    onClick={ButtonOnClick}
    >
      {ButtonChildren}
    </button> 
  )
}
