import React from 'react';
import Button from './Button';


function Products({
    divOnClick,
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
            <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
                <div>
                    <img src={ImgSrc} className="img-food" alt="img-food"></img>
                </div>
                <h1 className="divName" key={productsNameKey}>{productsName}</h1>
                <div className="divButton">
                    <h1 className="divPrice" key={productsPriceKey}> {divId} R${productsPrice},00</h1>
                    <h1 className="divFlavor"> {productsFlavor}</h1>
                    <h1 className="divComplement"> {productsComplement}</h1>
                </div>
                <Button buttonOnClick={divOnClick} buttonClass="add-button"> ADD </Button>
            </div>
        </>
    );
}
export default Products;