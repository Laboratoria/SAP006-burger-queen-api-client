import React from "react";


const ProductInfo = ({ id, name, price, flavor, complement, onClick }) => {

  return (
    
    <article className='product-item' key={id} onClick={onClick}>
      <p className='product-info'>{name}</p>
      <p className='product-info'>{flavor}</p>
      <p className='product-info'>R${price},00</p>
      <p className='product-info'>{complement}</p>
      <button>delete</button>
      
      
    </article>
  )
}

export default ProductInfo;