import { getStorageKey } from './storage';

export const GetProducts = async () => {
    const token = getStorageKey();

    return await fetch('https://lab-api-bq.herokuapp.com/products', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            }
        })
            .then(response => response.json())
            .catch((error) => console.log(error, 'erro ao acessar a API de produtos'))
    
}

export const createOrder = async (order, item) => {

    return await fetch('https://lab-api-bq.herokuapp.com/orders', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getStorageKey(),
        },
        body: JSON.stringify ({
            "client": order.client,
            "table": order.table,
            "products": [
                {
                "id": item.id,
                "qtd": item.qtd
                }
            ]
        })
    })
        .then(response => response.json())
        .catch((error) => console.log(error, 'Erro ao criar o pedido'))

}