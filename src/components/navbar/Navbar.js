import React from 'react';
import './Navbar.css';
import LogoImg from '../images/LogoImg';
import ButtonLogout from '../button/ButtonLogout';

export default function NavBar () {

    return(
        <div className="navbar">
            <LogoImg />
            <label className="">Atendente: {localStorage.getItem("userName")} </label>
            <ButtonLogout 
                className="logout"
            />
        </div>
    );
};

// <img src={garcom} alt="waiter" className="waiter-icon-tables"/>
// <p className="tables-title">{value}</p>