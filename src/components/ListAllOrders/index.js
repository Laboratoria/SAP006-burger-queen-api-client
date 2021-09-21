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
	// console.log(allOrders);

	return (
		<section className="container-cards-order">
			{allOrders.map((order) => (
				<div className="card-template-order" key={order.id}>
					<div className="card-container-text-order">
						<div>
							<div className="card-table-info-order">
								<p className="title-card-order">Mesa</p>
								<p className="title-number-card-order">{order.table}</p>
							</div>

							<div>
								<p className="title-card-order">
									Nº do Pedido: <span className="text-card-order">{order.id}</span>
								</p>
								<p className="title-card-order">
									Cliente: <span className="text-card-order">{order.client_name}</span>
								</p>
								<p className="title-card-order">
									Horário do Pedido: <span className="text-card-order">{order.createdAt}</span>
								</p>
								<p className="title-card-order">
									Status: <span className="text-card-order">{order.status}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
