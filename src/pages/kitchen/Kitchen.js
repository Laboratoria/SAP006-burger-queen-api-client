import React, {useState, useEffect} from 'react';
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import Orders from '../../components/itensMenu/Orders';
import { TotalOrders, UpdateOrderStatus } from '../../services/Products';

export default function Kitchen () {
    const [kitchenOrder, setKitchenOrder] = useState([]);
    const token = localStorage.getItem('userToken');

      useEffect(() => {
            TotalOrders()
            .then(response => response.json())
            .then((json) => { 
              const sortById = json.sort((itemA, itemB) => itemB.id - itemA.id);
              setKitchenOrder(sortById)
              console.log(json)                               
              
            });
      }, [token]);

    return(
        <>
            <NavBar />

            <div className="container-btn-menu">
                <p className="pedidos"> Cozinha | 🔔 Pedidos </p> 
            </div>
            {kitchenOrder.map((item, index) => (
              (item.status === 'pending' || item.status === 'processing')
              &&
              <Orders
                key={item.id}
                {...item}
                updateOrderToProcessing={() => UpdateOrderStatus(index, item.id, 'processing', kitchenOrder, setKitchenOrder)}
                updateOrderToReady={() => UpdateOrderStatus(index, item.id, 'ready', kitchenOrder, setKitchenOrder)}
              />
            ))}
            
          <Footer 
            className="footer"
          />
        </>
    );
};
