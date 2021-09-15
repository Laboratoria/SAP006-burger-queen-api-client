import React, {useState} from 'react';

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

	const selectBreakfast = () =>{
		setBreakfastClass("selected")
		setAllDayClass("")
	}

	const selectAllDay = () =>{
		setAllDayClass("selected")
		setBreakfastClass("")
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
						<Input className="input-hall" placeholder="Insira o nome do cliente"/>
					</div>
					<div className="menu">
						<aside>
							<LinkAside className="active" type="burger">Burgers</LinkAside>
							<LinkAside type="sides">Adicionais</LinkAside>
							<LinkAside type="drinks">Bebidas</LinkAside>
						</aside>

						<section className="products">
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


