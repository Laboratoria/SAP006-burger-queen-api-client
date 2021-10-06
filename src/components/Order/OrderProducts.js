import React from 'react';
import './OrderProducts.css'

function OrderProducts({
  name, qtd
}) {
  return (
    <>
        <p className='each-info'><span>Produto:</span> {name} - <span>Qtd:</span> {qtd}</p>
    </>
  );
}

export default OrderProducts;