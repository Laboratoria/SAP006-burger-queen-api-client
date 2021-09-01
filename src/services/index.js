

const apiUrl = 'https://lab-api-bq.herokuapp.com/auth'
export const apiProducts = `${apiURL}/products/`;
export const apiOrders = `${apiURL}/orders/`;
export const apiUsers = `${apiURL}/users`;

export const getRequest = (token) => {
    const methods = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    };
    return methods;
}