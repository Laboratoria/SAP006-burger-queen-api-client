import React, { useEffect, useState } from "react";
// import Button from "../../components/Button/Button.js";
import "../hall/hall.css";
import ItemMenu from "../../components/ItemMenu/ItemMenu";
import CartItem from "../../components/CartItem/CartItem";

export function Hall() {
  const [menu, setMenu] = useState([]);
  const [tab, setTab] = useState("all-day");
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
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
  });

  const selectProducts = menu.filter((produtos) => produtos.type === tab);

  const addItem = (e, item) => {
    e.preventDefault();
    const elem = order.find((response) => response.id === item.id);
    if (elem) {
      elem.qtd += 1;
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
    }
    if (elem.qtd === 0) {
      const listOrder = order;
      // remove 1 item do array
      listOrder.splice(index, 1); 
      setOrder([...listOrder]);
    }
  };

  return (
    <div>
      <h1>Monster Burguer</h1>
      <p></p>
      <section>
        <button
          className="button-geral"
          onClick={(e) => {
            e.preventDefault();
            setTab("all-day");
          }}
        >
          Geral
        </button>
        <button
          className="button-geral"
          onClick={(e) => {
            e.preventDefault();
            setTab("breakfast");
          }}
        >
          Café da Manhã
        </button>
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
        </section>
      </section>
    </div>
  );
}

export default Hall;