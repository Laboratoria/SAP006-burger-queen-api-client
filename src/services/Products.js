const host = 'https://lab-api-bq.herokuapp.com';
const orders = (endpoint, method, body) => {
    return fetch(`${host}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Token'
        },
        body: JSON.stringify (body),
    }) 
};

export const NewOrder = (request) => {
    return orders ('/orders', 'POST', {
        client_name: request.client,
        table: request.table,
        products: request.products,
    })
    .then((response) => response.json)
};

// export const NewOrder = async (orders) => {
//     const token = localStorage.getItem('userToken');
//     const body = {
//       "client": orders.client,
//       "table": orders.table,
//       "products": orders.products,
//     }
  
//     await fetch("https://lab-api-bq.herokuapp.com/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//       body: JSON.stringify(body),
//     })
//       .then((response) => response.json())
//       .catch((error) => console.log(error, "Erro ao criar o pedido"));
//   };
