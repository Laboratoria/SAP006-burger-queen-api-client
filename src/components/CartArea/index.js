import React from 'react';
import './cartArea.scss';
import cart from '../../img/shopping-cart.png';
import ButtonDefault from '../ButtonDefault';

export default function CartArea() {
	return (
		<div className="cart-container">
			<div>
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
			<hr width="90%"></hr>
			<p className="margin-left-1">Nenhum item adicionado.</p>

			<div className="total-area">
				<hr width="100%"></hr>
				<div>
					<p className="margin-left-1">Total</p>
					<p className="margin-right-1">R$ 0,00</p>
				</div>
				<div>
					<ButtonDefault 
                        className="btn-cart-cancel btn-default margin-left-1"
                    >
                        CANCELAR
                    </ButtonDefault>

					<ButtonDefault 
                        className="btn-cart-confirm btn-default margin-right-1"
                    >
                        CONFIRMAR
                    </ButtonDefault>
				</div>
			</div>
		</div>
	);
}
