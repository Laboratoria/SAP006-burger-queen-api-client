import React from 'react';
import Button from '../button/Button';

import './Style.css';

export default function Itens ({id, name, price, image, onClick}) {
    return(
        <div>
            <article key={id} className="item-card">
                <img className="img-product" src={image} alt={`imagem do produto ${name}`}/>
                <span>{id}</span>
                <span>{name}</span>
                <span>Preço: R$ {price},00</span>
                <Button onClick={onClick} label="+" />
            </article>
        </div>
    );
};

/* 
export const totalPrice = (value) => {
    value.reduce((priceItem, item) => (priceItem * item.qtd), 0)
}

export const Total = ({ cartItems }) => {
  
      const newTotal = cartItems.reduce((acc, currentValue) => 
        acc + (currentValue.price * currentValue.qtd), 0);
  
    return <div className="CartTotal">Total: {newTotal}</div>;
  };

                <span>Tipo: {flavor}</span>
                <span>Complemento: {complement}</span>

  */