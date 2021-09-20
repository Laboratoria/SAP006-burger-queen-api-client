/*eslint-disable */
import './index.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header/header';
import Item from '../../../components/Item/itens';
import Button from '../../../components/Button/button';
import { useHistory } from 'react-router-dom';

function AllDay() {
  useEffect(() => {
    getAllProducts();
  }, []);

  const { mesa } = useParams();
  const history = useHistory();
 

  function somaFinal(array) {
    return array.reduce((total, item) => total + (item.qtd * item.price), 0);
  }

  const [menu, setMenu] = useState('');
  const [resumopedido, setResumoPedido] = useState([]);
  const [fazerPedido, setFazerPedido] = useState({ client: '', table: mesa, products: [] });
  const [erroMessage, setErroMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const token = localStorage.getItem('token');
  const getAllProducts = () => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      headers: {
        accept: 'application/json',
        Authorization: `${token}`,

      },

    })
      .then((response) => response.json())
      .then((json) => {
        const breakfast = json.filter((item) => item.type === 'all-day');
        setMenu(breakfast);
      });
  };

  return (
    <main className="all-container">
      <Header />
      <div>
        <Button
        buttonOnClick={(e) =>  
             history.push('/')}
        ></Button>
      </div>
      <div className="menu-um">
        <div className="breakfast-menu">
          {menu && menu.map((item, index) => (
            <Item
              divClassName="container-food"
              divKey={Math.random()}
              itemName={item.name}
              divId={item.id}
              ImgSrc={item.image}
              itemPrice={item.price}
              qnt={item.qnt}
              itemFlavor={item.flavor}
              itemNameKey={item.id}
              divOnClick={() => {
                if (!resumopedido.some((item) => item.id === menu[index].id)) {
                  setResumoPedido([...resumopedido, {
                    id: menu[index].id,
                    name: menu[index].name,
                    price: menu[index].price,
                    qtd: 1,
                  }]);
                } else {
                  resumopedido.map((item, i) => {
                    if (item.id === menu[index].id) {
                      resumopedido[i].qnt++
                    + setResumoPedido([...resumopedido]);
                    }
                  });
                }
              }}

            />

          ))}

        </div>

      </div>
      <div className="finish-menu">

        <h1>Resumo do Pedido</h1>
        <p> Mesa {mesa}</p>
        <input
          className="nome-cliente"
          type="text"
          placeholder="Digite o nome do cliente"
          onChange={(event) => setFazerPedido({ ...fazerPedido, client: event.target })}
        />
        <section>
          <label className="item">Item</label>
          {resumopedido.map((item, index) => (
            <ui className="lista-resumo-pedido">
              <li className="list" key={index}>
                <div className="pedido-name">
                  {typeof item.name === 'string' ? item.name : item.name.map((item) => (
                    <>
                      <label className="title-pedido">{item.name}</label>

                    </>
                  ))}

                  <label className="prices">
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                  </label>

                  <input
                    className="qtd-button"
                    id="menos-qtd"
                    type="button"
                    value="-"
                    onClick={() => {
                      if (item.qtd > 1 && item.id === resumopedido[index].id) {
                        resumopedido[index].qtd--;
                        setResumoPedido([...resumopedido]);
                      } else if (item.id === resumopedido[index].id && item.qtd === 1) {
                        resumopedido.splice(index, 1);
                        setResumoPedido([...resumopedido]);
                      }
                    }}
                  />
                  <label>{item.qtd}</label>
                  <input
                    className="qtd-button"
                    id="mais-qtd"
                    type="button"
                    value="+"
                    onClick={() => {
                      if (item.id === resumopedido[index].id) {
                        resumopedido[index].qtd++;
                        setResumoPedido([...resumopedido]);
                      }
                    }}
                  />

                </div>
              </li>
            </ui>
          ))}
        </section>

        <div className="cash-register">
          <p className="total-pedido">TOTAL:{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(somaFinal(resumopedido))}</p>
        </div>
        <div>
          <input
            className="button-finish"
            type="button"
            value="Finalizar Pedido"
            onClick={() => {
              if (fazerPedido.client !== '') {
                const products = resumopedido.map((item) => ({ id: item.id, qtd: item.qtd }));
                fazerPedido.products = products;

                const requestOptions = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    Authorization: `${token}`,
                  },
                  body: JSON.stringify({
                    client: 'ana',
                    table: "1",
                    products:
                  resumopedido.map((item) => (
                    {
                      id: Number(item.id),
                      qtd: Number(item.qtd),
                    }
                  )),
                  }),
                };

                fetch('https://lab-api-bq.herokuapp.com/orders', requestOptions)
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.id !== undefined) {
                      setErroMessage('Pedido enviado com sucesso');
                      setShowError(true);
                      setFazerPedido({ client: '', table: mesa, products: [] });
                      console.log('foi');
                    } else {
                      setShowError(true);
                      setErroMessage('`${json.message}`');
                      console.log('oh noo');
                    }
                  });
              } else {
                setShowError(true);
                setErroMessage('Nome do Cliente nao está');
              }
            }}
          />

        </div>
      </div>

    </main>
  );
}

export default AllDay;
