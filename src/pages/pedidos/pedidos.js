import { React, useState, useEffect } from "react";
import Input from "../../componentes/input";
import Button from "../../componentes/button";
import Produtos from "../../componentes/produtos.js";
import Carrinho from "../../componentes/carrinho.js";

function Hall() {
  const token = localStorage.getItem("token");

  const [client, setClient] = useState("");
  const onChangeClient = (e) => {
    const name = e.target.value;
    setClient(name);
  };

  const [products, setProducts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("breakfast");
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
  fetch("https://lab-api-bq.herokuapp.com/products", {
    headers: {
      Authorization: `${token}`,
      accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      setProducts(json);
    })
});

  const adicionar = (e, item) => {
    e.preventDefault();
    const elemento = pedidos.find((res) => res.id === item.id);

    if (elemento) {
      elemento.qtd += 1;
    } else {
      item.qtd = 1;

      setPedidos([...pedidos, item]);
    }
  };

  const handleSubmit = (e) => {
        e.preventDefault();
    }

  const selectedProducts = products.filter(
    (item) => item.type === selectedMenu
  );

  return (
    <section className="container">
      <h1>Salão</h1>

     <select name="Mesa">
        <option valeu="mesa01">Mesa 01</option>
        <option valeu="mesa02">Mesa 02</option>
        <option valeu="mesa03">Mesa 03</option>
        <option valeu="mesa04">Mesa 04</option>
        <option valeu="mesa05">Mesa 05</option>
      </select>

      <Input
        className="input-hall"
        placeholder="Insira o nome do cliente"
        name="client"
        value={client}
        onChange={onChangeClient}
  />

      <section className="buttonMenu">
        <Button
          className="buttonMenu"
          onClick={() => {
            setSelectedMenu("breakfast");
          }}
        >
          Breakfast
        </Button>
        <Button
          className="buttonMenu"
          onClick={() => {
            setSelectedMenu("all-day");
          }}
        >
          All Day
        </Button>
      </section>

      <section>
        {selectedProducts &&
          selectedProducts.map((item, index) => (
            <div className="menu-container">
              <div key={index}>
                <Produtos
                  divClassName="products-img"
                  productsName={item.name}
                  divId={item.id}
                  ImgSrc={item.image}
                  productsPrice={item.price}
                  productsNameKey={item.id}
                  onClick={(evento) => adicionar(evento, item)}
                />
              </div>
            </div>
          ))}

        {pedidos.map((item, index) => 
          <div key={index}>
            <Carrinho 
              produtosName={item.name}
              produtosPrice={item.price}
              qtd={item.qtd}
              produtosFlavor={item.flavor}
             // onClick={(evento) => adicionar(evento, item)}
            />
          </div>
        )}
      </section>
    </section>
  );
}

export default Hall;
