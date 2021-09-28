import {useState, useEffect} from 'react';

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { CurrentOrder } from '../../../components/CurrentOrder/Current.Order';
import { DefaultModal } from '../../../components/Modal/Modal';

import { getErrorCase } from '../../../services/general';
import { getAllOrders, deleteOrder, changeOrderStatus } from '../../../services/orders';

import './OrderStatusGeneral.scss'

export const OrdersBeingPrepared = () => { 
  const token = localStorage.getItem('currentEmployeeToken');

  const [orderToBeDeleted, setOrderToBeDeleted] = useState('');
  const [currentOrders, setCurrentOrders] = useState([]);


  const handleAPIErrors = (data) => {
    const result = getErrorCase(data.code);
    Object.keys(data).includes('code') && setModalContent(modalContent => ({...modalContent, Text: result, Type: 'one-button-modal'}));
    Object.keys(data).includes('code') && setModal(true);
  }

  useEffect(() => {
    getAllOrders(token)
    .then(responseJson => {
      const filteredOrders = responseJson.filter((order) => order.status === 'pending');
      handleAPIErrors(responseJson);
      setCurrentOrders(filteredOrders); 
    })  
  }, [currentOrders, token]);

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

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    Type:'',
    Text:'',
    ButtonChildren:'',
    ButtonClick:'',
    ButtonSecondChildren:'',
    ButtonSecondClick:'',
  })

  return (
    <div>
      <header>
        <NavbarRoom/>
      </header>
      <main className='order-status-main'>
        <section className='current-orders-section'>
          {currentOrders.length > 0 &&   
            currentOrders.sort((a,b) => a.id - b.id).map((order) => 
              <CurrentOrder
                key={order.id}
                order={order}
                ButtonId={order.id}
                ButtonDeleteOrder = {(event)=> [
                  setModalContent(modalContent => ({...modalContent, 
                    Type: 'two-buttons-modal',
                    Text: 'Você tem certeza que deseja deletar este pedido?',
                    ButtonSecondClick: () => {
                      deleteTargetOrder();
                      setModal(false);
                    }
                  })), 
                  setModal(true), 
                  setOrderToBeDeleted(event.target.id)
                ]}
                OrderBeingPreparedButton = {() => changeTargetOrderStatus(order.id, 'Em Preparo')}
                OrderReadyButton = {() => changeTargetOrderStatus(order.id, 'Pronto')}
                OrderDeliveredButton = {() => changeTargetOrderStatus(order.id, 'Entregue')}
              /> 
            )
          }
        </section>  
      </main>
      <section>
        {modal && 
          <DefaultModal
            Type = {modalContent.Type}
            ModalContent = {modalContent.Text === 'Informações insuficientes!' ? 
            'Não há alterações para fazer neste pedido' : modalContent.Text }
            ButtonChildren = 'Fechar'
            ButtonOnClick = {() => setModal(false)}
            ButtonSecondAuthModalOptionChildren= 'Excluir'
            ButtOnClickSecondAuthModalOption = {modalContent.ButtonSecondClick}
          />
        }
      </section>
    </div>
  )
}