import React from "react";
import Button from '../Button/Button';
import NavegationBar from './style'

const MealNavBar = () => {
    return (
        <NavegationBar>
            <Button variant="breakfast">Café da Manhã</Button>
            <Button variant="lunch">Almoço</Button>
        </NavegationBar>
    )
}

export default MealNavBar;