import { useHistory } from "react-router-dom";
import { Icon } from '@iconify/react';
import { removeStorageKey } from '../../services/storage';
import { getRouteHeaderMenu } from '../../routes/redirections';

const Header = () => {
    const history = useHistory();

    const handleLogout = () => {
        removeStorageKey();
        history.push('./')  
    }

    const handleRouteChange = (path) => {
        getRouteHeaderMenu(path);
    }

    return (
        <Header>
            <h2 className="header-title">VIXI!</h2>
            <button onClick={handleRouteChange}>mesas</button>
            <button onClick={handleRouteChange}>cardápio</button>
            <button onClick={handleRouteChange}>status dos pedidos</button>
            <button onClick={handleLogout}><Icon icon="carbon:logout" color="black" /></button>
        </Header>
    )
}

export default Header;