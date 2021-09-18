/* eslint-disable react/prop-types */
import React from 'react';
import './cartItem.scss';

export default function CartItem({
  name, price, flavor, complement, plus, minus, qty
}) {

 
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
        <p>{price}</p>
      </div>
    </li>

  )
};
