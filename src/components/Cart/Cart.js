import React from 'react';
import Input from '../Input/Input'
import Button from '../Button/Button';

import './Cart.css'

function Cart({ cartItem }) {
	const totalPrice = cartItem.reduce((acumulador, item) => acumulador + item.price * item.qtd, 0)
	console.log(cartItem)

	return (
		<div className='container-cart'>

			<div className='data-clients'>
				<Input type='text'
					placeholder='Nome'
					className='data-clients-input'
					name='email'>Cliente</Input>
				<Input type='text'
					placeholder='Mesa'
					className='data-clients-input'
					name='email'>Mesa</Input>
			</div>

		
			<ul className='list'>
				<li>Nome</li>
				<li>Quantidade</li>
				<li>Valor</li>
			</ul>


			{cartItem.map((item) => {
				return (
					<div className='order-list'>
						<p className='each-item-cart' key={item.id}>
							Nome: {item.name}
							Qtd: {item.qtd}
							Preço: R$ {(item.price * item.qtd).toFixed(2)}</p>
					</div>
				)
			})}

			<div className='order-total'>
				<div className='total-price'>
					<p>Total:</p>
					<p>R$ {(totalPrice).toFixed(2)}</p>
				</div>
				<div>
					<Button
						buttonText='Enviar pedido'
						className='button-menu' />
				</div>
			</div>

		</div>
	);
}

export default Cart;