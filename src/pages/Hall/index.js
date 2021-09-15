import React from 'react';

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



	return (
		<>
			<div className="pages-container">
				<header className="title-area">
					<div>
						<h1>DIVINO BURGER</h1>
						<p>horário atual</p>
					</div>

					<ButtonLogout />
				</header>

				<navbar>
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



				</navbar>
				<main>
					
					<section className="menu">
						<div className="client-data margin-bottom-2">
							<Input/>
						</div>
						<aside>
							<LinkAside />
							<LinkAside />
							<LinkAside />

						</aside>

					</section >
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
								firstInputvalue="water"
								firstInputid="water"
								firstLabel="500ml"
								firstPrice="R$ 5,00"
								secondInputName="drinks"
								secondInputvalue="soda"
								secondInputid="soda"
								secondLabel="700ml"
								secondPrice="R$ 7,00"
								secondClassName="second-btn"
								thirdClassName="hidden"
							/>

							<ButtonRadio 
								// onChange={onChange} 
								firstInputName="burger"
								firstInputvalue="carne"
								firstInputid="carne"
								firstLabel="Carne"
								secondInputName="burger"
								secondInputvalue="frango"
								secondInputid="frango"
								secondLabel="Frango"
								thirdInputName="burger"
								thirdInputvalue="vegetariano"
								thirdInputid="vegetariano"
								thirdLabel="Vegetariano"
								thirdClassName="third-btn"
							/>
						</div>
					</section>
					<section className="wrapper">
					<CartArea />
					</section>
				</main>
			</div>
		</>



	)
};


