import React, { useEffect, useState } from "react";
// import Button from "../../components/Button/Button.js";
import "../hall/hall.css";
import ItemMenu from "../../components/ItemMenu/ItemMenu";
import CartItem from "../../components/CartItem/CartItem";
import {postOrder} from "../../services/api";
import DataTime from "../../components/DataTime/DataTime";

export function Hall() {
  const [menu, setMenu] = useState([]);
  const [tab, setTab] = useState("all-day");
  const [order, setOrder] = useState([]);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    fetch("https://lab-api-bq.herokuapp.com/products", {
      headers: {
        accept: "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setMenu(json);
      });
    },[token])
  ;

  const selectProducts = menu.filter((produtos) => produtos.type === tab);
  
  useEffect(()=>{
    console.log(client, table, order)
  },[client, table, order])

  // chamar este handleSubmit em seu botão de enviar o pedido
  const handleSubmit = (e) => {
    e.preventDefault();

    // const que monta o pedido chamando os values dos inputs
    const orderClient = {
      "client": client,
      "table": table,
      "products": order.map((item) => ({
        id: Number(item.id),
        qtd: Number(item.qtd),
      })),
    };
    postOrder(orderClient)
    setClient([])
    setTable([])
    setOrder([])
  }
  
  const addItem = (e, item) => {
    e.preventDefault();
    const elem = order.find((response) => response.id === item.id);
    if (elem) {
      elem.qtd += 1;
      setOrder([...order]);
    } else {
      item.qtd = 1;
      setOrder([...order, item]);
    }
  };

 const removeItem = (e, item, index) => {
    e.preventDefault();
    const elem = order.find((response) => response.id === item.id);
    if (elem.qtd !== 0) {
      elem.qtd -= 1;
      setOrder([...order]);
    }
    if (elem.qtd === 0) {
      const listOrder = order;
      // remove 1 item do array
      listOrder.splice(index, 1);
      setOrder([...listOrder]);
    }
  };

  const calculateTotal = (items) => { 
    const totalPrice = items.reduce((accumulator, array) => { 
      const { qtd, price } = array; 
      accumulator = Number(qtd * price + accumulator) 
      return accumulator 
    }, 0) 
    return totalPrice; 
  } 

  const total = calculateTotal(order)

    return (
      <div>
        <h1 className="title-hall">Monster Burguer</h1>
        <section className="header-hall">
        <DataTime></DataTime>
          <button
            className="button-geral"
            style={{ backgroundColor: "var(--azul)" }}
            onClick={(e) => {
              e.preventDefault();
              setTab("all-day");
            }}
          >
            Geral
          </button>
          <button
            className="button-geral"
            style={{ backgroundColor: "var(--azul)" }}
            onClick={(e) => {
              e.preventDefault();
              setTab("breakfast");
            }}
          >
            Café da Manhã
          </button>
          <input
            placeholder="Cliente"
            className="input-client"
            value={client}
            onChange={(e) => {
              setClient(e.target.value);
            }}
          ></input>
          <input
            placeholder="Mesa"
            className="input-table"
            value={table}
            onChange={(e) => {
              setTable(e.target.value);
            }}
          ></input>
        </section>
        <section className="menu-order">
          <section className="container-menu">
            {selectProducts &&
              selectProducts.map((item, index) => (
                <div key={index}>
                  <ItemMenu
                    imageProduct={item.image}
                    nameProduct={item.name}
                    flavorProduct={item.flavor}
                    idProduct={item.id}
                    complementProduct={item.complement}
                    priceProduct={item.price}
                    divOnClick={(e) => addItem(e, item)}
                  />
                </div>
              ))}
          </section>
          <section className="container-order">
            <h1>Pedidos</h1>
            {order.map((item, index) => (
              <div key={index}>
                <CartItem
                  nameProduct={item.name}
                  flavorProduct={item.flavor}
                  idProduct={item.id}
                  complementProduct={item.complement}
                  priceProduct={item.price}
                  qtdProduct={item.qtd}
                  divOnClick={(e) => removeItem(e, item, index)}
                />
              </div>
            ))}
            <h1>Total: R$ {total},00</h1>
            <button
              className="button"
              onClick={(e) => handleSubmit(e)}
            >Enviar para a cozinha
            </button>
          </section>
        </section>
      </div>
    );
  };

export default Hall;
