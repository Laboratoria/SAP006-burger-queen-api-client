import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TotalOrders, UpdateOrderStatus } from '../../../services/Products';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Orders from '../../../components/itensMenu/Orders';

import './Requests.css';

export default function Requests () {

    const history = useHistory();
    const [allOrders, setAllOrders] = useState([]);
    const token = localStorage.getItem('userToken');

    const btnMenus = (e) => {
      e.preventDefault()
      history.push('/menus')
    };

    const btnRequests = (e) => {
      e.preventDefault()
      history.push('/pedidos')
    };

    useEffect(() => {
        TotalOrders()
        .then(response => response.json())
        .then((json) => { 
          setAllOrders(json)
        });
    }, [token]);

    return(
        <>
            <div>
                <NavBar />
            </div>

            <div className="container-btn-menu">
                <Button 
                    text="🍴 Menus" 
                    type="submit"
                    onClick={btnMenus} 
                    className="btn-salon"
                /> 
                <Button 
                    text="🔔 Pedidos" 
                    type="submit"
                    onClick={btnRequests} 
                    className="btn-salon"
                /> 
            </div>
            
            {allOrders.map((itens) => (
              <Orders 
              {...itens}
                key={itens.id}
                  //updateOrderToProcessing={(() => 
                    //UpdateOrderStatus(index, item.id, 'processing', allOrders, setAllOrders))}
                  //updateOrderToReady={(() => 
                    //UpdateOrderStatus(index, item.id, 'ready', allOrders, setAllOrders))}
                  //updateOrderToDone={(() => 
                    //UpdateOrderStatus(index, item.id, 'done', allOrders, setAllOrders))}
              >
              </Orders>
            ))}
            
          <Footer 
            className="footer"
          />
        </>
    );
};

// embaixo do key - linha 60 - propriedades da função e dentro delas fazer o put e o update do status allorders