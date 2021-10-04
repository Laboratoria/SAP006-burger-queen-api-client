import React, {useState,} from 'react';
import MenuArea from '../../components/MenuArea';
import MenuPage from '../../components/MenuPage';
import ItemCard from '../../components/ItemCard';
import CartArea from '../../components/CartArea';
import cardapio from '../../services/cardapio';


export function Hall() {
  
    const [itemsList, setItemsList] = useState([])
  
    const removeButton = (event, index) => {
      event.preventDefault();
      const updatedItemsList = [...itemsList];
      updatedItemsList.splice(index, 1);
      setItemsList(updatedItemsList);
    };
  
    return (
    <>
      <h1>título da página</h1>
      <MenuPage>
        <MenuArea {...cardapio}>
          {cardapio.map((item) => {
            return (
              <ItemCard
                img={item.img}
                key={item.id}
                nome={item.nome}
                descricao={item.descricao}
                preco={item.preco}
                onClick={() => {
                  setItemsList([...itemsList, { nome: item.nome, preco: item.preco }])
                }}
              />)
          })}
        </MenuArea>
        <CartArea
          arrItem={itemsList}
          removeButton={removeButton}>
        </CartArea>
      </MenuPage>
    </>
    )};

export default Hall;