import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Orders from '../../../components/itensMenu/Orders';
import { TotalOrders } from '../../../services/Products';

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
              console.log(json)                               
              setAllOrders(json)
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
            {allOrders.map((item) => (
              <Orders 
                // {...item}
                //   key={item.id}
                key={item.id}
                id={item.id}
                user_id={item.user_id}  
                client={item.client}
                table={item.table}
                status={item.status}
                processedAt={item.processedAt}
                products={item.products}
                
                
                // "status": "pending",
                // "processedAt": null,
                // "createdAt": "2021-10-05T21:45:05.418Z",
                // "updatedAt": "2021-10-05T21:45:05.418Z",
                // "Products":
              />

            ))}
          <Footer 
            className="footer"
          />
        </div>
    );
};
