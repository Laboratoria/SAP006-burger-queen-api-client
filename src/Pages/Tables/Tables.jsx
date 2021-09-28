import React from "react";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
// import Header from '../../components/Header/Header'
import MealNavBar from '../../components/Header/MealNavBar';
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import GeneralButton from '../../components/Button/Button';
import '../../components/Button/style.scss';
import './tables.scss';

const Tables = ({data, setData}) => {

    const history = useHistory();

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        history.push('/menu');
    };

    const [values, setValues] = useState({
        'mesa': '',
        'cliente': '', 
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
        console.log(event.target.value);
    }
  
    const handleClick = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
        console.log(event.target.parentNode.value);
    }

    // const getNumberOfTable = e => {
    //     const table = e.target.attributes.getNamedItem("numberTable").value;
    //     console.log();
    //     console.log(table);
    // }

    return (
        <main> 
            {/* <Header /> */}
            <MealNavBar />
            <h2 className="tables-title">MESAS</h2>
            <section data-tables="numberTable" className="tables-display">
                <div className="doubleTables">
                    <GeneralButton
                        variant="sixth"
                        name="mesa"
                        value="1"
                        className="table"
                        data-tables="numberTable"
                        onClick={handleClick}>1
                    </GeneralButton>
                    <GeneralButton 
                        variant="sixth"
                        name="mesa"
                        className="table"
                        data-tables="numberTable"
                        onClick={handleClick}>2
                    </GeneralButton>
                </div>
                <div className="doubleTables">
                    <GeneralButton
                        variant="sixth"
                        name="mesa"
                        className="table"
                        data-tables="numberTable"
                        onClick={handleClick}>3
                    </GeneralButton>
                    <GeneralButton 
                        variant="sixth"
                        name="mesa"
                        className="table"
                        data-tables="numberTable"
                        onClick={handleClick}>4
                    </GeneralButton>
                </div>
                <div className="doubleTables">
                    <GeneralButton 
                        variant="seventh"
                        name="mesa"
                        className="table"
                        data-tables="numberTable"
                        onClick={handleClick}>5
                    </GeneralButton>
                    <GeneralButton 
                        variant="seventh"
                        name="mesa"
                        className="table"
                        data-tables="numberTable"
                        onClick={handleClick}>6
                    </GeneralButton>
                </div>
                <div className="doubleTables">
                    <GeneralButton 
                        variant="seventh"
                        name="mesa"
                        className="table"
                        data-tables="numberTable"
                        onClick={handleClick}>7
                    </GeneralButton>
                    <GeneralButton 
                        variant="seventh"
                        name="mesa"
                        className="table"
                        data-tables="numberTable"
                        onClick={handleClick}>8
                    </GeneralButton>
                </div>
            </section>
            <form className="form-submitOrder">
                <input className="input-clientName" name="cliente" data-name="input-clientName" type="text" placeholder="Nome do Cliente" onChange={handleChange}/>
                <GeneralButton onClick={handleOrderSubmit} variant="nineth" className="btn-submitOrder">Fazer Pedido</GeneralButton>
            </form>
            <MenuOptionsNavBar />
        </main>
    )
}

export default Tables;