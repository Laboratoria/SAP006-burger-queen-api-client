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
            <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice} qtd={qtd}>

                <h1 className="divName" key={produtosNameKey}>{produtosName}</h1>
                <div className="divButton">
                <h1 className="divPrice" key={produtosPriceKey}> R${divId}{produtosPrice},00</h1>
                    <h1 className="divFlavor"> {produtosFlavor}</h1>
                    <h1 className="divComplement"> {produtosComplement}</h1>
                    <h1>QUANTIDADE: {qtd}</h1>
                </div>
                <Button onClick={onClick} buttonClass="add-button"msg="REMOVER"> </Button>
            </div>
        </>
    );
}
export default Carrinho;