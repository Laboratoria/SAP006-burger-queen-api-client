/* eslint-disable no-sequences */

import { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../components/Button/Button';
import { DefaultModal } from '../../../components/Modal/Modal';

import { getAllProducts } from '../../../services/products';
import { titleCorrespondance } from '../../../data/titleCorrespondance';
import { getErrorCase } from '../../../services/general';

import { sendOrderToKitchen, getAllOrders  } from '../../../services/orders';

import './NewOrder.scss';

export const NewOrder = () => {
  const history = useHistory();

  const [menu, setMenu] = useState([])
  const [table, setTable] = useState('');
  const [customer, setCustomerName] = useState('');
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [occupiedTables, setOccupiedTables] = useState([]);

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    Type:'',
    Text:'',
    ButtonChildren:'',
    ButtonClick:'',
    ButtonSecondChildren:'',
    ButtonSecondClick:'',
  })

  const token = localStorage.getItem('currentEmployeeToken');
  menu.length > 0 && menu.map((product) => product.id = product.id.toString());
  const productTotals = [];
  const orderedProductsQuantity = orderedProducts.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
  const orderedProductsData = menu.filter((product) => orderedProducts.includes(product.id));

  orderedProductsData.map((product) => product.qtd = orderedProductsQuantity[product.id]);
  orderedProductsData.map((product) => product.total = [product.qtd]*[product.price]);
  orderedProductsData.map((product) => productTotals.push(product.total));
  const bill = productTotals.reduce((acc, curr) => acc + curr, 0);

  const orderResume = orderedProductsData.map(product => ({ id: product.id, qtd:product.qtd.toString()}));
  const orderInformation = { token, customer, table, orderResume};

  const handleAPIErrors = (data) => {
    const result = getErrorCase(data.code);
    Object.keys(data).includes('code') && setModalContent(modalContent => ({...modalContent, Text: result, Type: 'one-button-modal'}));
    Object.keys(data).includes('code') && setModal(true);
  }

  useEffect(() => {
    getAllProducts(token)
    .then((responseJson) => { 
      const menu = responseJson;
      titleCorrespondance(menu);
      setMenu(menu);
      handleAPIErrors(responseJson);
    })
  },[menu, token]);


  useEffect(() => {
    getAllOrders(token)
    .then(responseJson => {
      setCurrentOrders(responseJson);
      const orderTables = [];
      currentOrders.map((order) => orderTables.push(order.table.toString()));
      setOccupiedTables(orderTables.filter((v, i, a) => a.indexOf(v) === i));
      handleAPIErrors(responseJson);
    })   
  }, [currentOrders, token]);
  
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

  const checkCustomerData = () => {
    setModalContent(modalContent =>
      ({...modalContent, 
        Type: 'one-button-modal',
        ButtonChildren:'Fechar',
      }))
      setModal(true);
    if(customer.length <2){
      setModalContent(modalContent => ({...modalContent, 
        Text: 'Por favor, insira o nome do cliente'
      }))
      return 'Error';
    }
    else if(table.length < 1||table.length > 2 || table[0] === "0" || parseInt(table) > 12){
      setModalContent(modalContent =>
        ({...modalContent, 
          Text: 'Por favor, insira um número de mesa válido. O zero à esquerda não deve ser incluso.', 
        }))
      return 'Error';
    }
    else if(orderResume.length <1){
      setModalContent(modalContent =>
        ({...modalContent, 
          Text: 'O resumo do pedido está vazio!', 
        }))
      return "Error";
    }
  }

  const sendOrder = () =>{
    const checkDataResult = checkCustomerData()
    checkDataResult !== 'Error' &&
    sendOrderToKitchen({orderInformation})
    .then((responseJson) => {
      handleAPIErrors(responseJson);
      setModalContent(modalContent =>
        ({...modalContent, 
          Text: 'As chefs já estão dando conta do pedido! O que você  deseja fazer?.', 
          Type: 'two-buttons-modal',
          ButtonChildren:'Fazer um novo pedido',
          ButtonSecondChildren:'Voltar para o salão',
          ButtonSecondClick: () => history.push('/room')
        }))
      setModal(true);
    })
  }

  const sendWithTableStatusCheck = () => {
    !occupiedTables.includes(table) ? sendOrder() :
    setModalContent(modalContent =>
      ({...modalContent, 
        Text: 'Atenção! Esta mesa está ocupada.', 
        Type: 'two-buttons-modal',
        ButtonChildren:'Escolha outra mesa',
        ButtonSecondChildren:'Insira novos pedidos nesta mesa',
        ButtonSecondClick: () => [sendOrder(), setModal(false)]
      }))
    setModal(true); 
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
          <Button 
            ButtonClass='new-order-send-order-to-kitchen' 
            children='Enviar para cozinha' 
            ButtonOnClick={() =>  sendWithTableStatusCheck()}
          />
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
        {modal && 
          <DefaultModal
            Type = {modalContent.Type}
            ModalContent = {modalContent.Text}
            ButtonChildren = {modalContent.ButtonChildren}
            ButtonOnClick = {() => setModal(false)}
            ButtonSecondAuthModalOptionChildren= {modalContent.ButtonSecondChildren}
            ButtOnClickSecondAuthModalOption = {modalContent.ButtonSecondClick}
          />
        }
      </section>
    </div>
  )
}

