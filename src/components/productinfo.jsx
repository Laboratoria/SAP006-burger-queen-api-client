import React from "react";

const ProductInfo = ({ id, name, price, flavor, onClick }) => {
  return (
    <article className='product-item' key={id} onClick={onClick}>
      <p className='product-info'>{name}</p>
      <p className='product-info'>{`${flavor !== null ? flavor : ''}`}</p>
      <p className='product-info'>R${price},00</p>
    </article>
  )
}

export default ProductInfo;