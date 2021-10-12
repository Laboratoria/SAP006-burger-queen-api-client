import React, {useState, useEffect} from 'react';
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import Orders from '../../components/itensMenu/Orders';
import { TotalOrders, UpdateOrderStatus } from '../../services/Products';

export default function Kitchen () {
    const [allOrders, setAllOrders] = useState([]);
    const token = localStorage.getItem('userToken');
    

    useEffect(() => {
      TotalOrders()
      .then(response => response.json())
      .then((json) => { 
        const sortById = json.sort((itemA, itemB) => itemB.id - itemA.id);
        setAllOrders(sortById)
        console.log(json)                               
        
      });
    }, [token]);
// ver para recarregar a pagina quando mudar o status

      const updateOrderToProcessing = (item) => {
        console.log(item)
        const orderId = item.id;
        const update = () => setAllOrders([...allOrders]);
        if (item.status === 'pending') {
          UpdateOrderStatus(orderId, 'Preparando')
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
                <p className="pedidos"> Cozinha | 🔔 Pedidos </p> 
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
                statusClick={updateOrderToProcessing}
              />
            ))}
            
          <Footer 
            className="footer"
          />
        </div>
    );
};