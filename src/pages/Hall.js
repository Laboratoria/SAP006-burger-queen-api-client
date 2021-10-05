import { React, useState } from 'react'
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Products from '../components/Products/Products';

import '../components/Products/products.css';
import '../global.css';
import '../styles/hall.css'




function Hall() {


    const token = localStorage.getItem('token');

    const [client, setClient] = useState('');
    const onChangeClient = (e) => {
        const name = e.target.value
        setClient(name)
    };
    
    //criamos um estado inicial passamos todos os
    const [products, setProducts] = useState ([]);                                     
    const [selectedMenu, setSelectedMenu] = useState('breakfast');


    fetch('https://lab-api-bq.herokuapp.com/products', {
        headers: {
            Authorization: `${token}`,
            accept: "application/json",
        }

    })
        .then((response) =>
            response.json()
        )
        .then((json) => {
            setProducts(json)
        })



    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const selectedProducts = products.filter((produtos) => produtos.type === selectedMenu)


    return (


        <section className="container">
            <h1>Salão</h1>

            <select name="Mesa" onChange={handleSubmit}>
                <option valeu="mesa01">Mesa 01</option>
                <option valeu="mesa02">Mesa 02</option>
                <option valeu="mesa03">Mesa 03</option>
                <option valeu="mesa04">Mesa 04</option>
                <option valeu="mesa05">Mesa 05</option>
            </select>

            <Input
                className="input-hall"
                placeholder="Insira o nome do cliente"
                name="client"
                value={client}
                onChange={onChangeClient} />

            <section className="buttonMenu">
                <Button
                    className='buttonMenu'  
                    onClick={() => {
                        setSelectedMenu('breakfast')
                    }}
                >Breakfast
                </Button>
                <Button
                   className='buttonMenu'
                    onClick={() => {
                        setSelectedMenu('all-day')
                    }}
                >All Day
                </Button>
            </section>


            <section className="main-hall">

                <div className="menu-container">
                    {selectedProducts && selectedProducts.map((item) => (
                    // {menuCafe && menuCafe.map((products, index) => (
                        <Products
                            divClassName="box-item"
                            // divKey={Math.random()}
                            productsName={item.name}
                            divId={item.id}
                            ImgSrc={item.image}
                            productsPrice={item.price}
                            productsNameKey={item.id}
                        />
                    ))}
                </div>
                <div className="request-container"> 
                       <h1> COMANDA </h1>
                </div>

            </section>



        </section>
    );
}

export default Hall;