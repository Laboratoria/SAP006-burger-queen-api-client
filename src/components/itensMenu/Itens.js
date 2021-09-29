import React from 'react';

import './Style.css';

export default function Itens ({id, name, flavor, complement, price, image}) {
    return(
        <div>
            <p>Nº {id}</p>
            <p>{name}</p>
            <p>Tipo: {flavor}</p>
            <p>Complemento: {complement}</p>
            <p>Preço: R$ {price},00</p>
            <img className="img-product" src={image} alt={`imagem do produto ${name}`}/>
        </div>
    );
};
