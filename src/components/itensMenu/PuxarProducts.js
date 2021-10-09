import React from "react";

const OrderProducts = ({ id, name, flavor, complement, qtd }) => {
  return (
    <div key={id}
        name={name}
        flavor={flavor}
        complement={complement}
        qtd={qtd}
    >
    </div>
  )
}

export default OrderProducts;