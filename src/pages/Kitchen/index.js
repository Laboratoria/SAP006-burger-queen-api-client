import React, { useState, useCallback, useEffect } from 'react';

import Popup from '../../components/Popup';

export default function Kitchen() {
	const [showPopup, setShowPopup] = useState(false);

	const openPopup = () => {
		setShowPopup(true);
	};

	return (
		<>
			<h1>Cozinha</h1>
			<button
				style={{
					color: 'white',
				}}
				onClick={openPopup}
			>
				abrir
			</button>

			{showPopup ? (
				<Popup
					popupText="Selecione um item antes de adicioná-lo!"
					onClose={() => setShowPopup(false)}
				></Popup>
			) : null}
		</>
	);
}
