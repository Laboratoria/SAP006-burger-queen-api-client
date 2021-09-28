import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Header from '../../components/Header/Header'
import Menu from "../../components/Menu/Menu";
import Cart from "../../components/Cart/Cart";

import './Hall.css'

const Hall = () => {
    const [products, setProducts] = useState([]);

    const [cartItem, setCartItem] = useState([]);

    const token = localStorage.getItem('userToken');
    console.log(token);

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            headers: {
                accept: 'application/json',
                Authorization: `${token}`,
            },
        })

            .then((response) => {
                response.json()
                    .then((json) => {
                        setProducts(json)
                    })
            })
    }, [token])

    const addProducts = (sendProducts) => {
        console.log(sendProducts);
        let newArray;
        newArray = [...cartItem, { ...sendProducts }]
        setCartItem(newArray)
        console.log(newArray);
    }

    return (
        <>
            <Header className='nav-header'>

            </Header>,

            <div className='hall-container'>

                <div className='menu'>
                    <Menu products={products} addProducts={addProducts}>

                    </Menu>
                </div>

                <div className='cart-container'>
                    <Cart cartItem={cartItem}>

                    </Cart>
                </div>
            </div>
        </>
    )
}

export default Hall;
