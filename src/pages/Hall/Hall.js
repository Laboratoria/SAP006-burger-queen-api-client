import { React, useState, useEffect } from 'react'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Products from '../../components/Products/Products';
import CartProducts from '../../components/CartItem/CartProducts';

import '../../global.css';
import './hall.css'

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

            <header>
                <h2>Salão</h2>
            </header>

            <div className="button-menu" >
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

                <section className="mesas-cliente">
                    <select className="numero-mesas" name="Mesa" onChange={handleSubmit}>
                        <option valeu="mesa01">Mesa</option>
                        <option valeu="mesa01">01</option>
                        <option valeu="mesa02">02</option>
                        <option valeu="mesa03">03</option>
                        <option valeu="mesa04">04</option>
                        <option valeu="mesa05">05</option>
                    </select>

                    <Input className="input-hall"
                        placeholder="Insira o nome do cliente"
                        name="client"
                        value={client}
                        onChange={onChangeClient}

                    />
            </section>

                <div className="flex-container">
                    {selectedProducts && selectedProducts.map((item, index) => (
                        <div key={index}>
                            <Products
                                divClassName="flex-item"
                                productsName={item.name}
                                divId={item.id}
                                ImgSrc={item.image}
                                productsPrice={item.price}
                                productsNameKey={item.id}
                                productsFlavor={item.flavor}
                                productsComplement={item.complement}
                                addOnClick={(e) => handleAdd(e, item)}
                            />
                        </div>
                    ))}
                <section className="container-order">
                    {order.map((item, index) =>
                        <div key={index}>
                            <CartProducts
                                divClassName="flex-item-order"
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
                </section>
            </div>
        </section>
    );
}

export default Hall;