import './Requests.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';


function Pedidos () {
    const history = useHistory();
    
    const btnBack = () => {
        history.push('/mesas')
      }

      const btnMenus = (e) => {
        e.preventDefault()
        history.push('/menus')
      }

      const btnRequests = (e) => {
        e.preventDefault()
        history.push('/pedidos')
      }

      const btnHistoric = (e) => {
        e.preventDefault()
        history.push('/historico')
      }

    return(
        <div className="container-menus">
            <div>
                <NavBar />
            </div>
            <div>
                <Button 
                    label="Menus" 
                    type="submit"
                    onClick={btnMenus} 
                /> 
                <Button 
                    label="Pedidos" 
                    type="submit"
                    onClick={btnRequests} 
                /> 
                <Button 
                    label="Histórico" 
                    type="submit"
                    onClick={btnHistoric} 
                /> 
            </div>
            <div>
                <p>PEDIDOS REALIZADOS AQUI</p>
            </div>
            <h3> Atendente: {localStorage.getItem("userName")} </h3>
            <h3> Mesa: {localStorage.getItem("table")} </h3>

            <p className="paragrafo">EM CONSTRUÇÃO - PÁGINA DE PEDIDOS</p>
            <Button 
                label="Voltar" 
                type="submit"
                onClick={btnBack} 
            /> 
            <Footer /> 
        </div>
    )
}

export default Pedidos;
