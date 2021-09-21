import React from 'react';
import ListAllOrders from '../../components/ListAllOrders';
import Header from '../../components/Header'

export default function Kitchen() {
	return (
		<div className="pages-container">
			<Header />
			<ListAllOrders />
		</div>
	);
}
