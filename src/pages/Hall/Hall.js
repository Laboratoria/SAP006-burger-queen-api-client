import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Header from '../../components/Header/header'
import Menu from "../../components/Menu/Menu";

import './Hall.css'

const Hall = () => {
    const [products, setProducts] = useState({});

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

    return (
        <>
            <Header>

            </Header>,

            <div className='menu'>
                <Menu products={products}>

                </Menu>
            </div>

            <div className='comander'>

            </div>
        </>
    )
}

export default Hall;
