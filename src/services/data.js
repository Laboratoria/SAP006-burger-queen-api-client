import {saveStorageKey} from './storage'
import { useEffect } from 'react';

// export const getProducts = async () => {
    
//     return await fetch('https://lab-api-bq.herokuapp.com/products', {
//         method:'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': saveStorageKey(),
//         }
//     })
//         .then(response => response.json())
//         .catch((error) => console.log(error, 'erro em acessar a lista de produtos'))

// };

export const GetProducts = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    
    return await 
    
    
};
