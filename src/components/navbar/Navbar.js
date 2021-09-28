import React from 'react';
import './Navbar.css';
import LogoImg from '../images/LogoImg';
import ButtonLogout from '../button/ButtonLogout';
// import garcom from '../../img/garcom.png'


export default function NavBar ({role}) {


    return(
        <div className="navbar">
            <LogoImg />
                <p className="tables-title">{role}</p>
            <ButtonLogout />
        </div>
    )
};

// <img src={garcom} alt="waiter" className="waiter-icon-tables"/>
