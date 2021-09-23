import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

import { NavbarKitchen } from '../../components/Navbar/Navbar';
import { CurrentOrder } from '../../components/CurrentOrder/Current.Order';
import { Button } from '../../components/Button/Button';

export const Kitchen = () => { 
  const history = useHistory();
  const token = localStorage.getItem('currentEmployeeToken')
  const [currentOrders, setCurrentOrders] = useState({});

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
        const orderToBeDeleted = responseJson.id;
        setCurrentOrders(currentOrders.filter((order) => order.id !== orderToBeDeleted))
        
      
      })
  };



return (
    <div>
      <NavbarKitchen/>
      <Button Role='kitchen-get-orders' children='Carregar Pedidos' ButtonOnClick={()=>getAllOrders()}/>
      <section className='current-orders-section'>
        {Object.keys(currentOrders).length > 1 ?   
        currentOrders.map((order) => 
          <CurrentOrder
            order={order}
            ButtonDeleteOrder = {()=>deleteOrder(order.id)}
          /> 
        ): null}
      </section>
    </div>
    
  )
}
