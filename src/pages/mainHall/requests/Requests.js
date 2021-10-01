import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Cards from '../../../components/itensMenu/Cards';

import './Requests.css';

export default function Requests () {
    const history = useHistory();

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
        <div>

            <div>
                <NavBar />
            </div>

            <div className="container-btn-menu">
                <Button 
                    label="Menus" 
                    type="submit"
                    onClick={btnMenus} 
                    className="buttons buttons-menu"
                /> 
                <Button 
                    label="Pedidos" 
                    type="submit"
                    onClick={btnRequests} 
                    className="buttons buttons-menu"
                /> 
                <Button 
                    label="Histórico" 
                    type="submit"
                    onClick={btnHistoric} 
                    className="buttons buttons-menu"
                /> 
            </div>
            <Cards />
            
        <Footer />
        </div>
    );
};
