import React from "react";

const OrderProducts = ({ id, name, flavor, complement, qtd, products }) => {
  return (
    <div>
        {id}
        {name}
        {flavor}
        {complement}
        {qtd}
        {products}
    </div>
  )
}

export default OrderProducts;