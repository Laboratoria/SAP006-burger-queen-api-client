import React from "react";
import Header from "../../components/Header/Header";

const OrderReady = () => {

    const token = localStorage.getItem('userToken');

    
    return(
        <>
        <Header></Header>
        <h1>Pedidos</h1>
        </>
    )
}

export default OrderReady;