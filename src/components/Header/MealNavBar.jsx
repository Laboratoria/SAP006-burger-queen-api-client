import React from "react";
import GeneralButton from '../Button/style.scss';
import './style.scss';

const MealNavBar = () => {
    
    return (
        <section className="meal-navbar">
            <GeneralButton variant="secondary" className="secondary">Café da Manhã</GeneralButton>
            <GeneralButton>Almoço</GeneralButton>
        </section>
    )
}

export default MealNavBar;