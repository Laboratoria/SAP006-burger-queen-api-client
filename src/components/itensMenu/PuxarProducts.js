import React from "react";

const OrderProducts = ({ id, name, flavor, complement, qtd }) => {
  return (
    <div>
        {id}
        {name}
        {flavor}
        {complement}
        {qtd}
    </div>
  )
}

export default OrderProducts;