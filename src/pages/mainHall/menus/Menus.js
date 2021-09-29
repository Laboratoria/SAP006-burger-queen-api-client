import React, { useState, useEffect, } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Itens from '../../../components/itensMenu/Itens';
import InfoCards from '../../../components/itensMenu/InfoCards';

import './Menus.css';


function Menus () {

    const [allProducts, setAllProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const history = useHistory();
    const token = localStorage.getItem('userToken');
    

    useEffect(() => {
      fetch('https://lab-api-bq.herokuapp.com/products', {
          method:'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          }
        })
          .then(response => response.json())
          .then((json) => {                                
            setAllProducts(json)
            const menus = json.filter((item) => item.type === 'breakfast')
            console.log(menus)
            setSelectedProducts(menus)
            return json;
          });
      }, [token]);
    
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

    const filterMenu = (meal) => {
      const filterItensByType = allProducts.filter((item) => item.type === meal);
      setSelectedProducts(filterItensByType)
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
            <div>
              <Button 
                label="Café da manha"
                onClick={() => filterMenu('breakfast')}
                className="buttons buttons-menu" 
              />
              <Button 
                label="Almoço/Jantar"
                onClick={() => filterMenu('all-day')}
                className="buttons buttons-menu" 
              />
            </div>
              <InfoCards />
            <div>
              {selectedProducts.map((item) => {
                return (
                  <Itens
                    {...item}
                    key={item.id} 
                  />
                )
              })}
            </div>
            
          <Footer />
        </div>
    );
};

export default Menus;