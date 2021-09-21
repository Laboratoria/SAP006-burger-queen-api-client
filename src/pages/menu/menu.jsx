import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();
  return (
    <div className='main'>
      <div className='menu-list'>
        <button className='menu-button'>Café da manhã</button>
        <button className='menu-button'>Almoço/Jantar</button>
        <div className='products-list'>
        <label className='menu-labels'>Produtos</label>
        </div>
      </div>

      <div className='orders-list'>
        <h1>Pedidos</h1>
        <label className='menu-labels'>Cliente</label>
        <input className='menu-input' type='text' placeholder='Nome' name='name' autoComplete='off'/>
        <label className='menu-labels'>Mesa</label>
        <select className='menu-select' autoComplete='off' name='role'>
          <option value=''>Selecione uma mesa</option>
          <option value='1'>mesa 1</option>
          <option value='2'>mesa 2</option>
          <option value='3'>mesa 3</option>
          <option value='4'>mesa 4</option>
          <option value='5'>mesa 5</option>
          <option value='6'>mesa 6</option>
          <option value='7'>mesa 7</option>
          <option value='8'>mesa 8</option>
          <option value='9'>mesa 9</option>
          <option value='10'>mesa 10</option>
        </select>
      </div>
      <button className='form-button draw' onClick={() => {
        localStorage.removeItem('token')
        history.push('/')
      }}>LogOut
      </button>
    </div>
  );
}

export default Menu;