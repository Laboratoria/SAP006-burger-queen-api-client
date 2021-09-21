import React from 'react';
import { useHistory } from 'react-router-dom';

import { tables } from '../../../data/tables';
import { logout } from '../../../routes/utils/auth';
import { titleCorrespondance } from '../../../data/titleCorrespondance';

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { Table } from '../../../components/Table/Table';

import './Room.scss';

export const Room = () => { 
  const history = useHistory();
  const tablesToPrint = Object.keys(tables);
  const token = localStorage.getItem('currentEmployeeToken');

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
      localStorage.removeItem('menu')
      localStorage.setItem('menu', JSON.stringify(menu))
    }).catch((error) => alert(error))
    return result
  };

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <div className='room-div'>
      <header>
        <NavbarRoom/>
      </header>
      <main>
        <Button 
          Role='room-new-order' 
          children='Novo Pedido' 
          ButtonOnClick={()=>[getProducts(), history.push('/neworder')]}
        />
        <section className='room-tables-section'>
          {tablesToPrint.map((role) => 
            <Table
              Role={role} key={role.toString()} 
            />
          )}
        </section>
        <Button Role='room-sign-out' ButtonOnClick={()=> handleLogout()}/>
      </main>
    </div>
    
  )
}

