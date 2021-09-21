import {useState} from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../components/Button/Button';


import './NewOrder.scss';

export const NewOrder = () => { 
  const history = useHistory();

  const [table, setTable] = useState('');
  const [customer, setCustomerName] = useState('');;
 
  const [orderedProducts, setOrderedProducts] = useState([]);
 
  const menu = JSON.parse(localStorage.getItem('menu'))
  menu.map((product) => product.id = product.id.toString())

  const productTotals = []
  const orderedProductsQuantity = orderedProducts.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
  const orderedProductsData = menu.filter((product) => orderedProducts.includes(product.id))
  
  orderedProductsData.map((product) => product.quantity = orderedProductsQuantity[product.id])
  orderedProductsData.map((product) => product.total = [product.quantity]*[product.price])
  orderedProductsData.map((product) => productTotals.push(product.total))
  
  const bill = productTotals.reduce((acc, curr) => acc + curr, 0)

  return (
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
            <h1>Total</h1>
          </div>
          <div className='new-order-full-list'>
            {orderedProductsData.map((product) => 
              <div className='new-order-products-list-content'>
                <p className='new-order-product-list-name'>{product.name}</p>
                <div className='new-order-quantity-div'>
                  <Button Role='new-order-modify-quantity-plus' ButtonOnClick={ () => setOrderedProducts(orderedProducts => [...orderedProducts, product.id])}/>
                  <p className='new-order-product-list-quantity'>{product.quantity}</p>
                  <Button Role='new-order-modify-quantity-minus'ButtonOnClick={ () => setOrderedProducts(orderedProducts => [...orderedProducts, product.id-product.id])}/>
                </div>
                <p className='new-order-product-list-price'>{product.quantity*product.price}</p>
                <Button Role='new-order-trash' ButtonOnClick={ () => setOrderedProducts(orderedProducts.filter(elements => elements !== product.id))}/>
              </div>
              )}
          </div>
          <div class='new-order-price'>
              <h1>Total</h1>
              <h1>R$ {bill}</h1>
          </div>
        </div>
        <Button Role='new-order-save-order' children='Enviar para cozinha'/>
        <div className='new-order-product-buttons-div'>
        {menu.map((product) => 
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
  )
}

