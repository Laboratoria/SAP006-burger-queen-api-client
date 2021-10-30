import React from 'react';
function OrderFood ({
  name,
  complement,
  qtd,
  id,
  flavor,
}) {
  return (
    <div key={id}>
      <span>{qtd}</span>
      <span>{name}</span>
      <span>{flavor}</span>
      <span>{complement}</span>
    </div>
  );
}
export default OrderFood;