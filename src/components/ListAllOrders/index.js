/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { role } from '../../utils/auth';
import ButtonDefault from '../ButtonDefault';
import Popup from '../Popup';

import './listAllOrders.scss';

export default function ListAllOrders({session}) {
	const [allOrders, setAllOrders] = useState([]);
	const [showPopup, setShowPopup] = useState(false);
	const [popUpText, setPopUpText] = useState("")

	const apiURL = 'https://lab-api-bq.herokuapp.com';
	const apiOrders = `${apiURL}/orders/`;
	const token = localStorage.getItem('token');

	useEffect(() => {
		const getRequestOptions = {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		};

		fetch(apiOrders, getRequestOptions)
			.then((response) => response.json())
			.then((data) => {
				setAllOrders(data);
				
			});
	}, [apiOrders, token]);

	const ordersFilteredByStatus = () =>{
		const arrayOrders = [...allOrders]
		const ordersFiltered = arrayOrders.filter(order => order.status === session)
		return ordersFiltered
	}

	ordersFilteredByStatus()

	const orderStatus = (status) => {
		switch (status) {
			case "pending":
				return "Em espera"

			case "loading":
				return "Iniciado"


			case "done":
				return "Pronto"


			case "delivered":
				return "Entregue"

			default:
				return "Indeterminado"
		}
	}

	const buttonText = (status) => {
		switch (status) {
			case "pending":
				return "Atualizar pedido - Iniciado "

			case "loading":
				return "Atualizar pedido - Pronto"


			case "done":
				return "Atualizar pedido - Entregue"


			case "delivered":
				return ""

			default:
				return ""
		}
	}

	const putRequestOptions = (status) => {
		const options = {
			method: 'PUT',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true,
				'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
			},
			body: JSON.stringify({
				status,
			}),
		};

		return options;
	};

	const updateOrderStatus = (index, id, status) =>
		fetch(`${apiOrders}${id}`, putRequestOptions(status))
			.then((response) => response.json())
			.then(() => {
				const pendingOrdersList = [...allOrders];
				pendingOrdersList[index].status = status;
				setAllOrders(pendingOrdersList);
			});

	const statusOnClick = (index, id, status) => {
		switch (role()) {
			case "kitchen":
				switch (status) {
					case "pending":
						updateOrderStatus(index, id, 'loading', allOrders, setAllOrders)
						break

					case "loading":
						updateOrderStatus(index, id, 'done', allOrders, setAllOrders)
						break

					default:
						setPopUpText("Usuário não autorizado a alterar este status.")
						setShowPopup(true)
				}
				break
			case "hall":
				switch (status) {
					case "done":
						updateOrderStatus(index, id, 'delivered', allOrders, setAllOrders)

						break
					default:
						setPopUpText("Usuário não autorizado a alterar este status.")
						setShowPopup(true)
				}
				break
			default:
				setPopUpText("A operação falhou.")
				setShowPopup(true)
		}
	}


	return (
		<section className="cards-orders-container">
			{session
				? ordersFilteredByStatus().map((order, index) => (
						<div className="card-order-template" key={order.id}>
							<div className="card-order-info">
								<div className="card-order-table">
									<p className="uppercase">Mesa {order.table}</p>
									<span className={`order-status status-${order.status}`}>
										{orderStatus(order.status)}
									</span>
								</div>

								<ButtonDefault
									className={`btn-default btn-${order.status} btn-status`}
									onClick={() => statusOnClick(index, order.id, order.status)}
								>
									{buttonText(order.status)}
								</ButtonDefault>

								<div className="order-data">
									<p>
										Nº do Pedido: <span>{order.id}</span>
									</p>
									<p>
										Cliente: <span>{order.client_name}</span>
									</p>
									<p>
										Data e Hora:{' '}
										<span>{`${new Date(order.createdAt).toLocaleDateString(
											'pt-br'
										)} - ${new Date(order.createdAt).getHours()}:${new Date(
											order.createdAt
										).getMinutes()}h`}</span>
									</p>

									<p>
										Tempo de preparação:{' '}
										<span>
											{Math.floor(
												(Math.abs(new Date(order.processedAt)) -
													new Date(order.createdAt)) /
													1000 /
													60
											) > 0
												? `${Math.floor(
														(Math.abs(new Date(order.processedAt)) -
															new Date(order.createdAt)) /
															1000 /
															60
												  )}min`
												: '0min'}
										</span>
									</p>
								</div>
								<p className="products-title uppercase">Produtos</p>

								{order.Products.map((products) => (
									<div className="order-products" key={products.id}>
										<p>
											Item: <span>{products.name}</span>
										</p>
										<p>
											Qtd: <span>{products.qtd}</span>
										</p>
										<p>
											{products.flavor !== null ? 'Sabor: ' : ''}
											<span>
												{products.flavor !== null ? products.flavor : ''}
											</span>
										</p>
										<p>
											{products.complement !== null ? 'Complemento: ' : ''}
											<span>
												{products.complement !== null
													? products.complement
													: ''}
											</span>
										</p>
									</div>
								))}
							</div>
						</div>
				  ))
				: allOrders.map((order, index) => (
						<div className="card-order-template" key={order.id}>
							<div className="card-order-info">
								<div className="card-order-table">
									<p className="uppercase">Mesa {order.table}</p>
									<span className={`order-status status-${order.status}`}>
										{orderStatus(order.status)}
									</span>
								</div>

								<ButtonDefault
									className={`btn-default btn-${order.status} btn-status`}
									onClick={() => statusOnClick(index, order.id, order.status)}
								>
									{buttonText(order.status)}
								</ButtonDefault>

								<div className="order-data">
									<p>
										Nº do Pedido: <span>{order.id}</span>
									</p>
									<p>
										Cliente: <span>{order.client_name}</span>
									</p>
									<p>
										Data e Hora:{' '}
										<span>{`${new Date(order.createdAt).toLocaleDateString(
											'pt-br', 
										)} - ${new Date(order.createdAt).getHours()}:${new Date(
											order.createdAt
										).getMinutes()}h`}</span>
									</p>
								</div>
								<p className="products-title uppercase">Produtos</p>

								{order.Products.map((products) => (
									<div className="order-products" key={products.id}>
										<p>
											Item: <span>{products.name}</span>
										</p>
										<p>
											Qtd: <span>{products.qtd}</span>
										</p>
										<p>
											{products.flavor !== null ? 'Sabor: ' : ''}
											<span>
												{products.flavor !== null ? products.flavor : ''}
											</span>
										</p>
										<p>
											{products.complement !== null ? 'Complemento: ' : ''}
											<span>
												{products.complement !== null
													? products.complement
													: ''}
											</span>
										</p>
									</div>
								))}
							</div>
						</div>
				  ))}

			{showPopup ? (
				<Popup
					popupText={popUpText}
					onClose={() => setShowPopup(false)}
				></Popup>
			) : null}
		</section>
	);
}