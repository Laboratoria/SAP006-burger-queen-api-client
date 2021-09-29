import { useState, useEffect } from 'react';
import { getStorageKey} from '../../services/storage'
import { GetProducts }from '../../services/data'
import { ItemCard, SelectedItem, totalPrice } from '../../components/ItemsMenu/ItemsMenu'
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import GeneralButton from '../../components/Button/Button';
// import MealNavBar from '../../components/Header/MealNavBar'
import Header from '../../components/Header/Header';
import './style.scss';

const Menu = ()  => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    // const [orders, setOrders] = useState([]);
    const [burger, setBurger] = useState([])
    const [addItem, setAddItem] = useState([]);
    const[total, setTotal] = useState(0);
    const [values, setValues] = useState({
        'mesa': '',
        'cliente': '', 
    })

    const token = getStorageKey();
    useEffect(() => {
        addItemOnCart()
    }, [addItem]) // eslint-disable-line

    useEffect(() => {
        GetProducts()

        .then((res) => {                    
            console.log(res)
            setProducts(res)
            const breakfast = res.filter((item) => item.type === 'breakfast')
            setSelectedProducts(breakfast)
            const burger = res.filter((item) => item.sub_type === 'hamburguer')
            setBurger(burger);

            return res;
        })
        .catch((error) => console.log(error, 'Erro ao acessar a lista de produtos'))
    }, [token])

    const handleClick = (meal) => { 
        const selectedMenu = products.filter((item) => item.type === meal)
        setSelectedProducts(selectedMenu)  
        // const compileBurger = products.filter((item) => item.sub_type === 'hamburguer')
        // setBurger(compileBurger)     
    }

    const handleChange = (event) => {
        let {name, value} = event.target;
        setValues({
            ...values,
            [name]: value, 
        })
        console.log(value);
    }

    const removeItemOnCart = () => {
        let countItems = addItem.reduce(function (allItems, currentItem) {
            if (allItems[currentItem.name]) {
                allItems[currentItem.name].qtd--;    
            } else {
                allItems[currentItem.name] = currentItem;
                console.log(allItems);
                console.log(currentItem);
            }
            return allItems;
        }, {})
        console.log(countItems, 'console remove');
        return countItems;
    }
    
    const addItemOnCart = (item) => {
        const addItemArray = addItem;
        console.log(addItem);

        const countElement = addItemArray.find(element => element === item)
        if(countElement) {
            countElement.qtd += 1
            console.log(countElement);
            setAddItem(teste => teste.map(
                teste2 => teste2.id === countElement.id ? countElement : teste2)
            )
        } else {
            // .qtd = 1;
            // setAddItem([...addItem])
        }
    }
    // let countItems = addItem.reduce(function (allItems, currentItem) {
    //     if (allItems[currentItem.name]) {
    //         allItems[currentItem.name].qtd++;
    //         setAddItem(allItems[currentItem.name])
    //             // .map(item => item.name === 
    //             // allItems[currentItem.name] ? allItems : item)
    //         console.log('oi')
    //     } else {
    //         allItems[currentItem.name] = currentItem;
    //         console.log('tchau')
    //         // console.log(allItems);
    //         // console.log(currentItem);
    //     }
    //     return allItems;
    // }, {})
    // console.log(countItems, 'console add');
    // return countItems;

    return (
        <>
            <Header />
            <main className="main">
                {/* <MealNavBar /> */}
                <div className="left-side">
                    <header className="select-menu-perMeal">
                        <GeneralButton variant="third" onClick={() => handleClick('breakfast')}>Café da manhã</GeneralButton>
                        <GeneralButton variant="third" onClick={() => handleClick('all-day')}>Almoço</GeneralButton>
                    </header>
                    <section className="products-list-perMeal" {...setSelectedProducts}>

                        {selectedProducts.map(item => 
                            (   
                                <ItemCard 
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    img={item.image}
                                    flavor={item.flavor}
                                    complement={item.complement}
                                    addItemOnCart={() => {
                                        addItemOnCart(item)
                                        // item.qtd >= 1 ? 
                                        //     addItemOnCart(item) && console.log('oi')
                                        //     : 
                                        setAddItem([...addItem, 
                                            {
                                                id: item.id,
                                                name: item.name,
                                                price: item.price,
                                                image: item.image,
                                                flavor: item.flavor,
                                                complement: item.complement,
                                                qtd: 1,
                                            }
                                        ]) 
                                    }}

                                        // setAddItem(teste => teste.map(
                                        //     teste2 => teste2.id === countElement.id ? countElement : teste2)
                                        // )
                                />  
                            )
                        )}
                    </section>
                </div>
                <div className="right-side cartList-display">
                    <section className="section-ordersList">
                        <article className="text-orders">
                            <h3 className="title-orders">Pedidos</h3>
                            <form className="form-inputs-order">
                                <label>Mesa</label>
                                <input className="input-order table" name="mesa" data-name="input-table" type="number" min="1" max="9" placeholder="0" onChange={handleChange}/> <br />
                                <label>Cliente</label>
                                <input className="input-order clientName" name="cliente" type="text" autoComplete="off" onChange={handleChange}/>
                            </form>
                        </article>
                        <article className="text-ordersList">
                            {addItem.map((item) => {
                                return (
                                    <SelectedItem
                                        key={item.id}
                                        name={item.name}
                                        price={item.price}
                                        // pricePerQtd={}
                                        flavor={item.flavor}
                                        complement={item.complement}
                                        qtd={item.qtd}
                                        removeItemOnCart={() => removeItemOnCart()}
                                        addItemOnCart={() => addItemOnCart(item)}
                                    />
                                )
                            })}
                        </article>                        
                        <hr/>
                        <p>Total: R$ {totalPrice} </p>
                        <GeneralButton variant="fifth"  className="btn-confirmOrder">
                            Confirmar pedido
                        </GeneralButton>
                    </section>
                </div>
                <MenuOptionsNavBar /> 
            </main>
        </>
    )
};

export default Menu;
