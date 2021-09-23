import React from "react";
// import NavigationBar from './style'
import GeneralButton from '../Button/style'

const MealNavBar = () => {
    return (
        <div>
            <GeneralButton secondary>Café da Manhã</GeneralButton>
            <GeneralButton secondary>Almoço</GeneralButton>
        </div>
    )
}

export default MealNavBar;