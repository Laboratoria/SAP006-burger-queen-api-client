import { React, useState, useEffect } from "react";
import Input from "../../componentes/input";
import Button from "../../componentes/button";
import Produtos from "../../componentes/produtos.js";
import Carrinho from "../../componentes/carrinho.js";
import { postOrder } from "../services/postOrder";
import "../pedidos/pedidos.css";

function Hall() {
  const token = localStorage.getItem("token");

  const [client, setCliente] = useState("");
  const onChangeClient = (e) => {
    const name = e.target.value;
    setCliente(name);
  };

  const [products, setProdutos] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("breakfast");
  const [pedidos, setPedidos] = useState([]);
  const [mesa, setMesa] = useState("");

  const calcularTotal = (itens) => {
    const totalPreco = itens.reduce((acumular, array) => {
      const { qtd, price } = array;
      acumular = Number(qtd * price + acumular);
      return acumular;
    }, 0);

    return totalPreco;
  };

  useEffect(() => {}, [client, mesa, pedidos]);

  useEffect(() => {
    fetch("https://lab-api-bq.herokuapp.com/products", {
      headers: {
        Authorization: `${token}`,
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setProdutos(json);
      });
  }, [token]);

  const adicionar = (e, item) => {
    e.preventDefault();
    const elemento = pedidos.find((res) => res.id === item.id);

    if (elemento) {
      elemento.qtd += 1;
      setPedidos([...pedidos]);
    } else {
      item.qtd = 1;

      setPedidos([...pedidos, item]);
    }
  };

  const remover = (e, item, index) => {
    e.preventDefault();
    const elemento = pedidos.find((res) => res.id === item.id);

    if (elemento.qtd !== 0) {
      elemento.qtd -= 1;
      setPedidos([...pedidos]);
    }
    if (elemento.qtd === 0) {
      const listOrder = pedidos;
      listOrder.splice(index, 1);
      setPedidos([...listOrder]);
    }
  };
  const selectedProducts = products.filter(
    (item) => item.type === selectedMenu
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const pedido = {
      client: client,
      table: mesa,
      products: pedidos.map((item) => ({
        id: Number(item.id),
        qtd: Number(item.qtd),
      })),
    };

    postOrder(pedido);

    setPedidos([]);
  };
  const total = calcularTotal(pedidos);

  return (
    <section className="container">
 <h1 className="h1-salao">SALÃO</h1>
      <section className="containerGeral">
        <div className="contPed">
          <div className="containeriInput">
            <div className="inputSalao">
              <Input
                placeholder="CLIENTE"
                name="client"
                value={client}
                onChange={onChangeClient}
              />{" "}
            </div>
            <select
              name="Mesa"
              className="select-hall"
              onChange={(event) => setMesa(event.target.value)}
            >
              <option value="" selected disabled>
                MESAS{" "}
              </option>
              <option value="01">MESA 01</option>
              <option value="02">MESA 02</option>
              <option value="03">MESA 03</option>
              <option value="04">MESA 04</option>
              <option value="05">MESA 05</option>
            </select>{" "}
          </div>

          <section className="selectMenu">
            <Button
              className="buttonBreakfast"
              onClick={() => {
                setSelectedMenu("breakfast");
              }}
              msg="BREAKFAST"
            ></Button>
            <Button
              className="buttonAll"
              onClick={() => {
                setSelectedMenu("all-day");
              }}
              msg="ALL-DAY"
            ></Button>
          </section>

          {selectedProducts &&
            selectedProducts.map((item, index) => (
              <Produtos
                key={index}
                divClassName="products-img"
                produtosName={item.name}
                divId={item.id}
                ImgSrc={item.image}
                produtosFlavor={item.flavor}
                produtosPrice={item.price}
                produtosNameKey={item.id}
                onClick={(evento) => adicionar(evento, item)}
              />
            ))}
        </div>
      </section>
      <section className="containerCarrinho">  
               <h2>CARRINHO</h2>

        <div className="contCar">
          {pedidos &&
            pedidos.map((item, index) => (
                <Carrinho
                key={index}
                  className="cardCar"
                  divClassName="carrinhoInfo"
                  produtosName={item.name}
                  produtosPrice={item.price}
                  produtosFlavor={item.flavor}
                  qtd={item.qtd}
                  onClick={(e) => remover(e, item, index)}
                />
          
            ))}
          <h2>TOTAL: R${total},00</h2>

          <Button
            className="button"
            msg="ENVIAR PARA COZINHA"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </section>
    </section>
  );
}

export default Hall;
