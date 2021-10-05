import React from 'react';
import CartItem from './CartItem';
import Button from '../button/Button';
import './Style.css';

export default function CartArea({ arrItem, removeButton, addButton }) {
  
  const totalPrice = arrItem.reduce((total, item) => total + (item.price * item.qtd), 0);

  return (
    <section className="container-cart">
      <div className="cart">
        <p className="info-card text-cart">🛒 Carrinho </p>
        
          {arrItem.map((item) => {
            return (
              <CartItem
                key={item.id}  
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                remove={removeButton}
                add={addButton}
                qtd={item.qtd}
              />)
          })}
      </div>

      <div className="total">
          <p>Total: R$ {totalPrice},00</p>
      </div>

      <Button
        text="Fazer Pedido"
        className="buttons btn-request" 
      />
    </section> 
  )
}