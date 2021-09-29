import React from 'react';

import './Style.css';

export default function Itens ({id, name, flavor, complement, price, image, type}) {
    return(
        <div
            id={id}
            name={name}
            flavor={flavor}
            complement={complement}
            price={price}
            image={image}
            type={type}

        />
    );
};
