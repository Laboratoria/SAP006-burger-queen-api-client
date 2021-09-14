import React from 'react';

import ButtonLogout from '../../components/ButtonLogout';
import LinkAside from '../../components/LinkAside';
import CartArea from '../../components/CartArea'
import ButtonDefault from '../../components/ButtonDefault';
import './hall.scss';
import Input from '../../components/Input';


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

					</section>
					<section className="wrapper">
					<CartArea />
					</section>
				</main>
			</div>
		</>



	)
};


