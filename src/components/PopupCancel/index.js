/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import ButtonDefault from '../ButtonDefault';
import './popupCancel.scss';

export default function Popup({
	id = 'popup-base',
	closePopup = () => {},
	children,
	popupText,
	cancelOrder = () => {}
}) {
	const handleOutsideClick = (event) => {
		if (event.target.id === id) closePopup();
	};

	return (
		<div id={id} className="popup-overlay" onClick={handleOutsideClick}>
			<div className="popup-open">
				{children}

				<p>{popupText}</p>

				<div className="btn-popcancel-wrap">
					<ButtonDefault
						className="btn-default margin-top-1 uppercase btn-yes"
						onClick={cancelOrder}
					>
						Sim
					</ButtonDefault>

					<ButtonDefault
						className="btn-default margin-top-1 uppercase"
						onClick={closePopup}
					>
						Não
					</ButtonDefault>
				</div>
			</div>
		</div>
	);
}
