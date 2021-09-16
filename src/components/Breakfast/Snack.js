import React from 'react';
import './breakfast.scss';

import ProductArea from '../ProductArea';
import misto from '../../img/misto-quente.png';
import ButtonDefault from '../ButtonDefault';

export default function Snack() {
	return (
        <div className="menu-wrap">
            <div className="products-row">
                <ProductArea
                    inputId="breakfast"
                    inputName="breakfast"
                    inputValue="Misto quente"
                    // inputOnChange={}
                    productImg={misto}
                    productImgAlt="ham sandwich"
                    productName="Misto quente"
                    productPrice="R$ 10,00"
                />      
            </div>

            <ButtonDefault className="btn-default btn-add-item"> 
                ADICIONAR ITEM 
            </ButtonDefault>
        </div>
	);
}
