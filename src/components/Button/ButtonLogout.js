import React from 'react';
import { useHistory } from 'react-router-dom';


export default function ButtonLogout () {
    const history = useHistory()
  
      const logout = () => {
      localStorage.clear()
      history.push('/')
      }
  
      return (
              <button onClick={logout} className="btn-logout">
                  <img className="logout" src='/img/exit.png' alt="logout" />
              </button>
      );
  };
  