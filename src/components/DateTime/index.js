import React, { useState, useEffect } from 'react';

export default function Clock() {
	const newDate = new Date();
	const dayName = [
		'Domingo',
		'Segunda-feira',
		'Terça-feira',
		'Quarta-feira',
		'Quinta-feira',
		'Sexta',
		'Sábado',
	];
	const week = dayName[newDate.getDay()];
	const day = String(newDate.getDate()).padStart(2, '0');
	const monthName = [
		'jan,',
		'fev,',
		'mar.',
		'abr.',
		'maio',
		'jun.',
		'jul.',
		'ago.',
		'set.',
		'out.',
		'nov.',
		'dez.',
	];
	const month = monthName[newDate.getMonth()];
	const year = newDate.getFullYear();

	const [currentHour, serCurrentHour] = useState(new Date());

	function refreshClock() {
		serCurrentHour(new Date());
	}
	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);

	return (
		<p>
			{day} {month} {year}, {week} - 🕐
			{currentHour.toLocaleTimeString('pt-br', {
				hour: '2-digit',
				minute: '2-digit',
			})}
			h
		</p>
	);
}
