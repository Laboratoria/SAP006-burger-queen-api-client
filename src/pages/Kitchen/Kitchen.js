import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import Button from '../../components/Button/Button';
import logo from '../../img/logo.png'
import '../../global.css';
import './Kitchen.css';

function Kitchen() {

    const token = localStorage.getItem('token');

    const [preparerOrder, setPreparerOrder] = useState([]);

    const history = useHistory();
    const handleSignOut = (e) => {
        e.preventDefault();
        history.push('/login')
        localStorage.clear();
    }

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        })
          .then((response) => response.json())
          .then((orders) => {
            const ordersPending = orders.filter((itens) => 
                itens.status.includes('preparing') ||
                itens.status.includes('pending')
                /*itens.status.includes('done')*/ 
            );
            setPreparerOrder(ordersPending);
          });
      })

      const handleStatusOrder = (idOrder, changeStatus) => {
        const status = { status: changeStatus };
      
        fetch('https://lab-api-bq.herokuapp.com/orders' + idOrder, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
          body: JSON.stringify(status),
        })
        .then((response) => {
          response.json().then(() => {
            const order = preparerOrder
            return order
          });
        });
      };

    return (
        <>
        <header className="header-menu">
            <div className="logo-menu">
                {<img src={logo} className="logo" alt="Logo Burguer Queen" />}
            </div>
                <h2 className="name-menu">Cozinha</h2>
                <Button text="Sair" className="button-global" onClick={handleSignOut}><FaSignOutAlt  className="icon-signout"/></Button>
        </header>

        <section className="orders-section">
        {preparerOrder.map((order) => {
            return (
            <section className="orders" key={order.id}>

            <section className="details-client">
                <h3 className="pending-orders"> {order.status 
                .replace('pending', '⏱️ Pendente')
                .replace('preparing', '⏳ Preparando')}
                </h3>
                <p className="order-number"> 📋 Pedido nº {order.id}</p>
                <p>Cliente: {order.client_name}</p>
                <p>Mesa: {order.table}</p>
                <time>Data: 
                {`${new Date(order.createdAt).toLocaleDateString('pt-br',)} - 
                    ${new Date(order.createdAt).toLocaleTimeString('pt-br', {
                    hour: '2-digit',
                    minute: '2-digit',
                    })
                }h`}
                </time> 
            </section>

            <article className="container-order">
                {order.Products.map((items, index) => (
                <div key={index}>
                    <p> {items.qtd} {items.name}</p>
                    {/*<p>{items.flavor === 'null' ? '' : items.flavor}</p>
                    <p>{items.complement === 'null' ? '' : items.complement}</p>*/}
                </div>
                ))}
            </article>

            <hr/>

            <div className="buttons">
                <Button 
                className="button-global"
                /*variant="tertiary"*/
                onClick={() => handleStatusOrder(order.id, 'preparing')}>
                PREPARAR
                </Button>

                <Button 
                className="button-global"
                /*variant="quaternary"*/
                onClick={() => handleStatusOrder(order.id, 'ready')}>
                ENTREGAR
                </Button>
            </div>
            </section>
            );
        })}
        </section>
        </>
);
}
    export default Kitchen;