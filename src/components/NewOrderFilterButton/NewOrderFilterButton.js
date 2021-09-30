     
import React from 'react';
import { Button } from '../Button/Button';


export const NewOrderProductButton = ({product, ButtonOnClick}) => { 
  return (
    <Button 
      key={product.id}
      ButtonId={product.id}
      ButtonClass='new-order-product-button' 
      ButtonTitle={product.title}
      ButtonOnClick={ButtonOnClick}
    />
  )
}

export const NewOrderFilterButton = ({ButtonOnClick, children }) => { 
  return (
    <Button 
      ButtonClass='new-order-filter' 
      children={children}
      ButtonOnClick={ButtonOnClick}
    />
  )
}

