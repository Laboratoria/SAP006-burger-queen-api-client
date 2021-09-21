     
import { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import './Menu.scss'

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { ProductCard } from '../../../components/ProductCard/ProductCard';
import { MenuModal } from '../../../components/Modal/Modal';

import { products } from '../../../data/products';


export const Menu = () => { 

  const history = useHistory();

  const filterProducts = (condition, value) =>{
    const filteredProductsNames = [];
    const  filteredProducts = Object.entries(products).filter((product) => product[1][condition].includes(value))
    filteredProductsNames.push(filteredProducts.map((nome) => nome[0]))
    return filteredProductsNames[0]
  }
  
  const getProductId = (event) => {
    const id = (event.target.parentNode.id) 
      setProductId({productId :id})
      setShowIngredients(true)
      document.body.style.overflow = "hidden";
  }

  let productsToPrint = Object.keys(products)

  const [showAll, setShowAll] = useState(true);
  const [showBreakfast, setShowBreakfast] = useState(false);
  const [showRestOfTheDay, setShowRestOfTheDay] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [productId, setProductId] = useState('');

  return (
    <div className='product-card-div'>
      <header>
        <NavbarRoom/>
      </header>
      <main>
        <section className='filter-buttons-div'>
          <Button 
            Role='menu-go-back' 
            ButtonOnClick={()=>history.push('/room')}
          />
          <Button 
            Role='menu-all' 
            children='Alles'
            ButtonOnClick={() =>[
              setShowAll(true),
              setShowBreakfast(false),
              setShowRestOfTheDay(false),
              setShowFood(false),
              setShowDrinks(false)]}/>
          <Button 
            Role='menu-petit-dej' 
            children='Morgen'
            ButtonOnClick={() =>[
              filterProducts('menu', 'cafe-da-manha'), 
              setShowAll(false),
              setShowBreakfast(true),
              setShowRestOfTheDay(false),
              setShowFood(false),
              setShowDrinks(false)]}
          />
          <Button 
            Role='menu-pour-la-journee' 
            children='Dag'
            ButtonOnClick={() =>[
              filterProducts('menu', 'dia'), 
              setShowAll(false),
              setShowBreakfast(false),
              setShowRestOfTheDay(true),
              setShowFood(false),
              setShowDrinks(false)]}
          />
          <Button 
            Role='menu-to-drink' 
            children='Eten'
            ButtonOnClick={() =>[
              filterProducts('setor', 'comida'), 
              setShowAll(false),
              setShowBreakfast(false),
              setShowRestOfTheDay(false),
              setShowFood(true),
              setShowDrinks(false)]}
          />
          <Button 
            Role='menu-to-eat' 
            children='Drankje'
            ButtonOnClick={() =>[
              filterProducts('setor', 'bebida'), 
              setShowAll(false),
              setShowBreakfast(false),
              setShowRestOfTheDay(false),
              setShowFood(false),
              setShowDrinks(true)]}
          />
        </section>
        <section className='menu-cards-section'>
          {showAll ? 
            productsToPrint.map((role) => 
            <ProductCard 
              ButtonOnClick={(event)=> getProductId(event)}
              Role={role} key={role.toString()} 
            />)
          : null }
          {showBreakfast ? 
            filterProducts('menu', 'cafe-da-manha').map((role) => 
            <ProductCard 
              ButtonOnClick={(event)=> getProductId(event)} 
              Role={role} key={role.toString()}
            />)
          : null }
          {showRestOfTheDay? 
            filterProducts('menu', 'dia').map((role) => 
            <ProductCard 
              ButtonOnClick={(event)=> getProductId(event)}
              Role={role} key={role.toString()} 
            />)
          : null }
          {showFood? 
            filterProducts('setor', 'comida').map((role) => 
            <ProductCard 
              ButtonOnClick={(event)=> getProductId(event)}
              Role={role} key={role.toString()} 
            />)
          : null }
          {showDrinks? 
            filterProducts('setor', 'bebida').map((role) => 
            <ProductCard 
              ButtonOnClick={(event)=> getProductId(event)}
              Role={role} key={role.toString()} 
            />)
          : null }
        </section>
      </main>
      <section>
      {showIngredients ? 
        <MenuModal 
          Role = 'menu-close-ingredients-modal'
          ModalTitle = {products[productId.productId].title}
          ModalContent= {products[productId.productId].ingredientes}
          ButtonOnClick={() => {
            setShowIngredients(false)
            document.body.style.overflow = "scroll";
          }}
        />
      : null}
      </section>
    </div>
    )
  }








    


