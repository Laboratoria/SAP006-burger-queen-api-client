import React from "react"
import logo from '../../img/logo.png'
import Button from '../../components/Button/Button';
import { FaSignOutAlt } from 'react-icons/fa';
import './Header.css';
import { useHistory } from 'react-router-dom';


const Header = ({name}) => {

    const history = useHistory();
    const handleSignOut = (e) => {
        e.preventDefault();
        history.push('/login')
        localStorage.clear();
    }

    return(
        <header className="header-menu">
            <div className="logo-menu">


                {<img src={logo} className="logo" alt="Logo Burguer Queen" />}</div>
            <h2 className="name-menu">{name}</h2>


            <Button text="Sair" className="button-global" onClick={handleSignOut}><FaSignOutAlt className="icon-signout" /></Button>
        </header>


    )
}

export default Header


