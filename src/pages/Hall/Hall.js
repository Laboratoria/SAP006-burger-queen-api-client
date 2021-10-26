import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { postOrder } from '../../postAPI';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Products from '../../components/Products/Products';
import CartItem from '../../components/CartItem/CartItem';
import Header from '../../components/Header/Header';
import ordersDelivery from '../../img/ordersDelivery2.png';
import ordersList from '../../img/ordersList2.png';
import AllDay from '../../img/AllDay2.png';
import breakfast from '../../img/breakfast2.png';
import './hall.css';


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

        <>
            <Header
            name="Menu"
            />
                <section className="hall-main">

                    <section className="menu-container">
                        <div className="box-btn-menu">
                            <Button
                                className="btn-menu"
                                onClick={() => {
                                    setSelectedMenu('breakfast')}}><img className="btn-img" src={breakfast} alt="Pedidos prontos para servir"></img> 
                                    <p className="btn-name"> Breakfast</p>
                            </Button>
                            <Button
                                className="btn-menu"
                                onClick={() => {
                                    setSelectedMenu('all-day')
                                }}><img className="btn-img" src={AllDay} alt="Pedidos prontos para servir"></img>
                                <p className="btn-name"> All Day </p>
                            </Button>
                       </div>

                        <section className="products-container">
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
                    </section>
                    <section className="orders-area"> 
                        <section className="btn-orders-container">
                            <Button text="servir" className="button-orders" onClick={server}>
                                <img className="btn-img" src={ordersDelivery} alt="Pedidos prontos para servir"></img>
                                <p className="btn-name"> Servir </p>
                            </Button>
                            <Button text="pedidos" className="button-orders" onClick={readyOrders}> 
                                <img className="btn-img" src={ordersList} alt="Pedidos prontos para servir"></img>
                                <p className="btn-name"> Prontos </p>
                            </Button>
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
                                        placeholder="Cliente" 
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
                                <div className="total-container">
                                    <h1 className="total">Total R$ {total},00</h1>
                                </div>

                                <Button className="button-global" text="enviar para a cozinha" onClick={(e) => handleSubmit(e)}>Enviar</Button>
                            </div>
                        </section>
                    </section>
                </section>
        </>
    );
}

export default Hall;