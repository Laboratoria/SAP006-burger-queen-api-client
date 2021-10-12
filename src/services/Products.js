const host = 'https://lab-api-bq.herokuapp.com';
const token = localStorage.getItem('userToken');

const orders = (endpoint, method, body, token) => {
    return fetch(`${host}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify (body),
    }) 
};

// Fazer pedidos novos
export const NewOrder = (request) => {
    return orders('/orders', 'POST', {
        client: request.client,
        table: request.table,
        products: request.products,
    }, token ) 
};

// Baixar todos os pedidos
export const TotalOrders = () => {
    return fetch(`${host}/orders`, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
    }) 
};

// Mudar o Status do Pedido
export const UpdateOrderStatus = (id, status) => 
  orders(`/orders/${id}`, 'PUT', {status}, token);

 // Converter a datae hora 
export const ConvertDate = (apiDate) => {
  const date = new Date(apiDate);
  let day = date.getDay();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  if (day < 10) { day = `0${day}`; }
  if (month < 10) { month = `0${month}`; }
  
  const correctDate = `${day}.${month}.${year}`;
  return correctDate;
};
  
export const ConvertTime = (apiDate) => {
  const date = new Date(apiDate);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  
  const correctTime = `${hours}:${minutes}`;
  return correctTime;
};
