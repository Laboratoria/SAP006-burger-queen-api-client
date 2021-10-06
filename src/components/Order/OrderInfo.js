import React from 'react';
import Button from '../Button/Button';
import './OrderInfo.css'

function OrderInfo({
  date, id, client, table, status, itens, onClick, buttonText
}) {
  return (
    <>
        <div className='each-card'>
          <div className='info-clients'>
            <p>Pedido feito em:{date}</p>
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
            <Button buttonOnClick={onClick}  buttonText={buttonText}></Button>
          </div>
        </div>

    </>
  );
}

export default OrderInfo;
