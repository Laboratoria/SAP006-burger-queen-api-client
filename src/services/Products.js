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