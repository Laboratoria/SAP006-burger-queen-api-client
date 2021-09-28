import React from 'react';

import './Cards.css'

function Cards({
    name, price, image, onClick
}) {
    return (
        <div className='each-card'>
            <ul className='items'>
                <div className='image-item'>
                    <img src={image} alt='Item'></img>
                </div>
                <li>{name}</li>
                <li>R${price}</li>
            </ul>
            <button className='add-btn' onClick={onClick}>Adicionar</button>
        </div>
    );
}

export default Cards;