import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
// import Products from '../../../services/Auth';

import './Menus.css';

function Menus () {
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

    //   async function handleClick (e) {
    //       try {
    //           e.preventDefault()
    //       }

    //   }
    

    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div  className="container-menus">
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
              <h3> Atendente: {localStorage.getItem("userName")} </h3>

              <select class="menus">
                <option value="">Mesas</option>
                <option value="">01</option>
                <option value="">02</option>
                <option value="">03</option>
                <option value="">04</option>
                <option value="">05</option>
                <option value="">06</option>
                <option value="">07</option>
              </select>

              <p className="paragrafo">EM CONSTRUÇÃO - PÁGINA DE MENUS</p>
        
              <Footer />
            </div> 
        </div>
    )
}

export default Menus;
