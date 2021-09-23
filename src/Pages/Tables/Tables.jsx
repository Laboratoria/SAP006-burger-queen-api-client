import React from "react";
import { useHistory } from "react-router-dom";
// import Header from '../../components/Header/Header'
// import MealNavBar from '../../components/Header/MealNavBar';
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import Button from '../../components/Button/Button';
import GeneralButton from '../../components/Button/style.scss';
import './tables.scss';

const Tables = () => {

    const history = useHistory();

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        history.push('/menu');
    };

    return (
        <main> 
            {/* <Header /> */}
            {/* <MealNavBar /> */}
            <section className="tables-display">
                <div className="doubleTables">
                    <Button className="table">1</Button>
                    <Button className="table">2</Button>
                </div>
                <div className="doubleTables">
                    <Button className="table">3</Button>
                    <Button className="table">4</Button>
                </div>
                <div className="doubleTables">
                    <Button className="table">5</Button>
                    <Button className="table">6</Button>
                </div>
                <div className="doubleTables">
                     <Button className="table">7</Button>
                    <Button className="table">8</Button>
                </div>
                <Button className="table">9</Button>
            </section>
            <form className="form-submitOrder">
                <fieldset>oi</fieldset>
                <input className="input-clientName" type="text" placeholder="Nome do Cliente"/>
                <GeneralButton onClick={handleOrderSubmit} className="btn-submitOrder">Confirmar Pedido</GeneralButton>
            </form>
            <MenuOptionsNavBar />
        </main>
    )
}

export default Tables;