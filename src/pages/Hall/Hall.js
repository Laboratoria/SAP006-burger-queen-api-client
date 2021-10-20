import { React, useState, useEffect } from 'react'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Products from '../../components/Products/Products';
import CartItem from '../../components/CartItem/CartItem';
import { postOrder } from '../../postAPI';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import '../../global.css';
import './hall.css'



function Hall() {
    const token = localStorage.getItem('token');

    //criamos um estado inicial passamos todos os
    const [products, setProducts] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState('breakfast');
    const [order, setOrder] = useState([]);
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');


    //name do cliente
    const onChangeClient = (e) => {
        const client = e.target.value
        setClient(client)
    };

    useEffect(() => {
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
    }, [token]);

    //adicionar o produto no resumo do carrinho //find encontra o item objeto
    const selectedProducts = products.filter((produtos) => produtos.type === selectedMenu)
    const handleAdd = (e, item) => {
        e.preventDefault();
        const element = order.find(resposta => resposta.id === item.id)
        if (element) {
            element.qtd += 1;
            setOrder([...order])
            //adicionar os pedidos - mapeia a quantidade de hamb
            // setOrder(quant => quant.map(response => response.id === element.id ? element : response))
        }
        //se a quantidade for 0 ele cria um hamb
        else {
            item.qtd = 1;
            //olhar tudo que tem no pedido e adiciona o objeto clicado da api
            setOrder([...order, item]);
        }
    };
    
    //função de remover itens do carrinho
    const handleRemove = (e, item, index) => {
        e.preventDefault();
        const element = order.find(response => response.id === item.id);

        if (element.qtd !== 0) {
            element.qtd -= 1;
            setOrder([...order])
        }
        if (element.qtd === 0) {
            // alert("banana")
            const listOrder = order;
            // remove 1 item do array
            listOrder.splice(index, 1);
            setOrder([...listOrder])
        }
    }

    const calculateTotal= (items) => {
        const totalPrice = items.reduce((accumulator, array) => {
            const {qtd, price} = array;
            accumulator = Number (qtd * price + accumulator)
            return accumulator
        }, 0)
        return totalPrice;
    }
    const total = calculateTotal(order)
    
    //chamar este handleSubmit no button enviar
    const handleSubmit = (e) => {
        e.preventDefault();

        const pedido = ({
            "client": client,
            "table": table,
            "products":
                order.map((item) => (
                    {
                        id: Number(item.id),
                        qtd: Number(item.qtd),
                    }))
        })

        postOrder(pedido);
        //limpa o carrinho/pedido
        setOrder([])
    }

    const history = useHistory();
    const readyOrders = () => {
        history.push('/pedidos')
    }
    const server = () => {
        history.push('/servir')
    }

    return (

        <section className="container">

            <Header
            name="Menu"
            />

            <Button text="servir" className="ready-orders" onClick={server}> Servir </Button>
            <section>
            <Button text="pedidos" className="ready-orders" onClick={readyOrders}> Pedidos prontos </Button>
            </section>

                <section className="hall-main">

                    <section className="menu-container">

                    <div className="button-menu">
                        <Button
                            className="button-global"
                            onClick={() => {
                                setSelectedMenu('breakfast')
                            }}
                        >Breakfast
                        </Button>
                        <Button
                            className='button-global'
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
                                    ImgSrc={item.image}
                                    productsFlavor={item.flavor}
                                    productsComplement={item.complement}
                                    productsPrice={item.price}
                                    addOnClick={(e) => handleAdd(e, item)}
                                />
                            </div>
                        ))}
                    </section>

                    

                    <section className="container-order">
                        <div className="info-table-client">
                           
                                <select className="table-select" name="Mesa: " onChange={(e) => setTable(e.target.value)} >
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

                        <hr />
                            <div className="ajuste-total">

                            <h1>Total R$ {total},00</h1>
                            </div>

                            <Button className="button-global" text="enviar para a cozinha" onClick={(e) => handleSubmit(e)}>Enviar</Button>
                        </div>
                    </section>
                </section>
        </section>
    );
}

export default Hall;