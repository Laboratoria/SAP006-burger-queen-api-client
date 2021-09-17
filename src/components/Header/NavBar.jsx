import React from "react";
import NavegationBar from './style'

const MealNavBar = () => {
    return (
        <NavegationBar>
            <button variant="breakfast">Café da Manhã</button>
            <button variant="lunch">Almoço</button>
        </NavegationBar>
    )
}

export default MealNavBar;