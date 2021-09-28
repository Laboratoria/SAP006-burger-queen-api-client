import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
//import Cards from '../../../components/itensMenu/Cards';
// import Footer from '../../../components/footer/Footer';

import './Historic.css';

function Historic () {
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
            Pedidos aqui
          </div>

        </div>
    )
}

export default Historic;
