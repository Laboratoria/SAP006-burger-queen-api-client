import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { TotalOrders, UpdateOrderStatus } from "../../../services/Products";

import NavBar from "../../../components/navbar/Navbar";
import Button from "../../../components/button/Button";
import Footer from "../../../components/footer/Footer";
import Orders from "../../../components/itensMenu/Orders";

import STATUS from "../../../constants/status";

export default function Requests() {
  const history = useHistory();

  const btnMenus = (e) => {
    e.preventDefault();
    history.push("/menus");
  };

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

  const updateStatus = (item) => {
    const orderId = item.id;

    if (item.status === STATUS.READY) {
      UpdateOrderStatus(orderId, STATUS.DONE).then(() => updateOrders());
    }
  };

  return (
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

      <Footer className="footer" />
    </div>
  );
}
