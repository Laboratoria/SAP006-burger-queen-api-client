import React from "react";

const ProductInfo = ({ id, name, price, flavor, complement }) => {
  return (
    <article className='product-item' key={id}>
      <p className='product-info'>{name}</p>
      <p className='product-info'>{flavor}</p>
      <p className='product-info'>R${price},00</p>
      <p className='product-info'>{complement}</p>
    </article>
  )
}

export default ProductInfo;