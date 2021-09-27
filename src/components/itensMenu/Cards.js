import React from 'react';
import Itens from './Itens';

import './Style.css';


function Title ({ pedido }) {
    return(
        <div className="container-card">
            <label className="label-pedido">Pedido Nº1</label>
                <div>
                    <h3 className="info-cards"> Atendente: {localStorage.getItem("userName")} </h3>
                    <h3 className="info-cards"> Mesa: {localStorage.getItem("table")} </h3>
                </div>
                <div>
                    <Itens />
                </div>
                <div>
                    <h3 className="info-cards status"> Ag. Preparação. </h3>
                </div>
        </div>
    )
};

export default Title;