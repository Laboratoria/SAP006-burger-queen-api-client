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
						<ProductArea
							inputClass='hidden menu-item-name'
							inputId='carne'
							inputName='meat-options'
							inputValue='Hambúrg. de Carne'
							// inputOnChange={}
							labelClass='label-item-box'
							menuItemSrc={burger}
							menuItemDescription='Hambúrguer de Carne'
							menuItemClassName='menu-item-name'
							menuItemText='Simples'
						/>
					</section>
					<section className="wrapper">
					<CartArea />
					</section>
				</main>
			</div>
		</>



	)
};


