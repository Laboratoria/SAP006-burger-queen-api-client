/* eslint-disable */
import '../Pedidos/index.css';
import Header from '../../components/Header/header'
import Item from '../../components/Item/itens'
import { useState, useEffect } from 'react';
import CoffeImg from "../../img/coffe-item.png";
 
function Pedidos() {
  useEffect(()=> {
    getAllProducts()
  })

 

  const [menu, setMenu] = useState('')

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGxpQGtydXN0eWtyYWIuY29tIiwiaWQiOjE5NDksImlhdCI6MTYzMTI0NDM0MSwiZXhwIjoxNjYyODAxOTQxfQ.ey2HG1ugfXWZpqufoUUNfQOrML7FHBRaBTTvdLOQnns";
 
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
      
     },
   
     )
  
   }
 


  return (
    <main className="all-container">
      <Header />
      <div className="menu-um">
        <div className="breakfast-menu">
          {menu && menu.map((item) => (
            <Item
            divClassName="container-food"
            divKey={Math.random()}
            itemName={item.name}
            ImgSrc={item.image}
            itemPrice={item.price}
          
            />

          )          
          )
          }
        
        </div>
     

      </div>
      <div className="finish-menu">
        <h1>menudois</h1>

        <div className="cash-register">
          
          
        
        </div>
      </div>

    </main>
  );
}

export default Pedidos;
