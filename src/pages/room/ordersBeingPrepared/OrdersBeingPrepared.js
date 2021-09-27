/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { CurrentOrder } from '../../../components/CurrentOrder/Current.Order';
import { StandardModalWithTwoOptions, StandardModal } from '../../../components/Modal/Modal';
import { Button } from '../../../components/Button/Button';

import { getAllOrders, deleteOrder, changeOrderStatus } from '../../../services/orders';
import { logout } from "../../../routes/utils/auth";

import './OrderStatusGeneral.scss'

export const OrdersBeingPrepared = () => { 
  const history = useHistory();

  const token = localStorage.getItem('currentEmployeeToken');
  const [orderToBeDeleted, setOrderToBeDeleted] = useState('');
  const [currentOrders, setCurrentOrders] = useState([]);
  const [kitchenDeleteOrderModal, setKitchenDeleteOrderModal] = useState(false);
  const [missingDataOrNoChangesErrorModal, setMissingDataOrNoChangesErrorModal] = useState(false);
  const [userNotAuthenticatedErrorModal, setUserNotAuthenticatedErrorModal] = useState(false);
  const [orderBelongsAnotherRestaurantErrorModal, setOrderBelongsAnotherRestaurantErrorModal] = useState(false);
  const [orderNotfoundErrorModal, setOrderNotfoundErrorModal] = useState('');

  const getErrorCase = (data) => {
    switch (data) {
      case 400:
        setMissingDataOrNoChangesErrorModal(true);
        break;
      case 401:
        setUserNotAuthenticatedErrorModal(true);
        break;
      case 403: 
        setOrderBelongsAnotherRestaurantErrorModal(true);
        break;
      case 404:
        setOrderNotfoundErrorModal(true);
        break;
      default:
        getCurrentOrders();
    }
  }

  const getCurrentOrders = () => {
    getAllOrders(token)
    .then(responseJson => {
      switch (responseJson.code) {
        case 401:
          return setUserNotAuthenticatedErrorModal(true);
        default:
          const orders = responseJson;
          const filteredOrders = orders.filter((order) => order.status === 'pending');
          setCurrentOrders(filteredOrders);
      } 
    })   
  }

  const deleteTargetOrder = () => {
    deleteOrder(orderToBeDeleted, token)
    .then(responseJson => {
      getErrorCase(responseJson.code);
    })
  }

  const changeTargetOrderStatus = (id, status) => {
    changeOrderStatus(id, token, status)
    .then((responseJson) => {
      getErrorCase(responseJson.code);
    })
  }

  useEffect(() => {
    getCurrentOrders();
  }, []);
  
  const handleLogOut = () => {
    logout();
    history.push('/');
  }

  return (
    <div>
      <header>
        <NavbarRoom />
      </header>
      <main className='order-status-main'>
        <Button ButtonClass='order-status-get-orders' children='Carregar Pedidos' ButtonOnClick={()=> getCurrentOrders()}/>
        <Button Role='kitchen-sign-out' ButtonOnClick={()=>handleLogOut()}/>
        <section className='current-orders-section'>
          {Object.keys(currentOrders).length > 0 &&   
            currentOrders.sort((a,b) => a.createdAt - b.createdAt).map((order) => 
              <CurrentOrder
                key={order.id}
                order={order}
                ButtonId={order.id}
                
                ButtonDeleteOrder = {(event)=> [setKitchenDeleteOrderModal(true), setOrderToBeDeleted(event.target.id)]}
                OrderBeingPreparedButton = {() => changeTargetOrderStatus(order.id, 'Em Preparo')}
                OrderReadyButton = {() => changeTargetOrderStatus(order.id, 'Pronto')}
                OrderDeliveredButton = {() => changeTargetOrderStatus(order.id, 'Entregue')}
              /> 
            )}
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
            ButtonChildren = 'OK'
            ModalContent='Não há mudanças a serem feitas para este pedido.'
            ButtonOnClick={()=>setMissingDataOrNoChangesErrorModal(false)}
          /> 
        }
      </section>
      <section>
        {userNotAuthenticatedErrorModal && 
           <StandardModal 
            ButtonChildren = 'OK'
            ModalContent='Usuário não autenticado.'
            ButtonOnClick={()=>setUserNotAuthenticatedErrorModal(false)}
          /> 
        }
      </section>
      <section>
        {orderBelongsAnotherRestaurantErrorModal && 
           <StandardModal 
            ButtonChildren = 'OK'
            ModalContent='Este pedido não pertence ao BERG.'
            ButtonOnClick={()=>setOrderBelongsAnotherRestaurantErrorModal(false)}
          /> 
        }
      </section>
      <section>
        {orderNotfoundErrorModal && 
           <StandardModal 
            ButtonChildren = 'OK'
            ModalContent='Pedido não encontrado!'
            ButtonOnClick={()=>setOrderNotfoundErrorModal(false)}
          /> 
        }
      </section>
    </div>
  )
}
