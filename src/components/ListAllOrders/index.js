/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './listAllOrders.scss';

export default function ListAllOrders() {
	const [allOrders, setAllOrders] = useState([]);

	useEffect(() => {
		const apiURL = 'https://lab-api-bq.herokuapp.com';
		const apiOrders = `${apiURL}/orders`;
		const token = localStorage.getItem('token');

		const getRequestOptions = {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		};

		fetch(apiOrders, getRequestOptions)
			.then((response) => response.json())
			.then((data) => {
				const sortById = data.sort((itemA, itemB) => itemB.id - itemA.id);
				setAllOrders(sortById);
			});
	}, []);	
	console.log(allOrders)

	return (
		<section className="cards-orders-container">
			{allOrders.map((order) => (
				<div className="card-order-template" key={order.id}>
					<div className="card-order-info">
						<div className="card-order-table">
							<p className="uppercase">Mesa</p>
							<p>{order.table}</p>
						</div>

						<div>
							<p>
								Nº do Pedido: <span>{order.id}</span>
							</p>
							<p>
								Cliente: <span>{order.client_name}</span>
							</p>
							<p>
								Horário do Pedido: <span>{order.createdAt}</span>
							</p>
							<p>
								Status: <span>{order.status}</span>
							</p>
						</div>

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
										{products.complement !== null ? products.complement : ''}
									</span>
								</p>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
}