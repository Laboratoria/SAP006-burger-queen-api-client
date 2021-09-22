import React from "react";
import NavigationBar from './style'
import GeneralButton from '../Button/style'

const MealNavBar = () => {
    return (
        <NavigationBar>
            <GeneralButton secondary>Café da Manhã</GeneralButton>
            <GeneralButton secondary>Almoço</GeneralButton>
        </NavigationBar>
    )
}

export default MealNavBar;