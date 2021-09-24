import './style.scss'

const ItemCard = ({id, name, price, img, flavor, onClick}) => {
    return (
        <article className="item-card" key={id} onClick={onClick}>
            <img src={img} alt="Imagem do produto" className="img-product-info"></img>
            <p className="product-info name">{name}</p>
            <p className="product-info flavor">{`${flavor !== null ? flavor : ''}`}</p>
            <div className="footer-card">
                <p className="product-info price">R$ {price},00</p>
                <button className="btn-addItem">+</button>
            </div>
        </article>
    )
};

export default ItemCard;