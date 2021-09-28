import React from 'react';
import Itens from './Itens';

import './Style.css';


function Cards () {
    return(
        <div>
            <label>Pedido Nº1</label>
                <div>
                    <h3> Atendente: {localStorage.getItem("userName")} </h3>
                    <h3> Mesa: {localStorage.getItem("table")} </h3>
                </div>
                <div>
                    <Itens />
                </div>
                <div>
                    <h3> Ag. Preparação. </h3>
                </div>
        </div>
    )
};

export default Cards;