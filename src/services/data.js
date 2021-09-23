import { saveStorageKey } from './storage';

export const getProducts = (products) => {
    const body = {
        "id": 0,
        "name": products.name,
        "flavor": products.flavor,
        "complement": products.complement,
        "price": products.price,
        "image": products.image,
        "type": products.type,
        "subtype": products.subtype,
    }
    
    return fetch('https://lab-api-bq.herokuapp.com/products', {
        method:'GET',
        headers: {
            'Authorization': saveStorageKey(),
        },
        body: body,
    })
        .then((response) => response.json())
        .catch((error) => console.log(error, 'erro na lista de produtos'))

};
