import React from "react";

export default function OrderProducts ({ name, flavor, complement, qtd }) {

  return (
      <div className="container-orders-products">
          {qtd < 10 ? `0${qtd}` : qtd}
          <hr className="quebra-linha"></hr>
          {(name.includes('mL') && name.replace('mL', 'ml')) || <p>{name}</p>}
          {flavor && complement && <p><span>{flavor}</span> + {complement}</p>}
          {flavor && !complement && <p><span>{flavor}</span> - s/ extra</p>}
          {!flavor && ''}
      </div>
  );
};
