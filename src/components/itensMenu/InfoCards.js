import React, { useState } from 'react';
import Button from '../button/Button';

import './Style.css';


export default function InfoCards ({price}) {

    // const [ valor, setValor ] = useState(1);
    
    // function most() {
    //     setValor(valor + 1);
    // }

    // function anyLess() {
    //     setValor(valor - 1);
    // }


    return(
        <div className="container-cards">
            <h3>Carrinho</h3>
            <div className="card">
                <label className="info-card">Atendente: {localStorage.getItem("userName")} </label>
                <label className="info-card">Mesa:
                    <select>
                        <option value="">01</option>
                        <option value="">02</option>
                        <option value="">03</option>
                        <option value="">04</option>
                        <option value="">05</option>
                        <option value="">06</option>
                        <option value="">07</option>
                    </select>  
                </label>
                <label className="info-card">Cliente: <input className="input-client" type="text" name="nameClient"></input></label>
            </div>
            <div>
                {/* <>
                    Quantidade no carrinho: {valor}
                </>
                <Button label="+" onClick={most}/>
                <Button label="-" onClick={anyLess}/> */}
                
                <p>Total: R${price}</p>
            </div>
            <div>
            <Button
                label="Fazer Pedido"
                className="buttons btn-request" 
            />
             </div>
        </div>
    );
};
