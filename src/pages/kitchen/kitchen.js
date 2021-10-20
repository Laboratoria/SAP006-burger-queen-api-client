import React from "react";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button.js";
import { useHistory } from "react-router-dom";

export function Kitchen() {
  const token = localStorage.getItem("token");
  const [orderStatus, setOrderStatus] = useState([]);
  const url = "https://lab-api-bq.herokuapp.com/orders/";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((orders) => {
        const ordersPending = orders.filter((itens) =>
        itens.status.includes("preparing") ||
        itens.status.includes("pending") /*itens.status.includes('done')*/
        );
    
        setOrderStatus(ordersPending);
      });
  },[token])

  const history = useHistory();
  const handleSignOut = (e) => {
    e.preventDefault();
    history.push("/login");
    localStorage.clear();
  };

  const setStatus = (id, newStatus) => {
    const status = { status: newStatus };
    fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => {
      response.json().then(() => {
        const order = orderStatus;
        return order;
      });
    });
  };

  return (
    <div className="hall">
      <section className="menu">
        <h1>Pedidos</h1>

        <section className="">
          <button text="Sair" className="button" onClick={handleSignOut} />
          <button text="Sair" className="button" onClick={handleSignOut} />
        </section>

        <section>
          {orderStatus.map((order) => {
            return (
              <section className="menu" key={order.id}>
                <div className="banana">
                  <h1>                 
                    {order.status
                      .replace("pending", "Pendente")
                      .replace("preparing", "Em andamento")
                      .replace("done", "Pronto")}
                  </h1>
                  <p>ID: {order.id} </p>
                  <p>Cliente: {order.client_name} </p>
                  <p>Mesa: {order.table} </p>
                  <time>
                    {`${new Date(order.createdAt).toLocaleDateString(
                      "pt-br"
                    )} - ${new Date(order.createdAt).toLocaleTimeString(
                      "pt-br",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}h`}
                  </time>

                  <article className="container-order">
                    {order.Products.map((items, index) => (
                      <div key={index}>
                        <p>
                          {items.qtd} {items.name}
                        </p>
                      </div>
                    ))}
                  </article>

                  <button text="Preparar"
                    className="button"
                    style={{ backgroundColor: "var(--azul)" }}
                    onClick={() => setStatus(order.id, "preparing")}> Preparar
                  </button>

                  <button text="Despachar"
                    className="button"
                    style={{ backgroundColor: "var(--azul)" }}
                    onClick={() => setStatus(order.id, "done")}> Enviar        
                    </button>
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </div>
  );
}

export default Kitchen;