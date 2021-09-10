/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from './button';

function Item({
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  itemName,
  itemPrice,
  itemNameKey,
  itemPriceKey,
  itemQnt,
  ImgSrc,
}) {
  return (
    <>
      <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
        <div>
          <img src={ImgSrc} className="img-food" alt="img-food"></img>
        </div>
        <h1 className="divName" key={itemNameKey}>{itemQnt}{itemName}</h1>
        <div className="divButton">
          <h1 className="divPrice" key={itemPriceKey}> R$ {itemPrice},00</h1>
        </div>
        <Button buttonText="ADD" buttonClass="add-button" />

      </div>
    </>
  );
}
export default Item;
