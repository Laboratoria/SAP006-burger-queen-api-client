     
import React from 'react';
import './ProductCard.scss';


export const ProductCard = ({Role}) => { 

  function importMenuImages(files) {
    let menuImages = {};
    files.keys().map(img => menuImages[img.replace('./', '')] = files(img));
    return menuImages;
  }

  const menuImages = importMenuImages(require.context('../../assets/images-menu', false, /\.(png)$/));

  const menuData = {
    'cafe-com-leite':{
      'ingredientes':'1. Leite de vacas livres e que vivem com seus filhotes - Produto de origem de pequenos produtores rurais regionais. 2. Café artesanal, semeado, colhido, moído e embalado por pequenos produtores na Etiópa - terra mãe do café.',
      'setor':'bebida',
      'tipo':'bebida-quente',
      'menu':'cafe-da-manha',
      'valor':7,
      'adicional':'nao',
      'img':menuImages['cafe-com-leite.png'].default,
      'alt':'Café com Leite'
    },
    'cafe-americano':{
      'ingredientes':'1. Café artesanal, semeado, colhido, moído e embalado por pequenos produtores na Etiópa - terra mãe do café.',
      'setor':'bebida',
      'tipo':'bebida-quente',
      'menu':'cafe-da-manha',
      'valor':5,
      'adicional':'nao',
      'img':menuImages['cafe-americano.png'].default,
      'alt':'Café Americano'
    },
    'sanduiche-presunto-queijo':{
      'ingredientes':'1. Pão de fermentação natural feito em casa. 2. Queijo artesanal de produção de pequeno porte - vacas livres e que vivem com seus filhotes. 3. Proteína de soja temperada, saborizada e texturizada como presunto.',
      'setor':'comida',
      'tipo':'sanduiche',
      'menu':'cafe-da-manha',
      'valor':10,
      'adicional':'sim',
      'img':menuImages['sanduiche-presunto-queijo.png'].default,
      'alt':'Sanduíche de Presunto e Queijo'
    },
    'suco-de-fruta-natural':{
      'ingredientes':'1. Frutas da época colhidas em propriedades da região.',
      'setor':'bebida',
      'tipo':'bebida-fria',
      'menu':'cafe-da-manha',
      'valor':7,
      'adicional':'nap',
      'img':menuImages['suco-de-fruta-natural.png'].default,
      'alt':'Suco de Fruta Natural'
    },
    'hamburguer-simples-bovino':{
      'ingredientes':'1. Pão de fermentação natural feito em casa. 2. Queijo artesanal de produção de pequeno porte - vacas livres e que vivem com seus filhotes. 3. Hambúrguer  de proteína de soja temperada, saborizada e texturizada como picanha. 4. Alface, tomate e pepino.',
      'setor':'comida',
      'tipo':'sanduiche',
      'menu':'pour-toute-la-journee',
      'valor':10,
      'adicional':'sim',
      'img':menuImages['h-simples-bovino.png'].default,
      'alt':'Hambúrguer Simples Bovino'
    },
    'hamburguer-duplo-bovino':{
      'ingredientes':'1. Pão de fermentação natural feito em casa. 2. Queijo artesanal de produção de pequeno porte - vacas livres e que vivem com seus filhotes. 3. Hambúrguer  de proteína de soja temperada, saborizada e texturizada como picanha. 4. Alface, tomate e pepino. Este produto contém o dobro de ingredientes (com exceção do pão) do hamburguer simples.',
      'setor':'comida',
      'tipo':'sanduiche',
      'menu':'pour-toute-la-journee',
      'valor':15,
      'adicional':'sim',
      'img':menuImages['h-duplo-bovino.png'].default,
      'alt':'Hambúrguer Duplo Bovino'
    },
    'hamburguer-simples-frango':{
      'ingredientes':'1. Pão de fermentação natural feito em casa. 2. Queijo artesanal de produção de pequeno porte - vacas livres e que vivem com seus filhotes. 3. Hambúrguer de proteína de soja temperada, saborizada e texturizada como frango. 4. Alface, tomate e pepino.',
      'setor':'comida',
      'tipo':'sanduiche',
      'menu':'pour-toute-la-journee',
      'valor':10,
      'adicional':'sim',
      'img':menuImages['h-simples-frango.png'].default,
      'alt':'Hambúrguer Simples de Frango'
    },
    'hamburguer-duplo-frango':{
      'ingredientes':'1. Pão de fermentação natural feito em casa. 2. Queijo artesanal de produção de pequeno porte - vacas livres e que vivem com seus filhotes. 3. Hambúrguer de proteína de soja temperada, saborizada e texturizada como frango defumado. 4. Alface, tomate e pepino. Este produto contém o dobro de ingredientes (com exceção do pão) do hamburguer simples.',
      'setor':'comida',
      'tipo':'sanduiche',
      'menu':'pour-toute-la-journee',
      'valor':15,
      'adicional':'sim',
      'img':menuImages['h-duplo-frango.png'].default,
      'alt':'Hambúrguer Duplo de Frango'
    },
    'hamburguer-simples-vegetariano':{
      'ingredientes':'1. Pão de fermentação natural feito em casa. 2. Queijo artesanal de produção de pequeno porte - vacas livres e que vivem com seus filhotes. 3. Hambúrguer cremoso de abóbora japonesa. 4. Alface, tomate e pepino.',
      'setor':'comida',
      'tipo':'sanduiche',
      'menu':'pour-toute-la-journee',
      'valor':10,
      'adicional':'sim',
      'img':menuImages['h-simples-vegetariano.png'].default,
      'alt':'Hambúrguer Simples Vegetariano'
    },
    'hamburguer-duplo-vegetariano':{
      'ingredientes':'1. Pão de fermentação natural feito em casa. 2. Queijo artesanal de produção de pequeno porte - vacas livres e que vivem com seus filhotes.  3. Hambúrguer cremoso de abóbora japonesa. 4. Alface, tomate e pepino. Este produto contém o dobro de ingredientes (com exceção do pão) do hamburguer simples.',
      'setor':'comida',
      'tipo':'sanduiche',
      'menu':'pour-toute-la-journee',
      'valor':15,
      'adicional':'sim',
      'img':menuImages['h-duplo-vegetariano.png'].default,
      'alt':'Hambúrguer Duplo Vegetariano'
    },
    'batata-frita':{
      'ingredientes':'1. Batata cortada em casa e frita na air fryer (sem óleo).',
      'setor':'comida',
      'tipo':'petisco',
      'menu':'pour-toute-la-journee',
      'valor':5,
      'adicional':'nao',
      'img':menuImages['batata-frita.png'].default,
      'alt':'Batata Frita'
    },
    'aneis-de-cebola':{
      'ingredientes':'1. Cebola cortada em casa e frita na air fryer (sem óleo).',
      'setor':'comida',
      'tipo':'petisco',
      'menu':'pour-toute-la-journee',
      'valor':5,
      'adicional':'nao',
      'img':menuImages['aneis-de-cebola.png'].default,
      'alt':'Anéis de Cebola'
    },
    'agua-500':{
      'ingredientes':'Água natural em garrafa de vidro.',
      'setor':'bebida',
      'tipo':'bebida-fria',
      'menu':'pour-toute-la-journee',
      'valor':5,
      'adicional':'nao',
      'img':menuImages['agua-500.png'].default,
      'alt':'Água 500ml'
    },
    'agua-750':{
      'ingredientes':'Água natural em garrafa de vidro.',
      'setor':'bebida',
      'tipo':'bebida-fria',
      'menu':'pour-toute-la-journee',
      'valor':7,
      'adicional':'nao',
      'img':menuImages['agua-750.png'].default,
      'alt':'Água 750ml'
    },
    'bebida-gaseificada-500':{
      'ingredientes':'Fermentação natural e caseira de água e xarope tipo francês artesanal.',
      'setor':'bebida',
      'tipo':'bebida-fria',
      'menu':'pour-toute-la-journee',
      'valor':7,
      'adicional':'nao',
      'img':menuImages['bebida-gaseificada-500.png'].default,
      'alt':'Bebida Gaseificada 500ml'
    },
    'bebida-gaseificada-750':{
      'ingredientes':'Fermentação natural e caseira de água e xarope tipo francês artesanal.',
      'setor':'bebida',
      'tipo':'bebida-fria',
      'menu':'pour-toute-la-journee',
      'valor':10,
      'adicional':'nao',
      'img':menuImages['bebida-gaseificada-750.png'].default,
      'alt':'Bebida Gaseificada 750ml'
    },
  }

  return (
    <div>
    <img className='menu-card-img' src={menuData[Role].img}  alt={menuData[Role].alt}/>
    </div>
    
    )
  }

