     
import React from 'react';
import './CurrentOrder.scss';

import { Button} from '../Button/Button'
import { orderAge } from '../../services/general';

export const CurrentOrder = ({order, ButtonDeleteOrder}) => { 
  const orderCreationAgeSeconds = (Date.now() - new Date (order.createdAt).valueOf())/1000
  const orderCreationAge = orderAge(orderCreationAgeSeconds)
  return (
    <div className='current-order-div'>
      <div className='current-order-header current-order-header-first'>
        <div>
          <span>Mesa:&nbsp;</span><span>{order.table}</span>
        </div>
        <div>
          <span>Cliente:&nbsp;</span><span>{order.client_name}</span>
        </div>
        <div>
          <span>Pedido ID:&nbsp;</span><span>{order.id}</span>
        </div>
      </div>
      <div className='current-order-header current-order-header-second'>
        <div>
          <span>Status:&nbsp;</span><span>{order.status}</span>
        </div>
        <div>
          <span>{orderCreationAge}</span>
        </div>
      </div>
      <div className='current-order-all-products'>
        <div className='current-order-all-products-column current-order-product-column-quantity'>
          <p className='current-order-header-third'>Qtd.</p>
          {order.Products.map((product) => 
          <div className='current-order-product-content'>
            <span>{product.qtd}</span>
          </div>
          )}
        </div>
        <div className='current-order-all-products-column'>
          <p className='current-order-header-third'>Produto</p>
          {order.Products.map((product) => 
          <div className='current-order-product-content'>
            <span>{product.name}</span>
          </div>
          )}
        </div>
        <div className='current-order-all-products-column current-order-product-column-favlor'>
          <p className='current-order-header-third'>Sabor</p>
          {order.Products.map((product) => 
          <div className='current-order-product-content'>
            <span>{product.flavor}</span>
          </div>
          )}
        </div>
        <div className='current-order-all-products-column current-order-product-column-additional'>
          <p className='current-order-header-third'>Adc.</p>
          {order.Products.map((product) => 
          <div className='current-order-product-content'>
            <span>{product.complement}</span>
          </div>
          )}
        </div>
      </div>
      <div className='current-order-button-div'>
        <Button Role='kitchen-delete-order' ButtonOnClick={ButtonDeleteOrder}/>
        <div className='current-order-status-button-div'>
        <Button Role='kitchen-change-order-status-being-prepared' children='EM PREPARO'/>
        <Button Role='kitchen-change-order-status-ready' children='PRONTO'/>
        </div>
      </div>
    </div>
    )
  }

