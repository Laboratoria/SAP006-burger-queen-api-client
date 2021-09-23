import { saveStorageKey } from './storage';

export const getProducts = async (products) => {

    return fetch('https://lab-api-bq.herokuapp.com/products', {
        method:'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': saveStorageKey(),
        }
    })
        .then((response) => response.json())
        .catch((error) => console.log(error, 'erro na lista de produtos'))

};
