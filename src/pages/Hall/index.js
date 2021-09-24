/* eslint-disable no-return-assign */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';

import LinkAside from '../../components/LinkAside';
import CartArea from '../../components/CartArea'
import ButtonDefault from '../../components/ButtonDefault';
import './hall.scss';
import Input from '../../components/Input';

import Snack from '../../components/Breakfast/Snack';
import Coffee from '../../components/Breakfast/Coffee';
import Juice from '../../components/Breakfast/Juice';
import Burgers from '../../components/All-day/Burgers';
import Drinks from '../../components/All-day/Drinks';
import Sides from '../../components/All-day/Sides';

import Popup from '../../components/Popup';
import PopupCancel from '../../components/PopupCancel';
import Header from '../../components/Header';

export default function Hall() {

	const [allProducts, setAllProducts] = useState([]);


	useEffect(() => {
		const apiURL = 'https://lab-api-bq.herokuapp.com';
		const apiProducts = `${apiURL}/products`;
		const token = localStorage.getItem('token');

		const getRequestOptions = {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		};

		fetch(apiProducts, getRequestOptions)
			.then((response) => response.json())
			.then((data) => {
				setAllProducts(data);
			});
	}, []);


	const [values, setValues] = useState({
		first: 'burgers',
		second: 'sides',
		third: 'drinks',
	})

	const [labels, setLabels] = useState({
		first: 'burgers',
		second: 'adicionais',
		third: 'bebidas',
	})

	const [activation1, setActivation1] = useState(true)
	const [activation2, setActivation2] = useState(false)
	const [activation3, setActivation3] = useState(false)

	const [productSelected, setProductSelected] = useState("")
	const chooseProduct = (e) => {
		setProductSelected({
			name: e.target.value,
			price: e.target.getAttribute('price'),
			quantity: 1,
			flavor: null,
			complement: null,


		})
	}

	const chooseBurger = (e) => {
		setProductSelected(prevProduct => ({
			...prevProduct,

			name: e.target.value,
			price: e.target.getAttribute('price'),
			quantity: 1,
			complement: (prevProduct.complement ? prevProduct.complement : null)

		}))
	}

	const chooseFlavor = (e) => {

		setProductSelected(prevProduct => ({
			...prevProduct,
			flavor: e.target.value,
		}))

	}

	const chooseComplement = (e) => {
		setProductSelected(prevProduct => ({
			...prevProduct,
			complement: e.target.value,
			priceComplement: e.target.getAttribute('price'),

		}))

	}

	const chooseDrink = (e) => {

		setProductSelected(prevProduct => ({
			...prevProduct,
			name: `${e.target.value} ${prevProduct.size ? prevProduct.size : ""}`,
			quantity: 1,

		}))
	}

	const chooseSizeDrink = (e) => {

		setProductSelected(prevProduct => ({
			...prevProduct,
			name: `${prevProduct.name ? `${prevProduct.name.split(" ")[0]} ${e.target.getAttribute('data-item')}` : ""}`,
			size: e.target.getAttribute('data-item'),
			price: e.target.getAttribute('price'),
			flavor: null,
			complement: null

		}))
	}


	const [products, setProducts] = useState(<Burgers chooseBurger={chooseBurger} chooseFlavor={chooseFlavor} chooseComplement={chooseComplement} />)

	const [breakfastClass, setBreakfastClass] = useState("")
	const [allDayClass, setAllDayClass] = useState("selected")

	const selectBreakfast = () => {
		setProductSelected("")
		setActivation1(true)
		setActivation2(false)
		setActivation3(false)
		setBreakfastClass("selected")
		setAllDayClass("")
		setValues({
			first: 'snacks',
			second: 'coffes',
			third: 'juices',
		})
		setLabels({
			first: 'lanches',
			second: 'cafés',
			third: 'sucos',
		})
		setProducts(<Snack onClick={chooseProduct} />)
	}

	const selectAllDay = () => {
		setProductSelected("")
		setActivation1(true)
		setActivation2(false)
		setActivation3(false)
		setAllDayClass("selected")
		setBreakfastClass("")
		setValues({
			first: 'burgers',
			second: 'sides',
			third: 'drinks',
		})
		setLabels({
			first: 'burgers',
			second: 'adicionais',
			third: 'bebidas',
		})
		setProducts(<Burgers chooseBurger={chooseBurger} chooseFlavor={chooseFlavor} chooseComplement={chooseComplement} />)
	}

	const changeProducts = (e) => {
		setProductSelected("")
		const click = e.target.innerText
		switch (click) {
			case "BURGERS":
				setActivation1(true)
				setActivation2(false)
				setActivation3(false)
				setProducts(<Burgers chooseBurger={chooseBurger} chooseFlavor={chooseFlavor} chooseComplement={chooseComplement} />)
				break;
			case "ADICIONAIS":
				setActivation1(false)
				setActivation2(true)
				setActivation3(false)
				setProducts(<Sides onClick={chooseProduct} />)

				break
			case "BEBIDAS":
				setActivation1(false)
				setActivation2(false)
				setActivation3(true)
				setProducts(<Drinks chooseDrink={chooseDrink} chooseSizeDrink={chooseSizeDrink} />)
				break
			case "LANCHES":
				setActivation1(true)
				setActivation2(false)
				setActivation3(false)
				setProducts(<Snack onClick={chooseProduct} />)
				break;
			case "CAFÉS":
				setActivation1(false)
				setActivation2(true)
				setActivation3(false)
				setProducts(<Coffee onClick={chooseProduct} />)
				break
			case "SUCOS":
				setActivation1(false)
				setActivation2(false)
				setActivation3(true)
				setProducts(<Juice onClick={chooseProduct} />)
				break

			default:
		}
	}

	const [showPopup, setShowPopup] = useState(false);
	const [showPopupCancel, setShowPopupCancel] = useState(false);
	const [popUpText, setPopUpText] = useState("")

	const [cartContent, setCartContent] = useState([])


	const addProduct = () => {

		if (productSelected.name !== undefined && productSelected.price !== undefined && productSelected.name !== "") {
			if (productSelected.flavor === undefined) {
				setPopUpText("Selecione um item antes de adicioná-lo!")
				setShowPopup(true);

			} else {
				const newArray = [...cartContent]
				const productInCart = newArray.find(product => product.name === productSelected.name && product.flavor === productSelected.flavor && product.complement === productSelected.complement)
				const index = newArray.indexOf(productInCart)

				if (index < 0) {
					newArray.push(productSelected)
					setCartContent(newArray)

				} else {
					productInCart.quantity += 1
					setCartContent(newArray)
				}
				// setComplementChecked(false)
			}

		} else {
			setPopUpText("Selecione um item antes de adicioná-lo!")
			setShowPopup(true);

		}
	}

	const addUnit = (e) => {
		const name = e.target.getAttribute("name")
		const flavor = e.target.getAttribute("flavor")
		const complement = e.target.getAttribute("complement")
		const newArray = [...cartContent]
		const productInCart = newArray.find(product => product.name === name && product.flavor === flavor && product.complement === complement)
		productInCart.quantity += 1
		setCartContent(newArray)
	}

	const removeUnit = (e) => {
		const name = e.target.getAttribute("name")
		const flavor = e.target.getAttribute("flavor")
		const complement = e.target.getAttribute("complement")
		const newArray = [...cartContent]
		const productInCart = newArray.find(product => product.name === name && product.flavor === flavor && product.complement === complement)
		productInCart.quantity -= 1
		const index = newArray.indexOf(productInCart)
		if (productInCart.quantity < 1) {
			newArray.splice(index, 1)
			setCartContent(newArray)
		} else {
			setCartContent(newArray)
		}

	}

	const cancelAndCloseOrder = () => {
		setCartContent([])
		setShowPopupCancel(false)
	}

	const [client, setClient] = useState('');
	const [table, setTable] = useState('');


	const onChangeClient = (e) => {
		const name = e.target.value
		setClient(name)

	};

	const[selectTable, setSelectTable] = useState("")

	const onChangeTable = (e) => {
		setTable(e.target.value)
		setSelectTable(e.target.value)
	}


	const sendOrder = () => {
		
		if (table === "" || client === "") {
			setPopUpText("Dados do cliente incompletos. Preencha antes de enviar o pedido!")
			setShowPopup(true)
			console.log(table)
			setSelectTable("")
			console.log(table)
		} else if (cartContent.length === 0) {
			setPopUpText("O Carrinho está vazio. Adicione os produtos antes de enviar o pedido!")
			setShowPopup(true)
			console.log(table)
			

		} else {
			const newArray = [...cartContent]
			const orderProducts = newArray.map((productCart) => {
				const productAPI = allProducts.find(productApi => productApi.name === productCart.name && productApi.flavor === productCart.flavor && productApi.complement === productCart.complement)
				return {
					id: productAPI.id,
					qtd: productCart.quantity
				}
			}
			)

			const order =
			{
				client,
				table,
				products: orderProducts

			}

			setCartContent([])
			setClient('')
			setSelectTable("")
			setTable('')
			setPopUpText('O pedido foi enviado com sucesso.')
			setSelectTable("")
			setShowPopup(true)
			setAllDayClass("selected")
			setBreakfastClass('')
			setProducts(<Burgers chooseBurger={chooseBurger} chooseFlavor={chooseFlavor} chooseComplement={chooseComplement} />)

			const apiURL = 'https://lab-api-bq.herokuapp.com';
			const apiOrders = `${apiURL}/orders`;
			const token = localStorage.getItem('token');

			const requestOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify(order),
			};


			fetch(apiOrders, requestOptions)
				.then((response) => response.json())
				.then((orderData) => {
					// eslint-disable-next-line eqeqeq
					if (orderData.code == '400') {
						throw new Error();
					} else {
						setCartContent([])
						setClient('')
						setSelectTable("")
						setTable('')
						setPopUpText('O pedido foi enviado com sucesso.')
						setSelectTable("")
						setShowPopup(true)
						setAllDayClass("selected")
						setBreakfastClass('')
						setProducts(<Burgers chooseBurger={chooseBurger} chooseFlavor={chooseFlavor} chooseComplement={chooseComplement} />)

					}

				})

				.catch(() => {
					setPopUpText('Ocorreu um erro no envio do pedido. Tente novamente.')
					setShowPopup(true)

				})

		}




	}

	const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9]


	return (
		<div className="pages-container">
			<Header />
			<nav>
				<ul className="menu-types">
					<li className={breakfastClass} onClick={selectBreakfast}>
						{' '}
						Breakfast{' '}
					</li>
					<li className={allDayClass} onClick={selectAllDay}>
						{' '}
						All Day{' '}
					</li>
				</ul>

				<div className="order-progress">
					<ButtonDefault className="btn-order-status btn-default">
						Em andamento
					</ButtonDefault>

					<ButtonDefault className="btn-order-status btn-default margin-left-1">
						Finalizados
					</ButtonDefault>
				</div>
			</nav>
			<main>
				<section className="order-filling">
					<div className="client-data margin-bottom-2">
						{/* <InputSelect onChange={onChangeTable}/> */}

						<select onChange={onChangeTable} value={selectTable}>
							<option value="" hidden >Mesa</option>
							{tables.map(tab =>
								<option key={tab} value={tab}>{tab}</option>)}
						</select>
						<Input
							className="input-hall"
							placeholder="Insira o nome do cliente"
							name="client"
							value={client}
							onChange={onChangeClient}
						/>
					</div>
					<div className="menu">
						<aside>
							<LinkAside
								className={activation1 ? 'active' : null}
								type={values.first}
								onClick={changeProducts}
							>
								{labels.first}
							</LinkAside>
							<LinkAside
								className={activation2 ? 'active' : null}
								type={values.second}
								onClick={changeProducts}
							>
								{labels.second}
							</LinkAside>
							<LinkAside
								className={activation3 ? 'active' : null}
								type={values.third}
								onClick={changeProducts}
							>
								{labels.third}
							</LinkAside>
						</aside>

						<section className="products">
							{products}
							<ButtonDefault
								className="btn-default btn-add-item uppercase"
								onClick={addProduct}
							>
								Adicionar item
							</ButtonDefault>
						</section>
					</div>
				</section>
				<CartArea content={cartContent} plus={addUnit} minus={removeUnit} openPopupCancel={() => setShowPopupCancel(true)} sendOrder={sendOrder} />

				{showPopup ? (
					<Popup
						popupText={popUpText}
						onClose={() => setShowPopup(false)}
					></Popup>
				) : null}

				{showPopupCancel ? (
					<PopupCancel
						popupText="Tem certeza que deseja cancelar esse pedido?"
						closePopup={() => setShowPopupCancel(false)}
						cancelOrder={() => cancelAndCloseOrder()}
					></PopupCancel>
				) : null}
			</main>
		</div>
	);
};


