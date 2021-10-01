import React from 'react';
import CartItem from './CartItem';
import Button from '../button/Button';
import './Style.css';

export default function CartArea({ arrItem, removeButton }) {
  return (
    <section>
      <div className="card">
        <label className="info-card">Atendente: {localStorage.getItem("userName")} </label>
        <label className="info-card">Mesa:
          <select>
            <option value="">01</option>
            <option value="">02</option>
            <option value="">03</option>
            <option value="">04</option>
            <option value="">05</option>
            <option value="">06</option>
            <option value="">07</option>
          </select>  
        </label>
        <label className="info-card">Cliente: <input className="input-client" type="text" name="nameClient"></input></label>
      </div>
      {arrItem.map((item) => {
        return (
          <CartItem
            key={item.id}  
            name={item.name}
            price={item.price}
            image={item.image}
            remove={removeButton}
          />)
      })}
            <div>
              <p>Total: R$</p>
            </div>
          <Button
            text="Fazer Pedido"
            className="buttons btn-request" 
          />
    </section> 
  )
}