import React, { useState } from 'react';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';


import './Menu.css'


function Menu({	products, addProducts }) {

	const [showMenu, setShowMenu] = useState(true);

	return (
		<>
			
				<div className='btn-menu'>
					<Button
						buttonText='Café da manhã'
						className='button-menu'
						buttonOnClick={() => {
							setShowMenu(true)
						}}>
					</Button>
					<Button
						buttonText='Hamburgueria'
						className='button-menu'
						buttonOnClick={() => {
							setShowMenu(false)
						}}>
					</Button>
				</div>
				{
					showMenu ?
						<div className='breakfast'>
							{products.slice(0, 4).map((item) => (
								<Cards
									key={item.id}
									name={item.name}
									flavor={item.flavor}
									complement={item.complement}
									price={(item.price).toFixed(2)}
									image={item.image}	
									qtd={item.qtd}
									onClick={() => addProducts(item)}							
									></Cards>
							))
							}
						</div>
						:
						<div className='hamburguers'>
							{products.slice(4, 28).map((item) => (
								<Cards
									key={item.id}
									name={item.name}
									flavor={item.flavor}
									complement={item.complement}
									price={item.price}
									image={item.image}
									qtd={item.qtd}
									onClick={() => addProducts(item)}							
									></Cards>
							))
							}
						</div>
				}
		
		</>
	);
}

export default Menu;

