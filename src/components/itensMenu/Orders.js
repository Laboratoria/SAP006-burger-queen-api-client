import React from 'react';
import Button from '../button/Button';

import './Style.css';


export default function Orders ( {id, client_name, table, status, createdAt,updatedAt,user_id } ) { 


    /*const ordersFiltered = () => {
        return orders.filter((item) => item.status === 'finalizado')
      }
    
      const changeStatus = (elem) => {
        updateOrderStatus('/orders/', elem.id, 'servido')
          .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'servido' }]))
      }
      
      useEffect(() => {
    return orderStatus.map((order) => {
      const foundOrder = orders.map((elem) => elem).findIndex((item) => item.id === order.id)
      if (foundOrder !== -1) {
        console.log('remover')
        const removed = orders
        removed.splice(foundOrder, 1)
        setOrders([...removed])
        console.log(orders)
      }
      return orders
    })
  }, [orderStatus, orders])
      */


    return(
        <div className="container-orders">
            <div className="container-infos-orders">
                <p className="number-order">Nº do pedido:{id}</p>
                <p className="clerk-order">Atendente: {user_id} </p>
                <p className="client-order">Cliente:{client_name}</p>
                <p className="table-order">Mesa:{table}</p>
            </div>
            <div>
                <h3>
                    {" "}
                    {status === "Status: Pendente" ? <span className="status-pending"> {status} </span > : <span className="status-preparing"> {status} </span> }             
                </h3>
            </div>
           
            <aside className="orders-time">
                <p>🕗 Realizado: {createdAt} </p>
                <p>Atualizado às {updatedAt} </p>
            </aside>
            <Button
                text='Entregar Pedido'
                className="btn-delivery"
            />
        </div>
    );
};
