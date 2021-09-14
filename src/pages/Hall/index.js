import React from 'react';

import ButtonLogout from '../../components/ButtonLogout';
import CartArea from '../../components/CartArea'
import ButtonDefault from '../../components/ButtonDefault';
import './hall.scss';


export default function Hall() {



	return (
		<>	
			<div className="title-area">
				<div>
					<h1>DIVINO BURGER</h1>
					<p className="margin-left-3">horário atual</p>	
				</div>

				<ButtonLogout className="margin-right-3"/>
			</div>

			<div>
				<ButtonDefault 
                    className="btn-order-status btn-default margin-left-19"
                >
                    Em andamento
                </ButtonDefault>

				<ButtonDefault 
                    className="btn-order-status btn-default margin-left-1"
                >
                    Finalizados
                </ButtonDefault>

			</div>			
			<CartArea />
		</>
	)
};


