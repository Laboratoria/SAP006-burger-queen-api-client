import React from 'react';
import './Style.css';


export default function ItemCard ({id, name, price, image, onClick}) {
  return (
    <article key={id} onClick={onClick}>
      <img className="img-product" src={image} alt={`imagem do produto ${name}`}></img>
      <p>{name}</p>
      <p>R${price},00</p>
    </article>
 )
};

/*
      <p>{flavor}</p>
      <p>{complement}</p>*/