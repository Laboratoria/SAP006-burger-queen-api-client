import { React, useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import '../../global.css';


function AllOrders() {
    const token = localStorage.getItem('token');
    const [orderStatus, setOrderStatus] = useState([]);
    const url = 'https://lab-api-bq.herokuapp.com/orders/';

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            },
        })
            .then((response) => response.json())
            .then((orders) => {
                const status = orders.filter((itens) =>
                    itens.status.includes('delivered')
                );
                setOrderStatus(status);
            });
    })

    return (
    <>
        <Header
            name="Pedidos Entregues"
        />
            <section className="orders-container">
                {orderStatus.map((order) => {
                    return (
                        <section className="orders" key={order.id}>
                            <div className="">
                                <h1> {order.status.replace('delivered', 'Entregue')} </h1>
                                <p>ID: {order.id} </p>
                                <p>Cliente: {order.client_name} </p>
                                <p>Mesa: {order.table} </p>
                                <time>
                                    {`${new Date(order.createdAt).toLocaleDateString('pt-br')} - ${new Date(order.createdAt).toLocaleTimeString('pt-br', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}h`}
                                </time>
                                <hr />
                                {order.Products.map((items, index) => (
                                    <div key={index}>
                                        <p> {items.qtd} {items.name}</p>
                                        <p>{items.flavor}</p>
                                        <p>{items.complement}</p>

                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </section> 
        </>
    )
}
export default AllOrders;