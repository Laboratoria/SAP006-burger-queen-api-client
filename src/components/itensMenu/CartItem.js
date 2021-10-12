import React from 'react';
import Button from '../button/Button';

import './Style.css';

export default function CartItem( props ) {

    return (
      <article key={props.id} className="container-products-cart">
        <div className="container-product">
          <p>{props.name} {props.flavor} {props.complement ? `+ ${props.complement}` : ''}</p>
          <p>R${(props.price) * props.qtd},00</p>
            <Button
              type='text'
              onClick={() => props.remove(props.id)}
              text='-'
            />
            <p type="number" name="qtd">{props.qtd}</p>
            <Button
              type='text'
              onClick={() => props.add(props.id)}
              text='+'
            />
        </div>
      </article> 
   );
};
