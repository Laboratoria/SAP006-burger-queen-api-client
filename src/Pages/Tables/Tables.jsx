import React from "react";
import { useHistory } from "react-router-dom";
// import Header from '../../components/Header/Header'
import MealNavBar from '../../components/Header/MealNavBar';
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import GeneralButton from '../../components/Button/Button';
import '../../components/Button/style.scss';
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
            <MealNavBar />
            <section className="tables-display">
                <div className="doubleTables">
                    <GeneralButton className="table">1</GeneralButton>
                    <GeneralButton className="table">2</GeneralButton>
                </div>
                <div className="doubleTables">
                    <GeneralButton className="table">3</GeneralButton>
                    <GeneralButton className="table">4</GeneralButton>
                </div>
                <div className="doubleTables">
                    <GeneralButton className="table">5</GeneralButton>
                    <GeneralButton className="table">6</GeneralButton>
                </div>
                <div className="doubleTables">
                     <GeneralButton className="table">7</GeneralButton>
                    <GeneralButton className="table">8</GeneralButton>
                </div>
                <GeneralButton className="table">9</GeneralButton>
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