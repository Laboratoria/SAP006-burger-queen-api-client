/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React from 'react';
import './cartItem.scss';

export default function CartItem({
  name, price, flavor, complement, priceComplement,plus, minus, qty
}) {

  let convertedPrice


  if (priceComplement===undefined || priceComplement===null || priceComplement===""){
      convertedPrice = parseInt(((price.replace(/[.,]/g, '')).slice(3)).slice(0,-2))
  } else{
   convertedPrice = parseFloat(price.slice(3).replace(',','.'))+parseFloat(priceComplement.slice(3).replace(',','.'))
  }

  const totalPrice = convertedPrice*qty

  let realFlavor 
  if(flavor===null){
    realFlavor =""
  }else{
    realFlavor = flavor
  }

  let realComplement 
  if(complement===null){
    realComplement =""
  }else{
    realComplement = complement
  }

 

 
  return (

    <li className="itemData">
      <div className="item">
        <p className="product">{name}</p>
        <p className="product-details">{realFlavor} {realComplement}</p>

        {/* {flavor && (
        <span className="product-details">{flavor}</span>)} */}
      </div>

      <div className="button-container">
        <button className="cart-qty-plus" type="button" name={name} onClick={minus}>-</button>
        <input type="text" name="qty" min="0" className="qty form-control" value={qty} readOnly/>
        <button className="cart-qty-minus" type="button" name={name} onClick={plus}>+</button>
      </div>

      <div className="price">
        <p>R${totalPrice},00</p>
      </div>
    </li>

  )
};
