import React from 'react';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { NavbarRoom } from '../../components/Navbar/Navbar';
import { CurrentOrder } from '../../components/CurrentOrder/Current.Order';
import { StandardModal } from '../../components/Modal/Modal';
import { StandardModalWithTwoOptions } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

import { getAllOrders } from '../../services/orders';
import { deleteOrder } from '../../services/orders';
import { changeOrderStatus } from '../../services/orders';
import { logout } from "../../routes/utils/auth";

import './Kitchen.scss';

export const Kitchen = () => { 
  const history = useHistory();

  const token = localStorage.getItem('currentEmployeeToken')
  const [orderToBeDeleted, setOrderToBeDeleted] = useState('')
  const [currentOrders, setCurrentOrders] = useState({});
  const [kitchenDeleteOrderModal, setKitchenDeleteOrderModal] = useState(false);
  const [missingDataOrNoChangesErrorModal, setMissingDataOrNoChangesErrorModal] = useState(false);
  const [userNotAuthenticatedErrorModal, setUserNotAuthenticatedErrorModal] = useState(false);
  const [orderBelongsAnotherRestaurantErrorModal, setOrderBelongsAnotherRestaurantErrorModal] = useState(false);
  const [orderNotfoundErrorModal, setOrderNotfoundErrorModal] = useState('');

  const getErrorCase = (data) => {
    switch (data) {
      case 400:
        setMissingDataOrNoChangesErrorModal(true)
        break;
      case 401:
        setUserNotAuthenticatedErrorModal(true)
        break;
      case 403: 
        setOrderBelongsAnotherRestaurantErrorModal(true)
        break;
      case 404:
        setOrderNotfoundErrorModal(true)
        break;
      default:
        getCurrentOrders()
    }
  }

  const getCurrentOrders = () => {
    getAllOrders(token)
    .then(responseJson => {
      switch (responseJson.code) {
        case 401:
          return setUserNotAuthenticatedErrorModal(true)
        default:
          const orders = responseJson
          setCurrentOrders(orders) 
      } 
    })   
  }

  const deleteTargetOrder = () => {
    deleteOrder(orderToBeDeleted, token)
    .then(responseJson => {
      getErrorCase(responseJson.code)
    })
  }

  const changeTargetOrderStatus = (id, status) => {
    changeOrderStatus(id, token, status)
    .then((responseJson) => {
      getErrorCase(responseJson.code)
    })
  }

  useEffect(() => {
    getCurrentOrders()
  }, [])
  
  const handleLogOut = () => {
    logout()
    history.push('/')
  }

  return (
    <div>
      <header>
      <NavbarRoom/>
      </header>
      <main className='kitchen-main'>
      <Button ButtonClass='kitchen-get-orders' children='Carregar Pedidos' ButtonOnClick={()=> getCurrentOrders()}/>
      <section className='kichen-current-orders-section'>
        {Object.keys(currentOrders).length > 0 ?   
          currentOrders.map((order) => 
            <CurrentOrder
              key={order.id}
              order={order}
              ButtonId={order.id}
              
              ButtonDeleteOrder = {(event)=> [setKitchenDeleteOrderModal(true), setOrderToBeDeleted(event.target.id)]}
              OrderBeingPreparedButton = {() => changeTargetOrderStatus(order.id, 'Em Preparo')}
              OrderReadyButton = {() => changeTargetOrderStatus(order.id, 'Pronto')}
              OrderDeliveredButton = {() => changeTargetOrderStatus(order.id, 'Entregue')}
            /> 
          ): null}
      </section>
      </main>
      <section>
        {kitchenDeleteOrderModal && 
          <StandardModalWithTwoOptions
            ButtonChildren='SIM'
            ButtonSecondAuthModalOptionChildren='NÃO'
            ModalContent='Você tem certeza que deseja deletar este pedido?'
            ButtonOnClick={()=> [deleteTargetOrder(), setKitchenDeleteOrderModal(false)]}
            ButtOnClickSecondAuthModalOption = {() => setKitchenDeleteOrderModal(false)}
          />
        }
      </section>
      <section>
        {missingDataOrNoChangesErrorModal && 
          <StandardModal
            ButtonChildren='OK'
            ModalContent='Não há mudanças a serem feitas para este pedido.'
            ButtonOnClick={()=>setMissingDataOrNoChangesErrorModal(false)}
          /> 
          }
      </section>
      <section>
        {userNotAuthenticatedErrorModal && 
          <StandardModal
            ButtonChildren='OK'
            ModalContent='Usuário não autenticado.'
            ButtonOnClick={()=>setUserNotAuthenticatedErrorModal(false)}
          /> }
      </section>
      <section>
        {orderBelongsAnotherRestaurantErrorModal && 
           <StandardModal
            ButtonChildren='OK' 
            ModalContent='Este pedido não pertence ao BERG.'
            ButtonOnClick={()=>setOrderBelongsAnotherRestaurantErrorModal(false)}
          /> }
      </section>
      <section>
        {orderNotfoundErrorModal &&
           <StandardModal
            ButtonChildren='OK'
            ModalContent='Pedido não encontrado!'
            ButtonOnClick={()=>setOrderNotfoundErrorModal(false)}
          /> }
      </section>
    </div>
  )
}
