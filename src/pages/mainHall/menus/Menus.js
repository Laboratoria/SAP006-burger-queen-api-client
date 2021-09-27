import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/button/Button';
import construcao2 from '../../../img/construcao2.jpg'; 

import './Menus.css';

function Menus () {
    const history = useHistory();
    
    const btnBack = () => {
        history.push('/mesas')
      }

      
    return(
        <div className="container-menus">
            <div>

            </div>
            <h3> Atendente: {localStorage.getItem("userName")} </h3>
            <h3> Mesa: {localStorage.getItem("table")} </h3>

            <p className="paragrafo">EM CONSTRUÇÃO</p>
            <p className="paragrafo">Terá toda a parte de menus e resumo de pedidos</p>
            <img src={construcao2} alt="counter" className="construcao"/>
            <>
            <Button 
                label="Voltar" 
                type="submit"
                onClick={btnBack} 
            /> 
            </>
        </div>
    )
}

export default Menus;
