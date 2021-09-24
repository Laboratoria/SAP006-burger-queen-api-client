import React from 'react';
import ListAllOrders from '../../components/ListAllOrders';
import Header from '../../components/Header'
import ButtonDefault from '../../components/ButtonDefault';

import './kitchen.scss';


export default function Kitchen() {

	const handleUpdateOrders = () => {
		window.location.reload()
	}

	return (
		<div className="pages-container">
			<Header />

			<ButtonDefault className="btn-update-orders" onClick={() => { handleUpdateOrders() }}>
				🔔 Atualizar pedidos
			</ButtonDefault>

			<ListAllOrders />
		</div>
	);
}
