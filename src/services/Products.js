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
    console.log(request);
    return orders ('/orders', 'POST', {
        client: request.client,
        table: request.table,
        products: request.products,
    }, token ) 
};


export const TotalOrders = (request) => {
    console.log(request);
    return orders ('/orders', 'GET', {
        client: request.client,
        table: request.table,
        products: request.products,
    }, token ) 
}; 