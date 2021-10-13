import React from 'react';
import Button from './button.js';


function Carrinho({
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
    qtd,
}) {
    return (
        <>
            <div className={divClassName} 
            key={divKey} 
            name={divName} 
            id={divId} 
            price={divPrice} 
            qtd={qtd}>
                <p className="nameCar" key={produtosNameKey}>{produtosName}</p>
                <p className="priceCar" key={produtosPriceKey}> R${divId}{produtosPrice},00</p>
                    <p className="flavorCar"> {produtosFlavor}</p>
                    <p className="complementCar"> {produtosComplement}</p>
                    <p>QUANTIDADE: {qtd}</p>
                </div>
                <Button className="removerbot" onClick={onClick} msg="X"> </Button>
        </>
    );
}
export default Carrinho;