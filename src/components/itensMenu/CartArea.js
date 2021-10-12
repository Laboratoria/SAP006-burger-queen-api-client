import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NewOrder } from '../../services/Products';
import CartItem from './CartItem';
import Button from '../button/Button';
import Modal from '../modal/Modal';

import './Style.css';

export default function CartArea({ arrItem, removeButton, addButton }) {
  const [modal, setModal] = useState({ text: "", show: false });
  const [clientName, setClientName] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const history = useHistory();
  const totalPrice = arrItem.reduce((total, item) => total + (item.price * item.qtd), 0);
  
  const handleChangeClient = (event) => {
    let {value} = event.target;
    setClientName(value)
  }

  const handleChangeTable = (event) => {
    const {value} = event.target;
    setTableNumber(value)
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    const object = {
        client: clientName,
        table: tableNumber,
        products: arrItem.map(item => {
            const productsArray = {
                id: item.id,
                name: item.name,
                flavor: item.flavor, 
                complement: item.complement,
                qtd: item.qtd
            }
            return productsArray
        })
    }
    NewOrder(object)
    setModal({ text: "Pedido enviado para a cozinha", show: true });
  }

  const btnToHistoric = (e) => {
    history.push('/historico')
  }

  return (
    <section className="container-cart">
      <div className="cart">
        <p className="info-card text-cart"> COMANDA </p>
          <label className="info-card">Mesa:
            <select 
              className="select-table" 
              onChange={handleChangeTable}
            >
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
            </select>  
          </label>

          <label className="info-card">Cliente: 
            <input 
              className="input-client" 
              type="text" 
              name="nameClient" 
              onChange={handleChangeClient}
              >
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
                flavor={item.flavor}
                complement={item.complement}
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
      <Modal
        children={modal.text}
        hide={modal.show}
        setHide={setModal}
        callback={btnToHistoric}
      ></Modal>

    </section> 
  );
};
