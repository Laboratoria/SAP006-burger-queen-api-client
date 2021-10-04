import React from 'react';
import CartItem from '../CartItem';


function CartArea({ arrItem, removeButton }) {
    return (
      <Section>
        {arrItem.map((item) => {
          return (
            <CartItem
              key={item.id}  
              nome={item.nome}
              preco={item.preco}
              remove={removeButton}
            />)
        })}
      </Section> 
    )
  }

export default CartArea;