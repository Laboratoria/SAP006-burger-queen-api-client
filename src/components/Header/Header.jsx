import { useHistory } from "react-router-dom";
import { Link } from 'react';
import { Icon } from '@iconify/react';
// import { removeStorageKey } from '../../services/storage';
import { getRouteHeaderMenu } from '../../routes/redirections';

const Header = () => {
    const history = useHistory();

    const handleRoute  = (path) => {
        const route = getRouteHeaderMenu(path)
        history.push(route)
    }

    // const handleLogout = () => {
    //     removeStorageKey();
    //     history.push('./')  
    // }

    return (
        <nav className="header-navbar-desktop">
            <h2 className="header-title">VIXI!</h2>
            <button onClick={handleRoute}>mesas</button>
            <Link to='/menu'>cardápio</Link>
            <Link to='/orders-status'>status dos pedidos</Link>
            <Link to='/'><Icon icon="carbon:logout" color="black" /></Link>
        </nav>
    )
}

export default Header;