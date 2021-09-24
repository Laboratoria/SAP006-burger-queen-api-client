import React from "react";

const ProductInfo = ({ id, name, price, flavor }) => {
  return (
    <article className='product-item' key={id}>
      <p className='product-info'>{name}</p>
      <p className='product-info'>{`${flavor !== null ? flavor : ''}`}</p>
      <p className='product-info'>R${price},00</p>
    </article>
  )
}

export default ProductInfo;