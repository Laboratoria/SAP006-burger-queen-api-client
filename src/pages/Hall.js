import { React, useState, useEffect } from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import Products from '../components/Products';
import CartProducts from '../components/CartProducts';
import { postOrder } from '../postAPI';
import { useHistory } from 'react-router-dom';

import '../styles/products.css';
import '../global.css';
import '../styles/hall.css'

function Hall() {
    const token = localStorage.getItem('token');

    //criamos um estado inicial passamos todos os
    const [products, setProducts] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState('breakfast');
    const [order, setOrder] = useState([]);
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');

    //sair
    const history = useHistory();
    const handleSignOut = (e) => {
        e.preventDefault();
        history.push('/login')
        localStorage.clear();
    }

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
            const {qtd, price} =array;
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

    return (

        <div className="hall">
            <section className="menu">
                <h1>Salão</h1>
                <Button text="Sair" className='button-sair' onClick={handleSignOut} />
                  
                <section className="">
                    <div className="button-menu" >
                        <Button className="buttonMenu" onClick={() => { setSelectedMenu('breakfast') }}>Breakfast</Button>
                        <Button className='buttonMenu' onClick={() => { setSelectedMenu('all-day') }}>All Day</Button>
                    </div>
                </section>

                <select onChange={(e) => setTable(e.target.value)} name="Mesa: " className="numero-mesas">
                    <option value="">Mesa</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                </select>
            

                <Input className="input-hall"
                    placeholder="Insira o nome do cliente"
                    name="client"
                    value={client}
                    onChange={onChangeClient} />
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

                <section className="carrinho">
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
                    <h1>Total R$ {total},00</h1>

                    <Button className="button" text="enviar para a cozinha" onClick={(e) => handleSubmit(e)} />

                </section>
            </div>
        </div>
    );
}

export default Hall;