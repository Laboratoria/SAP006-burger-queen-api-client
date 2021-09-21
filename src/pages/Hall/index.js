/* eslint-disable no-return-assign */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';

import ButtonLogout from '../../components/ButtonLogout';
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
import InputSelect from '../../components/InputSelect';

import Popup from '../../components/Popup';
import DateTime from '../../components/DateTime'

export default function Hall() {
	
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

			name: `Hambúrguer ${e.target.value}`,
			price: e.target.getAttribute('price'),
			quantity: 1,
			
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
	
	const chooseDrink= (e) => {

		setProductSelected(prevProduct => ({
			...prevProduct,
			name: `${e.target.value} ${prevProduct.size?prevProduct.size:""}`,
			quantity: 1,
			
		}))
	}
	
	const chooseSizeDrink= (e) => {
		
		setProductSelected(prevProduct => ({
			...prevProduct,
			name:`${prevProduct.name?`${prevProduct.name.split(" ")[0]} ${e.target.getAttribute('data-item')}`:""}`,
			size:e.target.getAttribute('data-item'),
			price: e.target.getAttribute('price'),
			flavor:null,
			complement:null
			
		}))
	}
	
	const [complementChecked,setComplementChecked] = useState()
	
	const [products, setProducts] = useState(<Burgers chooseBurger={chooseBurger} chooseFlavor={chooseFlavor} chooseComplement={chooseComplement} complementChecked={complementChecked}/>)

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
		setProducts(<Burgers onClick={chooseProduct} />)
	}

	const changeProducts = (e) => {
		setProductSelected("")
		const click = e.target.innerText
		switch (click) {
			case "BURGERS":
				setActivation1(true)
				setActivation2(false)
				setActivation3(false)
				setProducts(<Burgers chooseBurger={chooseBurger} chooseFlavor={chooseFlavor} chooseComplement={chooseComplement} complementChecked={complementChecked} />)
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
				setProducts(<Drinks chooseDrink={chooseDrink} chooseSizeDrink={chooseSizeDrink}/>)
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

	const [cartContent, setCartContent] = useState([])


	const addProduct = () => {
		
		if (productSelected.name !== undefined && productSelected.price !== undefined && productSelected.name !== "") {
			if (productSelected.flavor === undefined) {
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
			setShowPopup(true);

		}
	}

	const addUnit = (e) => {
		const name = e.target.getAttribute("name")
		const newArray = [...cartContent]
		const productInCart = newArray.find(product => product.name === name)
		productInCart.quantity += 1
		setCartContent(newArray)
	}

	const removeUnit = (e) => {
		const name = e.target.getAttribute("name")
		const newArray = [...cartContent]
		const productInCart = newArray.find(product => product.name === name)
		productInCart.quantity -= 1
		const index = newArray.indexOf(productInCart)
		if (productInCart.quantity < 1) {
			newArray.splice(index, 1)
			setCartContent(newArray)
		} else {
			setCartContent(newArray)
		}

	}

	const cancelOrder = () =>{
		setCartContent([])
	}

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
	console.log(allProducts);

	return (
		<div className="pages-container">
			<header className="title-area">
				<div>
					<h1 className="uppercase">Divino Burger</h1>
					<DateTime/>
				</div>

				<ButtonLogout />
			</header>

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
						<InputSelect />
						<Input
							className="input-hall"
							placeholder="Insira o nome do cliente"
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
				<CartArea content={cartContent} plus={addUnit} minus={removeUnit} cancelOrder={cancelOrder} />

				{showPopup ? (
					<Popup
						popupText="Selecione um item antes de adicioná-lo!"
						onClose={() => setShowPopup(false)}
					></Popup>
				) : null}
			</main>
		</div>
	);
};


