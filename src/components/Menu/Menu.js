import React, { useState } from 'react';
import Button from '../Button/button';

function Menu({
    products,
}) {
    const [showMenu, setShowMenu] = useState(true);

    return (
        <section className='container-hall'>
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

            <div className='cards-menu'>
                {
                    showMenu ?
                        <div className='breakfast'>
                            {Object.keys(products).slice(0, 4).map((item) => (
                                <p>
                                    {products[item].name}
                                    {products[item].image}
                                    {products[item].price}
                                </p>
                            ))
                            }
                        </div>
                        :
                        <div className='hamburguers'>
                              {Object.keys(products).slice(4, 28).map((item) => (
                                <p>
                                    {products[item].name}
                                    {products[item].image}
                                    {products[item].price}
                                </p>
                            ))
                            }
                        </div>
                }
            </div>
            <div className='comander'></div>
        </section>
    );
}

export default Menu;

