/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react';
import './cartItem.scss';

export default function CartItem({
  name, price, flavor, complement, priceComplement, plus, minus, qty
}) {

  let convertedPrice


  if (priceComplement === undefined || priceComplement === null || priceComplement === "") {
    convertedPrice = parseInt(((price.replace(/[.,]/g, '')).slice(3)).slice(0, -2))

  } else {
    convertedPrice = parseFloat(price.slice(3).replace(',', '.')) + parseFloat(priceComplement.slice(3).replace(',', '.'))
  }

  const totalPrice = convertedPrice * qty

  let realFlavor
  if (flavor === null) {
    realFlavor = ""
  } else {
    realFlavor = flavor
  }

  let realComplement
  if (complement === null) {
    realComplement = ""
  } else {
    realComplement = complement
  }

  return (

    <li className="itemData">
      <div className="item">
        <p className="product">{name}</p>
        <p className="product-details">{realFlavor} {realComplement}</p>
      </div>

      <div className="button-container">
        <button data-testid="minus-btn"className="cart-qty-minus" type="button" name={name} flavor={flavor} complement={complement} onClick={minus}>-</button>
        <input data-testid="input" type="text" name="qty" min="0" className="qty form-control" value={qty} readOnly />
        <button data-testid="plus-btn" className="cart-qty-plus" type="button" name={name} flavor={flavor} complement={complement} onClick={plus}>+</button>
      </div>

      <div className="price">
        <p>R${totalPrice},00</p>
      </div>
    </li>

  )
};
