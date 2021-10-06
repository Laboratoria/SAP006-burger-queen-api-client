import { useEffect, useState } from "react";
//import Product from "../../services/data";
import MenuArea from "../../components/menu-area";
//import ItemCard from "../../components/cartItens";
import CardList from "../../components/cardList";
import { getProducts } from "../../services/data";
import Button from "../../components/button/button";
import { Logout } from "../../services/users";
import './style.css';
import MenuHamburguer from "../../components/menuHamburguer";
//import Input from "../../components/inputs";


const Cardapio = () => {

  
  
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState([]);
  const [addItem, setAddItem] = useState([])
  const [itemsList, setItemsList] = useState([])

  
  function handleMenu(menuSelected) {
    const menuProducts = products.filter((item) => item.type === menuSelected)
    setMenu(menuProducts)
  }



  useEffect(() => {
    getProducts()
      .then((lista) => {
        lista.json()
          .then((list) => {
            setProducts(list)
          })
      })

  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  const removeButton = (event, index) => {
    event.preventDefault();
    const updatedItemsList = [...itemsList];
    updatedItemsList.splice(index, 1);
    setItemsList(updatedItemsList);
  };

  /*const handleSubmit = async () => {
    try {
      const data = await getProducts()
      setProducts(data)
      console.log(data)
      return data
    } catch (e) {
      console.error("Erro na requisição", e)
    }
  }*/
  return (
    <>
    <div className='nav'>
    <MenuHamburguer/>
    <h1>Best Burger in town</h1>
    </div>
      
      <div className='container-hall' >
        <div className='item'>
          <Button
            buttonType='button'
            buttonOnclick={() => { handleMenu('breakfast') }}
            buttonText="Coffe"
            buttonClass='button-hall'
          >
          </Button>
          <Button
            buttonType='button'
            buttonOnclick={() => { handleMenu('all-day') }}
            buttonText="Burgers"
            buttonClass='button-hall'
          >
          </Button>
         {products.map(item => {
           return(
            <CardList
            productList={menu}
            onClick={() => {
              setAddItem([...addItem, { nome: menu.name, preco: menu.price }])
            }}
          />
           )
         })}
          
          <Button
            buttonType='button'
            buttonOnclick={Logout}
            buttonText="Sair"
            buttonClass='button-class'
          >
          </Button>
        </div>
        <div className='cartItem'>
          <MenuArea
            arrItem={itemsList}
            removeButton={removeButton}>
          </MenuArea>
        </div>
      </div>
    </>
  )
  
}
export default Cardapio;

//try / catch / finally - MDN
//confirmar se o retorno é um array de obj

/*    const response = await fetch(url, config)
        return response
    }

        const handleSubmit = async () => {
            try {
              const data = await getProducts()
              setProducts(data)
              console.log(data)
              return data
            } catch (e) {
              console.error("Erro na requisição", e)
            }
        }
        return (
            <CardList
            onClick={handleSubmit}
            productList={products}
            />
        )

}
export default Cardapio;*/