import React from 'react';
import DateTime from '../DateTime';
import ButtonLogout from '../ButtonLogout';
import './header.scss';

export default function Header() {
	return (
		<header className="title-area">
			<div>
				<h1 className="uppercase">Divino Burger</h1>
				<DateTime />
			</div>

			<ButtonLogout />
		</header>
	);
}
