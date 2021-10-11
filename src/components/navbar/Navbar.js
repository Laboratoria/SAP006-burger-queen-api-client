import React from 'react';
import LogoImg from '../images/LogoImg';
import ButtonLogout from '../button/ButtonLogout';

import './Navbar.css';

export default function NavBar () {

    return(
        <div className="navbar">
            <LogoImg />
            <label className="clerck">
                Atendente: {localStorage.getItem("userName")}
            </label>
            <ButtonLogout 
                className="logout"
            />
        </div>
    );
};
