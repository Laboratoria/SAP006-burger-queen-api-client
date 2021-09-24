import { useState, useEffect } from 'react';
// import { GetProducts }from '../../services/data'
// import OrdersList from '../../components/ItemsMenu/OrdersList';
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import {saveStorageKey} from '../../services/storage'
import './style.scss';

const Menu = ()  => {
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                }
            })
                .then(response => response.json())
                .then((res) => {
                    saveStorageKey(res.token);
                    console.log(res.token)
                    return res;
                })
                .catch((error) => console.log(error, 'erro ao acessar a lista de produtos'))
    }, [token])

    const handleClick = (json) => { 
        setProducts(json)
            const breakfast = json.filter((item) => item.type === 'breakfast')
            setProducts(breakfast)
    }

    return (
        <>
            <button onClick={handleClick}>cafe</button>
            <button onClick={handleClick}>almoço</button>

            {products.map(item => 
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
