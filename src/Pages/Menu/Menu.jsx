import { useState, useEffect } from 'react';
import { getStorageKey} from '../../services/storage'
// import { GetProducts }from '../../services/data'
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

    const token = getStorageKey();

    useEffect(() => {
        console.log(token)

        fetch('https://lab-api-bq.herokuapp.com/products', {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                }
            })
                .then(response => response.json())
                .then((res) => {                    
                    console.log(res)
                    setProducts(res)
                    const breakfast = res.filter((item) => item.type === 'breakfast')
                    setSelectedProducts(breakfast)
                    const burger = res.filter(item => item.id === 33 || item.id === 42)
                    setBurger(burger);
                    // const burger = res.filter((item) => item.sub_type === 'hamburguer')
                    // setSelectedProducts(breakfast || burger)

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
                                    flavor={item.flavor}
                                    img={item.image}
                                    complement={item.complement}
                                    onClick={() => {
                                        setAddItem([...addItem, 
                                            {
                                                id: item.id,
                                                name: item.name,
                                                price: item.price,
                                                flavor: item.flavor,
                                                complement: item.complement,
                                                image: item.image,
                                                qtd: 1,
                                            }
                                        ])
                                    }}
                                />  
                            )
                        )}
                    </section>
                </div>
                <div className="right-side cartList-display">
                    <section className="section-ordersList">
                        <article className="text-orders">
                            <h3>Pedidos</h3>
                            <h3>Mesa</h3>
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
