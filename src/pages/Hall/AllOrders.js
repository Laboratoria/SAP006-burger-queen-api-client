import { React, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { MdKeyboardBackspace } from 'react-icons/md'
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button'
import '../Kitchen/Kitchen.css'


function AllOrders() {
    const history = useHistory();
    const token = localStorage.getItem('token');
    const url = 'https://lab-api-bq.herokuapp.com/orders/';

    const [orderStatus, setOrderStatus] = useState([]);

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
            <Header name="Pedidos Entregues" />
            <Button
                className='button-global'
                onClick={() => history.goBack()}>
                <MdKeyboardBackspace />
            </Button>
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