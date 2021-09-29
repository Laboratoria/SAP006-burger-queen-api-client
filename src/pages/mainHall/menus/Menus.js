import React, { useState, useEffect, } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Itens from '../../../components/itensMenu/Itens';

import './Menus.css';


function Menus () {

    const [allProducts, setAllProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    // const [breakfast, setBreakfast] = useState([])
    // const [allDay, setAllDay] = useState([])
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

    const [name, setName] = useState('');
    const handleChange = (e) => {
      setName(e.target.value)
    };

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
              <h3> Atendente: {localStorage.getItem("userName")} </h3>
              <h3> Mesa:
                <select>
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                  <option value="">06</option>
                  <option value="">07</option>
                </select>  
              </h3>
              <label>Nome do Cliente</label>
              <input onChange={handleChange} className="input" type="text" name="nameClient"></input>
              {name}
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
            <div>
              {selectedProducts.map((item) => {
                return (
                  <Itens
                    key={item.id} 
                    id={item.id} 
                    name={item.name}
                    flavor={item.flavor}
                    complement={item.complement}
                    price={item.price}
                    image={item.image}
                    type={item.type}
                  />
                )
              })}
            </div>
            
          <Footer />
        </div>
    );
};

export default Menus;