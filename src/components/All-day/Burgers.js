import React from 'react';
import './allday.scss';

import ProductArea from '../ProductArea';
import ButtonRadio from '../ButtonRadio';
import simples from '../../img/simples.png';
import duplo from '../../img/duplo.png';
import queijo from '../../img/queijo.png';
import ovo from '../../img/ovo.png';

export default function Burgers() {
	return (
		<div className="menu-wrap">
			<div className="products-row">
				<ProductArea
					inputId="simples"
					inputName="all-day"
					inputValue="Simples"
					// inputOnChange={}
					productImg={simples}
					productImgAlt="simple burger"
					productName="Simples"
					productPrice="R$ 10,00"
				/>

				<ProductArea
					inputId="duplo"
					inputName="all-day"
					inputValue="Duplo"
					// inputOnChange={}
					productImg={duplo}
					productImgAlt="double burger"
					productName="Duplo"
					productPrice="R$ 15,00"
				/>
			</div>

			<ButtonRadio className="radio-menu"
				className2=" switch-field switch-field-menu"
				// onChange={onChange}
				name="burger"
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
			/>

			<div className="products-row">
				<ProductArea
					inputId="queijo"
					inputName="complement"
					inputValue="Queijo"
					// inputOnChange={}
					productImg={queijo}
					productImgAlt="cheese"
					productName="Queijo"
					productPrice="R$ 1,00"
				/>

				<ProductArea
					inputId="ovo"
					inputName="complement"
					inputValue="Ovo"
					// inputOnChange={}
					productImg={ovo}
					productImgAlt="egg"
					productName="Ovo"
					productPrice="R$ 1,00"
				/>
			</div>
		</div>
	);
}
