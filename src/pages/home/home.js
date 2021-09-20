import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/auth';
import { useHistory } from "react-router-dom"

const Home = () => {
    //eslint-disable-next-line
    
    let history = useHistory()
    const handleLogout = () => {
        logout()
        history.push('/')
    }

    return (
        <div>
            <button className='btn-logout'
                type='button' value='logout'
                onClick={handleLogout}>
                sair</button>
            OI
        </div>
    )
}

export default Home;

//<Link to='/'>Ir para Login</Link>