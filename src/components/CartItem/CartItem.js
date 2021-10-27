import React from "react";
import Button from "../Button/Button.js";
import "./CartItem.css";
import trash from "../../img/trash.png"

function CartItem({
  nameProduct,
  flavorProduct,
  idProduct,
  complementProduct,
  priceProduct,
  divOnClick,
  qtdProduct, 
}) {
  return (
    <div key={idProduct} className="cart-item">
      <h3 className="name-product">{nameProduct}</h3>
      <h3 className="flavor-product">{flavorProduct}</h3>
      <h3 className="complement-product">{complementProduct}</h3>
      <h3 className="price-product">R$ {priceProduct}</h3>
      <h3 className="qtd-product">Qtd {qtdProduct}</h3>
      <Button
        onClick={divOnClick}
        className="btn-remove"
      >
        <img className="icon-trash" src={trash} /> 
      </Button>
    </div>
  );
}

export default CartItem;
