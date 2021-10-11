import React, { useState } from 'react';
import Input from '../Input/Input'
import Button from '../Button/Button';


import './Cart.css'

function Cart({ cartItem, removeProducts, setCartItem }) {
	const token = localStorage.getItem('userToken')

	const [valuesClient, setValuesClient] = useState({
		client: '',
		table: '',
		products: []
	})


	const ButtonSendOrder = () => {
		if (valuesClient.client !== "") {
			const products = cartItem.map((item) => ({ id: item.id, qtd: item.qtd }));
			valuesClient.products = products;
		}

		fetch('https://lab-api-bq.herokuapp.com/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json',
				Authorization: `${token}`
			},
			body: JSON.stringify({
				client: valuesClient.client,
				table: valuesClient.table,
				products: cartItem.map((item) => (
					{
						id: Number(item.id),
						qtd: Number(item.qtd)
					}
				))
			}),
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				if (json.id !== undefined) {
					setValuesClient({ client: '', table: '' })
					setCartItem([])
				}
			})
	}

	console.log(cartItem);

	const totalPrice = cartItem.reduce((acumulador, item) => acumulador + item.price * item.qtd, 0)


	const onChangeValues = (event) => {
		setValuesClient({
			...valuesClient,
			[event.target.name]: event.target.value
		})
	}

	return (
		<div className='container-cart'>

			<div className='data-clients'>
				<Input type='text'
					placeholder='Nome'
					className='data-clients-input'
					value={valuesClient.client}
					name='client'
					onChange={onChangeValues}>Cliente</Input>
				<Input type='text'
					placeholder='Mesa'
					value={valuesClient.table}
					className='data-clients-input'
					name='table'
					onChange={onChangeValues}>Mesa</Input>
			</div>

			<table>
				<thead className='table-head'>
					<tr>
						<th>Nome</th>
						<th>Qntd.</th>
						<th>Valor</th>
						<th></th>	
					</tr>
				</thead>
				<tbody className='table-body' >
					{cartItem.map((item) => {
						return (

							<tr key={item.id}>
								<td className='name-item '>
									<p>{item.name}</p>
									<p className='comp-item'>Sabor:{item.flavor}</p>
									<p className='comp-item'>Adicional:{item.complement}</p>
								</td>
								<td className='qtd-item'>{item.qtd}</td>
								<td className='price-item'>R$ {(item.price * item.qtd).toFixed(2)}</td>
								<td className='btn-remove'>
									<button  onClick={() => removeProducts(item)}><i class="far fa-trash-alt"></i></button>
								</td>
							</tr>

						)
					})}
				</tbody>
			</table>
			<div className='order-total'>
				<div className='total-price'>
					<p>Total:</p>
					<p>R$ {(totalPrice).toFixed(2)}</p>
				</div>
				<div>
					<Button
						buttonText='Enviar pedido'
						className='btn-send-order'
						buttonOnClick={ButtonSendOrder} />
				</div>
			</div>

		</div>
	);
}

export default Cart;
