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

export const deleteOrder = (id, token) => {
  const apiToGetOrders= `https://lab-api-bq.herokuapp.com/orders/${id}`
  const result = fetch (apiToGetOrders, {
    method:'DELETE',
    headers: {
    accept: 'application/json',
    Authorization: `${token}`
    },
  })
    .then((response) => response.json())
  return result
};

export const changeOrderStatus = (id, token, status) => {
  id = id.toString();
  const apiToGetOrders= `https://lab-api-bq.herokuapp.com/orders/${id}`
  const result = fetch (apiToGetOrders, {
    method:'PUT',
    headers: {
    accept: 'application/json',
    Authorization: `${token}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
    },
    body: JSON.stringify({ status })
  })
    .then((response) => response.json())
  return result
};
  