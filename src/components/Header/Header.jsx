import { useHistory, Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { removeStorageKey } from '../../services/storage';
// import { getRouteHeaderMenu } from '../../routes/redirections';
import './style.scss'

const Header = () => {
    const history = useHistory();

    // const handleRoute  = (path) => {
    //     const route = getRouteHeaderMenu(path)
    //     history.push(route)
    // }

    const handleLogout = () => {
        removeStorageKey();
        history.push('./')  
    }

    return (
        <nav className="header-navbar-desktop">
            <h2 className="header-title">VIXI!</h2>
            <Link to='/menu' className="header-button">cardápio</Link>
            <Link to='/orders-status' className="header-button">status dos pedidos</Link>
            <button className="header-button" onClick={handleLogout}><Icon icon="carbon:logout" color="black" /></button>
        </nav>
    )
}

export default Header;