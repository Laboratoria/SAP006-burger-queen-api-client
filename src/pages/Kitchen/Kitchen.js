import { React, useEffect, useState } from "react";
import Header from '../../components/Header/Header'
import OrderInfo from "../../components/Order/OrderInfo";
import OrderProducts from "../../components/Order/OrderProducts";

import './Kitchen.css'

const Kitchen = () => {
    const token = localStorage.getItem('userToken');

    const [pending, setPending] = useState([]);
    const [doing, setDoing] = useState([])


    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/orders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json) {
                    const allOrders = json;
                    allOrders.sort((a, b) => b.id - a.id)
                    setPending(allOrders.filter((item) =>
                        item.status.includes('pending')
                    ));
                    setDoing(allOrders.filter((item) =>
                        item.status.includes('doing')
                    ))
                }
            })
    }, [token])


    const handleClick = (item, index) => {
        const orderId = item.id
        let statusOrder = ''
        if (item.status === 'pending') {
            statusOrder = { 'status': 'doing' }

        }
        if (item.status === 'doing') {
            statusOrder = { 'status': 'done' }
        }

        fetch(`https://lab-api-bq.herokuapp.com/orders/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
            body: JSON.stringify(statusOrder)

        }).then((response) => response.json())
            .then((json) => {
                if (item.status === 'pending' && json.id === pending[index].id) {
                    pending.splice(index, 1)
                    setPending([...pending])
                    setDoing([...doing, json])

                }

                if(item.status === 'doing' && json.id === doing[index].id){
                    doing.splice(index, 1)
                    setDoing([...doing])
                }
            })

    }
    return (
        <>
            <Header></Header>
            <section className='container-kitchen'>
                <article className='prepare'>    
                    <h2 className='title-status'>PREPARAR</h2>              
                    <div className='each-order'>
                        {pending.map((item, index) =>
                            <OrderInfo
                                key={item.id}
                                id={item.id}
                                date={new Date(item.createdAt).toLocaleString()}
                                client={item.client_name}
                                table={item.table}
                                status={item.status}
                                itens={item.Products.map((products) => (
                                    <OrderProducts
                                        name={products.name}
                                        qtd={products.qtd}
                                    >
                                    </OrderProducts>
                                ))}
                                onClick={() => handleClick(item, index)}
                                buttonText='Preparar Pedido'
                                className='btn-prepare'
                            >

                            </OrderInfo>
                        )}
                    </div>
                </article>
               
                <article className='finished'>
                   <h2 className='title-status'>EM PREPARO</h2>
                    <div className='each-order'>
                        {doing.map((item, index) =>
                            <OrderInfo
                                key={item.id}
                                id={item.id}
                                date={new Date(item.createdAt).toLocaleString()}
                                client={item.client_name}
                                table={item.table}
                                status={item.status}
                                itens={item.Products.map((products) => (
                                    <OrderProducts
                                        name={products.name}
                                        qtd={products.qtd}
                                    >
                                    </OrderProducts>
                                ))}
                                onClick={() => handleClick(item, index)}
                                buttonText='Finalizar Pedido'
                                className='btn-fineshed'

                            >

                            </OrderInfo>
                        )}
                    </div>
                </article>
            </section>
        </>
    )
}

export default Kitchen;