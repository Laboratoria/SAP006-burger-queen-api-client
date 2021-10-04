import React from 'react';
import Button from '../Button/Button';
import './OrderInfo.css'

function OrderInfo({
  id, client, table, status, itens
}) {
  return (
    <>
        <div className='each-card'>
          <div className='info-clients'>
            <p>Nº do pedido:{id}</p>
            <p>Cliente:{client}</p>
            <p>Mesa:{table}</p>
          </div>
          <div className='status-order'>
            <p>Status:{status}</p>
          </div>
          <div className='itens-order'>
            <p>{itens}</p>
          </div>

          <div className='btn-prepare'>
            <Button buttonText='Preparar pedido'></Button>
          </div>
        </div>

    </>
  );
}

export default OrderInfo;
