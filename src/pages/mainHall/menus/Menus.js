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
    const history = useHistory();
    const token = localStorage.getItem('userToken');
    
    // const STORAGE_KEY = 'burger-queen-api-client'
    // const getStorageKey = () => localStorage.getItem(STORAGE_KEY)
    // const token = getStorageKey();    
    // useffect - metodo que da inicio a renderização e só 1 coisa com as promisses juntas, sobre a condição de um array

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
            console.log(json)
            setAllProducts(json)
            const menus = json.filter((item) => item.type)
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

    const handleClick = (meal) => {
      const selectedMenu = allProducts.filter((item) => item.type === meal)
      setSelectedProducts(selectedMenu)
    }

    const [nome, setNome] = useState('');
    const handleChange = (e) => {
      setNome(e.target.value)
  };

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
            <h3> Mesa: {localStorage.getItem("userName")} </h3>
            <label>Nome do Cliente</label>
            <input onChange={handleChange} className="input" type="text" name="nameClient"></input>
            {nome} 

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
                  image={item.image}
                  type={item.type}
                />)) 
              }
          <Footer />
        </div>
    );
};

export default Menus;