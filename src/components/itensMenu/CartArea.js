import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import Button from '../button/Button';
import { NewOrder } from '../../services/Products';
import './Style.css';

export default function CartArea({ arrItem, removeButton, addButton }) {

  const [itemsList, setItemsList] = useState([]);
  const [values, setValues] = useState({
    'table': '',
    'client': '', 
  })

  const history = useHistory();
  const totalPrice = arrItem.reduce((total, item) => total + (item.price * item.qtd), 0);
  
  const handleChange = (event) => {
    let {name, value} = event.target;
    setValues({
        ...values,
        [name]: value, 
    })
    console.log(value);
}

  const handleSubmit = () => { 
    const object = {
        client: values.client,
        table: values.table,
        products: itemsList.map(item => {
            const productsArray = {
                id: item.id,
                flavor: item.flavor, 
                complement: item.complement,
                qtd: item.qtd
            }
            return productsArray
        })
    }
    NewOrder(object)
    history.push('/pedidos');
}

  return (
    <section className="container-cart">
      <div className="cart">
        <p className="info-card text-cart">🛒 Carrinho </p>
        
        <label className="info-card">Cliente: 
                <input 
                  className="input-client" 
                  type="text" 
                  name="nameClient" 
                  onChange={handleChange}>
                </input>
              </label>

          {arrItem.map((item) => {
            return (
              <CartItem
                key={item.id}  
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                remove={removeButton}
                add={addButton}
                qtd={item.qtd}
              />)
          })}
      </div>

      <div className="total">
          <p>Total: R$ {totalPrice},00</p>
      </div>

      <Button
        text="Fazer Pedido"
        className="buttons btn-request" 
        onClick={handleSubmit}
      /> 
    </section> 
  )
}

