     
import React  from 'react';
import { useHistory } from 'react-router-dom';

import './Menu.scss'

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { ProductCard } from '../../../components/ProductCard/ProductCard';

import { products } from '../../../data/products';


export const Menu = () => { 
  const filterProducts = (condition, value) =>{
    const filteredProductsNames = [];
    const  filteredProducts = Object.entries(products).filter((product) => product[1][condition].includes(value))
    filteredProductsNames.push(filteredProducts.map((nome) => nome[0]))
    return filteredProductsNames[0]
  }
  
  let productsToPrint = Object.keys(products)

  const [showAll, setShowAll] = React.useState(true);
  const [showBreakfast, setShowBreakfast] = React.useState(false);
  const [showRestOfTheDay, setShowRestOfTheDay] = React.useState(false);
  const [showFood, setShowFood] = React.useState(false);
  const [showDrinks, setShowDrinks] = React.useState(false);


  return (
    <div className='product-card-div'>
      <NavbarRoom/>
      <section className='filter-buttons-div'>
        <Button 
          Role='menu-all' 
          children='Alles'
          ButtonOnClick={() => setShowAll(true)}/>
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
          productsToPrint.map((role) => <ProductCard Role={role} key={role.toString()} />)
        : null }
        {showBreakfast ? 
          filterProducts('menu', 'cafe-da-manha').map((role) => <ProductCard Role={role} key={role.toString()} />)
        : null }
         {showRestOfTheDay? 
          filterProducts('menu', 'dia').map((role) => <ProductCard Role={role} key={role.toString()} />)
        : null }
         {showFood? 
          filterProducts('setor', 'comida').map((role) => <ProductCard Role={role} key={role.toString()} />)
        : null }
        {showDrinks? 
          filterProducts('setor', 'bebida').map((role) => <ProductCard Role={role} key={role.toString()} />)
        : null }
      </section>
    </div>
    )
  }








    


