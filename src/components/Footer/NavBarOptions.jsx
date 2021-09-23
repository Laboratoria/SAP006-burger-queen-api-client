import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { removeStorageKey } from '../../services/storage';
import './style.scss';
import tables from '../../Assets/tables.png'
import menu from '../../Assets/menu.png'
import status from '../../Assets/orders-status.png'
import logout from '../../Assets/logout.png'

const MenuOptionsNavBar = () => {
    const history = useHistory();

    const handleLogout = () => {
        removeStorageKey();
        history.push('./')  
    }
    
    return (
        <footer className="footer-section-menu">
            <Link to='/tables'>
                <img className="img-icon-footer-table" src={tables} alt="tables icon"/>
            </Link>
            <Link to='/menu'>
                <img className="img-icon-footer" src={menu} alt="menu icon"/>
            </Link>
            <Link to='/orders-status'>
                <img className="img-icon-footer" src={status} alt="orders status icon"/>
            </Link>
            <button onClick={handleLogout} className="btn-logout">
                <img className="img-icon-footer" src={logout} alt="logout icon"/>
            </button> 
        </footer>
    )
}

export default MenuOptionsNavBar;

