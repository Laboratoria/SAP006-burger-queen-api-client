import { getProducts } from "../../services/auth";
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState('breakfast');
  getProducts()
  .then(data => setProducts(data))
  
  const handleButtonTypeClick = (e) => setProductsType(e.target.value);

  const productsFiltered = products.filter((elem) => elem.type.includes(productsType));

  useEffect(() => {
    return { productsFiltered }
  })

  return { productsFiltered, handleButtonTypeClick, products }
}

export default useProducts;