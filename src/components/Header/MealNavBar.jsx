import React from "react";
import '../Button/style.scss';
import GeneralButton from '../Button/Button'
import './style.scss';

const MealNavBar = () => {
    
    return (
        <section className="meal-navbar">
            <GeneralButton 
                variant="fourth" 
                className="GeneralButton meal">
                Café da Manhã
            </GeneralButton>
            <GeneralButton 
                variant="fourth" 
                className="GeneralButton meal">
                Almoço
            </GeneralButton>
        </section>
    )
}

export default MealNavBar;