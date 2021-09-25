import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getAllProducts } from '../../../services/products';
import { getAllOrders } from '../../../services/orders';
import { logout } from '../../../routes/utils/auth';
import { titleCorrespondance } from '../../../data/titleCorrespondance';

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { CurrentOrder } from '../../../components/CurrentOrder/Current.Order';
import { Table } from '../../../components/Table/Table';
import { TableOrdersModal } from '../../../components/Modal/Modal';

import './Room.scss';

export const Room = () => { 
  const history = useHistory();
  const token = localStorage.getItem('currentEmployeeToken');
  const tables = [
    {'table':1, 'tableName':'table-01'},
    {'table':2, 'tableName':'table-02'},
    {'table':3, 'tableName':'table-03'},
    {'table':4, 'tableName':'table-04'},
    {'table':5, 'tableName':'table-05'},
    {'table':6, 'tableName':'table-06'},
    {'table':7, 'tableName':'table-07'},
    {'table':8, 'tableName':'table-08'},
    {'table':9, 'tableName':'table-09'},
    {'table':10, 'tableName':'table-10'},
    {'table':11, 'tableName':'table-11'},
    {'table':12, 'tableName':'table-12'},
  ]
  const [tablesWithOrders,setTablesWithOrders] = useState('')
  const [currentOrders, setCurrentOrders] = useState([]);
  const [userNotAuthenticatedErrorModal, setUserNotAuthenticatedErrorModal] = useState(false);
  const [emptyTableModal, setEmptyTableModal] = useState(false);
  const [fullTableModal, setFullTableModal] = useState(false);
  const [clearTableModal, setClearTableModal] = useState(false);
  const [targetTableId, setTargetTableId] = useState('');
  const [targetTableOrders, setTargetTableOrders] = useState('');



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
          tables.map((table) => table.orders = orders.filter((order) => order.table === table.table))
          setTablesWithOrders(tables)
      } 
    })   
  }

  useEffect(() => {
    getCurrentOrders()
  }, [])

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  const openOrderModal = (tableStatus) => {
    if (tableStatus === 'empty-table' ) {
      setEmptyTableModal(true)
    } else {
     setFullTableModal(true)
    }
  }

  useEffect(() => {
    setTargetTableOrders(currentOrders.filter((order) => order.table.toString() === targetTableId))
  }, [targetTableId, currentOrders]);

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
          {tablesWithOrders !== '' ? tablesWithOrders.map((table) => 
            <Button 
              key={table.tableName}
              Role='room-table' 
              ButtonTitle={table.orders.length < 1 ? 'empty-table' : 'full-table'} 
              ButtonId={table.table}
              ButtonOnClick={(event)=>[
                openOrderModal(event.target.getAttribute('data-title')), 
                setTargetTableId(event.target.id),
              ]}              
            />
          ):null}
          </section>
        <Button Role='room-sign-out' ButtonOnClick={()=> handleLogout()}/>
      </main>
      {fullTableModal ? 
      <section className='modal-background'>
        <div className='modal-container'>
            {targetTableOrders.map((order) => 
            <CurrentOrder
              Location='room-tables'
              key={order.id}
              order={order}
              ButtonId={order.id}
            /> 
            )}
            <div>
            <Button Role='new-order-sucess-modal' children='OK' ButtonOnClick={() => setFullTableModal(false)}/>
            <Button Role='new-order-sucess-modal' children='Limpar Mesa' ButtonOnClick={() => setClearTableModal(true)}/>
            </div>
        </div>
      </section>
    : null}
       {clearTableModal? 
      <section className='modal-background'>
        <div className='modal-container'>
          <p>Você tem certeza que deseja limpar esta mesa? TODOS os pedidos serão excluídos.</p>
          <Button Role='new-order-sucess-modal' children='Não' ButtonOnClick={() => setClearTableModal(false)}/>
        </div>
      </section>
    : null}
    </div>
    
  )
}

