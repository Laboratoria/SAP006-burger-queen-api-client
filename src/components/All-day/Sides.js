/* eslint-disable react/prop-types */
import React from 'react';
import './allday.scss';

import ProductArea from '../ProductArea';
import fries from '../../img/fries.png';
import onions from '../../img/onion-rings.png';

export default function Sides({onClick}) {
	return (
		<div className="menu-wrap">
			<div className="products-row">
				<ProductArea
					inputId="batata-frita"
					inputName="all-day"
					inputValue="Batata frita"
					productImg={fries}
					productImgAlt="fries"
					productName="Batata Frita"
					productPrice="R$ 5,00"
					onClick={onClick}
				/>

				<ProductArea
					inputId="aneis-cebola"
					inputName="all-day"
					inputValue="Anéis de cebola"
					productImg={onions}
					productImgAlt="onion rings"
					productName="Anéis de cebola"
					productPrice="R$ 5,00"
					onClick={onClick}
				/>
			</div>
		</div>
	);
}
