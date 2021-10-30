import React from 'react';
import Button from '../Button/button';
import './item.css';

function  Itens({
divOnClick,
divClassName,
divKey,
divName,
divId,
divPrice,
itemName,
itemPrice,
itemNameKey,
itemPriceKey,
itemFlavor,
itemComplement,
ImgSrc,
}) {
  return (
    <>
    <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice} >
    </div>
    <h1 className="divName" key={itemNameKey} > {itemName}</h1>
    <div className="divButton">
      <h1 className="divPrice" key= {itemPriceKey} > {divId} R${itemPrice},00</h1>
      <h1 className="divFlavor"> {itemFlavor}</h1>
      <h1 className="divComplement">{itemComplement}</h1>
    </div>
    <Button buttonOnClick={divOnClick} buttonClass="add-button">ADD</Button>
    </>
  );
}
export default Itens;
