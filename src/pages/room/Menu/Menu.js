     
import React from 'react';
import './Menu.scss'

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { Button } from '../../../components/Button/Button';
import { ProductCard } from '../../../components/ProductCard/ProductCard';

export const Menu = () => { 

  const products = ['cafe-com-leite', 'cafe-americano']
  return (
    <div className='product-card-div'>
      <NavbarRoom/>
      <section className='filter-buttons-div'>
        <Button Role='menu-all' children='Alles'/>
        <Button Role='menu-petit-dej' children='Morgen'/>
        <Button Role='menu-pour-la-journee' children='Dag'/>
        <Button Role='menu-to-drink' children='Eten'/>
        <Button Role='menu-to-eat' children='Drankje'/>
      </section>
      <section className='menu-cards-section'>
      {products.map((role) => <ProductCard Role={role} />)}
      
      </section>
    </div>
    )
  }








    


