/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../components/Button/Button';
import { StandardModal, StandardModalWithTwoOptions } from '../../../components/Modal/Modal';

import { sendOrderToKitchen, getAllOrders  } from '../../../services/orders';

import './NewOrder.scss';

export const NewOrder = () => {
  const history = useHistory();

  const [table, setTable] = useState('');
  const [customer, setCustomerName] = useState('');
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [sucessModal, setSucessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [emptyTableModal, setEmptyTableModal] = useState(false);
  const [emptyCustomerModal, setEmptyCustomerModal] = useState(false);
  const [emptyOrderModal, setEmptyOrderModal] = useState(false);
  const [occupiedTables, setOccupiedTables] = useState([]);
  const [tableIsOccupiedModal, setTableIsOccupiedModal] = useState(false);
  const [userNotAuthenticatedErrorModal, setUserNotAuthenticatedErrorModal] = useState(false);
 
  const token = localStorage.getItem('currentEmployeeToken');
  const menu = JSON.parse(localStorage.getItem('menu'));
  menu.length > 0 && menu.map((product) => product.id = product.id.toString());

  const productTotals = [];
  const orderedProductsQuantity = orderedProducts.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
  const orderedProductsData = menu.filter((product) => orderedProducts.includes(product.id));

  orderedProductsData.map((product) => product.qtd = orderedProductsQuantity[product.id]);
  orderedProductsData.map((product) => product.total = [product.qtd]*[product.price]);
  orderedProductsData.map((product) => productTotals.push(product.total));
  const bill = productTotals.reduce((acc, curr) => acc + curr, 0);

  const filterMenuButtons = ([productProp], value) => {
    const filteredMenu = menu.filter((product) => product[productProp] === value);
    return filteredMenu;
  }

  const decreaseProductQuantity = (value) => {
    let array = [...orderedProducts];
    const index = array.indexOf(value);
    if (index > -1){
      array.splice(index, 1);
      setOrderedProducts(array);
    }
  }

  const orderResume = orderedProductsData.map(product => ({ id: product.id, qtd:product.qtd.toString()}));
  const orderInformation = { token, customer, table, orderResume};

  const getCurrentOrders = () => {
    getAllOrders(token)
    .then(responseJson => {
      switch (responseJson.code) {
        case 401:
          return setUserNotAuthenticatedErrorModal(true);
        default:
          const orders = responseJson;
          const orderTables = []
          orders.map((order) => orderTables.push(order.table.toString()));
          setOccupiedTables(orderTables.filter((v, i, a) => a.indexOf(v) === i))
      } 
    })   
  }

  useEffect(() => {
    getCurrentOrders();
  }, []);
  
  const checkCustomerData = () => {
    if(customer.length <2){
      setEmptyCustomerModal(true);
      return 'Error';
    }
    else if(table.length > 2){
      setEmptyTableModal(true) ;
      return 'Error';
    }
    else if(table[0] === "0"){
      setEmptyTableModal(true) ;
      return 'Error';
    }
    else if(orderResume.length <1){
      setEmptyOrderModal(true) ;
      return "Error";
    }
    else if(occupiedTables.includes(table)) {
      setTableIsOccupiedModal(true)
      return "Error"
    }
  }

  const sendOrder = () =>{
    const checkDataResult = checkCustomerData()
    if (checkDataResult !== 'Error') {
      sendOrderToKitchen({orderInformation})
      .then((responseJson) => {
        if(responseJson.code !== 401) {
          setSucessModal(true);
        } else {
          throw new Error (responseJson.message);
        }
      }).catch(() => setErrorModal(true));
    }
  }

  const sendOrderWithoutCheck = () =>{
    sendOrderToKitchen({orderInformation})
    .then((responseJson) => {
      if(responseJson.code !== 401) {
        setSucessModal(true);
      } else {
        throw new Error (responseJson.message);
      }
     }).catch(() => setErrorModal(true));
  }
  
  return (
    <div>
      <main className='new-order-main'>
        <Button ButtonClass='new-order-go-back-button' ButtonOnClick={() => history.push('/room')}/>
        <section className='new-order-section'>
          <div className='new-order-note-div'>
            <fieldset>
              <div>
                <label>Mesa:&nbsp;&nbsp;</label>
                <input className='table-input' type='text' placeholder='____' autoComplete='off' onChange={(event)=> setTable(event.target.value)}/>
              </div>
              <div>
                <label>Cliente:&nbsp;&nbsp;</label>
                <input className='customer-name-input' type='text' placeholder='______________' autoComplete='off' onChange={(event)=> setCustomerName(event.target.value)}/>
              </div>
            </fieldset>
            <div className='new-order-products-list-head'>
              <h1>Produto</h1>
              <h1>Qtd.</h1>
              <h1>R$</h1>
            </div>
            <div className='new-order-full-list'>
              {orderedProductsData.map((product) => 
                <div className='new-order-products-list-content' key={product.id}>
                  <p className='new-order-product-list-name'>{product.name}</p>
                  <div className='new-order-quantity-div'>
                    <Button ButtonClass='new-order-modify-quantity new-order-modify-quantity-minus' ButtonOnClick={ () => decreaseProductQuantity(product.id)}/>
                    <p className='new-order-product-list-quantity'>{product.qtd}</p>
                    <Button ButtonClass='new-order-modify-quantity new-order-modify-quantity-plus' ButtonOnClick={ () => setOrderedProducts(orderedProducts => [...orderedProducts, product.id])}/>
                  </div>
                  <p className='new-order-product-list-price'>{product.total}</p>
                  <Button ButtonClass='new-order-trash' ButtonOnClick={ () => setOrderedProducts(orderedProducts.filter(elements => elements !== product.id))}/>
                </div>
              )}
            </div>
            <div className='new-order-price'>
                <h1>Total</h1>
                <h1>R$ {bill}</h1>
            </div>
          </div>
          <Button ButtonClass='new-order-send-order-to-kitchen' children='Enviar para cozinha' ButtonOnClick={()=> sendOrder()}/>
          <div className='new-order-filter-buttons-div'>
            <Button 
              ButtonClass='new-order-filter' 
              children='Alles' 
              ButtonOnClick={() => setShowAllProducts(true)}
            />
            <Button 
              ButtonClass='new-order-filter' 
              children='Snacks'
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['sub_type'], 'snacks')), 
              ]}
            />
            <Button 
              ButtonClass='new-order-filter' 
              children='Burgers' 
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['sub_type'], 'hamburguer')), 
              ]}
            />
            <Button 
              ButtonClass='new-order-filter' 
              children='Drinken'
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['sub_type'], 'drinks')), 
              ]}
            />
            <Button 
              ButtonClass='new-order-filter'  
              children='Morgen' 
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['type'], 'breakfast')), 
              ]}
            />
            <Button 
              ButtonClass='new-order-filter'  
              children='Dag' 
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['type'], 'all-day')), 
              ]}
            />
          </div>
          <div className='new-order-product-buttons-div'>
            {showAllProducts ?
              menu.map((product) => 
                <Button 
                  key={product.id}
                  ButtonId={product.id}
                  ButtonClass='new-order-product-button' 
                  ButtonTitle={product.title}
                  ButtonOnClick={(event)=> [setOrderedProducts(orderedProducts => [...orderedProducts, event.target.id])]}
                />
              ) 
            :filteredMenu.map((product) => 
              <Button 
                key={product.id}
                ButtonId={product.id}
                ButtonClass='new-order-product-button' 
                ButtonTitle={product.title}
                ButtonOnClick={(event)=> [setOrderedProducts(orderedProducts => [...orderedProducts, event.target.id])]}
              /> 
            )}
          </div>
        </section> 
      </main>
      <section>
        {emptyCustomerModal && 
          <StandardModal 
          ModalContent='Por favor, insira o nome do cliente.'
          ButtonChildren='OK'
          ButtonOnClick = {() => setEmptyCustomerModal(false)}
          />
        }
      </section>
      <section>
        {emptyTableModal && 
          <StandardModal 
            ButtonChildren='OK'
            ModalContent='Por favor, insira o número da mesa SEM o 0 (zero) à esquerda.".'
            ButtonOnClick = {() => setEmptyTableModal(false)}
          />
        }
      </section>
      <section>
        {emptyOrderModal && 
          <StandardModal 
            ButtonChildren='OK'
            ModalContent='O resumo do pedido está vazio. Por favor, o verifique.'
            ButtonOnClick = {() => setEmptyOrderModal(false)}
          />
        }
      </section>
      <section>
        {sucessModal &&
          <StandardModalWithTwoOptions
            ButtonChildren = 'Voltar para o salão'
            ButtonSecondAuthModalOptionChildren = 'Fazer um novo pedido'
            ModalContent='As chefs já estão dando conta do pedido! Aguarde atualizações.'
            ButtonOnClick = {() => history.push('/room')}
            ButtOnClickSecondAuthModalOption = {() => setSucessModal(false)}
          />
        }
      </section>
      <section>
        {tableIsOccupiedModal &&
          <StandardModalWithTwoOptions
            ButtonChildren='Escolha outra mesa'
            ModalContent='Atenção! Mesa ocupada!'
            ButtonOnClick = {() => setTableIsOccupiedModal(false)}
            ButtonSecondAuthModalOptionChildren = 'Inserir novos pedidos nesta mesa'
            ButtOnClickSecondAuthModalOption = {() => [setTableIsOccupiedModal(false), sendOrderWithoutCheck()]}
          />
        }
      </section>
      <section>
        {errorModal &&
          <StandardModal 
            ButtonChildren='OK'
            ModalContent='Algo deu errado. Verifique as informações registradas.'
            ButtonOnClick = {() => setErrorModal(false)}
          />
        }
      </section>
      <section>
        {userNotAuthenticatedErrorModal &&
          <StandardModal 
            ButtonChildren='OK'
            ModalContent='Usuário não autenticado.'
            ButtonOnClick = {() => setUserNotAuthenticatedErrorModal(false)}
          />
        }
      </section>
    </div>
  )
}

