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
};


// export const GetAllProducts = () => {
//     return request ('/products', 'GET', {
//     }).then(res => res.json()) 
// };



// const baseURL = 'https://lab-api-bq.herokuapp.com';
// const token = localStorage.getItem("token");

// export const GetAllProducts = async () => {
//     return await fetch(`${baseURL}/products`, {
//       method: 'GET',
//       headers: {
//         "Content-Type": "application/json",
//         'Authorization': `${token}`
//       },
//     }).then(res => res.json())
//   }



  
//   export const PostOrders = async (client, table, allProducts) => {
//     return await fetch(`${baseURL}/orders`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//         'Authorization': `${token}`,
//       },
//       body: JSON.stringify({
//         client: client,
//         table: table,
//         products: allProducts,
//       })
//     })
//   }
  
//   export const GetOrders = async () => {
//     return await fetch(`${baseURL}/orders`, {
//       method: 'GET',
//       headers: {
//         "Content-Type": "application/json",
//         'Authorization': `${token}`,
//       },
//     })
//     .then(res => res.json())
//   }