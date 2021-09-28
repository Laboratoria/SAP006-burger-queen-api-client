/* eslint-disable no-return-assign */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './hall.scss';

import LinkAside from '../../components/LinkAside';
import CartArea from '../../components/CartArea'
import ButtonDefault from '../../components/ButtonDefault';
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

import cart from '../../img/shopping-cart.png'
import close from '../../img/close.png'


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
		let complementValue
		if (e.target.value === "") {
			complementValue = null
		} else {
			complementValue = e.target.value
		}
		setProductSelected(prevProduct => ({
			...prevProduct,
			complement: complementValue,
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

	const switchMenu = (act1, act2, act3, component) => {
		setActivation1(act1)
		setActivation2(act2)
		setActivation3(act3)
		setProducts(component)
	}

	const changeProducts = (e) => {
		setProductSelected("")
		const click = e.target.innerText
		switch (click) {
			case "BURGERS":
				switchMenu(true, false, false, <Burgers chooseBurger={chooseBurger} chooseFlavor={chooseFlavor} chooseComplement={chooseComplement} />)
				break;
			case "ADICIONAIS":
				switchMenu(false, true, false, <Sides onClick={chooseProduct} />)
				break
			case "BEBIDAS":
				switchMenu(false, false, true, <Drinks chooseDrink={chooseDrink} chooseSizeDrink={chooseSizeDrink} />)
				break
			case "LANCHES":
				switchMenu(true, false, false, <Snack onClick={chooseProduct} />)
				break;
			case "CAFÉS":
				switchMenu(false, true, false, <Coffee onClick={chooseProduct} />)
				break
			case "SUCOS":
				switchMenu(false, false, true, <Juice onClick={chooseProduct} />)
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

	const [selectTable, setSelectTable] = useState("")

	const onChangeTable = (e) => {
		setTable(e.target.value)
		setSelectTable(e.target.value)
	}

	const sendOrder = () => {
		if (table === "" || client === "") {
			setPopUpText("Dados do cliente incompletos. Preencha antes de enviar o pedido!")
			setShowPopup(true)
			setSelectTable("")

		} else if (cartContent.length === 0) {
			setPopUpText("O Carrinho está vazio. Adicione os produtos antes de enviar o pedido!")
			setShowPopup(true)

		} else {
			const newArray = [...cartContent]
			const orderProducts = newArray.map((productCart) => {
				const productAPI = allProducts.find(productApi => productApi.name === productCart.name && productApi.flavor === productCart.flavor && productApi.complement === productCart.complement)
				return {
					id: productAPI.id,
					qtd: productCart.quantity
				}
			})

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

	const history = useHistory();
	const seeOrders = () => {
		history.push('/salao-pedidos');
	}

	const [visibilityCart, setVisibilityCart] = useState(false)

	const closeCart = () =>{
		setVisibilityCart(false)
	}

	return (
		<div className="pages-container">
			<Header classBtn="btn-hidden" />
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
					<ButtonDefault className="btn-update-orders btn-default margin-left-1" onClick={seeOrders}>
						🔔 Pedidos
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
						<button className="cart-portrait" onClick={() => setVisibilityCart(true)}>
							<img src={cart} alt="carrinho" />
						</button>
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
								className={`link3 ${activation3 ? 'active' : null}`}
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
				{visibilityCart ? (<div className="cart-wrapper">
					<button onClick={closeCart} className="close-cart">
						<img src={close} alt="Fechar carrinho" />
					</button><CartArea className="cart-area-portrait" content={cartContent} plus={addUnit} minus={removeUnit} openPopupCancel={() => setShowPopupCancel(true)} sendOrder={sendOrder} />
					</div>) : ""}

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


