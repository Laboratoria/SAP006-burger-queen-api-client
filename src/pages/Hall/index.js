import React from 'react';

import ButtonLogout from '../../components/ButtonLogout';
import LinkAside from '../../components/LinkAside';
import CartArea from '../../components/CartArea'
import ButtonDefault from '../../components/ButtonDefault';
import './hall.scss';
import Input from '../../components/Input';

import ProductArea from '../../components/ProductArea'
import burger from '../../img/burger-example.png';


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
								inputClass='hidden product-name'
								inputId='simples'
								inputName='burger-options'
								inputValue='Hambúrg. Simples'
								// inputOnChange={}
								labelClassName='label-product-box'
								productImg={burger}
								productImgAlt='burger example'
								productClassName='product-name'
								productName='Simples'
								productPrice="R$ 10,00"
								priceClassName="product-price"
							/>

							<ProductArea
								inputClass='hidden product-name'
								inputId='duplo'
								inputName='burger-options'
								inputValue='Hambúrg. Duplo'
								// inputOnChange={}
								labelClassName='label-product-box'
								productImg={burger}
								productImgAlt='burger example'
								productClassName='product-name'
								productName='Duplo'
								productPrice="R$ 15,00"
								priceClassName="product-price"
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


