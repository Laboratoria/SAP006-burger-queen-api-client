export const sendOrderToKitchen = ({orderInformation}) => { 
  const apiToSendKitchenOrders = 'https://lab-api-bq.herokuapp.com/orders';
  const result = fetch (apiToSendKitchenOrders, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization:`${orderInformation.token}`
    },
    body: JSON.stringify({
      client:orderInformation.customer,
      table:orderInformation.table,
      products:orderInformation.orderResume,
    })
  })
    .then((response) => response.json())
    .then((responseJson) => responseJson)
  return result
};

export const getAllOrders = (token) => {
  const apiToGetOrders= 'https://lab-api-bq.herokuapp.com/orders';
  const result = fetch (apiToGetOrders, {
    headers: {
    accept: 'application/json',
    Authorization: `${token}`
    },
  })
    .then((response) => response.json())
   return result
};