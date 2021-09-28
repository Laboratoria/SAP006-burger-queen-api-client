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
        const compileBurger = products.filter((item) => item.sub_type === 'hamburguer')
        setBurger(compileBurger)     
    }

    const handleChange = (event) => {
        let {name, value} = event.target;
        setValues({
            ...values,
            [name]: value, 
        })
        console.log(value);
    }

    const removeItemOnCart = (item) => {
        console.log(item);
    }
    
    const addItemOnCart = (item) => {
        console.log(item);
    }

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
                                    // onClick={() => {
                                    //     setAddItem([...addItem, 
                                    //         {
                                    //             id: item.id,
                                    //             name: item.name,
                                    //             price: item.price,
                                    //             image: item.image,
                                    //             flavor: item.flavor,
                                    //             complement: item.complement,
                                    //             qtd: 1,
                                    //         }
                                    //     ])
                                    // }}
                                />  
                            )
                        )}
                    </section>
                </div>
                <div className="right-side cartList-display">
                    <section className="section-ordersList">
                        <article className="text-orders">
                            <h3>Pedidos</h3>
                            <form>
                                <select name="Mesa">
                                    <option>Escolha a mesa</option>
                                    <option name="1" value="1" onChange={handleChange}>1</option>
                                    <option name="2" value="2" onChange={handleChange}>2</option>
                                    <option name="3" value="3" onChange={handleChange}>3</option>
                                    <option name="4" value="4">4</option>
                                    <option name="5" value="5">5</option>
                                    <option name="6" value="6">6</option>
                                    <option name="7" value="7">7</option>
                                    <option name="8" value="8">8</option>
                                    <option name="9" value="9">9</option>
                                </select>
                                <input className="input-clientName" name="cliente" data-name="input-clientName" type="text" placeholder="Nome do Cliente" onChange={handleChange}/>
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
                                        removeItemOnCart={() => removeItemOnCart(item)}
                                        addItemOnCart={() => addItemOnCart(item)}
                                    />
                                )
                            })}
                        </article>                        
                        <p>Total: R$ {totalPrice} </p>
                        <hr/>
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
