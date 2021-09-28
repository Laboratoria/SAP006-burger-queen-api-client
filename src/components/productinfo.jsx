import React from "react";

const ProductInfo = ({ name, price, flavor, complement, onClick }) => {
  return (
    <article className='product-item'>
      <p className='product-info'>{name}</p>
      <p className='product-info'>{flavor}</p>
      <p className='product-info'>{complement}</p>
      <p className='product-info'>R${price},00</p>
      <button onClick={onClick}>+</button>
    </article>
  )
}

export default ProductInfo;