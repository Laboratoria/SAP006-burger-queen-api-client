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
    return getData();
  }, [])

  const addProducts = (elem) => {
    console.log(addItem)
    const newArray = addItem;
    const foundItem = addItem.findIndex((item) => item.id === elem.id);
    if (flavor === '' && productsType === 'hamburguer') {
      console.log('selecione um sabor primeiro') //ok
    } else if (flavor !== '' && complement === '' && foundItem === -1) {
      console.log('adicionando pela primeira vez SEM complemento e COM sabor'); //ok
      // const foundItem = addItem.findIndex((item) => item.id === elem.id);
      const foundLancho = filterFlavor().filter((item) => item.name === elem.name && item.complement === null);
      const newLancho = foundLancho[0];
      console.log(newLancho)
      setAddItem(() => [...newArray, { id: newLancho.id, qtd: initialQtd, name: newLancho.name, price: newLancho.price, flavor: newLancho.flavor, complement: newLancho.complement }])
      // if (foundItem === -1) {
        // const foundLancho = filterFlavor().filter((item) => item.name === elem.name && item.complement === null);
        // const newLancho = foundLancho[0];
        // console.log(newLancho.id)
      // } else {
        // newArray[foundItem].qtd++;
        // setAddItem(() => [...newArray]);
      // }
      // console.group(addItem)
      // setAddItem(() => [...newArray]);
      
      // } else if (flavor !== '' & complement === '') {
      // console.log('adicionando pela segunda vez COM sabor e COM complemento')
      // console.log(elem.id)
      // const foundLancho = filterFlavor().filter((item) => item.name === elem.name && item.complement === null);
      // const newLancho = foundLancho[0];
      // console.log(newLancho.id)
      // const foundItem = addItem.findIndex((item) => item.id === newLancho.id);
      // newArray[foundItem].qtd++;
      // setAddItem(() => [...newArray]);
      // } else if (complement !== '') {
      // console.log('adicionando pela primeira vez COM complemento'); //ok

      // } else if (foundItem !== -1) {

    } else if (flavor !== '' && complement === '' && foundItem !== -1) {
      console.log('adicionando pela segunda vez SEM complemento e COM sabor')
    }else {
      console.log('sem sabor e sem complemento'); //ok
      if (foundItem !== -1) {
        console.log('adicionando pela segunda vez')
        newArray[foundItem].qtd++;
        setAddItem(() => [...newArray]);
      } else {
        console.log('adicionando pela primeira vez')
        setAddItem(() => [...addItem, { id: elem.id, qtd: initialQtd, name: elem.name, price: elem.price, flavor: flavor, complement: complement }])
      }
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

  const productsFiltered = () => {
    if (productsType === 'hamburguer') {
      return products.filter((elem) => elem.id === 33 || elem.id === 42)
    } else {
      return products.filter((elem) => elem.sub_type.includes(productsType));
    }
  }

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