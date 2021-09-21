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
	console.log(allOrders);

	return (
		<section className="container-cards">
			{allOrders.map((order) => (
				<div className="card-template" key={order.id}>
					<div className="card-container-text">
						<div>
							<div className="card-table-info">
								<p className="title-card">Mesa</p>
								<p className="title-number-card">{order.table}</p>
							</div>

							<div>
								<p className="title-card">
									Nº do Pedido: <span className="text-card">{order.id}</span>
								</p>
								<p className="title-card">
									Cliente:{' '}
									<span className="text-card">{order.client_name}</span>
								</p>
								<p className="title-card">
									Horário do Pedido:{' '}
									<span className="text-card">{order.createdAt}</span>
								</p>
								<p className="title-card">
									Status: <span className="text-card">{order.status}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
