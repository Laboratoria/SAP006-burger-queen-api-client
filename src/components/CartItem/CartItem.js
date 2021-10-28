import React from 'react';
import Button from '../Button/Button';
import './cartitem.css';

function CartItem({
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
                <div className="item-description">
                    <h1 className="divName" key={productsNameKey}>{productsName}</h1>
                    <h1 className="item-complement"> {productsFlavor} {productsComplement}</h1>
                </div>
                <div className="item-price">
                    <h1 className="divPrice" key={productsPriceKey}> {divId} R${productsPrice},00</h1>
                </div>
                <div className="box-qtd">  
                    <h1 className="qtd-itens">{qtd}</h1>
                </div>
                <div className="box-btn-remove">
                    <Button onClick={removeOnClick} className="remove-button"
                    style={{borderRadius: '50%', 
                    backgroundColor: '#9B2D0A',
                    color: '#EAAF36', 
                    fontSize: '10px',
                    fontWeight:'800',
                    minWidth: '30px', 
                    height: '30px',
                    padding: '10px',
                    margin: '5px',
                    alignItems: 'center',
                    boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)'}} > - </Button>
                </div>
            </div>
        </>
    );
}
export default  CartItem;