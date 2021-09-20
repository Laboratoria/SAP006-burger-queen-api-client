     
import React from 'react';
import './ProductCard.scss';

import { products } from '../../data/products';
import { MenuModal } from '../Modal/Modal';
import { Button } from '../Button/Button';

export const ProductCard = ({Role, ButtonOnClick}) => { 

 

  function importMenuImages(files) {
    let importedImages = {};
    files.keys().map(imgPath => importedImages[imgPath.replace('./', '').replace('.png', '')] = files(imgPath));
    return importedImages;  
  } 
  const importedImages = importMenuImages(require.context('../../assets/images-menu', false, /\.(png)$/));

  Object.entries(products).map(produt => produt[1].importedImg = importedImages[produt[0]].default)

  return (
    <div className='menu-card-div' id={products[Role].id}>
      <Button Role='menu-open-ingredients-modal' children='+' ButtonOnClick={ButtonOnClick}/>
      <img className='menu-card-img' src={products[Role].importedImg}  alt={products[Role].alt}/>
    </div>
    )
  }

