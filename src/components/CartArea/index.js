import React from 'react';
import './cartArea.scss';
import cart from '../../img/shopping-cart.png';
import ButtonDefault from '../ButtonDefault';

export default function CartArea() {
	return (
		<div className="cart-container">
			<header>
			<div className="title-card">
				<img
					src={cart}
					className="margin-left-1 margin-bottom-0"
					alt="shopping-cart"
				/>
				<h4 className="margin-left-1"> CARRINHO </h4>
				</div>
				<div className="subtitle-cart">
					<h5 className="margin-left-1">Item</h5>
					<h5 className="margin-left-7">Qtd.</h5>
					<h5 className="margin-right-4">Preço</h5>

				</div>
				
			</header>
			<div className="added-items-container">
				<p>Nenhum item adicionado.</p>
				<p>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus.

					Delegadis gente finis, bibendum egestas augue arcu ut est. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Sapien in monti palavris qui num significa nadis i pareci latim.

					Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Diuretics paradis num copo é motivis de denguis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.</p>
			</div>


			 <div className="total-area">
				
				<div className="total">
					<p className="margin-left-1">Total</p>
					<p className="margin-right-1">R$ 0,00</p>
				</div>
				<div className="cart-buttons-wrapper">
					<ButtonDefault
						className="btn-cart btn-cart-cancel btn-default margin-left-1"
					>
						CANCELAR
					</ButtonDefault>

					<ButtonDefault
						className="btn cart btn-cart-confirm btn-default margin-right-1"
					>
						CONFIRMAR
					</ButtonDefault>
				</div>
			</div>  
		</div>
	);
}
