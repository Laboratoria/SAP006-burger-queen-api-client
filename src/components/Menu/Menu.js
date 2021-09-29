import React, { useState } from 'react';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';


import './Menu.css'

function Menu({
    products, addProducts
}) {
    const [showMenu, setShowMenu] = useState(true);

    return (
        <>
            <div className='cards-menu'>
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
                            {(products).slice(0, 4).map((key, item) => (
                                <Cards
                                    key={key}
                                    name={products[item].name}
                                    price={products[item].price}
                                    image={products[item].image}
                                    onClick={() => {
                                        const productsArr = {
                                            id: products[item].id,
                                            name: products[item].name,
                                            price: products[item].price,
                                            image: products[item].image
                                        }
                                        addProducts(productsArr)
                                    }}></Cards>
                            ))
                            }
                        </div>
                        :
                        <div className='hamburguers'>
                            {Object.keys(products).slice(4, 28).map((key, item) => (
                                <Cards
                                    key={key}
                                    name={products[item].name}
                                    price={products[item].price}
                                    image={products[item].image}
                                    onClick={() => {
                                        const productsArr = {
                                            id: products[item].id,
                                            name: products[item].name,
                                            price: products[item].price,
                                            image: products[item].image
                                        }
                                        addProducts(productsArr)
                                    }}></Cards>
                            ))
                            }
                        </div>
                }
            </div>
        </>
    );
}

export default Menu;

