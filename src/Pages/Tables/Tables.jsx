// import { Redirect } from 'react-router-dom';

import MealNavBar from '../../components/Header/NavBar';
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import GeneralButton from '../../components/Button/style';

const Tables = () => {

    return (
        
        <div> 
            <MealNavBar />          
            <section>
                <ul>
                    <li>Mesa 1</li>
                    <li>Mesa 2</li>
                    <li>Mesa 3</li>
                    <li>Mesa 4</li>
                    <li>Mesa 5</li>
                    <li>Mesa 6</li>
                    <li>Mesa 7</li>
                    <li>Mesa 8</li>
                    <li>Mesa 9</li>
                </ul>
            </section>
            <input type="text" placeholder="Nome do Cliente"/>
            <GeneralButton>Confirmar Pedido</GeneralButton>
            <MenuOptionsNavBar />
        </div>
    )
}

export default Tables;