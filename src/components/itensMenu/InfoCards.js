import React from 'react';
import Button from '../button/Button';

import './Style.css';


export default function InfoCards ({number, price}) {

    return(
        <div className="container-cards">
            <>
                <h3>Pedido: {number}</h3>
            </>
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
                <p>Produtos aqui</p>
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
