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
