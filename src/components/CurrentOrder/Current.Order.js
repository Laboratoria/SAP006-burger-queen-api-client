
import React from 'react';

import { Button} from '../Button/Button'
import { OrderTimeSection } from '../OrderTimeSection/OrderTimeSection'
import { OrderHeaderDiv } from '../OrderHeaderDiv/OrderHeaderDiv'
import { OrderListColumn } from '../OrderListColumn/OrderListColumn';
import { timeToProcess, orderCurrentAge } from '../../services/general';

import './CurrentOrder.scss';

export const CurrentOrder = ({order, ButtonDeleteOrder, OrderReadyButton, OrderDeliveredButton, WaitressName}) => { 

  const role = localStorage.getItem('currentEmployeeRole');

  return (
    <div className= {
      (order.status === 'Em Preparo' || order.status === 'pending') 
      ? 'current-order-div order-being-prepared-div'
      : order.status === 'Pronto' 
        ? 'current-order-div order-ready-div'
        : 'current-order-div order-delivered-div'
    }>
      <section className='current-order-header current-order-header-first'>
        <OrderHeaderDiv Title='Mesa' Value={order.table}/> 
        <OrderHeaderDiv Title='Cliente' Value={order.client_name}/> 
        <OrderHeaderDiv Title='Pedido' Value={order.id}/> 
      </section>
      <section className='current-order-header current-order-header-second'>
        <OrderHeaderDiv Title='Status' Value={order.status === 'pending' ? 'Em preparo' : order.status}/> 
        <OrderHeaderDiv Title='Responsável' Value={WaitressName}/>
        <OrderHeaderDiv Title='Pedido criado' Value={orderCurrentAge(order.createdAt)}/>
      </section>
      {order.status === 'pending' && <OrderTimeSection Time1='-'  Time2='-' Time3='-' />}
      {order.status === 'Pronto' &&  <OrderTimeSection Time1={timeToProcess(order.createdAt, order.processedAt)}  Time2='-' Time3='-' />}
      {order.status === 'Entregue' && 
        <OrderTimeSection Time1={timeToProcess(order.createdAt, order.processedAt)} 
          Time2={timeToProcess(order.processedAt, order.updatedAt)}  Time3={timeToProcess(order.createdAt, order.updatedAt)}
        />
      }
      <section className='current-order-all-products'>
        <OrderListColumn ColumnName = 'Qtd.' data = {order} ColumnContent = {['qtd']} />
        <OrderListColumn ColumnName = 'Produto' data = {order} ColumnContent = {['name']} />
        <OrderListColumn ColumnName = 'Sabor' data = {order} ColumnContent = {['flavor']} />
        <OrderListColumn ColumnName = 'Adc.' data = {order} ColumnContent = {['complement']}/>
      </section>
      <div className='current-order-button-div'>
        <Button ButtonClass='delete-order' ButtonId={order.id} ButtonOnClick={ButtonDeleteOrder} />
      <div className='current-order-status-button-div'>
        <p className='current-order-order-bill'> Total: R$ &nbsp;{order.orderTotalBill}</p>
          {role === 'kitchen' && order.status === 'pending' &&
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-ready-order-button' 
              children='PRONTO' 
              ButtonId={order.id}
              ButtonOnClick={OrderReadyButton}
            /> 
          }
          {role ==='kitchen' && order.status === 'Pronto' && 
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-ready-order-button' 
              children='Este pedido já está pronto!' 
              ButtonId={order.id}
            /> 
          }
          {role ==='kitchen' && order.status === 'Entregue' && 
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-delivered-order-button' 
              children='Este pedido já foi entregue.' 
              ButtonId={order.id}
            /> 
          }
          {role === 'room' && order.status === 'pending' &&
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-being-prepared-order-button' 
              children='Este pedido está sendo preparado!' 
              ButtonId={order.id}
            />
          }
          {role === 'room' && order.status === 'Pronto'&&
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-delivered-order-button' 
              children='ENTREGAR'
              ButtonId={order.id}
              ButtonOnClick={OrderDeliveredButton}
            /> 
          }
          {role === 'room' && order.status === 'Entregue'&&
            <Button 
              ButtonClass='kitchen-order-status-button kitchen-delivered-order-button'  
              children='Este pedido já foi entregue!' 
              ButtonId={order.id}
            /> 
          }
        </div>
      </div>
    </div>
    )
  }

