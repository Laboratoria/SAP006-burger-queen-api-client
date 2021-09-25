import React from 'react';
import { Button } from '../Button/Button'

import './Modal.scss';

export function AuthModal ({Role, ModalContent, ButtonChildren, ButtonOnClick, ButtOnClickSecondAuthModalOption}) {
  return (
    <section className='modal-background' data-testid='authModalSection'>
      <div className='modal-container' data-testid='authModalDiv'>
        <p data-testid='authModalContent' className='auth-modal-content'> {ModalContent} </p>
        <Button 
          ButtonClass='modal-button'
          children={ButtonChildren}
          ButtonOnClick={ButtonOnClick}
        />
        {Role === 'auth-error-modal' ?
          <Button
            ButtonClass='modal-button'
            children='Crie uma nova conta'
            ButtonOnClick={ButtOnClickSecondAuthModalOption}
          /> : null
        }
      </div>
    </section>
  )
}

export const MenuModal = ({Role, ModalTitle, ModalContent, ButtonOnClick}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p className='menu-modal-title'> {ModalTitle} </p>
        <p className='menu-modal-content'> {ModalContent} </p>
        <span className='menu-modal-observations'> Todos os produtos consumidos pela Berg são produzidos por pequenos produtores rurais da região (com exceção do café). </span>
        <br/>
        <span className='menu-modal-observations'>As vacas vivem livres sob o sistema de rotação do pasto em hipótese alguma são separadas de seus filhotes.</span>
        <br/>
        <span className='menu-modal-observations'>As galinhas correm soltas por aí e passam o dia fofocando da vida alheia...</span>
        <Button 
          Role={Role}
          children='Fechar'
          ButtonOnClick={ButtonOnClick}
        />
      </div>
    </section>
  )
}





export const NewOrderModal = ({Role, ModalContent, ButtonOnClick, children, childrenSecondButton, ButtonOnClickSecondOption}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p className='new-order-modal-content'> {ModalContent} </p>
        <Button 
          Role={Role}
          children={children}
          ButtonOnClick={ButtonOnClick}
        />
        { Role === 'new-order-sucess-modal' ?
         <Button 
         Role={Role}
         children={childrenSecondButton}
         ButtonOnClick={ButtonOnClickSecondOption}
       /> : null}
      </div>
    </section>
  )
}


export const KitchenDeleteOrderModal = ({Role, ModalContent, ButtonOnClick, children, childrenSecondButton, ButtonOnClickSecondOption}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p className='kitchen-modal-content'> {ModalContent} </p>
        <div className='kitchen-modal-delete-order-button-div'>
          <Button 
            Role={Role}
            children={children}
            ButtonOnClick={ButtonOnClick}
          />
          <Button 
          Role={Role}
          children={childrenSecondButton}
          ButtonOnClick={ButtonOnClickSecondOption}
          />
        </div>
      </div>
    </section>
  )
}

export const KitchenErrorModal = ({ModalContent, ButtonOnClick}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p className='kitchen-modal-content'> {ModalContent} </p>
        <Button 
          Role='kitchen-modal'
          children='OK'
          ButtonOnClick={ButtonOnClick}
        />
      </div>
    </section>
  )
}


export const TableOrdersModal = ({order}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        {order.map((each) => 
          <p>{each.status}</p>)}
      </div>
    </section>
  )
}