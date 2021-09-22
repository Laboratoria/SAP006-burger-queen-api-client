import React, { useState } from 'react';
import Button from '../Button/button';

function Menu({
    products,
}) {
    console.log(products);

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
                            <p>Menu de café da manhã</p>
                        </div>
                        :
                        <div className='hamburguers'>
                            <p>Hamburgueria</p>
                        </div>
                }
            </div>
            <div className='comander'></div>
        </section>
    );
}

export default Menu;