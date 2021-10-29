import React from 'react'
import './NotFound.css';
import not from '../../img/not.png'


const NotFound = () =>

<div className="notfound-page">
    <div className="container-notfound">
            {<img src={not} alt="imagem not found"  />}
    </div>
       
</div>




export default NotFound;