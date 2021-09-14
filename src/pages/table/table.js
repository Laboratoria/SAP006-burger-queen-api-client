/* eslint-disable */
import React from 'react';
import '../Table/table.css';
import Mesa from '../../components/Table/mesa';
import Header from '../../components/Header/header';
import Button from '../../components/Button/button'

// import Mesa from '../../components/mesa';
// import Header from '../../components/header';
// import Logo from '../../img/logo-img.png';

// import './table.css';

function Table() {
 const routerPedidos = () => {
    history.push('/table/pedidos')
}

  return (
    <div className="container">
        <Header />
        <div>
        <div className="nav-pedidos">
      <Button buttonClass="nav-btn">Pedidos Prontos</Button>
      <Button buttonClass="nav-btn">Pedidos Entregues</Button>
    </div>

        </div>
        <main>
          <p className="title-table">Escolha a mesa para realizar o pedido</p>
          <div className="all-table">
            <div className="all-table-left">
              <div className="table">
                <Mesa />
              </div>
              <div className="table-middle">
                <Mesa />
              </div>
              <div className="table">
                <Mesa />
              </div>
            </div>
            <div className="all-table-rigth">
              <div className="right-table">
                <Mesa />
              </div>
              <div className="rigth-table-middle">
                <Mesa />
              </div>
              <div className="rigth-table">
                <Mesa />
              </div>
            </div>

          </div>
        </main>

      </div>
  );
}

export default Table;
