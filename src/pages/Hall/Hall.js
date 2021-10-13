import { React, useState, useEffect } from 'react'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Products from '../../components/Products/Products';
import CartItem from '../../components/CartItem/CartItem';

import '../../global.css';
import './hall.css'
import logo from '../../img/logo.png'

// import './styles/order.css';

function Hall() {
 
    const [client, setClient] = useState('');
    const onChangeClient = (e) => {
        const name = e.target.value
        setClient(name)
    };

    //criamos um estado inicial passamos todos os
    const [products, setProducts] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState('breakfast');
    const [order, setOrder] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');
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
    })


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const selectedProducts = products.filter((produtos) => produtos.type === selectedMenu)

    //adicionar o produto no resumo do carrinho //find encontra o item objeto
    const handleAdd = (e, item) => {
        e.preventDefault();
        const element = order.find(resposta => resposta.id === item.id)
        if (element) {
            element.qtd += 1
            //adicionar os pedidos - mapeia a quantidade de hamb
            // setOrder(quant => quant.map(response => response.id === element.id ? element : response))
        }
        //se a quantidade for 0 ele cria um hamb
        else {
            item.qtd = 1
            //olhar tudo que tem no pedido e adiciona o objeto clicado da api
            setOrder([...order, item])
        }
    }
 //função de remover itens do carrinho
    const handleRemove = (e, item, index) => {
        e.preventDefault();
        const element = order.find(response => response.id === item.id);

        if (element.qtd !== 0) {
            element.qtd -= 1;
        }
        if (element.qtd === 0) {
            // alert("banana")
            const listOrder = order;
            // remove 1 item do array
            listOrder.splice(index, 1);
            setOrder([...listOrder])
        }
    }


    return (

        <section className="container">

            <header className="header-menu">
                <div className="logo-menu">
                    {<img src={logo} className="logo" alt="Logo Burguer Queen" />}</div>
                <h2 className="name-menu">Salão</h2>
                <Button className="btn-logout"> Sair
                </Button>
            </header>

            

                <section className="hall-main">

                    <section className="menu-container">

                    <div className="button-menu" 
                        style={{width:'100%', display:'flex', justifyContent: 'space-around', marginBottom:'5%'}} >
                        <Button
                            className="buttonMenu"
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
                    </div>

                        {selectedProducts && selectedProducts.map((item, index) => (
                            <div key={index}>
                                <Products
                                    divClassName="box-item"
                                    productsName={item.name}
                                    /*divId={item.id}*/ 
                                    ImgSrc={item.image}
                                    productsFlavor={item.flavor}
                                    productsComplement={item.complement}
                                    productsPrice={item.price}
                                    /*productsNameKey={item.id}*/
                                    addOnClick={(e) => handleAdd(e, item)}
                                />
                            </div>
                        ))}
                    </section>

                    <section className="container-order">
                        <div className="info-table-client">
                           
                                <select className="table-select" name="Mesa" onChange={handleSubmit}>
                                    <option valeu="mesa01">Mesa</option>
                                    <option valeu="mesa01">01</option>
                                    <option valeu="mesa02">02</option>
                                    <option valeu="mesa03">03</option>
                                    <option valeu="mesa04">04</option>
                                    <option valeu="mesa05">05</option>
                                </select>

                                <Input className="input-client"
                                    placeholder="Insira o nome do cliente"
                                    name="client"
                                    value={client}
                                    onChange={onChangeClient}
                                    style={{backgroundColor: '#9B2D0A',
                                            borderRadius: '5px',
                                            width: '150px',
                                            height: '42px',
                                            margin: '2%'}}
                                />
                           
                        </div>
                        <div className="box-order-itens">
                        {order.map((item, index) =>
                            <div key={index}>
                                <CartItem
                                    divClassName="order-itens"
                                    productsName={item.name}
                                    productsPrice={item.price}
                                    productsFlavor={item.flavor}
                                    products={item.qtd}
                                    qtd={item.qtd}
                                    productsComplement={item.complement}
                                    removeOnClick={(e) => handleRemove(e, item, index)}
                                />
                    
                            </div>
                        )} 
                        </div>
                    </section>
                </section>
        </section>
    );
}

export default Hall;