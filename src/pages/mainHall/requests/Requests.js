import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Orders from '../../../components/itensMenu/Orders';
import { TotalOrders, UpdateOrderStatus } from '../../../services/Products';

import './Requests.css';

export default function Requests () {
    const history = useHistory();
    const [allOrders, setAllOrders] = useState([]);

    const token = localStorage.getItem('userToken');

      const btnMenus = (e) => {
        e.preventDefault()
        history.push('/menus')
      }

      const btnRequests = (e) => {
        e.preventDefault()
        history.push('/pedidos')
      }

      useEffect(() => {
        TotalOrders()
        .then(response => response.json())
        .then((json) => { 
          const sortById = json.sort((itemA, itemB) => itemB.id - itemA.id);
          setAllOrders(sortById)
          console.log(json)                               
          
        });
  }, [token]);

    return(
        <div>

            <div>
                <NavBar />
            </div>

            <div className="container-btn-menu">
                <Button 
                    text="🍴 Menus" 
                    type="submit"
                    onClick={btnMenus} 
                    className="buttons buttons-menu"
                /> 
                <Button 
                    text="🔔 Pedidos" 
                    type="submit"
                    onClick={btnRequests} 
                    className="buttons buttons-menu"
                /> 
            </div>
            {allOrders.map((item, index) => (
              (item.status === 'pending' || item.status === 'processing')
              &&
              <Orders 
                {...item}
                  key={item.id}
                  updateOrderToProcessing={() => UpdateOrderStatus(index, item.id, 'processing', allOrders, setAllOrders)}
                  updateOrderToReady={() => UpdateOrderStatus(index, item.id, 'ready', allOrders, setAllOrders)}
              >
              </Orders>
            ))}
            
          <Footer 
            className="footer"
          />
        </div>
    );
};

// embaixo do key - linha 59 - propriedades da função e dentro delas fazer o put e o update do status allorders