import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getErrorCase, getTotalOrderBill, getTotalTableBill } from '../../../services/general';
import { getUserById } from '../../../services/users';
import { getAllOrders, deleteOrder } from '../../../services/orders';
import { getAllProducts } from '../../../services/products';
import { tables } from '../../../data/tables'


import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { DefaultModal } from '../../../components/Modal/Modal';
import { TableOrdersModal } from '../../../components/Modal/Modal';

import './Room.scss';

export const Room = () => { 
  const history = useHistory();
  const token = localStorage.getItem('currentEmployeeToken');

  const [tablesWithOrders,setTablesWithOrders] = useState([]);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [waitress, setWaitress] = useState([]);

  const [targetTableOrders, setTargetTableOrders] = useState([]);
  const [targetTableId, setTargetTableId] = useState();
  const [totalTableBill, setTotalTableBill] = useState();
 
  const [fullTableModal, setFullTableModal] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    Type:'',
    Text:'',
    ButtonChildren:'',
    ButtonClick:'',
    ButtonSecondChildren:'',
    ButtonSecondClick:'',
  })

  const handleAPIErrors = (data) => {
    const result = getErrorCase(data.code);
    Object.keys(data).includes('code') && setModalContent(modalContent => ({...modalContent, Text: result, Type: 'one-button-modal'}));
    Object.keys(data).includes('code') && setModal(true);
  }

  const getWaitressName = (userIdFromOrder) => {
    getUserById(token, userIdFromOrder)
    .then(responseJson=> {
      handleAPIErrors(responseJson);
      setWaitress(responseJson.name)
    })
  }

  useEffect(() => {
    getAllProducts(token)
      .then((responseJson) => { 
        handleAPIErrors(responseJson);
        localStorage.removeItem('menu')
        localStorage.setItem('menu',  JSON.stringify(responseJson))
      })
    },[token]);

  useEffect(() => {
    getAllOrders(token)
      .then(responseJson => {
        handleAPIErrors(responseJson);
        const menu = (JSON.parse(localStorage.getItem('menu')));
        getTotalOrderBill(responseJson, menu);

        responseJson.map((order) => order.waitress = )
        setCurrentOrders(responseJson);

        tables.map((table) => table.orders = responseJson.filter((order) => order.table === table.table));
        setTablesWithOrders(tables);
      })
    },[token, currentOrders]);

  useEffect(() => {
    setTargetTableOrders(currentOrders.filter((order) => order.table.toString() === targetTableId));
    setTotalTableBill(getTotalTableBill(currentOrders, targetTableId));
  },[targetTableId, currentOrders]);
  
  const deleteTargetOrder = (orderToBeDeleted) => {
    deleteOrder(orderToBeDeleted, token)
    .then(responseJson => {
      handleAPIErrors(responseJson);
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
                event.target.getAttribute('data-title') === 'empty-table' ? 
                [setModalContent(modalContent => ({...modalContent, 
                  Type: 'one-button-modal',
                  Text: 'Esta mesa ainda não possui pedidos!',
                })), setModal(true)] 
                : 
                [setTargetTableId(event.target.id),
                setFullTableModal(true), 
                document.body.style.overflow = 'hidden']
              }              
            />
          )}
        </section>
      </main>
      <section>
        {fullTableModal && 
        <TableOrdersModal 
          orders={targetTableOrders}
          TableTotalBill={totalTableBill}
          FirstButtonClick={() => setFullTableModal(false)}
          SecondButtonClick={() => [setModalContent(modalContent => 
            ({...modalContent, 
              Type: 'two-buttons-modal',
              Text: 'Você tem certeza que deseja excluir todos os pedidos desta mesa?',
              ButtonSecondClick: () => {
                const orderIds = [];
                targetTableOrders.map((order) => orderIds.push(order.id));
                orderIds.map((order) => deleteTargetOrder(order)) ;
                setModalContent(modalContent => 
                  ({...modalContent, 
                    Type: 'one-button-modal',
                    Text: 'Mesa limpa com sucesso!',
                  })
                );
                setModal(true);
                setFullTableModal(false);
              }
            })
          ), setModal(true)
        ]}
          ButtonDeleteOrder={(event) => {
            const orderIdToDelete = event.target.id;
            setModalContent(modalContent => 
              ({...modalContent, 
                Type:'two-buttons-modal',
                Text: 'Você tem certeza que deseja excluir este pedido?',
                ButtonSecondClick: () => {
                  deleteTargetOrder(orderIdToDelete);
                  setModal(false);
                }
              })
            )
            setModal(true);
          }}
        />
        } 
      </section>
      <section>
        {modal && 
          <DefaultModal
            Type = {modalContent.Type}
            ModalContent = {modalContent.Text}
            ButtonChildren = 'Fechar'
            ButtonOnClick = {() => setModal(false)}
            ButtonSecondAuthModalOptionChildren= 'Excluir'
            ButtOnClickSecondAuthModalOption = {modalContent.ButtonSecondClick}
          />
        }
      </section>
    </div>
  )
}

