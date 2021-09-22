import React from 'react';
import './Button.scss';

export const Button = ({productId, ButtonTitle, ButtonId, Role, Conditional, ButtonOnClick, children}) => {

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
    'room-navbar-waiting-orders':{
      'ButtonClass':'room-navbar-button room-navbar-waiting-orders',
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
    },
    'table-01':{
      'ButtonClass':'room-table-button room-table-button-01'
    },
    'table-02':{
      'ButtonClass':'room-table-button room-table-button-02'
    },
    'table-03':{
      'ButtonClass':'room-table-button room-table-button-03'
    },
    'table-04':{
      'ButtonClass':'room-table-button room-table-button-04'
    },
    'table-05':{
      'ButtonClass':'room-table-button room-table-button-05'
    },
    'table-06':{
      'ButtonClass':'room-table-button room-table-button-06'
    },
    'table-07':{
      'ButtonClass':'room-table-button room-table-button-07'
    },
    'table-08':{
      'ButtonClass':'room-table-button room-table-button-08'
    },
    'table-09':{
      'ButtonClass':'room-table-button room-table-button-09'
    },
    'table-10':{
      'ButtonClass':'room-table-button room-table-button-10'
    },
    'table-11':{
      'ButtonClass':'room-table-button room-table-button-11'
    },
    'table-12':{
      'ButtonClass':'room-table-button room-table-button-12'
    },
    'room-new-order':{
      'ButtonClass':'room-new-order'
    },
    'new-order-product-button':{
      'ButtonClass':'new-order-product-button'
    },
    'new-order-save-order':{
      'ButtonClass':'new-order-save-order'
    },
    'new-order-trash':{
      'ButtonClass':'new-order-trash'
    },
    'new-order-modify-quantity-minus':{
      'ButtonClass':'new-order-modify-quantity new-order-modify-quantity-minus'
    },
    'new-order-modify-quantity-plus':{
      'ButtonClass':'new-order-modify-quantity new-order-modify-quantity-plus'
    },
    'new-order-modal':{
      'ButtonClass':'new-order-modal'
    },
    'new-order-sucess-modal':{
      'ButtonClass':'new-order-modal'
    },
    'new-order-filter':{
      'ButtonClass':'new-order-filter'
    },
    'kitchen-sign-out':{
      'ButtonClass':'kitchen-sign-out'
    }
  }
  
  return (
    <button 
    data-testid = 'button'
    data-title={ButtonTitle}
    data-productid={productId}
    id={ButtonId}
    type='submit' 
    className={ButtonProps[Role].ButtonClass}
    onClick={ButtonOnClick}
    >
      {children}
    </button> 
  )
}
