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
    const STORAGE_KEY = 'burger-queen-api-client'
    const getStorageKey = () => localStorage.getItem(STORAGE_KEY)
    const token = getStorageKey();

    useEffect(() => {
      const apiURL = 'https://lab-api-bq.herokuapp.com';
      const apiProducts = `${apiURL}/products`;
      console.log(token)

      fetch(apiProducts, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token',
          }
      })
        .then((response) => response.json())
        .then((res) => {                    
          console.log(res)
          setAllProducts(res)
          const breakfast = res.filter((item) => item.type === 'breakfast')
          setSelectedProducts(breakfast)
          return res;
        });
    }, [token]);  


// useffect - metodo que da inicio a renderização e só 1 coisa com as promisses juntas, sobre a condição de um array
    
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
            <p>EM CONSTRUÇÃO - PÁGINA DE MENUS</p>
        

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
    )
}

export default Menus;
