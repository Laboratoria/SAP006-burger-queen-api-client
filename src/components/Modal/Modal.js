import { useState, useEffect } from 'react';
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
  const [tableTotalBill, setTableTotalBill] = useState();


  useEffect(() => {
    const orderTotals = [];
    orders.length > 0 && 
      orders.map((order) => orderTotals.push(order.bill));
      setTableTotalBill(orderTotals.reduce((acc, curr) => acc + curr, 0));
  }, [tableTotalBill, orders]);


  return (
    <section className='modal-background'>
      <div className='modal-container modal-container-room-table-orders'>
        {orders.length > 0 && 
          orders.sort((a,b) => a.createdAt - b.createdAt).map((order) => 
          <CurrentOrder
            Location='room-tables'
            key={order.createdAt}
            order={order}
            ButtonId={order.id}
          />
        )}
        <p className='room-orders-modal-table-bill-p'>Total da Mesa R$: &nbsp;{tableTotalBill}</p>
        <div className='room-orders-modal-button-div'>
          <Button children='OK' ButtonClass='modal-button' ButtonOnClick={FirstButtonClick}/> 
          <Button children='Limpar mesa'ButtonClass='modal-button'ButtonOnClick={SecondButtonClick}/> 
        </div>
     </div>
    </section>
  )
}

export const MenuModal = ({ModalTitle, ModalContent, ButtonOnClick}) => {
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
          ButtonClass='menu-close-ingredients-modal'
          children='Fechar'
          ButtonOnClick={ButtonOnClick}
        />
      </div>
    </section>
  )
}


