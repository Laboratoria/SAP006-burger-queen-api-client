import React from 'react';
import './breakfast.scss';

import ProductArea from '../ProductArea';
import americano from '../../img/cafe-americano.png';
import leite from '../../img/cafe-leite.png';
import ButtonDefault from '../ButtonDefault';

export default function Coffee() {
	return (
        <div className="menu-wrap">
            <div className="products-row">
                <ProductArea
                    inputId="cafe-americano"
                    inputName="breakfast"
                    inputValue="Café Americano"
                    // inputOnChange={}
                    productImg={americano}
                    productImgAlt="black coffee"
                    productName="Café Americano"
                    productPrice="R$ 5,00"
                />      

                <ProductArea
                    inputId="cafe-leite"
                    inputName="breakfast"
                    inputValue="Café com Leite"
                    // inputOnChange={}
                    productImg={leite}
                    productImgAlt="coffee with milk"
                    productName="Café com Leite"
                    productPrice="R$ 7,00"
                />      
            </div>

            <ButtonDefault className="btn-default btn-add-item"> 
                ADICIONAR ITEM 
            </ButtonDefault>
        </div>
	);
}
