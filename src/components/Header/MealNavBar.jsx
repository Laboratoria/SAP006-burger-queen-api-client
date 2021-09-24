import React from "react";
import '../Button/style.scss';
import GeneralButton from '../Button/Button'
import './style.scss';

const MealNavBar = () => {
    
    return (
        <section className="meal-navbar">
            <GeneralButton className="GeneralButton">Café da Manhã</GeneralButton>
            <GeneralButton className="GeneralButton">Almoço</GeneralButton>
        </section>
    )
}

export default MealNavBar;