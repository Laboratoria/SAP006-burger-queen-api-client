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

export const NewOrder = (request) => {
    return orders ('/orders', 'POST', {
        client_name: request.client_name,
        table: request.table,
        products: request.products,
    }, token ) 
};

export const TotalOrders = () => {
    return fetch(`${host}/orders`, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
    }) 
};

/*export const updateOrders = async (orderId, orderStatus) => {
    const url = `https://lab-api-bq.herokuapp.com/orders/${orderId}`;
    const resp = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
       status : orderStatus
      }),
    });
    const response = await resp.json();
    return response;
  
  };*/

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