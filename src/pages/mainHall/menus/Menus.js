import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Input
import './Menus.css';


function Menus () {

    const history = useHistory();
    const [allProducts, setAllProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    
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

    const handleClick = (meal) => { 
    const selectedMenu = allProducts.filter((item) => item.type === meal)
      setSelectedProducts(selectedMenu)
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

            <h3> Atendente: {localStorage.getItem("userName")} </h3>

            <select>
              <option value="">Mesas</option>
              <option value="">01</option>
              <option value="">02</option>
              <option value="">03</option>
              <option value="">04</option>
              <option value="">05</option>
              <option value="">06</option>
              <option value="">07</option>
            </select>        

            <Button 
              label="Café da manha"
              onClick={handleClick}
            />
            <Button 
              label="Almoço/Jantar"
              onClick={handleClick}
            />
            <section
              {...setSelectedProducts}       
            />
              {selectedProducts.map(item => (<Itens 
                id={item.id} 
                name={item.name}
                flavor={item.flavor}
                complement={item.complement}
                price={item.price}
                image={item.image}/>)) 
              }
          <Footer />
        </div>
    );
};

export default Menus;