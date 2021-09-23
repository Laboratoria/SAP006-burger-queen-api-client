import { useHistory } from "react-router-dom";

import MealNavBar from '../../components/Header/NavBar';
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import GeneralButton from '../../components/Button/style';
import Button from '../../components/Button/Button';

import { removeStorageKey } from '../../services/storage';

// import { tablesDisplay, div } from './style';

const Tables = () => {

    const history = useHistory();

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        history.push('/menu');
    };

    const handleLogout = () => {
        removeStorageKey();
        history.push('./')  
    }

    return (
        <main> 
            <MealNavBar />          
            <section>
                <div>
                    <Button>1</Button>
                    <Button>2</Button>
                </div>
                <div>
                    <Button>3</Button>
                    <Button>4</Button>
                </div>
                <div>
                    <Button>5</Button>
                    <Button>6</Button>
                </div>
                <div>
                     <Button>7</Button>
                    <Button>8</Button>
                </div>
                <Button>9</Button>
            </section>
            <input type="text" placeholder="Nome do Cliente"/>
            <GeneralButton onClick={handleOrderSubmit}>Confirmar Pedido</GeneralButton>
            <MenuOptionsNavBar />
            <button onClick={handleLogout}>Logout</button>
        </main>
    )
}

export default Tables;