/* eslint-disable react/prop-types */
import React from 'react';
import './allday.scss';

import ProductArea from '../ProductArea';
import ButtonRadio from '../ButtonRadio';
import simples from '../../img/simples.png';
import duplo from '../../img/duplo.png';
import queijo from '../../img/queijo.png';
import ovo from '../../img/ovo.png';

export default function Burgers({
chooseBurger, chooseFlavor, chooseComplement, complementChecked
}) {
	return (
		<div className="menu-wrap">
			<div className="products-row">
				<ProductArea
					inputId="simples"
					inputName="burger"
					inputValue="simples"
					productImg={simples}
					productImgAlt="simple burger"
					productName="Simples"
					productPrice="R$ 10,00"
					onClick={chooseBurger}
				/>

				<ProductArea
					inputId="duplo"
					inputName="burger"
					inputValue="duplo"
					productImg={duplo}
					productImgAlt="double burger"
					productName="Duplo"
					productPrice="R$ 15,00"
					onClick={chooseBurger}
				/>
			</div>

			<ButtonRadio className="radio-menu"
				className2=" switch-field switch-field-menu"
				name="flavor"
				firstInputValue="carne"
				firstInputId="carne"
				firstLabel="Carne"
				secondInputValue="frango"
				secondInputId="frango"
				secondLabel="Frango"
				thirdInputValue="vegetariano"
				thirdInputId="vegetariano"
				thirdLabel="Vegetariano"
				thirdClassName="third-btn"
				onChange={chooseFlavor}
			/>

			<div className="products-row">
				<ProductArea
					inputId="queijo"
					inputName="complement"
					inputValue="queijo"
					productImg={queijo}
					productImgAlt="cheese"
					productName="Queijo"
					productPrice="R$ 1,00"
					onClick={chooseComplement}
					inputChecked={complementChecked}
				/>

				<ProductArea
					inputId="ovo"
					inputName="complement"
					inputValue="ovo"
					productImg={ovo}
					productImgAlt="egg"
					productName="Ovo"
					productPrice="R$ 1,00"
					onClick={chooseComplement}
					inputChecked={complementChecked}
				/>
			</div>
		</div>
	);
}
