import { useEffect, useState } from 'react';
import { getProducts }from '../../services/data'

const Menu = (products)  => {
    const [values, setValues] = useState({
        menu: [],
        order: [],
        breakfast: [],
        burgers: [],
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

    useEffect(() => {
            getProducts()
            .then((data) => {
                const breakfast = data.filter(item => item.subtype === 'breakfast')
                handleChange({breakfast});
                const burgers = data.filter(item => item.subtype === 'burgers')
                handleChange(burgers);
            })
    })

    return (
        <>
            <div className='div-style'>
                Menu
            </div> 
            {/* <cartArea arrItem={} /> */}
        </>
    )
};

export default Menu;
