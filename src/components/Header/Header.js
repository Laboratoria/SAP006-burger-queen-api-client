import React from 'react';
import './Header.css'

function Header({
    products
}) {
    return (
        <nav className='nav-bar'>
            <div className='logo-header'>
                <img alt=''></img>
            </div>
            <div className='links-hall'>
                <a href='/Kitchen'>Cozinha</a>
                <a href='/OrderReady'>Pedidos</a>
            </div>
        </nav>
    );
}

export default Header;