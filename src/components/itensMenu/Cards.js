import React from 'react';

import './Style.css';


export default function Cards () { 

    return(
        <div>
            <h3>Pedido Nº</h3>
            <div>
                <p>Atendente: {localStorage.getItem("userName")} </p>
                <p>Mesa:</p>
                <p>Cliente:</p>
            </div>
            <p>Produtos aqui</p>
            <p>Status aqui</p>
        </div>
    );
};
