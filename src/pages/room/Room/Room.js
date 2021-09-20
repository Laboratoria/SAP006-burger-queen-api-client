import React from 'react';
import { useHistory } from 'react-router-dom';

import { tables } from '../../../data/tables';
import { logout } from '../../../routes/utils/auth';
import { NavbarRoom } from '../../../components/Navbar/Navbar';

import { Button } from '../../../components/Button/Button';
import { Table } from '../../../components/Table/Table';

import { titleCorrespondance } from '../../../data/titleCorrespondance';

import './Room.scss';

export const Room = () => { 
  const history = useHistory();

  const [showTables, setShowTables] = React.useState(true);
  const [newOrder, setNewOrder] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [productsOrdered, setProductsOrdered] = React.useState(false);

  let tablesToPrint = Object.keys(tables)

  const handleLogout = () => {
    logout()
    history.push('/')
  }

console.log(productsOrdered)

  const token = localStorage.getItem('currentEmployeeToken')

  const getProducts = () => {
    const apiToGetProducts = 'https://lab-api-bq.herokuapp.com/products';
    const result = fetch (apiToGetProducts, {
        headers: {
          accept: 'application/json',
          Authorization:`${token}`
        },
    }).then((response) => {
        if (response.status === 200) {
          return response.json();
      } else {
        throw new Error(response.status);
      }
    }).then((responseJson) => { 
      const menu = responseJson
      titleCorrespondance(menu)
      setMenu(menu)
      return menu
    }).catch((error) => alert(error))
    return result
  };

 console.log(menu)
  return (
    <div className='room-div'>
      <header>
        <NavbarRoom/>
      </header>
      <main>
        <Button Role='room-new-order' children='Novo Pedido' ButtonOnClick={()=>[setNewOrder(true), setShowTables(false), getProducts()]}/>
        {showTables ? <section className='room-tables-section'>
          {tablesToPrint.map((role) => 
            <Table
              Role={role} key={role.toString()} 
            />
          )}
        </section> : null}
        {newOrder ? 
        <section className='new-order-popup-section'> 
          <div className='room-new-order-div'>
            <div className='room-new-order-note'>
              <p>gfhgf</p>
            </div>
              <Button Role='room-new-order-save-order' children='Enviar para cozinha'/>
              <div className='room-new-order-product-buttons-div'>
                {typeof menu === 'boolean' ? null : menu.map((product) => 
                  <Button 
                    key={product.id}
                    ButtonId={product.id}
                    Role='new-order-product-button' 
                    ButtonTitle={product.title}
                    ButtonOnClick={(event)=>setProductsOrdered(event.target.id)}
                  />
                )}
            </div>
          </div>
        </section> :null}
        <Button Role='room-sign-out' ButtonOnClick={()=> handleLogout()}/>
      </main>
    </div>
    
  )
}

