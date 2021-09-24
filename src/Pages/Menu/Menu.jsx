import { useState, useEffect } from 'react';
// import { GetProducts }from '../../services/data'
// import OrdersList from '../../components/ItemsMenu/OrdersList';
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import { getStorageKey} from '../../services/storage'
import './style.scss';

const Menu = ()  => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
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
            <button onClick={() => handleClick('breakfast')}>cafe</button>
            <button onClick={() => handleClick('all-day')}>almoço</button>
           

            {selectedProducts.map(item => 
                (   
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                )
            )}

            {/* <OrdersList /> */}
            <MenuOptionsNavBar /> 
        </>
    )
};

export default Menu;
