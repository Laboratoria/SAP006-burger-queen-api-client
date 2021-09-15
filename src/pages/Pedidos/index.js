/* eslint-disable */
import '../Pedidos/index.css';
import Header from '../../components/Header/header'
import Item from '../../components/Item/itens'
import { useState, useEffect } from 'react';
import CoffeImg from "../../img/coffe-item.png";
 
function Pedidos() {
  useEffect(()=> {
    getAllProducts();
  }, [])

 

  const [menu, setMenu] = useState('')
  const [resumopedido, setResumoPedido] = useState([]);

  const token = localStorage.getItem("token")
   const getAllProducts = () => {
     fetch('https://lab-api-bq.herokuapp.com/products', {
       headers: {
        'accept': 'application/json',
        "Authorization": `${token}`

       },

     })
     .then((response)=> response.json())
     .then((json)=> {
       const breakfast = json.filter(item => item.type ==='breakfast')
       setMenu(breakfast)
      
     })
  
   }

   
 

  return (
    <main className="all-container">
      <Header />
      <div className="menu-um">
        <div className="breakfast-menu">
          {menu && menu.map((item, index) => (
            <Item
            divClassName="container-food"
            divKey={Math.random()}
            itemName={item.name}
            divId={item.id}
            ImgSrc={item.image}
            itemPrice={item.price}
            qnt = {item.qnt}
            divKey={Math.random}
            itemNameKey={item.id}
            divOnClick={() => {
              if(!resumopedido.some(item => item.name === menu[index].name)) {
                setResumoPedido([...resumopedido, {"id":menu[index].id, "name": menu[index].name, "qtd":1}]);
              } else {
                resumopedido.map((item, i) => {
                  if (item.name === menu[index].name) {
                    resumopedido[i].qnt +++
                    setResumoPedido([...resumopedido]);
                  }
                })
              }
            }}
          
            />

          ))}
        
        </div>
     

      </div>
      <div className="finish-menu">
        <h1>Resumo do Pedido</h1>
        <p>Cliente:</p>
        <section>
        <label className="item">Item</label>
        {resumopedido.map((item, index) => (
          <ui className='lista-resumo-pedido'>
            <li className="list" key={index}>
              <div className="pedido-name">
                {typeof item.name === "string" ? item.name : item.name.map((item) =>
                <label className="title-pedido">{item.name}</label>               
                )}
              </div>
            </li>
         </ui>
        )
        )}
        </section>

        <div className="cash-register">   
        </div>
      </div>

    </main>
  );
}

export default Pedidos;
