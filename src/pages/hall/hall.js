import React, { useState } from "react";
// import Button from "../../components/Button/Button.js";
import "../hall/hall.css";

export function Hall() {
  const token = localStorage.getItem("token");
  const [menu, setMenu] = useState([]);
  const [tab, setTab] = useState("all-day");

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

  const selectProducts = menu.filter((produtos) => produtos.type === tab);
  // const showMenuTab = !showSummary && !loading;
  // const total = calculateTotal(summary)

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
      <section>
        {selectProducts &&
          selectProducts.map((item) => (
            <div key={item.id} className="menu-item">
              <img className="img-item" src={item.image} alt="itens menu"/>
              <h2>
                {item.name} {item.flavor}
              </h2>
              <p>{item.complement}</p>
              <p>{item.price}</p>
              <button>Adicionar</button>
            </div>
          ))}
      </section>
    </div>
  );
}

export default Hall;
