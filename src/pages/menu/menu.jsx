import { useState } from "react";
import MenuHamburger from "../../components/menuHamburger";
import { getProducts } from "../../services/auth";
import ProductInfo from "../../components/productinfo";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [addItem, setAddItem] = useState([])
  const [productsType, setProductsType] = useState('breakfast');
  getProducts().then(data => setProducts(data))

  return (
    <div className='main'>
      <MenuHamburger />
      <section className='big-container'>
        <div className='menu-list'>
          <button className='menu-button' onClick={() => setProductsType('breakfast')}>Café da manhã</button>
          <button className='menu-button' onClick={() => setProductsType('all-day')}>Almoço/Jantar</button>
        </div>
        <div className='products-list' {...products}>
          {products.map((elem) => {
            return (
              <ProductInfo
                id={elem.id}
                name={elem.name}
                price={elem.price}
            
              />
              
            )
          })
          }
          <label className='products-labels'>Produtos</label>
          <label className='value-labels'>Valor</label>
        </div>
        <div className='orders-card'>
          <h1 className='menu-title'>Pedidos</h1>
          <label className='menu-labels'>Cliente</label>
          <input className='menu-input' type='text' placeholder='Nome' name='name' autoComplete='off' />
          <label className='menu-labels'>Mesa</label>
          <select className='menu-select' autoComplete='off' name='role'>
            <option value=''>Selecione uma mesa</option>
            <option value='1'>Mesa 1</option>
            <option value='2'>Mesa 2</option>
            <option value='3'>Mesa 3</option>
            <option value='4'>Mesa 4</option>
            <option value='5'>Mesa 5</option>
            <option value='6'>Mesa 6</option>
            <option value='7'>Mesa 7</option>
            <option value='8'>Mesa 8</option>
            <option value='9'>Mesa 9</option>
            <option value='10'>Mesa 10</option>
          </select>
          <div className='orders-list'></div>
          <button className='menu-button'>Finalizar pedido</button>
        </div>
      </section>
    </div>
  );
}

export default Menu;