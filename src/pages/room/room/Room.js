/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getAllOrders, deleteOrder } from '../../../services/orders';

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { AuthModal } from '../../../components/Modal/Modal';
import { StandardModal } from '../../../components/Modal/Modal';
import { StandardModalWithTwoOptions } from '../../../components/Modal/Modal';
import { TableOrdersModal } from '../../../components/Modal/Modal';

import './Room.scss';

export const Room = () => { 
  const history = useHistory();

  const [userNotAuthenticatedErrorModal, setUserNotAuthenticatedErrorModal] = useState(false);
  const [tablesWithOrders,setTablesWithOrders] = useState([]);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [emptyTableModal, setEmptyTableModal] = useState(false);
  const [fullTableModal, setFullTableModal] = useState(false);
  const [clearTableModal, setClearTableModal] = useState(false);
  const [targetTableId, setTargetTableId] = useState('');
  
  const [deleteOrderModal, setDeleteOrderModal] = useState(false);
  const [orderToDeleteId, setOrderToDeleteId] = useState(false);
  
  const [targetTableOrders, setTargetTableOrders] = useState([]);
  const [orderBelongsAnotherRestaurantErrorModal, setOrderBelongsAnotherRestaurantErrorModal] = useState(false);
  const [orderNotfoundErrorModal, setOrderNotfoundErrorModal] = useState('');
  const [defaultErrorModal, setDefaultErrorModal] = useState(false);
  const [tableCleanedModal, setTableCleanedModal] = useState(false);

  const token = localStorage.getItem('currentEmployeeToken');
  const tables = [
    {'table':1, 'tableName':'table-01', 'orders':[]},
    {'table':2, 'tableName':'table-02', 'orders':[]},
    {'table':3, 'tableName':'table-03', 'orders':[]},
    {'table':4, 'tableName':'table-04', 'orders':[]},
    {'table':5, 'tableName':'table-05', 'orders':[]},
    {'table':6, 'tableName':'table-06', 'orders':[]},
    {'table':7, 'tableName':'table-07', 'orders':[]},
    {'table':8, 'tableName':'table-08', 'orders':[]},
    {'table':9, 'tableName':'table-09', 'orders':[]},
    {'table':10, 'tableName':'table-10', 'orders':[]},
    {'table':11, 'tableName':'table-11', 'orders':[]},
    {'table':12, 'tableName':'table-12', 'orders':[]},
  ]

  useEffect(() => {
    getAllOrders(token)
    .then(responseJson => {
      switch (responseJson.code) {
        case 401:
          return setUserNotAuthenticatedErrorModal(true);
        default:
          const orders = responseJson;
          setCurrentOrders(orders);
          tables.map((table) => table.orders = orders.filter((order) => order.table === table.table));
          setTablesWithOrders(tables);
      } 
    })
  },[currentOrders]);

  useEffect(() => {
    setTargetTableOrders(currentOrders.filter((order) => order.table.toString() === targetTableId))
  }, [targetTableId, currentOrders]);

  const getErrorCase = (data) => {
    switch (data) {
      case 401:
        setUserNotAuthenticatedErrorModal(true);
        break;
      case 403: 
        setOrderBelongsAnotherRestaurantErrorModal(true);
        break;
      case 404:
        setOrderNotfoundErrorModal(true);
        break;
      default:
        ;
    }
  }

  const deleteTargetOrder = (orderToBeDeleted) => {
    deleteOrder(orderToBeDeleted, token)
    .then(responseJson => {
      getErrorCase(responseJson.code);
    })
  }

  return (
    <div className='room-div'>
      <header>
        <NavbarRoom/>
      </header>
      <main className='room-main'>
        <Button 
          ButtonClass='room-new-order-button'
          children='Novo Pedido' 
          ButtonOnClick={() => [history.push('/neworder')]}
        />
        <section className='room-tables-section'>
          {tablesWithOrders.length > 0 && tablesWithOrders.map((table) => 
            <Button 
              key={table.tableName}
              ElementName={table.tableName}
              ButtonClass='room-table-button'
              ButtonTitle={table.orders.length < 1 ? 'empty-table' : 'full-table'} 
              ButtonId={table.table}
              ButtonOnClick={(event) => 
                event.target.getAttribute('data-title') === 'empty-table' ? setEmptyTableModal(true) : 
                [setFullTableModal(true), 
                setTargetTableId(event.target.id),
                document.body.style.overflow = 'hidden']
              }              
            />
          )}
        </section>
      </main>
      <section>
        {userNotAuthenticatedErrorModal && 
          <AuthModal 
          Role='auth-error-modal'
          ModalContent='Usuário não autenticado.'
          ButtonChildren='Ok'
          ButtonOnClick={() => setUserNotAuthenticatedErrorModal(false)}
          ButtonSecondAuthModalOptionChildren = 'Autenticar'
          ButtOnClickSecondAuthModalOption={() => history.push('/')}
          />
        }
      </section>
      <section>
        {emptyTableModal &&
          <StandardModal 
            ModalContent='Esta mesa ainda não possui pedidos.'
            ButtonChildren='OK'
            ButtonOnClick={()  => setEmptyTableModal(false)}
          />
        }
      </section>
      <section>
        {fullTableModal && 
        <TableOrdersModal 
          orders={targetTableOrders}
          FirstButtonClick={() => setFullTableModal(false)}
          SecondButtonClick={() => setClearTableModal(true)}
          ButtonDeleteOrder={(event) => [setOrderToDeleteId(event.target.id),setDeleteOrderModal(true)]}
        />
        } 
      </section>
      <section>
        {deleteOrderModal && 
        <StandardModalWithTwoOptions
          ModalContent = 'Você tem certeza que deseja excluir este pedido?'
          ButtonChildren = 'SIM'
          ButtonSecondAuthModalOptionChildren = 'NÃO'
          ButtonOnClick = {() => [deleteTargetOrder(orderToDeleteId), setDeleteOrderModal(false)]}
          ButtOnClickSecondAuthModalOption = {() => setDeleteOrderModal(false)}
        />
        } 
      </section>
      <section>
        {clearTableModal && 
        <StandardModalWithTwoOptions 
            ModalContent='Você tem certeza que deseja excluir todos os pedidos desta mesa?'
            ButtonChildren='Cancelar'
            ButtonSecondAuthModalOptionChildren='Excluir'
            ButtonOnClick={() => setClearTableModal(false)}
            ButtOnClickSecondAuthModalOption = {() =>  
              {
                const orderIds = [];
                targetTableOrders.map((order) => orderIds.push(order.id))
                orderIds.map((order) => deleteTargetOrder(order)) 
                setTableCleanedModal(true)
                setClearTableModal(false)
              }
            }
        />
        }
      </section>
      <section>
        {tableCleanedModal && 
          <StandardModal 
            ModalContent = 'Mesa limpa com sucesso!'
            ButtonChildren = 'Voltar para o salão'
            ButtonOnClick = {() => [setTableCleanedModal(false), setFullTableModal(false)]}
          />
        }
      </section>
      <section>
        {defaultErrorModal && 
          <StandardModal
            ModalContent='Desculpe-nos, mas um erro ocorreu.'
            ButtonChildren='OK'
            ButtonOnClick={() => setDefaultErrorModal(false)}
          />
        }
      </section>
      <section>
        {orderBelongsAnotherRestaurantErrorModal && 
          <StandardModal
            ModalContent='Desculpe-nos, mas este pedido não pertence ao BERG.'
            ButtonChildren='OK'
            ButtonOnClick={() => setOrderBelongsAnotherRestaurantErrorModal(false)}
          />
        }
      </section>
      <section>
        {orderNotfoundErrorModal && 
          <StandardModal
            ModalContent='Desculpe-nos, mas este pedido não foi encontrado.'
            ButtonChildren='OK'
            ButtonOnClick={() => setOrderNotfoundErrorModal(false)}
          />
        }
      </section>
    </div>
  )
}

