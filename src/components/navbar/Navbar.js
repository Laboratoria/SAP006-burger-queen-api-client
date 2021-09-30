import React from 'react';
import './Navbar.css';
import LogoImg from '../images/LogoImg';
import ButtonLogout from '../button/ButtonLogout';
// import garcom from '../../img/garcom.png'


export default function NavBar ({value}) {

    return(
        <div className="navbar">
            <LogoImg />
                <p className="tables-title">{value}</p>
            <ButtonLogout />
        </div>
    );
};

// <img src={garcom} alt="waiter" className="waiter-icon-tables"/>