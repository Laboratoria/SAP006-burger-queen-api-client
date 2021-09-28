import React from 'react';
import './NotFound.css';
import notfound from '../../img/notfound.gif';

const NotFound = () => {
    return (
        <div className="container-notfound">
          <h1> 404 ERROR - Página não encontrada</h1>
          <img src={notfound} alt="counter" className="notfound"/>
        </div>
      );
}
export default NotFound;