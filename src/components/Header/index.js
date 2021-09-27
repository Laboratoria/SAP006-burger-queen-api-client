/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import DateTime from '../DateTime';
import ButtonLogout from '../ButtonLogout';
import './header.scss';
import arrow from '../../img/arrow.png';

export default function Header({classBtn}) {

	const history = useHistory();

	const goBack = () => {
		history.push('/salao');

	}

	return (
		<header className="title-area">
			<div>
				<h1 className="uppercase">Divino Burger</h1>
				<DateTime />
			</div>

			<div>

			<button className={classBtn} onClick= {goBack} >
					<img src={arrow} alt="arrow" />
			</button>
			

			<ButtonLogout />
		</div>
		</header>
	);
}
