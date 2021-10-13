import { useState, useEffect } from "react";
import { TotalOrders, UpdateOrderStatus } from "../../services/Products";

import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Orders from "../../components/itensMenu/Orders";

import STATUS from "../../constants/status";

export default function Kitchen() {
  const [allOrders, setAllOrders] = useState([]);

  const updateOrders = () => {
    TotalOrders()
      .then((response) => response.json())
      .then((json) => {
        const sortById = json.sort((itemA, itemB) => itemB.id - itemA.id);
        setAllOrders(sortById);
        console.log(json);
      });
  };

  useEffect(() => {
    updateOrders();
  }, []);
  // ver para recarregar a pagina quando mudar o status

  const updateOrderToProcessing = (item) => {
    const orderId = item.id;
    if (item.status === STATUS.PENDING) {
      UpdateOrderStatus(orderId, STATUS.PROCESSING).then(() => updateOrders());
    } else {
      UpdateOrderStatus(orderId, STATUS.READY).then(() => updateOrders());
    }
  };

  return (
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

      <Footer className="footer" />
    </div>
  );
}
