import React from 'react';
import Button from '../Button/Button';
import './OrderInfo.css'

function OrderInfo({
  date, id, client, table, status, itens, onClick, buttonText
}) {
  return (
    <>
      <div className='each-card-order'>
        <div className='all-infos'>
          <div className='info-clients'>
            <p className='each-info'><span>Pedido feito em:</span> {date}</p>
            <p className='each-info'><span>Nº do pedido:</span> {id}</p>
            <p className='each-info'><span>Cliente: {client}</span></p>
            <p className='each-info'><span>Mesa: {table}</span></p>
          </div>
          <div className='status-order'>
            <p className='each-info'><span>Status:</span> {status}</p>
          </div>
          <div className='itens-order'>
            <p className='each-info'><span> {itens}</span></p>
          </div>
        </div>
        <div className='btn-prepare'>
          <Button className='btn-change-status' buttonOnClick={onClick} buttonText={buttonText}></Button>
        </div>
      </div>

    </>
  );
}

export default OrderInfo;
