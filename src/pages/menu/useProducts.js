import { getProducts } from "../../services/auth";
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState('breakfast');
  const [addItem, setAddItem] = useState([]);
  const [total, setTotal] = useState(0);

  const getData = async () => {
    const data = await getProducts().then(data => data)
    setProducts(data)
  }

  useEffect(() => {
    return getData()
  }, [])

  useEffect(() => {
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    setTotal(() => {
      const price = addItem.map((elem) => elem.price);
      return price.reduce(sum, 0)
    })
  }, [addItem])

  const handleButtonTypeClick = (e) => setProductsType(e.target.value);

  const productsFiltered = () => products.filter((elem) => elem.sub_type.includes(productsType));
  

  return { handleButtonTypeClick, productsFiltered, setAddItem, addItem, total }
}

export default useProducts;