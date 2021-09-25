import { useState, useEffect } from 'react';
import { getStorageKey} from '../../services/storage'
// import { GetProducts }from '../../services/data'
import CartList from '../../components/ItemsMenu/CartList';
import ItemCard from '../../components/ItemsMenu/ItemCard'
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import GeneralButton from '../../components/Button/Button';
import MealNavBar from '../../components/Header/MealNavBar'
import Header from '../../components/Header/Header';
import './style.scss';

const Menu = ()  => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [addItem, setAddItem] = useState([]);

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

                    return res;
                })
                .catch((error) => console.log(error, 'erro ao acessar a lista de produtos'))
    }, [token])

    const handleClick = (meal) => { 
        const selectedMenu = products.filter((item) => item.type === meal)
        setSelectedProducts(selectedMenu)
    }

    return (
        <>
            <Header />
            <MealNavBar />
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
                            onClick={() => {
                                setAddItem([...addItem, 
                                    {
                                        id: item.id,
                                        name: item.name,
                                        price: item.price,
                                        flavor: item.flavor,
                                        image: item.image
                                    }
                                ])
                            }}
                        />
                    )
                )}
            </section>
            <GeneralButton variant="fifth" className="confirm-order">Confirmar pedido</GeneralButton>        

            <CartList />
            <MenuOptionsNavBar /> 
        </>
    )
};

export default Menu;
