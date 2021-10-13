import React from "react";
import Button from "./button.js";

function Produtos({
  onClick,
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  produtosName,
  produtosPrice,
  produtosNameKey,
  produtosPriceKey,
  produtosFlavor,
  produtosComplement,
  ImgSrc,
}) {
  return (
      <div
        className={divClassName}
        key={divKey}
        name={divName}
        id={divId}
        price={divPrice}
      >
        <img src={ImgSrc} className="img-food" alt="img-food"></img>

        <p className="divName" key={produtosNameKey}>
          {produtosName}
        </p>
        <p className="divPrice" key={produtosPriceKey}>
          {" "}
          R${produtosPrice},00
        </p>
        <p className="divFlavor">{produtosFlavor}</p>
        <p className="divComplement"> {produtosComplement}</p>
        <Button onClick={onClick} className="add-button" msg="+">
          {" "}
        </Button>
      </div>
  );
}
export default Produtos;
