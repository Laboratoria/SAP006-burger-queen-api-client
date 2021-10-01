import React, {useState} from 'react';
import Input from '../Input/Input'
import Button from '../Button/Button';


import './Cart.css'

function Cart({ cartItem, removeProducts }) {


	const token = localStorage.getItem('userToken')
	

	const [valuesClient, setValuesClient] = useState({
		client: '',
		table: '',
	})
	console.log(valuesClient);

	const ButtonSendOrder = () => {
		
		fetch('https://lab-api-bq.herokuapp.com/orders/', {
				method: 'POST',
				headers: {
						accept: 'application/json',
						Authorization: `${token}`,
						'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
						client: 'Fulana',
						table: 02,
						products: [
								{
								 id: '',
								 qtd: 1
								}

						]
				})
		})
		.then((response) => response.json())
		.then((json) => {
				console.log(json);
		})
}



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
				<tr className='order-list'>
					<th>Nome</th>
					<th>Qntd.</th>
					<th>Valor</th>
				</tr>
			
				{cartItem.map((item, index) => {
					return (
								<tr className='order-list' key={item.id}>
					      <td className='name-item'>{item.name}</td>
								<td className='qtd-item'>{item.qtd}</td>
								<td className='price-item'>{(item.price * item.qtd).toFixed(2)}</td>
								<td>
								<button className='btn-remove' onClick={() => removeProducts(item)}>-</button>
								</td>
				        </tr>
					)
				})}
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
						buttonOnClick={() => ButtonSendOrder()}/>
				</div>
			</div>

		</div>
	);
}

export default Cart;

<table>
	<tr>
		<th>Company</th>
		<th>Contact</th>
		<th>Country</th>
	</tr>
	<tr>
		<td>Alfreds Futterkiste</td>
		<td>Maria Anders</td>
		<td>Germany</td>
	</tr>
	<tr>
		<td>Centro comercial Moctezuma</td>
		<td>Francisco Chang</td>
		<td>Mexico</td>
	</tr>
</table>