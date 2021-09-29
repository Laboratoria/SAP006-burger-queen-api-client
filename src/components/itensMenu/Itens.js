import React from 'react';

import './Style.css';

export default function Itens ({id, name, flavor, complement, price, image, type}) {
    return(
        <div>
            {id}
            {name}
            {flavor}
            {complement}
            {price}
            {image}
            {type}
        </div>
    );
};
