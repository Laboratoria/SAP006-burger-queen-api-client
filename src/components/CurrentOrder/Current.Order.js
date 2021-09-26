/* eslint-disable react-hooks/exhaustive-deps */
     
import React from 'react';
import {useState, useEffect} from 'react';

import { Button} from '../Button/Button'
import { orderAge, orderProcessAge } from '../../services/general';

import { getUserById } from '../../services/users';

import './CurrentOrder.scss';

export const CurrentOrder = ({order, ButtonDeleteOrder, OrderReadyButton, OrderDeliveredButton, Location, }) => { 
    
  const orderCreationAgeSeconds = (Date.now() - new Date (order.createdAt).valueOf())/1000;
  const creationDateInSeconds = (new Date (order.createdAt).valueOf())/1000;
  const processDateInSeconds = (new Date (order.processedAt).valueOf())/1000;
  const updateDateInSeconds = (new Date (order.updatedAt).valueOf())/1000;

  const orderCreationAge = orderAge(orderCreationAgeSeconds);
  const orderTimeToPrepare = orderProcessAge(processDateInSeconds - creationDateInSeconds);
  const orderTimeToDeliver = orderProcessAge(updateDateInSeconds - processDateInSeconds);
  const orderDuration = orderProcessAge(updateDateInSeconds - creationDateInSeconds);

  const token = localStorage.getItem('currentEmployeeToken');
  const role = localStorage.getItem('currentEmployeeRole');
  const menu = (JSON.parse(localStorage.getItem('menu')));
  const [waitress, setWaitress] = useState('');

  const productTotals = [];
  order.Products.map((element) => element.data = menu.filter((product) => product.id === element.id));
  order.Products.map((element) => element.price = element.data[0].price);
  order.Products.map((element) => element.total = element.price * element.qtd);
  order.Products.map((product) => productTotals.push(product.total));
  order.bill = productTotals.reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    getUserById(token, order.user_id)
    .then((reponseJson) => setWaitress(reponseJson.name))
  }, []);

  return (
    <div className= {order.status === 'Em Preparo' || order.status === 'pending'? 
    'current-order-div order-being-prepared-div' :
    order.status === 'Pronto' ? 
    'current-order-div order-ready-div' :
    order.status === 'Entregue' ? 
    'current-order-div order-delivered-div' :
    'current-order-div'}>
      <section className='current-order-header current-order-header-first'>
        <div>
          <span>Mesa:&nbsp;</span><span>{order.table}</span>
        </div>
        <div>
          <span>Cliente:&nbsp;</span><span>{order.client_name}</span>
        </div>
        <div>
          <span>Pedido ID:&nbsp;</span><span>{order.id}</span>
        </div>
      </section>
      <section className='current-order-header current-order-header-second'>
        <div>
          <span>Status:&nbsp;</span><span>{order.status === 'pending' ? 'Em preparo' : order.status}</span>
        </div>
        <div>
          <span>Responsável:&nbsp;{waitress}</span>
        </div>
        <div>
          {orderCreationAge === 'agora há pouco' ? 
          <span>Pedido criado &nbsp;{orderCreationAge}</span> :
          <span>Pedido criado há &nbsp;{orderCreationAge}</span> }
        </div>
      </section>
      <section className='current-order-header current-order-header-second'>
        <span>Duração:&nbsp;</span>
        <span>Preparo:&nbsp;{orderTimeToPrepare}</span>
        {order.status === 'pending' ?
          <span>Entrega: ENF</span> : 
          <span>Entrega:&nbsp;{orderTimeToDeliver}</span>
        }
        {order.status === 'Entregue' ?
        <span>Total:&nbsp;{orderDuration}</span> :
        <span>Total: ENF</span>
        }
      </section>
      <section className='current-order-all-products'>
        <div className='current-order-all-products-column current-order-product-column-quantity'>
          <p className='current-order-header-third'>Qtd.</p>
          {order.Products.map((product) => 
            <div className='current-order-product-content' key={product.qtd + product.id}>
              <span>{product.qtd}</span>
            </div>
          )}
        </div>
        <div className='current-order-all-products-column' >
          <p className='current-order-header-third'>Produto</p>
          {order.Products.map((product) => 
            <div className='current-order-product-content' key={product.name + product.id}>
              <span>{product.name}</span>
            </div>
          )}
        </div>
        <div className='current-order-all-products-column current-order-product-column-flavor'>
          <p className='current-order-header-third'>Sabor</p>
          {order.Products.map((product) => 
            <div className='current-order-product-content' key={product.flavor + product.id}>
              {product.flavor === null ? <span>&nbsp;-&nbsp;</span> : <span>{product.flavor}</span>}
            </div>
          )}
        </div>
        <div className='current-order-all-products-column current-order-product-column-additional'>
          <p className='current-order-header-third'>Adc.</p>
          {order.Products.map((product) => 
            <div className='current-order-product-content' key={product.complement + product.id}>
              {product.complement === null ? <span>&nbsp;-&nbsp;</span> : <span>{product.complement}</span>}
            </div>
          )}
        </div>
      </section>
      <div className='current-order-button-div'>
        {Location !== 'room-tables'&&
          <Button 
            ButtonClass='delete-order' 
            ButtonId={order.id}
            ButtonOnClick={ButtonDeleteOrder}    
          />
        } 
      <div className='current-order-status-button-div'>
        <p className='current-order-order-bill'> Total: R$ &nbsp;{order.bill}</p>
        {role === 'kitchen' ? 
          order.status !== 'Entregue' ? order.status !== 'Pronto' ?
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-ready-order-button' 
              children='PRONTO' 
              ButtonId={order.id}
              ButtonOnClick={OrderReadyButton}
            /> : 
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-ready-order-button' 
              children='Este pedido já está pronto! :)' 
              ButtonId={order.id}
            /> :
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-delivered-order-button' 
              children='Este pedido já foi entregue :)' 
              ButtonId={order.id}
            /> 
            : order.status !== 'pending' ? order.status !== 'Entregue' ? 
              <Button 
                ButtonClass={Location === 'room-tables'? 'kitchen-order-status-button kitchen-ready-order-button' : 'kitchen-order-status-button kitchen-delivered-order-button'} 
                children={Location === 'room-tables'? 'Este pedido está aguardando entrega' : 'ENTREGAR'} 
                ButtonId={order.id}
                ButtonOnClick={OrderDeliveredButton}
              /> : 
              <Button 
                ButtonClass='kitchen-order-status-button kitchen-delivered-order-button' 
                children='Este pedido já foi entregue!' 
                ButtonId={order.id}
              /> : 
              <Button 
                ButtonClass='kitchen-order-status-button kitchen-being-prepared-order-button' 
                children='Este pedido está sendo preparado!' 
                ButtonId={order.id}
              />
            }
        </div>
      </div>
    </div>
    )
  }

