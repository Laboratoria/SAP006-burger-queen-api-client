//import ItemCard from "../cartItens"

export default function CartArea({ arrItem}) {
  return (
    <section >
      {arrItem.map((item) => {
        return (
          <div className='area-card'
            key={item.id}  
            nome={item.name}
            preco={item.price}
          />)
      })}
    </section> 
  )
}

