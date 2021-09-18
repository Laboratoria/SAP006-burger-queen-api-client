/* eslint-disable react/prop-types */
import React from 'react';
import './breakfast.scss';

import ProductArea from '../ProductArea';
import suco from '../../img/juice.png';


export default function Juice({onClick}) {
	return (
        <div className="menu-wrap">
            <div className="products-row">
                <ProductArea
                    inputId="breakfast"
                    inputName="breakfast"
                    inputValue="Suco de fruta natural"
                    productImg={suco}
                    productImgAlt="juice"
                    productName="Suco de fruta natural"
                    productPrice="R$ 7,00"
                    onClick={onClick}
                />      
                
            </div>

            
        </div>
	);
}
