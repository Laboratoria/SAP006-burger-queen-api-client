import { getProducts, sendOrder } from "../../services/auth";
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState('breakfast');
  const [addItem, setAddItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [flavor, setFlavor] = useState('');
  const [complement, setComplement] = useState('');
  const [orderInfo, setOrderInfo] = useState({ client: '', table: '' });
  const [qtd, setQtd] = useState(1);

  const getData = async () => {
    const data = await getProducts().then(data => data)
    setProducts(data)
  }

  useEffect(() => {
    return getData()
  }, [])



  const addProducts = (elem) => {
    const foundItem = addItem.findIndex((item) => item.id === elem.id);
    if (foundItem !== -1) {
      if (complement) {
        console.log('adicionando pela segunda vez COM complemento')
        const lancho = filterFlavor().filter((item) => item.name === elem.name && item.complement === complement);
        setAddItem([...addItem, { id: lancho[0].id, qtd: setQtd(() => addItem[foundItem].qtd++), name: elem.name, price: lancho[0].price, flavor: flavor, complement: complement }])
        console.log(qtd)
      } else {
        console.log('adicionando pela segunda vez SEM complemento')
        console.log(setQtd(() => addItem[foundItem].qtd++))
        setAddItem([...addItem]);
      }
    } else {
      if (complement) {
        console.log('adicionando pela primeira vez COM complemento')
        const lancho = filterFlavor().filter((item) => item.name === elem.name && item.complement === complement);
        setAddItem([...addItem, { id: lancho[0].id, qtd: qtd, name: elem.name, price: lancho[0].price, flavor: flavor, complement: complement }])
      } else {
        console.log('adicionando pela primeira vez SEM complemento')
        setAddItem([...addItem, { id: elem.id, qtd: qtd, name: elem.name, price: elem.price, flavor: flavor, complement: complement }])
      }
    }
  }

  useEffect(() => {

  }, [])

  useEffect(() => {
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    setTotal(() => {
      const price = addItem.map((elem) => elem.qtd * elem.price);
      return price.reduce(sum, 0)
    })
  }, [addItem])

  const filterFlavor = () => products.filter((elem) => elem.flavor !== null && elem.flavor === flavor);

  const selectFlavor = (e) => setFlavor(e.target.value);

  const selectComplement = (e) => setComplement(e.target.value);

  const handleButtonTypeClick = (e) => setProductsType(e.target.value);

  const productsFiltered = () => products.filter((elem) => elem.sub_type.includes(productsType));

  const handleOrderChange = (e) => {
    return setOrderInfo(() => {
      const auxValues = { ...orderInfo };
      auxValues[e.target.name] = e.target.value;
    });
  }

  const sendToKitchen = () => {
    sendOrder(orderInfo, addItem)
      .then((res => res.json()))
      .then((data) => console.log(data));
  }

  return {
    handleButtonTypeClick,
    productsFiltered,
    setAddItem,
    addItem,
    total,
    sendToKitchen,
    handleOrderChange,
    addProducts,
    selectComplement,
    selectFlavor
  }
}

export default useProducts;