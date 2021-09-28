import React from 'react';

import './Style.css';

function Itens ({id, name, flavor, complement, price, image}) {
    return(
        <div
            id={id}
            name={name}
            flavor={flavor}
            complement={complement}
            price={price}
            image={image}
        />
    )
};

export default Itens;