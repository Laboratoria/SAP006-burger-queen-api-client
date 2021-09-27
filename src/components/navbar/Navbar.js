import React from 'react';
import './Navbar.css';
import LogoImg from '../images/LogoImg';
import ButtonLogout from '../../components/Button/logout/ButtonLogout';
import garcom from '../../img/garcom.png'


export default function NavBar () {
    return(
        <div className="navbar">
            <LogoImg />
                <img src={garcom} alt="waiter" className="waiter-icon-tables"/>
                <p className="tables-title">Mesas</p>
            <ButtonLogout />
        </div>
    )
};