import React from 'react';
import Button from '../button/Button';
import './Style.css';


export default function Cards ( {id, client, table, status, name, qtd} ) { 

    return(
        <div>
            <div>
                <p>Nº do pedido:{id}</p>
                <p>Atendente: {localStorage.getItem("userName")} </p>
                <p>Cliente:{client}</p>
                <p>Mesa:{table}</p>
            </div>
            <div>
                <p>Status:{status}</p>
            </div>
            <div>
                <p>Produto:{name} - Qtd: {qtd}</p>            
            </div>
            <Button/>
        </div>
    );
};