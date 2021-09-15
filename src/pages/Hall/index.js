import React, {useState} from 'react';

import ButtonLogout from '../../components/ButtonLogout';
import LinkAside from '../../components/LinkAside';
import CartArea from '../../components/CartArea'
import ButtonDefault from '../../components/ButtonDefault';
import './hall.scss';
import Input from '../../components/Input';


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

						</section>
					</div>
				</section>
				<CartArea />

			</main>
		</div>

	)
};


