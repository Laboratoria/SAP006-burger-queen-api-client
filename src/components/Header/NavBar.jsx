import React from "react";
import NavegationBar from './style'
import GeneralButton from '../Button/style'

const MealNavBar = () => {
    return (
        <NavegationBar>
            <GeneralButton secondary>Café da Manhã</GeneralButton>
            <GeneralButton secondary>Almoço</GeneralButton>
        </NavegationBar>
    )
}

export default MealNavBar;