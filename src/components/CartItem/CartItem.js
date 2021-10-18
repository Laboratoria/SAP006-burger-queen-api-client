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
      <h2 className="name-product">{nameProduct}</h2>
      <h2 className="flavor-product">{flavorProduct}</h2>
      <h2 className="complement-product">{complementProduct}</h2>
      <h2 className="price-product">R$ {priceProduct}</h2>
      <h3 className="qtd-product">Qtd {qtdProduct}</h3>
      <Button
        onClick={divOnClick}
        className="btn-remove"
        style={{ backgroundImage: "red" }}
      >
        <img className="icon-trash" src={trash} /> 
      </Button>
    </div>
  );
}

export default CartItem;
