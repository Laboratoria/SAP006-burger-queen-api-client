import React from 'react';
import './Style.css';


export default function ItemCard ({id, name, price, image, flavor, complement, onClick}) {
  return (
    <div key={id} onClick={onClick} className="products">
      <img className="img-product" src={image} alt={`imagem do produto ${name}`}></img>
      <p className="info-product">{name} {flavor} {complement ? `+ ${complement}` : ''}</p>
      <p className="price">R${price},00</p>
    </div>
  )
};
