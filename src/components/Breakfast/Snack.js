/* eslint-disable react/prop-types */
import React from 'react';
import './breakfast.scss';

import ProductArea from '../ProductArea';
import misto from '../../img/misto-quente.png';

export default function Snack({onClick}) {
	return (
        <div className="menu-wrap">
            <div className="products-row">
                <ProductArea
                    inputId="breakfast"
                    inputName="breakfast"
                    inputValue="Misto quente"
                    productImg={misto}
                    productImgAlt="ham sandwich"
                    productName="Misto quente"
                    productPrice="R$ 10,00"
                    onClick={onClick}
                />      
            </div>

        </div>
	);
}
