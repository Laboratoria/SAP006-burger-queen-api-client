import React from 'react';
import Button from '../Button';


function CartItem(props) {
    return (
      <Article key={props.id}>
        <p>{props.nome}</p>
        <p>{props.preco}</p>
        <Button
          buttonType='text'
          buttonOnClick={props.remove}
          buttonText='-'
        />
      </Article> 
   )
}

export default CartItem;