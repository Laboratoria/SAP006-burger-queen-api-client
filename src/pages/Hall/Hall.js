import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Header from '../../components/Header/Header'
import Menu from "../../components/Menu/Menu";
import Cart from "../../components/Cart/Cart";

import './Hall.css'

const Hall = () => {
	const [products, setProducts] = useState([]);
	const [cartItem, setCartItem] = useState([]);

	const token = localStorage.getItem('userToken');


	useEffect(() => {
		fetch('https://lab-api-bq.herokuapp.com/products', {
			headers: {
				accept: 'application/json',
				Authorization: `${token}`,
			},
		})
			.then((response) => response.json())
			.then((json) => {				
				setProducts(json)
			})
	}, [token])

	const addProducts = (product) => {
		const foundProduct = cartItem.find((item) => item.id === product.id)
		if (foundProduct) {
			setCartItem(cartItem.map((item) =>
				item.id === product.id ? { ...foundProduct, qtd: foundProduct.qtd + 1} : item))
		} else {
			setCartItem([...cartItem, { ...product, qtd: 1 }])
		}
	}
	

	return (
		<>
			<Header className='nav-header' />

			<div className='hall-container'>
				<div className='menu'>
					<Menu products={products} addProducts={addProducts} />
				</div>

				<div className='cart-container'>
					<Cart cartItem={cartItem} />
				</div>
			</div>
		</>
	)
}

export default Hall;
