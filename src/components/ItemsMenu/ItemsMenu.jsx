import { useState, useEffect } from 'react';
import './style.scss'

export const ItemCard = ({id, name, price, img, flavor, complement, addItemOnCart}) => {
    const [values, setValues] = useState({
        'sabor': '',
        'adicional': '', 
        'complemento': '',
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

    return (
        <article className="item-card" key={id}>
            <img src={img} alt="Imagem do produto" className="img-product-info"></img>
            <span
                style={{
                    display: 'Hambúrguer' ? 'flex' : 'none'
                }}
                ></span>
            <p className="product-info name">{name}</p>
            <form>
                <span
                    style={{
                        display: flavor ? 'flex' : 'none'
                    }}
                ></span>
                <select name="saborSelect" className="product-info flavor" value="{flavor}">
                    <option value="sabor">sabor</option>
                    <option name="sabor" value={flavor}>{`${flavor !== null ? flavor : ''}`}</option>
                </select>
                <select name="complementoSelect" className="product-info complement" value="{complement}">
                    <option name="adicional" value="adicional" onChange={handleChange}>adicional</option>
                    <option name="complemento" value={complement} onChange={handleChange}>{`${complement !== null ? complement : ''}`}</option>
                </select>
            </form>
            <div className="footer-card">
                <p className="product-info price">R$ {price}</p>
                <button className="btn-addItem" onClick={addItemOnCart}>+</button>
            </div>
        </article>
    )
};

export const SelectedItem = ({id, name, price, flavor, complement, qtd, removeItemOnCart, addItemOnCart}) => {

    return (
        <article className="itemSelected" key={id}>
            <section className="info-item">
                <p className="selected-info name">{name}</p>
                <div>
                    <p>{`${flavor !== null ? flavor : ''}`}</p>
                    <p>{`${complement !== null ? complement : ''}`}</p>
                </div>
            </section>
            <section className="buttons-qtd">
                <button 
                    className="btn-addItem-qtd"
                    data-remove={id} 
                    onClick={removeItemOnCart}>        
                -</button>
                <p className="product-info">{qtd}</p>
                <button 
                    className="btn-addItem-qtd"
                    data-add={id} 
                    onClick={addItemOnCart}>
                +</button>
            </section>
            <p className="product-info price">R$ {price}</p>
        </article>
    )
}

export const totalPrice = (value) => {
    value.reduce((priceItem, item) => (priceItem * item.qtd), 0)
}

export const Total = ({ cartItems }) => {
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      const newTotal = cartItems.reduce((acc, cur) => acc + (cur.price * cur.qtd), 0);
      setTotal(newTotal);
    }, [cartItems]);
  
    return <div className="CartTotal">Total: {(total)}</div>;
  };
  