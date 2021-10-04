import { React, useEffect, useState } from "react";
import Header from '../../components/Header/Header'
import OrderInfo from "../../components/Order/OrderInfo";
import OrderProducts from "../../components/Order/OrderProducts";

import './Kitchen.css'

const Kitchen = () => {
    const token = localStorage.getItem('userToken');

    const [pending, setPeding] = useState([]);
    const [doing, setDoing] = useState([])
    console.log(pending);
    console.log(doing);


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
                    setPeding(allOrders.filter((item) =>
                        item.status.includes('pending')
                    ));
                    setDoing(allOrders.filter((item) =>
                        item.status.includes('doing')
                    ))
                }
            })
    }, [token])




    return (
        <>
            <section className='container-kitchen'>
                <Header></Header>
                <article className='prepare'>
                    <p>PREPARAR</p>
                    <div className='each-order'>
                        {pending.map((item) =>
                         <OrderInfo
                         key={item.id}
                         id={item.id}
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
                         >
                         </OrderInfo> 
                        )}
                    </div>
                </article>
                <article className='finished'>
                    <p>FINALIZADOS</p>
                </article>
            </section>
        </>
    )
}

export default Kitchen;