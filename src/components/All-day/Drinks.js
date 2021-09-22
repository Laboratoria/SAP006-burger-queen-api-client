/* eslint-disable react/prop-types */
import React from 'react';
import './allday.scss';

import ProductArea from '../ProductArea';
import ButtonRadio from '../ButtonRadio';
import water from '../../img/water.png';
import soda from '../../img/soda.png';

export default function Drinks({ chooseDrink, chooseSizeDrink }) {
	return (
		<div className="menu-wrap">
			<div className="products-row">
				<ProductArea
					inputId="agua"
					inputName="all-day"
					inputValue="Água"
					productImg={water}
					productImgAlt="water"
					productName="Água"
					onClick={chooseDrink}
				/>

				<ProductArea
					inputId="refrigerante"
					inputName="all-day"
					inputValue="Refrigerante"
					productImg={soda}
					productImgAlt="soda"
					productName="Refrigerante"
					onClick={chooseDrink}
				/>
			</div>

			<ButtonRadio className="radio-menu radio-drinks"
				className2=" switch-field switch-field-menu"
				name="drinks"
				firstInputValue="water"
				firstInputId="water"
				firstLabel="500mL"
				firstPrice="R$ 5,00"
				secondInputValue="soda"
				secondInputId="soda"
				secondLabel="750mL"
				secondPrice="R$ 7,00"
				secondClassName="second-btn"
				thirdClassName="hidden"
				onChange={chooseSizeDrink}
			/>
		</div>
	);
}
