import React from 'react';
import { Button } from '../Button/Button'
import { CurrentOrder } from '../CurrentOrder/Current.Order';

import './Modal.scss';

export const StandardModal = ({ModalContent, ButtonChildren, ButtonOnClick}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p className='modal-content'>{ModalContent}</p>
        <Button 
          ButtonClass='modal-button'
          children={ButtonChildren}
          ButtonOnClick={ButtonOnClick}
        />
      </div>
    </section>
  )
}

export const StandardModalWithTwoOptions = ({ModalContent, ButtonChildren, ButtonOnClick, ButtonSecondAuthModalOptionChildren, ButtOnClickSecondAuthModalOption}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p className='modal-content'>{ModalContent}</p>
        <div className='standard-two-options-modal-buttons-div'>
          <Button 
            ButtonClass='modal-button'
            children={ButtonChildren}
            ButtonOnClick={ButtonOnClick}
          />
          <Button 
            ButtonClass='modal-button'
            children={ButtonSecondAuthModalOptionChildren}
            ButtonOnClick={ButtOnClickSecondAuthModalOption}
          />
        </div>
      </div>
    </section>
  )
}

export function AuthModal ({Role, ModalContent, ButtonChildren, ButtonOnClick, ButtOnClickSecondAuthModalOption, ButtonSecondAuthModalOptionChildren}) {
  return (
    <section className='modal-background' data-testid='authModalSection'>
      <div className='modal-container' data-testid='authModalDiv'>
        <p data-testid='authModalContent' className='modal-content'> {ModalContent} </p>
        <Button 
          ButtonClass='modal-button'
          children={ButtonChildren}
          ButtonOnClick={ButtonOnClick}
        />
        {Role === 'auth-error-modal' &&
          <Button
            ButtonClass='modal-button'
            children={ButtonSecondAuthModalOptionChildren}
            ButtonOnClick={ButtOnClickSecondAuthModalOption}
          />
        }
      </div>
    </section>
  )
}

export const TableOrdersModal = ({orders, FirstButtonClick, SecondButtonClick}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container modal-container-room-table-orders'>
        {orders.length > 0 && orders.map((order) => 
          <CurrentOrder
            Location='room-tables'
            key={order.createdAt}
            order={order}
            ButtonId={order.id}
          />
        )}
        <div className='room-orders-modal-button-div'>
          <Button children='OK' ButtonClass='modal-button' ButtonOnClick={FirstButtonClick}/> 
          <Button children='Limpar mesa'ButtonClass='modal-button'ButtonOnClick={SecondButtonClick}/> 
        </div>
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


