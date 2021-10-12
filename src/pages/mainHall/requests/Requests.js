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

      useEffect(() => {
            TotalOrders()
            .then(response => response.json())
            .then((json) => { 
              const sortById = json.sort((itemA, itemB) => itemB.id - itemA.id);
              setAllOrders(sortById)
              console.log(json)  
            });
      }, [token]);

      const updateStatus = (item) => {

        const orderId = item.id;
        const update = () => setAllOrders([...allOrders]);
        if (item.status === 'Ag. Servir') {
          UpdateOrderStatus(orderId, 'Ag. Servir')
            .then((response) => {
              const exist = allOrders.find((client) => client.id === response.id);
              if (exist) {
                update();
              }
            });
        } else {
          UpdateOrderStatus(orderId, 'Finalizado')
            .then((response) => {
              const exist = allOrders.find((client) => client.id === response.id);
              if (exist) {
                update();
              }
            });
        } 
      };

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
                    className="btn-menu"
                /> 
                
            </div>
            {allOrders.map((item) => (
              <Orders 
                key={item.id}
                item={item}
                table={item.table}
                client_name={item.client_name}
                id={item.id}
                createdAt={item.createdAt}
                status={item.status}
                user_id={item.user_id}
                statusClick={updateStatus}
              />
            ))}
            
          <Footer 
            className="footer"
          />
        </div>
    );
};
