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
  const initialQtd = 1;

  const getData = async () => {
    const data = await getProducts().then(data => data)
    setProducts(data)
  }

  useEffect(() => {
    return getData()
  }, [])

  const addProducts = async (elem) => {
    const foundItem = addItem.findIndex((item) => item.id === elem.id);
    const newArray = addItem;
    if (foundItem !== -1) {
      newArray[foundItem].qtd++;
      setAddItem(() => [...newArray]);
      console.log(addItem)
    } else {
      if (flavor === '' && productsType === 'hamburguer') {
        console.log('selecione um sabor primeiro')
      } else if (flavor !== '') {
        const foundLancho = filterFlavor().filter((item) => item.name === elem.name && item.complement === null);
        const newlancho = foundLancho[0];
        console.log(newlancho)
        setAddItem(() => [...addItem, { id: newlancho.id, qtd: initialQtd, name: newlancho.name, price: newlancho.price, flavor: flavor, complement: complement }])
        console.log(addItem);
      } else if (complement !== '') {
        console.log('adicionando pela primeira vez COM complemento');
        const foundLancho = filterFlavor().filter((item) => item.name === elem.name && item.complement === complement);
        const newlancho = foundLancho[0];
        console.log(newlancho)
        setAddItem(() => [...addItem, { id: newlancho.id, qtd: initialQtd, name: newlancho.name, price: newlancho.price, flavor: flavor, complement: complement }])
        console.log(addItem);
      } else {
        console.log('adicionando pela primeira vez SEM complemento');
        setAddItem(() => [...addItem, { id: elem.id, qtd: initialQtd, name: elem.name, price: elem.price, flavor: flavor, complement: complement }])
        console.log(addItem);
      }
    }
  }

  const deleteProducts = (elem) => {
    const foundItem = addItem.findIndex((item) => item.id === elem.id);
    if (foundItem !== -1) {
      const qtd = addItem[foundItem].qtd
      if (qtd === 1) {
        const removed = addItem
        removed.splice(foundItem, 1)
        setAddItem([...removed])
      } else {
        const newArray = addItem;
        newArray[foundItem].qtd--;
        setAddItem([...newArray])
      }
    } else {
      setAddItem([...addItem, { id: elem.id, qtd: initialQtd, name: elem.name, price: elem.price, flavor: elem.flavor }])
    }
  }

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
    addItem,
    total,
    sendToKitchen,
    handleOrderChange,
    addProducts,
    deleteProducts,
    selectComplement,
    selectFlavor,
  }
}

export default useProducts;