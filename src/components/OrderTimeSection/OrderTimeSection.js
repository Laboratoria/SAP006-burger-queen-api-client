     
import React from 'react';

export const OrderTimeSection = ({Time1, Time2, Time3}) => { 

  return (
    <section className='current-order-header current-order-header-second'>
      <span>Duração:&nbsp;</span>
      <span>Preparo:&nbsp; {Time1}</span>
      <span>Entrega:&nbsp;{Time2}</span>
      <span>Total:&nbsp;{Time3}</span>
    </section>
    )
  }

