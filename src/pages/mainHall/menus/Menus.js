import React, { useState, useEffect, } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import ItemCard from '../../../components/itensMenu/ItemCard';
import CartArea from '../../../components/itensMenu/CartArea';

import './Menus.css';


function Menus () {

    const [allProducts, setAllProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const history = useHistory();
    const token = localStorage.getItem('userToken');
    const [itemsList, setItemsList] = useState([]);
   
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
      const filterItensByType = allProducts.filter((item) => item.sub_type === meal);
      setSelectedProducts(filterItensByType)
    }

    const removeButton = (event, index) => {
      event.preventDefault();
      const updatedItemsList = [...itemsList];
      updatedItemsList.splice(index, 1);
      setItemsList(updatedItemsList);
    };

    return(
        <>
          <div>
            <NavBar />
          </div>

            <div className="container-btn-menu">
              <Button 
                text="Menus" 
                type="submit"
                onClick={btnMenus} 
                className="buttons buttons-menu" 
              /> 
              <Button 
                text="Pedidos" 
                type="submit"
                onClick={btnRequests} 
                className="buttons buttons-menu" 
              /> 
              <Button 
                text="Histórico" 
                type="submit"
                onClick={btnHistoric} 
                className="buttons buttons-menu" 
              /> 
            </div>
            <div className="container-cardapio">
              <Button 
                text="Café da Manhã"
                onClick={() => filterMenu('breakfast')}
                className="btn-cardapio" 
              />
              <Button 
                text="Hamburguer"
                onClick={() => filterMenu('hamburguer')}
                className="btn-cardapio" 
              />
              <Button 
                text="Aperitivos"
                onClick={() => filterMenu('side')}
                className="btn-cardapio" 
              />
              <Button 
                text="Bebidas"
                onClick={() => filterMenu('drinks')}
                className="btn-cardapio" 
              />
            </div>
            
            <div>
              {selectedProducts.map((item) => {
                return (
                  // aqui seria o cardItem e nao os itens
                  <ItemCard 
                    {...item}
                      key={item.id}
                      onClick={() => {
                        setItemsList([...itemsList, { name: item.name, price: item.price }])
                      }} 
                  />
                )
              })}
            </div>
            <CartArea 
              arrItem={itemsList}
              removeButton={removeButton}>
            </CartArea>
          <Footer />
        </>
    );
};

export default Menus;