import { getProducts } from "../../services/auth";
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState('breakfast');

  const getData = async () => {
    const data = await getProducts().then(data => data)
    setProducts(data)
  }

  useEffect(() => {
    return getData()
  }, [])

  const handleButtonTypeClick = (e) => setProductsType(e.target.value);

  const productsFiltered = products.filter((elem) => elem.sub_type.includes(productsType));

  return { handleButtonTypeClick, productsFiltered }
}

export default useProducts;