import { useEffect } from 'react';
import { getStorageKey } from './storage';

export const GetProducts = () => {
    const token = getStorageKey();

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                }
            })
                .then(response => response.json())
                .catch((error) => console.log(error, 'erro ao acessar a API de produtos'))
    }, [token])
}