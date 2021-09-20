/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/button';

function Item({
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
  ImgSrc,
}) {
  return (
    <>
      <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
        <div>
          <img src={ImgSrc} className="img-food" alt="img-food"></img>
        </div>
        <h1 className="divName" key={itemNameKey}>{itemName}</h1>
        <div className="divButton">
          <h1 className="divPrice" key={itemPriceKey}> {divId} R${itemPrice},00</h1>
          <h1 className="divFlavor"> {itemFlavor}</h1>
        </div>
        <Button buttonOnClick={divOnClick} buttonClass="add-button"> ADD </Button>
      </div>
    </>
  );
}
export default Item;
