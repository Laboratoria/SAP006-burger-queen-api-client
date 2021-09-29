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
    // const[total, setTotal] = useState(0);
    // const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [burger, setBurger] = useState([])
    const [addItem, setAddItem] = useState([]);
    const [removeItem, setRemoveItem] = useState([]);
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

    const removeItemOfCart = (item) => {
        console.log(item, 'console do item');
        const removeItemArray = [removeItem];
        console.log(removeItem, 'console do removeItem');

        const countElement = removeItemArray.find(element => element.id === item.id)
        console.log(item.id);
        console.log(countElement, 'console do countElement');
        if(countElement >= 1) {
            countElement.qtd -= 1
            setRemoveItem(itemArray => itemArray.map(
                itemProduct => itemProduct.id === countElement.id ? countElement : itemProduct)
            )
            console.log(setRemoveItem, 'console do setRemoveItem');
        } else if (countElement === 0){
            console.log(countElement, 'console do countElement no else if');
            console.log('caiu no else do removeItemOfCart');
            setRemoveItem([...removeItem]);
        }
    }
    
    const addItemOnCart = (item) => {
        console.log(item);
        const addItemArray = addItem;
        console.log(addItem);

        const countElement = addItemArray.find(element => element.id === item.id)
        console.log(countElement);
        if(countElement) {
            countElement.qtd += 1
            setAddItem(itemArray => itemArray.map(
                itemProduct => itemProduct.id === countElement.id ? countElement : itemProduct)
            )
        } else {
            console.log('caiu no else do addItemOnCart');
            const newItem = { 
                id: item.id,
                name: item.name,
                price: item.price,
                flavor: item.flavor,
                complement: item.complement,
                qtd: 1,
            }
            console.log(newItem);
            setAddItem([...addItem, newItem])
        }
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
                                    addItemOnCart={() => {
                                        addItemOnCart(item)
                                    }}
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
                                <input className="input-order table" value={values.mesa} name="mesa" data-name="input-table" type="number" min="1" max="9" placeholder="0" onChange={handleChange}/> <br />
                                <label>Cliente</label>
                                <input className="input-order clientName" value={values.cliente} name="cliente" type="text" autoComplete="off" onChange={handleChange}/>
                            </form>
                        </article>
                        <article className="text-ordersList">
                            {addItem.map((item) => {
                                return (
                                    <SelectedItem
                                        key={item.id}
                                        name={item.name}
                                        price={item.price}
                                        flavor={item.flavor}
                                        complement={item.complement}
                                        qtd={item.qtd}
                                        removeItemOfCart={() => removeItemOfCart(item)}
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
