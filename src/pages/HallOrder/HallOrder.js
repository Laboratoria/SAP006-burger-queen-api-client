import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FaRegTrashAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import logo from '../../img/logo.png'
import '../../global.css';


function HallOrder() {
    const token = localStorage.getItem('token');

    const [ordersAll, setOrdersAll] = useState([]);
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
                setOrdersAll(orders);
            });
    });


    const handleDelete = (idOrder) => {
        const status = { status: 'ready' };
        fetch('https://lab-api-bq.herokuapp.com/orders', + idOrder, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            },
            body: JSON.stringify(status),
        })
            .then((response) => {
                response.json()
                    .then(() => {
                        const order = ordersAll;
                        return order;
                    });
            });
    };

    const timePreparing = (dataUpdated, dataCreated) => {
        const difference = Math.abs(new Date(dataUpdated) - new Date(dataCreated));
        return Math.floor(difference / 1000 / 60);
    }


    return (
  <>
        <header className="header-menu">
            <div className="logo-menu">
                {<img src={logo} className="logo" alt="Logo Burguer Queen" />}
            </div>
            <h2 className="name-menu">Cozinha</h2>
            <Button text="Sair" className="button-global" onClick={handleSignOut}><FaSignOutAlt className="icon-signout" /></Button>
        </header>

    <div>
        {ordersAll.map((order) => {
            return (
                <article className="orders" key={order.id}>

                    <section className="details-client">
                        <h3 className="historic-orders">
                            {order.status
                                .replace('pending', '⏱️ Pendente')
                                .replace('ready', '✔️ Pronto')
                                .replace('finished', '🍽️ Finalizado')
                                .replace('preparing', '⏳ Preparando')
                            }
                        </h3>
                        <p className="order-number">📋 Pedido nº {order.id}</p>
                        <p>Cliente: {order.client_name}</p>
                        <p>Mesa: {order.table}</p>
                        {order.status === "ready" || order.status === "finished" ? (<p>Tempo de preparação:{' '}{timePreparing(order.updatedAt, order.createdAt)} min</p>) : ""}
                        <hr />
                    </section>

                    <section className="container-order">
                        {order.Products.map((items, index) => (
                            <div key={index}>
                                <p>
                                    {items.qtd} {items.name}
                                </p>
                                {/* <p>{items.flavor === 'null' ? '' : items.flavor}</p>
                                <p>{items.complement === 'null' ? '' : items.complement}</p> */}

                            </div>
                        ))}
                    </section>

                    <hr className="break-line" />

                    <section>
                        <button
                            className="btndelete"
                            onClick={() => handleDelete(order.id)}
                        > <img className="FaRegTrashAlt" src={FaRegTrashAlt} alt="" /> </button>
                    </section>

                </article>
                
            );
        })
        
    }
</div>
        </>
    )


}
export default HallOrder;