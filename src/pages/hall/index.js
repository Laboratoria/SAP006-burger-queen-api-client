import { useEffect, useState } from "react";
import MenuArea from "../../components/menu-area";
import CardList from "../../components/cardList";
import { getProducts } from "../../services/data";
import Button from "../../components/button/button";
import './style.css';
import MenuHamburguer from "../../components/menuHamburguer";
import Input from "../../components/inputs";
import Relogio from "../../components/menu-area/relogio";
import Modal from "../../components/modal";
import Contador from "../../components/menu-area/contador";
import { tokenUser } from "../../services/users";

const Cardapio = () => {

  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [mesaValue, setMesaValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  function postOrder(mesaValue, nameValue) {
    return fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${tokenUser}`
      },
      body: JSON.stringify({
        client: 'joice',
        table: 4,
        products: [
          {
            id: 31,
            qtd: 2
          }
        ]
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        const order = json
        console.log(order)
        setIsModalVisible(true)
      })
      .catch((error) => {
        console.log(
          'deu ruim'
        )
      })
  }

  const remove = (event, index) => {
    event.preventDefault();
    const updatedItemsList = [...addItem];
    updatedItemsList.splice(index, 1);
    setAddItem(updatedItemsList);
  };

  return (
    <>
      <div className='nav'>
        <MenuHamburguer />
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
            return (
              <CardList
                productList={menu}
                onClick={(item) => {
                  setAddItem([...addItem, { nome: item.name, preco: item.price }])
                }}
              />
            )
          })}

        </div>
        <div className='cartItem'>
          {addItem.map(item => {
            return (
              <div>
                <MenuArea
                  nome={item.nome}
                  preco={item.preco}
                />
                <Contador />
                <button
                  type='button'
                  onClick={remove}
                  className='input-group'
                ><i className="far fa-trash-alt"></i>
                </button>
                <hr className='hr-class' />
              </div>
            )
          })}
          <h3>Total: { }</h3>

          <Input
            inputType='text'
            inputName='nameClient'
            inputPlaceholder='Digite o nome do cliente'
            inputChange={(e) => setNameValue(e.target.value)}
            inputClassName='input-area'
          />
          <div className='option-mesas'>
            <select className='style-mesas' onChange={(e) => setMesaValue(e.target.value)}>
              <option className='style-mesas'>  Escolha a mesa </option>
              <option className='style-mesas' value='1'>  Mesa 1 </option>
              <option className='style-mesas' value='2'>  Mesa 2  </option>
              <option className='style-mesas' value='3'>  Mesa 3  </option>
              <option className='style-mesas' value='4'>  Mesa 4  </option>
              <option className='style-mesas' value='5'>  Mesa 5  </option>
              <option className='style-mesas' value='6'>  Mesa 6  </option>
              <option className='style-mesas' value='7'>  Mesa 7  </option>
              <option className='style-mesas' value='8'>  Mesa 8  </option>
              <option className='style-mesas' value='9'>  Mesa 9  </option>
              <option className='style-mesas' value='10'>  Mesa 10  </option>
            </select>
          </div>
          <Button
            buttonType='button'
            buttonOnclick={postOrder}
            buttonText="Enviar"
            buttonClass='button-class'
          ></Button>
          <Relogio />
        </div>
        {isModalVisible ? (<Modal onClose={() => setIsModalVisible(false)}>
          <h2>Pedido enviado com sucesso!</h2>

        </Modal>) : null}

      </div>
    </>
  )

}
export default Cardapio;

//try / catch / finally - MDN
//confirmar se o retorno é um array de obj