import React, {useState, useEffect} from 'react';
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import Orders from '../../components/itensMenu/Orders';
import { TotalOrders } from '../../services/Products';

export default function Kitchen () {
    const [kitchenOrder, setKitchenOrder] = useState([]);
    const token = localStorage.getItem('userToken');

      useEffect(() => {
            TotalOrders()
            .then(response => response.json())
            .then((json) => { 
              console.log(json)                               
              setKitchenOrder(json)
            });
      }, [token]);

    return(
        <div>

            <div>
                <NavBar />
            </div>

            <div className="container-btn-menu">
                <p className="pedidos"> Cozinha | 🔔 Pedidos </p> 
            </div>
            {kitchenOrder.map((item) => (
              <Orders 
                {...item}
                  key={item.id}
              />
            ))}
            
          <Footer 
            className="footer"
          />
        </div>
    );
};
