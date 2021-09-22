/* eslint-disable react/prop-types */
import React from 'react';
import './breakfast.scss';

import ProductArea from '../ProductArea';
import americano from '../../img/cafe-americano.png';
import leite from '../../img/cafe-leite.png';

export default function Coffee({onClick}) {
	return (
        <div className="menu-wrap">
            <div className="products-row">
                <ProductArea
                    inputId="cafe-americano"
                    inputName="breakfast"
                    inputValue="Café americano"
                    productImg={americano}
                    productImgAlt="black coffee"
                    productName="Café Americano"
                    productPrice="R$ 5,00"
                    onClick={onClick}
                />      

                <ProductArea
                    inputId="cafe-leite"
                    inputName="breakfast"
                    inputValue="Café com leite"
                    productImg={leite}
                    productImgAlt="coffee with milk"
                    productName="Café com Leite"
                    productPrice="R$ 7,00"
                    onClick={onClick}
                />      
            </div>

           
        </div>
	);
}
