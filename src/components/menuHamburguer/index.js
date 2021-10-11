import { useState } from "react";
import './style.css';
import Modal from "../modal";
import { Logout } from "../../services/users";


function MenuHamburguer() {
  const [active, setMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pedido, setIsPedido] = useState(false);


  const ToggleMode = () => {
    setMode(!active)
  }
  return (
    <>
      <div className='menu-class'>
        <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
          <div className='hamburguer hamburguerIcon'></div>
        </div>
        <div className={active ? 'menu menuOpen' : 'menu menuClose'} >
          <div className='list'>
            <ul className='listItems'>
              <li onClick={() => setIsModalVisible(true)}>Pedidos Pendentes</li>
              <li onClick={() => setIsPedido(true)}>Pedidos Prontos</li>
              <li>Histórico de pedidos</li>
              <li onClick={Logout}>Sair</li>
            </ul>
            {isModalVisible ? (<Modal onClose={() => setIsModalVisible(false)}>
              <h2>Pedido..</h2>
            </Modal>) : null}
            {pedido ? (<Modal onClose={() => setIsPedido(false)}>
              <h2>batatinha frita 1,2,3</h2>
            </Modal>) : null}

          </div>
        </div>

      </div>

    </>
  )
}

export default MenuHamburguer;

