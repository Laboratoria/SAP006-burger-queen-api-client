import React from "react";
import Button from "../Button/Button.js";
import "./ItemMenu.css";

function ItemMenu({
  imageProduct,
  nameProduct,
  flavorProduct,
  idProduct,
  complementProduct,
  priceProduct,
  divOnClick,
}) {
  return (
    <div key={idProduct} className="menu-item">
      <img className="img-item" src={imageProduct} alt="itens menu" />
      <h2 className="name-product">{nameProduct}</h2>
      <h3 className="flavor-product">{flavorProduct}</h3>
      <h1 className="complement-product">{complementProduct}</h1>
      <h1 className="price-product">R$ {priceProduct}</h1>
      <Button
        onClick={divOnClick}
        className="btn-add"
        style={{ backgroundColor: "var(--azul)" }}
      >
        Adicionar
      </Button>
    </div>
  );
}

export default ItemMenu;