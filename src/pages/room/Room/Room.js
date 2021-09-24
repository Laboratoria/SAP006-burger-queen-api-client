import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getAllProducts } from '../../../services/products';
import { getAllOrders } from '../../../services/orders';
import { logout } from '../../../routes/utils/auth';
import { titleCorrespondance } from '../../../data/titleCorrespondance';

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { Table } from '../../../components/Table/Table';

import './Room.scss';

export const Room = () => { 
  const history = useHistory();
  const token = localStorage.getItem('currentEmployeeToken');
  const [tables, setTables] = useState([
    {'table':'1', 'tableName':'table-01'},
    {'table':'2', 'tableName':'table-02'},
    {'table':'3', 'tableName':'table-03'},
    {'table':'4', 'tableName':'table-04'},
    {'table':'5', 'tableName':'table-05'},
    {'table':'6', 'tableName':'table-06'},
    {'table':'7', 'tableName':'table-07'},
    {'table':'8', 'tableName':'table-08'},
    {'table':'9', 'tableName':'table-09'},
    {'table':'10', 'tableName':'table-10'},
    {'table':'11', 'tableName':'table-11'},
    {'table':'12', 'tableName':'table-12'},
  ])
  const [tablesWithOrders,setTablesWithOrders] = useState('')
  const [currentOrders, setCurrentOrders] = useState([]);
  const [userNotAuthenticatedErrorModal, setUserNotAuthenticatedErrorModal] = useState(false);


  const getProducts = () => {
    getAllProducts(token)
    .then((responseJson) => { 
      const menu = responseJson
      titleCorrespondance(menu)
      localStorage.removeItem('menu')
      localStorage.setItem('menu', JSON.stringify(menu))
    }).catch((error) => alert(error))
  };

  const getCurrentOrders = () => {
    getAllOrders(token)
    .then(responseJson => {
      switch (responseJson.code) {
        case 401:
          return setUserNotAuthenticatedErrorModal(true)
        default:
          const orders = responseJson
          setCurrentOrders(orders)
          setTablesWithOrders({...tables, ...orders})
      } 
    })   
  }


   
  useEffect(() => {
    getCurrentOrders()
  }, [])
  console.log(tablesWithOrders)

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
          {tables.map((table) => 
            <Table
              Role={table.tableName} key={table.table} ButtonId={table.table}
            />
          )}
          </section>

        <Button Role='room-sign-out' ButtonOnClick={()=> handleLogout()}/>
      </main>
    </div>
    
  )
}

