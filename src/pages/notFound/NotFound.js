import React from 'react';
import notfound from '../../img/notfound.gif';

import './NotFound.css';

export default function NotFound () {

    return (
        <div className="container-notfound">
          <h1> 404 ERROR - Página não encontrada</h1>
          <img src={notfound} alt="notFound" className="notfound"/>
        </div>
    );
};
