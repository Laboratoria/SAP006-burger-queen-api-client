import React from "react";
import Button from "../button/Button";
import OrderProducts from "./OrderProducts";
import { ConvertDate, ConvertTime } from "../../services/Products";
import STATUS from "../../constants/status";

import "./Style.css";

export default function Orders({
  id,
  client_name,
  table,
  status,
  createdAt,
  user_id,
  item,
  statusClick,
}) {
  const products = item.Products.filter((order) => order.name);
  const dataCreated = new Date(item.createdAt);
  const dataUpdate = new Date(item.updatedAt);
  const difference = Math.abs(dataUpdate) - dataCreated;
  const minutes = Math.floor(difference / 1000 / 60);

  console.log(status, "order status");

  return (
    <div className="container-orders">
      <div className="container-status">
        {status === "pending" && <div className="status pending">Pendente</div>}
        {status === "Preparando..." && (
          <div className="status processing">Preparando...</div>
        )}
        {status === "Ag. Servir" && (
          <div className="status ready">Ag. Servir</div>
        )}
        {status === "Finalizado" && (
          <div className="status done">Finalizado</div>
        )}

        <span className="time">
          📅 Entrada: {ConvertDate(createdAt)} às {ConvertTime(createdAt)}
        </span>
        <span className="time">
          🕓 Tempo de Preparo: <span className="hour">{minutes}:min</span>
        </span>
        <hr></hr>
      </div>
      <div className="container-info-orders">
        <p>
          #{id} | Mesa {table} | {client_name}
        </p>
        <p>Atendente: {user_id}</p>
      </div>

      <div className="container-products-order">
        {products.map((item) => (
          <OrderProducts {...item} key={item.id} />
        ))}
      </div>

      <Button
        text={status}
        className="btn-status"
        type="button"
        onClick={() => statusClick(item)}
      >
        {item.status === STATUS.PENDING ? "Pendente" : item.status}
        {item.status === STATUS.PROCESSING ? "Preparando..." : item.status}
        {item.status === STATUS.READY ? "Ag. Servir" : item.status}
        {item.status === STATUS.DONE ? "Finalizado" : item.status}
      </Button>
    </div>
  );
}

//<hr></hr> - faz uma linha na pagina
