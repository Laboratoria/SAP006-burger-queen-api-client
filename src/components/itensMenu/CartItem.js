import React from 'react';
import Button from '../button/Button';
import './Style.css';


export default function CartItem(props) {

    return (
      <article key={props.id} className="container-products-cart">
        <div>
          <p className="name-cart">{props.name}</p>
          <p className="price-cart">R${props.price},00</p>
        </div>
        <Button
          type='text'
          onClick={() => props.remove(props.id)}
          text='-'
          className="btn-remove-item"
        />
        <p className="qtd" type="number" name="qtd">{props.qtd}</p>
        <Button
          type='text'
          onClick={() => props.add(props.id)}
          text='+'
          className="btn-add-item"
        />
      </article> 
   )
}