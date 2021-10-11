import React from "react";
import Button from "../Button/Button.js";
import "./CartItem.css";

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
      <h3 className="flavor-product">{flavorProduct}</h3>
      <h1 className="complement-product">{complementProduct}</h1>
      <h1 className="price-product">{priceProduct}</h1>
      <h1 className="qtd-product">{qtdProduct}</h1>
      <Button
        onClick={divOnClick}
        className="btn-remove"
        style={{ backgroundColor: "red" }}
      >
        Remover
      </Button>
    </div>
  );
}

export default CartItem;
