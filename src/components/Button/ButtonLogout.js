import React from 'react';
import { useHistory } from 'react-router-dom';
import exit from '../../img/exit.png'

import './Buttons.css';

export default function ButtonLogout ({ className }) {

    const history = useHistory()

    const logout = () => {
      localStorage.clear()
      history.push('/')
    }
  
    return (
            <button onClick={logout} className="btn-logout">
                <img className={className} src={exit} alt="logout" />
            </button>
    );
  };
  