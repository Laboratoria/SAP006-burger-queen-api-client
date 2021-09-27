import {useState, useEffect} from 'react';

import { NavbarRoom } from '../../components/Navbar/Navbar';
import { CurrentOrder } from '../../components/CurrentOrder/Current.Order';
import { StandardModal, StandardModalWithTwoOptions } from '../../components/Modal/Modal';

import { getErrorCase } from '../../services/general';
import { getAllOrders, deleteOrder, changeOrderStatus } from '../../services/orders';

import './Kitchen.scss';

export const Kitchen = () => { 
  const token = localStorage.getItem('currentEmployeeToken');

  const [orderToBeDeleted, setOrderToBeDeleted] = useState('');
  const [currentOrders, setCurrentOrders] = useState([]);

  const [defaultModal, setDefaultModal] = useState(false);
  const [personalizedModal, setPersonalizedModal] = useState(false);

  const [defaultModalContent, setDefaultModalContent] = useState({
    Text:'',
    ButtonChildren:'',
    ButtonClick:'',
  })

  const handleAPIErrors = (data) => {
    const result = getErrorCase(data.code);
    Object.keys(data).includes('code') && setDefaultModalContent(defaultModalContent => ({...defaultModalContent, Text: result}));
    Object.keys(data).includes('code') && setDefaultModal(true);
  }

  useEffect(() => {
    getAllOrders(token)
    .then(responseJson => {
      setCurrentOrders(responseJson);
      handleAPIErrors(responseJson);
    })
  },[token, currentOrders]);

  const deleteTargetOrder = () => {
    deleteOrder(orderToBeDeleted, token)
    .then(responseJson => {
      handleAPIErrors(responseJson);
    })
  }

  const changeTargetOrderStatus = (id, status) => {
    changeOrderStatus(id, token, status)
    .then((responseJson) => {
      handleAPIErrors(responseJson);
    })
  }

  return (
    <div>
      <header>
      <NavbarRoom/>
      </header>
      <main className='kitchen-main'>
        <section className='kichen-current-orders-section'>
          {currentOrders.length > 0 &&   
            currentOrders.sort((a,b) => a.id - b.id).map((order) => 
              <CurrentOrder
                key={order.id}
                order={order}
                ButtonId={order.id}
                ButtonDeleteOrder = {(event)=> [setPersonalizedModal(true), setOrderToBeDeleted(event.target.id)]}
                OrderBeingPreparedButton = {() => changeTargetOrderStatus(order.id, 'Em Preparo')}
                OrderReadyButton = {() => changeTargetOrderStatus(order.id, 'Pronto')}
                OrderDeliveredButton = {() => changeTargetOrderStatus(order.id, 'Entregue')}
              /> 
            )
          }
        </section>  
      </main>
      <section>
        {defaultModal && 
          <StandardModal
            ModalContent = {defaultModalContent.Text}
            ButtonChildren = 'Fechar'
            ButtonOnClick = {() => setDefaultModal(false)}
          />
        }
        {personalizedModal && 
          <StandardModalWithTwoOptions
            ModalContent='Você tem certeza que deseja deletar este pedido?'
            ButtonChildren='SIM'
            ButtonOnClick={()=> [deleteTargetOrder(), setPersonalizedModal(false)]}
            ButtonSecondAuthModalOptionChildren='NÃO'
            ButtOnClickSecondAuthModalOption = {() => setPersonalizedModal(false)}
          />
        }
      </section>
    </div>
  )
}
