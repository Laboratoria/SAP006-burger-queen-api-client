import { useEffect, useState } from 'react';
import { getProducts }from '../../services/data'
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import './style.scss';

const Menu = ()  => {
    // const [order, setOrder] = useState([]);
    const [values, setValues] = useState({
        menu: [],
        order: [],
        breakfast: [],
        burgers: [],
    });

    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value, 
    //     })
    // }

    useEffect(() => {
            getProducts(values)
            .then((data) => {
                const breakfast = values.filter((item) => item.subtype === 'breakfast')
                setValues(breakfast)
                const burgers = values.filter((item) => item.subtype === 'burgers')
                setValues(burgers)
            })
    })

    return (
        <>
            <div className='div-style'>
                Menu
            </div>
            {/* <OrdersList/> */}
            <MenuOptionsNavBar/> 
        </>
    )
};

export default Menu;
