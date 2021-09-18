/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import ButtonDefault from '../ButtonDefault';
import './popup.scss';

export default function Popup({
	id = 'popup-base',
	onClose = () => {},
	children,
	popupText,
}) {
	const handleOutsideClick = (event) => {
		if (event.target.id === id) onClose();
	};

	return (
		<div id={id} className="popup-overlay" onClick={handleOutsideClick}>
			<div className="popup-open">
				{children}

				<p>{popupText}</p>

				<div>
					<ButtonDefault
						className="btn-default margin-top-1 uppercase"
						onClick={onClose}
					>
						Ok
					</ButtonDefault>
				</div>
			</div>
		</div>
	);
}
