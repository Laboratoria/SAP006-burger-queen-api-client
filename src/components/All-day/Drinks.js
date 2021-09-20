import React from 'react';
import './allday.scss';

import ProductArea from '../ProductArea';
import ButtonRadio from '../ButtonRadio';
import water from '../../img/water.png';
import soda from '../../img/soda.png';

export default function Drinks() {
	return (
		<div className="menu-wrap">
			<div className="products-row">
				<ProductArea
					inputId="agua"
					inputName="all-day"
					inputValue="Água"
					// inputOnChange={}
					productImg={water}
					productImgAlt="water"
					productName="Água"
				/>

				<ProductArea
					inputId="refrigerante"
					inputName="all-day"
					inputValue="Refrigerante"
					// inputOnChange={}
					productImg={soda}
					productImgAlt="soda"
					productName="Refrigerante"
				/>
			</div>

			<ButtonRadio className="radio-menu radio-drinks"
				className2=" switch-field switch-field-menu"
				// onChange={onChange}
				name="drinks"
				firstInputValue="water"
				firstInputId="water"
				firstLabel="500ml"
				firstPrice="R$ 5,00"
				secondInputValue="soda"
				secondInputId="soda"
				secondLabel="700ml"
				secondPrice="R$ 7,00"
				secondClassName="second-btn"
				thirdClassName="hidden"
			/>
		</div>
	);
}
