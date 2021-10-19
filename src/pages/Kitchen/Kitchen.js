import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import Button from '../../components/Button/Button';
import logo from '../../img/logo.png'
import '../../global.css';
import './Kitchen.css';

function Kitchen() {

    const token = localStorage.getItem('token');
    const [preparerOrder, setPreparerOrder] = useState([]);
    const url = 'https://lab-api-bq.herokuapp.com/orders/';


    const history = useHistory();
    const handleSignOut = (e) => {
        e.preventDefault();
        history.push('/login')
        localStorage.clear();
    }

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        })
          .then((response) => response.json())
          .then((orders) => {
         
                    const ordersPending = orders.filter((itens) =>
                      // itens.status.includes('preparing') ||
                      itens.status.includes('pending') 
            );
            setPreparerOrder(ordersPending);
          });
      })


  const handleStatusOrder = (id, newStatus) => {
    const status = { status: newStatus };
    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    })
      .then((response) => {
        response.json().then(() => {
          const order = preparerOrder;
          return order;
        });
      });
  };

    return (
        <>
        <header className="header-menu">
            <div className="logo-menu">
                {<img src={logo} className="logo" alt="Logo Burguer Queen" />}
            </div>
                <h2 className="name-menu">Cozinha</h2>
                <Button text="Sair" className="button-global" onClick={handleSignOut}><FaSignOutAlt  className="icon-signout"/></Button>
        </header>

        <section>
          {preparerOrder.map((order) => {
            return (
              <section className="products" key={order.id}>
                <div className="kitchenCard">
                  <h1> {order.status.replace('pending', 'Pendente').replace('preparing', 'Em andamento')} </h1>
                  <p>ID: {order.id} </p>
                  <p>Cliente: {order.client_name} </p>
                  <p>Mesa: {order.table} </p>
                  <time>
                    {`${new Date(order.createdAt).toLocaleDateString('pt-br')} - ${new Date(order.createdAt).toLocaleTimeString('pt-br', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}h`}
                  </time>
                  <hr />
                  {order.Products.map((items, index) => (
                    <div key={index}>
                      <p> {items.qtd} {items.name}</p>
                      <p>{items.flavor}</p>
                      <p>{items.complement}</p>
                      <hr />
                    </div>
                  ))}

                  {/* <Button text="Preparar" className='button-global' onClick={() => handleStatusOrder(order.id, 'preparing')} /> */}
                  <Button text="Despachar" className='button-global' onClick={() => handleStatusOrder(order.id, 'ready')}>Pronto</Button>

                </div>
              </section>
            );
        })}
        </section>
        </>
);
}
    export default Kitchen;