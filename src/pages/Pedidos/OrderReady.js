import { React, useEffect, useState} from "react";
import Header from '../../components/Header/Header'
import OrderInfo from "../../components/Order/OrderInfo";
import OrderProducts from "../../components/Order/OrderProducts";


const OrderReady= () => {
    const token = localStorage.getItem('userToken');

    const [done, setDone] = useState([]);
    const [delivered, setDelivered] = useState([]);
    
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
            if(json) {
                const allOrders = json;
                allOrders.sort((a, b) => b.id - a.id)
                setDone(allOrders.filter((item) =>
                    item.status.includes('done')
                ));
                setDelivered(allOrders.filter((item) =>
                    item.status.includes('delivered')
                ))
            }
        })
    }, [token])

    const handleClick = (item, index) => {
        const orderId = item.id
        let statusOrder = ''

        if(item.status === 'doing') {
            statusOrder = { 'status': 'done' }
        }
        if(item.status === 'done') {
           statusOrder = { 'status': 'delivered'}
        }

        fetch(`https://lab-api-bq.herokuapp.com/orders/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
            body: JSON.stringify(statusOrder)
        })
        .then((response) => response.json())
        .then((json) => {
             if(item.status === 'done' && json.id === done[index].id) {
                   done.splice(index, 1)
                   setDone([...done])
                   setDelivered([...delivered, json])
             }
        })
    }
    return (
        <>
            <Header></Header>
            <section className='container-kitchen'>
                <article className='prepare'>    
                    <h2 className='title-status'>FINALIZADOS</h2>              
                    <div className='each-order'>
                        {done.map((item, index) =>
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
                                buttonText='Entregar pedido'
                                className='btn-fineshed'
                            >

                            </OrderInfo>
                        )}
                    </div>
                </article>
               
                <article className='finished'>
                   <h2 className='title-status'>ENTREGUES</h2>
                    <div className='each-order'>
                        {delivered.map((item, index) =>
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
                                buttonText='Excluir pedido'
                                className='btn-prepare'

                            >

                            </OrderInfo>
                        )}
                    </div>
                </article>
            </section>
        </>
    )
}

export default OrderReady;
