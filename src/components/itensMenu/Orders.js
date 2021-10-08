import React from 'react';
import Button from '../button/Button';
import OrderProducts from './OrdersProducts';


import './Style.css';


export default function Orders ( {id, client, user_id, table, status, qtd, products} ) { 
    // const [products, setAllProducts] = useState([]);
    return(
        <div className="container-orders">
            <div className="container-infos-orders">
                <p className="number-order">Nº do pedido:{id}</p>
                <p className="clerk-order">Atendente: {user_id} </p>
                <p className="client-order">Cliente:{client}</p>
                <p className="table-order">Mesa:{table}</p>
            </div>
            <div>
                <p className="status-order">Status:{status}</p>
            </div>
            <div>
                <p className="itens-order">Produto:</p> 
                
                {products.map((item) => {
                    return (
                        <OrderProducts
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            flavor={item.flavor}
                            complement={item.complement}
                        />
                    )
                })
                }
                <p className="qtd-order">Qtd: {qtd}</p>                    
            </div>
            <Button
                text='Entregar Pedido'
                className="btn-delivery"
            />
        </div>
    );
};