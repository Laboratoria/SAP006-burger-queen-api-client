import React from "react";

const ProductInfo = ({id, onClick, name, price}) => {
  return (
    <article className='products' key={id} onClick={onClick}>
      <p>{name}</p>
      <p>R${price},00</p>
      
    </article>
  )
}

export default ProductInfo;