/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../../components/Button/Button';
import { NewOrderModal } from '../../../components/Modal/Modal';

import { sendOrderToKitchen } from '../../../services/orders';

import './NewOrder.scss';

export const NewOrder = () => {
  const history = useHistory();

  const token = localStorage.getItem('currentEmployeeToken');
  const [table, setTable] = useState('');
  const [customer, setCustomerName] = useState('');
  const [menu, setMenu] = useState(JSON.parse(localStorage.getItem('menu')))
  const [filteredMenu, setFilteredMenu] = useState([]);

  const [showAllProducts, setShowAllProducts] = useState(true);
 

  const [orderedProducts, setOrderedProducts] = useState([]);
  const [sucessModal, setSucessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [emptyTableModal, setEmptyTableModal] = useState(false);
  const [emptyCustomerModal, setEmptyCustomerModal] = useState(false);
  const [emptyOrderModal, setEmptyOrderModal] = useState(false);
  menu.map((product) => product.id = product.id.toString())

  const filterMenuButtons = ([productProp], value) => {
    const filteredMenu = menu.filter((product) => product[productProp] === value)
    return filteredMenu
  }

  const productTotals = [];
  const orderedProductsQuantity = orderedProducts.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
  const orderedProductsData = menu.filter((product) => orderedProducts.includes(product.id))

  orderedProductsData.map((product) => product.qtd = orderedProductsQuantity[product.id])
  orderedProductsData.map((product) => product.total = [product.qtd]*[product.price])
  orderedProductsData.map((product) => productTotals.push(product.total))
  const bill = productTotals.reduce((acc, curr) => acc + curr, 0)

  const decreaseProductQuantity = (value) => {
    let array = [...orderedProducts]
    const index = array.indexOf(value)
    if (index >-1){
      array.splice(index, 1)
      setOrderedProducts(array);
    }
  }

  const orderResume = orderedProductsData.map(product => ({ id: product.id, qtd:product.qtd.toString()}));
  const orderInformation = { token, customer, table, orderResume}


  const checkCustomerData = () => {
    if(customer.length <2){
      setEmptyCustomerModal(true)
      return 'Error'
    }
    else if(table.length <2 || table.length >2){
      setEmptyTableModal(true) 
      return 'Error'
    }
    else if(orderResume.length <1){
      setEmptyOrderModal(true) 
      return "Error"
    }
  }

  const sendOrder = () =>{
    const checkDataResult = checkCustomerData()
    if (checkDataResult !== 'Error') {
      sendOrderToKitchen({orderInformation})
      .then((responseJson) => {
        if(responseJson.code !== 401) {
          setSucessModal(true)
        } else {
          throw new Error (responseJson.message)
        }
      }).catch(() => setErrorModal(true))
    }
  }

  return (
    <div>
      <main>
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
                    <Button Role='new-order-modify-quantity-minus' ButtonOnClick={ () => decreaseProductQuantity(product.id)}/>
                    <p className='new-order-product-list-quantity'>{product.qtd}</p>
                    <Button Role='new-order-modify-quantity-plus' ButtonOnClick={ () => setOrderedProducts(orderedProducts => [...orderedProducts, product.id])}/>
                  </div>
                  <p className='new-order-product-list-price'>{product.total}</p>
                  <Button Role='new-order-trash' ButtonOnClick={ () => setOrderedProducts(orderedProducts.filter(elements => elements !== product.id))}/>
                </div>
                )}
            </div>
            <div className='new-order-price'>
                <h1>Total</h1>
                <h1>R$ {bill}</h1>
            </div>
          </div>
          <Button Role='new-order-save-order' children='Enviar para cozinha' ButtonOnClick={()=> sendOrder()}/>
          <div className='new-order-filter-buttons-div'>
            <Button 
              Role='new-order-filter' 
              children='Alles' 
              ButtonOnClick={() => setShowAllProducts(true)}
            />
            <Button 
              Role='new-order-filter' 
              children='Snacks'
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['sub_type'], 'snacks')), 
              ]}
            />
            <Button 
              Role='new-order-filter' 
              children='Burgers' 
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['sub_type'], 'hamburguer')), 
              ]}
            />
            <Button 
              Role='new-order-filter' 
              children='Drinken'
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['sub_type'], 'drinks')), 
              ]}
            />
            <Button 
              Role='new-order-filter'  
              children='Morgen' 
              ButtonOnClick={() => [
                setShowAllProducts(false), 
                setFilteredMenu(filterMenuButtons(['type'], 'breakfast')), 
              ]}
            />
            <Button 
              Role='new-order-filter'  
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
                Role='new-order-product-button' 
                ButtonTitle={product.title}
                ButtonOnClick={(event)=> [setOrderedProducts(orderedProducts => [...orderedProducts, event.target.id])]}
              />
            ) 
          :filteredMenu.map((product) => 
            <Button 
              key={product.id}
              ButtonId={product.id}
              Role='new-order-product-button' 
              ButtonTitle={product.title}
              ButtonOnClick={(event)=> [setOrderedProducts(orderedProducts => [...orderedProducts, event.target.id])]}
            /> 
          )}
          </div>
        </section> 
      </main>
      <section>
      {emptyCustomerModal ? (
        <NewOrderModal
          children='OK'
          Role = 'new-order-modal'
          ModalContent='Por favor, insira o nome do cliente.'
          ButtonOnClick = {() => setEmptyCustomerModal(false)}
        />
      ): null}
    </section>
    <section>
      {emptyTableModal ? (
        <NewOrderModal
          children='OK'
          Role = 'new-order-modal'
          ModalContent='Por favor, insira o número da mesa de acordo com o exemplo a seguir: "01", "02", "03" ... "10", "11" e "12".'
          ButtonOnClick = {() => setEmptyTableModal(false)}
        />
      ): null}
    </section>
    <section>
      {emptyOrderModal ? (
        <NewOrderModal
          children='OK'
          Role = 'new-order-modal'
          ModalContent='O resumo do pedido está vazio. Por favor, o verifique.'
          ButtonOnClick = {() => setEmptyOrderModal(false)}
        />
      ): null}
    </section>
    <section>
      {sucessModal ? (
        <NewOrderModal
          children='Voltar para o salão'
          childrenSecondButton = 'Fazer um novo pedido'
          Role = 'new-order-sucess-modal'
          ModalContent='As chefs já estão dando conta do pedido! Aguarde atualizações.'
          ButtonOnClick = {() => history.push('/room')}
          ButtonOnClickSecondOption = {() => setSucessModal(false)}
        />
      ): null}
    </section>
    <section>
      {errorModal ? (
        <NewOrderModal
          children='OK'
          Role = 'new-order-sucess-modal'
          ModalContent='Algo deu errado. Verifique as informações registradas.'
          ButtonOnClick = {() => setErrorModal(false)}
        />
      ): null}
    </section>
  </div>
  )
}

