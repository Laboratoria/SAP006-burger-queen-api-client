import { useState } from 'react';
import './style.scss'

export const ItemCard = ({id, name, price, img, flavor, complement, onClick}) => {
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
                <button className="btn-addItem" onClick={onClick}>+</button>
            </div>
        </article>
    )
};

export const SelectedItem = ({id, name, price, flavor, complement}) => {
    const [qtd, setQtd] = useState(0);
    const [addItem, setAddItem] = useState([]);
    // const [itemCart, dispatchItemCart] = useReducer([]);

    const addItemOnCart = (item) => {
        setQtd(qtd + 1);

            // Number(setAddItem([...addItem, 
            //     {
            //         id: item.id,
            //         name: item.name,
            //         price: item.price,
            //         flavor: item.flavor,
            //         complement: item.complement,
            //     }
            // ]+ 1))
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
                {/* onClick={this.removeItem} data-remove={item.id} */}
            </section>
            <p className="product-info price">R$ {price}</p>
        </article>
    )
}
