import React from "react";

const ProductInfo = ({id, name, price}) => {
  return (
    <article className='products'key={id}>
      <p>{name}</p>
      <p>R${price},00</p>
    </article>
  )
}

export default ProductInfo;