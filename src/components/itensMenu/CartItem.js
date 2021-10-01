import React from 'react';
import Button from '../button/Button';
import './Style.css';


export default function CartItem(props) {
    return (
      <article key={props.id}>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <Button
          type='text'
          onClick={props.remove}
          text='X'
          className="btn-delet"
        />
      </article> 
   )
}