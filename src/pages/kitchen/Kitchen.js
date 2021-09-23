import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

import { NavbarKitchen } from '../../components/Navbar/Navbar';
import { CurrentOrder } from '../../components/CurrentOrder/Current.Order';
import { DeleteOrderModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

export const Kitchen = () => { 
  const history = useHistory();
  const token = localStorage.getItem('currentEmployeeToken')
  const [orderToBeDeleted, setOrderToBeDeleted] = useState('')
  const [currentOrders, setCurrentOrders] = useState({});
  const [deleteOrderModal, setDeleteOrderModal] = useState(false);

  const getAllOrders = () => {
    const apiToGetOrders= 'https://lab-api-bq.herokuapp.com/orders';
    fetch (apiToGetOrders, {
      headers: {
      accept: 'application/json',
      Authorization: token
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const orders = responseJson
        console.log(orders)
        console.log(currentOrders)
        setCurrentOrders(orders)
      })
  };

  const deleteOrder = (id) => {
    const apiToGetOrders= `https://lab-api-bq.herokuapp.com/orders/${id}`
    fetch (apiToGetOrders, {
      method:'DELETE',
      headers: {
      accept: 'application/json',
      Authorization: token
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        getAllOrders()
      })
  };

return (
    <div>
      <NavbarKitchen/>
      <Button Role='kitchen-get-orders' children='Carregar Pedidos' ButtonOnClick={()=>getAllOrders()}/>
      <section className='current-orders-section'>
        {Object.keys(currentOrders).length > 0 ?   
        currentOrders.map((order) => 
          <CurrentOrder
            key={order.id}
            order={order}
            ButtonId={order.id}
            ButtonDeleteOrder = {(event)=> [setDeleteOrderModal(true), setOrderToBeDeleted(event.target.id)]}
          /> 
        ): null}
      </section>
      <section>
      {deleteOrderModal ? (
        <DeleteOrderModal
          children='SIM'
          childrenSecondButton='NÃO'
          Role = 'new-order-sucess-modal'
          ModalContent='Você tem certeza que deseja deletar este pedido?'
          ButtonOnClick={()=> [deleteOrder(orderToBeDeleted), setDeleteOrderModal(false)]}
          ButtonOnClickSecondOption = {() => setDeleteOrderModal(false)}
        />
      ): null}
    </section>
    </div>
    
  )
}
