import React from 'react';
import Button from '../button/Button';

import './Style.css';


export default function Orders ( {id, client, table, status, name, qtd, Products} ) { 

    return(
        <div className="container-orders">
            <div className="container-infos-orders">
                <p className="number-order">Nº do pedido:{id}</p>
                <p className="clerk-order">Atendente: {localStorage.getItem("userName")} </p>
                <p className="client-order">Cliente:{client}</p>
                <p className="table-order">Mesa:{table}</p>
            </div>
            <div>
                <p className="status-order">Status:{status}</p>
            </div>
            <div>
                <p className="itens-order">Produto:{name}</p> 
                {/* fazer um map  
                Products.map(() => ())*/}
                <p className="qtd-order">Qtd: {qtd}</p>                    
            </div>
            <Button
                text='Entregar Pedido'
                className="btn-delivery"
            />
        </div>
    );
};
