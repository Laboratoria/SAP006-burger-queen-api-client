import React from 'react';
import './OrderProducts.css'

function OrderProducts({
  name, qtd
}) {
  return (
    <>
        <p>Produto:{name} - Qtd: {qtd}</p>
    </>
  );
}

export default OrderProducts;