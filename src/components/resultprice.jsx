import React from "react";

const ResultPrice = (props) => {
  return (
  <div className='product-item'>
    <p className='product-info'>R${props.value},00</p>
  </div>
  )
}

export default ResultPrice;