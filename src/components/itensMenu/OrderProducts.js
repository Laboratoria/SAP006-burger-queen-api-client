import React from "react";

export default function OrderProducts ({ name, flavor, complement, qtd }) {

  return (
      <div>
        <div >
          {qtd < 10 ? `0${qtd}` : qtd}
          {(name.includes('mL') && name.replace('mL', 'ml')) || <p>{name}</p>}
        </div>
        <div>
          {flavor && complement && <p><span>{flavor}</span> + {complement}</p>}
          {flavor && !complement && <p><span>{flavor}</span> - s/ extra</p>}
          {!flavor && ''}
        </div>
      </div>
  );
};
