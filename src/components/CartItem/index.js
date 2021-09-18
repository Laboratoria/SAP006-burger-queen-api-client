/* eslint-disable react/prop-types */
import React from 'react';
import './cartItem.scss';

export default function CartItem({
  name, price, flavor, complement, plus, minus, qty
}) {

  // eslint-disable-next-line radix
  const priceConvert = parseInt(((price.replace(/[.,]/g, '')).slice(3)).slice(0,-2))

  const totalPrice = priceConvert*qty
 

 
  return (

    <li className="itemData">
      <div className="item">
        <p className="product">{name}</p>
        <p className="product-details">teste complemento</p>

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
