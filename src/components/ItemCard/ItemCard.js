import React from 'react';

function ItemCard({id, onClick, img, nome, descricao, preco}) {
  return (
    <Article key={id} onClick={onClick}>
      <img src={img} alt='descrição'></img>
      <p>{nome}</p>
      <p>{descricao}</p>
      <p>{preco}</p>
    </Article>
 )
}

export default ItemCard;