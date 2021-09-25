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
    'room-navbar-home':{
      'ButtonClass':'room-navbar-button room-navbar-home',
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
    'room-table':{
      'ButtonClass':'room-table-button room-table-button-01'
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
    },
    'kitchen-get-orders':{
      'ButtonClass':'kitchen-get-orders'
    },
    'kitchen-change-order-status-being-prepared':{
      'ButtonClass':'kitchen-change-order-status kitchen-change-order-status-being-prepared'
    },
    'kitchen-change-order-status-ready':{
      'ButtonClass':'kitchen-change-order-status kitchen-change-order-status-ready'
    },
    'kitchen-change-order-status-pending':{
      'ButtonClass':'kitchen-change-order-status kitchen-change-order-status-pending'
    },
    'kitchen-change-order-status-delivered':{
      'ButtonClass':'kitchen-change-order-status kitchen-change-order-status-delivered'
    },
    'kitchen-delete-order':{
      'ButtonClass':'kitchen-delete-order'
    },
    'kitchen-modal':{
      'ButtonClass':'kitchen-modal'
    },
    'status-get-orders':{
      'ButtonClass':'kitchen-get-orders status-get-orders'
    },
    
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
