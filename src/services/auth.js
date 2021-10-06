import {tokenUser} from '../services/users'

export const isAuthenticated = () => {

   // const token = !!localStorage.getItem('token');
    if (tokenUser) {
        return true;
    } else {
        return false;
    }
};

/*unction CardList(productList){
    <>
    {
        productList.map((product) => {

        return (

        <article key={product.id} onClick={product.onClick}>
            <img className="products-img" src={product.img} alt={`imagem do produto ${product.name}`} />
            <p>{product.name}</p>
            <p>{product.descricao}</p>
            <p>{product.preco}</p>
        </article>)})
          }
    </>
}
export default CardList;*/