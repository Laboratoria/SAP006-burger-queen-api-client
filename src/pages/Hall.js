import { React, useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button';

import '../global.css';
import Products from '../components/Products';



function Hall() {
    /*const [formValues, setFormValues] = useState({});

     const handleSelectChange = (e) => {
         const {name, value} = e.target;
         setFormValues({...formValues, [name]: value});
     };*/

    const token = localStorage.getItem('token');

    const [client, setClient] = useState('');
    const onChangeClient = (e) => {
        const name = e.target.value
        setClient(name)
    };

    const [menuCafe, setMenuCafe] = useState([]);


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
            const Breakfast = json.filter((produtos) => produtos.type === 'breakfast')
            // const allDay = json.filter((produtos) => produtos.type === 'all-day')
            setMenuCafe(Breakfast)
            // console.log(allDay);
        })



    const handleSubmit = (e) => {
        e.preventDefault();
        /*const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);*/
    }
    return (


        <section className="container">
            <h1>Salão</h1>

            <select name="Mesa" onChange={handleSubmit}>
                <option valeu="mesa01">Mesa 01</option>
                <option valeu="mesa02">Mesa 02</option>
                <option valeu="mesa03">Mesa 03</option>
                <option valeu="mesa04">Mesa 04</option>
                <option valeu="mesa05">Mesa 05</option>
            </select>

            <Input
                className="input-hall"
                placeholder="Insira o nome do cliente"
                name="client"
                value={client}
                onChange={onChangeClient} />

            <section className="">
                <Button
                    buttonClass="menu-button"
                    buttonOnClick={() => {
                    }}
                >Breakfast
                </Button>
                <Button

                    buttonClass="menu-button"
                    buttonOnClick={() => {
                    }}
                >All Day
                </Button>
            </section>


            <section>

                <div className="menu">
                    {menuCafe && menuCafe.map((products, index) => (
                <Products
                            divClassName="container-food"
                            divKey={Math.random()}
                            productsName={products.name}
                            divId={products.id}
                            ImgSrc={products.image}
                            productsPrice={products.price}
                            qnt={products.qnt}
                            productsNameKey={products.id}
                />
                    ))}

                </div>

            </section>



        </section>
    );
}

export default Hall;