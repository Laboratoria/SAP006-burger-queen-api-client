function CardList({ productList, onClick }) {

  return (
    <>
      {
        productList.map((product) => {

          return (
            <article key={product.id} onClick={() => { onClick(product) }} className='item-list' >
              <img className="products-img" src={product.image} alt={`imagem do produto ${product.name}`} />
              <p className='class-p'>{product.name}</p>
              <p>{product.descricao}</p>
              <p className='class-price'>Preço: R$ {product.price},00</p>
              <p>Sabor: {product.flavor}</p>
            </article>)
        })
      }
    </>
  )
}
export default CardList