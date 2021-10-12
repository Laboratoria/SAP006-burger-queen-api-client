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
    <>
      
        <div
          className={divClassName}
          key={divKey}
          name={divName}
          id={divId}
          price={divPrice}
        >
        
            <img src={ImgSrc} className="img-food" alt="img-food"></img>
    
          <h1 className="divName" key={produtosNameKey}>
            {produtosName}
          </h1>
            <h1 className="divPrice" key={produtosPriceKey}>
              {" "}
              R${produtosPrice},00
            </h1>
            <h1 className="divFlavor">{produtosFlavor}</h1>
            <h1 className="divComplement"> {produtosComplement}</h1>
          <Button onClick={onClick} buttonClass="add-button" msg="ADD">
            {" "}
          </Button>
        </div>
    </>
  );
}
export default Produtos;
