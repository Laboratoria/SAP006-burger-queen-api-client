const MenuArea = ({ nome, preco }) => {
  return (
    <li className="order">
      <div className="class-order">
        <p className="class-p-order">{nome}</p>
        <p className="price-item-order">R${preco},00</p>
      </div>
    </li>
  )
}

export default MenuArea;