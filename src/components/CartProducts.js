import React from 'react';
import Button from './Button';




function CartProducts({
    qtd,
    addOnClick,
    removeOnClick,
    divClassName,
    divKey,
    divName,
    divId,
    divPrice,
    productsName,
    productsPrice,
    productsNameKey,
    productsPriceKey,
    productsFlavor,
    productsComplement,
    ImgSrc,
}) {
    return (
        <>
            <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice} qtd={qtd}>
                <h1 className="divName" key={productsNameKey}>{productsName}</h1>
                <div className="divButton">
                    <h1 className="divPrice" key={productsPriceKey}> {divId} R${productsPrice},00</h1>
                    <h1 className="divFlavor"> {productsFlavor}</h1>
                    <h1 className="divComplement"> {productsComplement}</h1>
                    <h1 className="">{qtd}</h1>
                </div>

                {/* <Button onClick={addOnClick} className="add-button"
                    style={{ 'borderRadius': '50%', backgroundColor: '#EAAF36', minWidth: '1rem', padding: '0.3rem 1rem' }}
                > + </Button> */}
                
                <Button onClick={removeOnClick} className="remove-button"
                    style={{ 'borderRadius': '50%', backgroundColor: '#EAAF36', minWidth: '1rem', padding: '0.3rem 1rem' }}
                > - </Button>

                {/* incluir carrinho */}

            </div>
        </>
    );
}
export default  CartProducts;