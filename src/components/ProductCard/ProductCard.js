     
import React from 'react';
import './ProductCard.scss';

import { products } from '../../data/products';
import { MenuModal } from '../Modal/Modal';
import { Button } from '../Button/Button';

export const ProductCard = ({Role}) => { 

  const [showIngredients, setShowIngredients] = React.useState(false);

  function importMenuImages(files) {
    let importedImages = {};
    files.keys().map(imgPath => importedImages[imgPath.replace('./', '').replace('.png', '')] = files(imgPath));
    return importedImages;  
  } 
  const importedImages = importMenuImages(require.context('../../assets/images-menu', false, /\.(png)$/));

  Object.entries(products).map(produt => produt[1].importedImg = importedImages[produt[0]].default)

  return (
    <div className='menu-card-div'>
      <Button Role='menu-open-ingredients-modal' children='+' ButtonOnClick={() => setShowIngredients(true)}/>
      <img className='menu-card-img' src={products[Role].importedImg}  alt={products[Role].alt}/>
      <section>
      {showIngredients ? 
        <MenuModal 
          Role = 'menu-close-ingredients-modal'
          ModalContent={products[Role].ingredients}
          ButtonOnClick={() => setShowIngredients(false)}
        />
      : null}
      </section>
    </div>
    )
  }

