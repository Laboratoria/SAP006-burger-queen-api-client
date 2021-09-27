import { useState } from 'react';
import './style.scss'

export const ItemCard = ({id, name, price, img, flavor, complement, onClick}) => {

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
                <select className="product-info flavor" value="{flavor}">
                    <option selected value="sabor">sabor</option>
                    <option value={flavor}>{`${flavor !== null ? flavor : ''}`}</option>
                </select>
                {/* <select name="complemento" className="product-info complement" value={complement}>
                    <option selected value="adicional">adicional</option>
                    <option>{complement}</option>
                </select> */}
            </form>
            <div className="footer-card">
                <p className="product-info price">R$ {price}</p>
                <button className="btn-addItem" onClick={onClick}>+</button>
            </div>
        </article>
    )
};

export const SelectedItem = ({id, name, price, flavor}) => {
    const [qtd, setQtd] = useState(0);
    const [addItem, setAddItem] = useState([]);
    // const [itemCart, dispatchItemCart] = useReducer([]);

    const addItemOnCart = (item) => {
        setQtd(
            Number(setAddItem([...addItem, 
                {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    flavor: item.flavor,
                }
            ]+ 1))
        )
    }

    const removeItemOnCart = (id) => {
        setQtd(qtd - 1)
        // if (qtd === 0) {
        //     dispatchItemCart({ type: 'REMOVE_ITEM', id: id });
        // } else {
        // }
    }

    return (
        <article className="itemSelected" key={id}>
            <div className="info-item">
                <p className="selected-info name">{name}</p>
                <p className="selected-info flavor">{`${flavor !== null ? flavor : ''}`}</p>
            </div>
            <div className="buttons-qtd">
                <button 
                    className="btn-addItem-qtd" 
                    onClick={removeItemOnCart}>-</button>
                <p className="product-info">{qtd}</p>
                <button className="btn-addItem-qtd" onClick={addItemOnCart}>+</button>
            </div>
            <p className="product-info price">R$ {price}</p>
        </article>
    )
}
