export const sendOrderToKitchen = (token, customer, table, orderResume) => { 
  const apiToSendKitchenOrders = 'https://lab-api-bq.herokuapp.com/orders';
  const result = fetch (apiToSendKitchenOrders, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization:`${token}`
    },
    body: JSON.stringify({
      client:customer,
      table:table,
      products:orderResume,
    })
  })
    .then((response) => response.json())
    .then((responseJson) => responseJson)
  return result
}
