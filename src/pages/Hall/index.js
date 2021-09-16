import React, { useState, useEffect, useRef } from 'react';

import ButtonLogout from '../../components/ButtonLogout';
import LinkAside from '../../components/LinkAside';
import CartArea from '../../components/CartArea'
import ButtonDefault from '../../components/ButtonDefault';
import './hall.scss';
import Input from '../../components/Input';

import ProductArea from '../../components/ProductArea'
import burger from '../../img/burger-example.png';
import ButtonRadio from '../../components/ButtonRadio';


export default function Hall() {
	const [breakfastClass, setBreakfastClass] = useState("")
	const [allDayClass, setAllDayClass] = useState("selected")

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

	// const [activeBurgers, setActiveBurgers] = useState(true)
	// const [activeSides, setActiveSides] = useState(false)
	// const [activeDrinks, setActiveDrinks] = useState(false)
	// const [activeSandwiches, setActiveSandwiches] = useState(true)
	// const [activeCoffes, setActiveCoffes] = useState(false)
	// const [activeJuices, setActiveJuices] = useState(false)

	const [activation1, setActivation1] = useState(true)
	const [activation2, setActivation2] = useState(false)
	const [activation3, setActivation3] = useState(false)

	const[mensagem, setMensagem] = useState("Burgers")



	const selectBreakfast = () => {
		setActivation1(true)
		setActivation2(false)
		setActivation3(false)
		setBreakfastClass("selected")
		setAllDayClass("")
		setValues({
			first: 'sandwiches',
			second: 'coffes',
			third: 'juices',
		})
		setLabels({
			first: 'lanches',
			second: 'cafés',
			third: 'sucos',
		})
	}

	const selectAllDay = () => {
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
	}

	const changeProducts = (e) => {
		const click = e.target.innerText
		switch (click) {
			case "BURGERS":
				setActivation1(true)
				setActivation2(false)
				setActivation3(false)
				break;
			case "ADICIONAIS":
				setActivation1(false)
				setActivation2(true)
				setActivation3(false)
				setMensagem("Produtos Adicionais")
				break
			case "BEBIDAS":
				setActivation1(false)
				setActivation2(false)
				setActivation3(true)
				break
			case "LANCHES":
				setActivation1(true)
				setActivation2(false)
				setActivation3(false)
				break;
			case "CAFÉS":
				setActivation1(false)
				setActivation2(true)
				setActivation3(false)
				break
			case "SUCOS":
				setActivation1(false)
				setActivation2(false)
				setActivation3(true)
				break

			default:
		}


	}


	return (
		<div className="pages-container">
			<header className="title-area">
				<div>
					<h1>DIVINO BURGER</h1>
					<p>horário atual</p>
				</div>

				<ButtonLogout />
			</header>

			<nav>
				<ul className="menu-types">
					<li className={breakfastClass} onClick={selectBreakfast}> Breakfast </li>
					<li className={allDayClass} onClick={selectAllDay}> All Day </li>
				</ul>


				<div className="order-progress">
					<ButtonDefault
						className="btn-order-status btn-default"
					>
						Em andamento
					</ButtonDefault>

					<ButtonDefault
						className="btn-order-status btn-default margin-left-1"
					>
						Finalizados
					</ButtonDefault>
				</div>
			</nav>
			<main>

				<section className="order-filling">
					<div className="client-data margin-bottom-2">
						<Input className="input-hall" placeholder="Insira o nome do cliente" />
					</div>
					<div className="menu">
						<aside>
							<LinkAside className={activation1 ? "active" : null} type={values.first} onClick={changeProducts}>{labels.first}</LinkAside>
							<LinkAside className={activation2 ? "active" : null} type={values.second} onClick={changeProducts}>{labels.second}</LinkAside>
							<LinkAside className={activation3 ? "active" : null} type={values.third} onClick={changeProducts}>{labels.third}</LinkAside>
						</aside>

						<section className="products">
							<p>{mensagem}</p>
							<div className="products-row">
								<ProductArea
									inputId='simples'
									inputName='burger-options'
									inputValue='Hambúrg. Simples'
									// inputOnChange={}
									productImg={burger}
									productImgAlt='burger example'
									productName='Simples'
									productPrice="R$ 10,00"
								/>

								<ProductArea
									inputId='duplo'
									inputName='burger-options'
									inputValue='Hambúrg. Duplo'
									// inputOnChange={}
									productImg={burger}
									productImgAlt='burger example'
									productName='Duplo'
									productPrice="R$ 15,00"
								/>
							</div>

							<div className="radio-wrapper">
								<ButtonRadio
									// onChange={onChange} 
									firstInputName="drinks"
									firstInputValue="water"
									firstInputId="water"
									firstLabel="500ml"
									firstPrice="R$ 5,00"
									secondInputName="drinks"
									secondInputValue="soda"
									secondInputId="soda"
									secondLabel="700ml"
									secondPrice="R$ 7,00"
									secondClassName="second-btn"
									thirdClassName="hidden"
								/>

								<ButtonRadio
									// onChange={onChange} 
									firstInputName="burger"
									firstInputValue="carne"
									firstInputId="carne"
									firstLabel="Carne"
									secondInputName="burger"
									secondInputValue="frango"
									secondInputId="frango"
									secondLabel="Frango"
									thirdInputName="burger"
									thirdInputValue="vegetariano"
									thirdInputId="vegetariano"
									thirdLabel="Vegetariano"
									thirdClassName="third-btn"
								/>
							</div>
						</section>
					</div>
				</section>
				<CartArea />

			</main>
		</div>

	)
};


