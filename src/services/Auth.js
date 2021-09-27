import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";


export const LoginWithEmail = (users) => {
    return fetch('https://lab-api-bq.herokuapp.com/auth', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Token'
        },
        body: JSON.stringify ({
            "email": users.email,
            "password": users.password,
        }),
    })
};

export const RegisterUser = (users) => {
    return fetch('https://lab-api-bq.herokuapp.com/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Token'
        },
        body: JSON.stringify({
            'name': users.name,
            'email': users.email,
            'password': users.password,
            'role': users.role,
            'restaurant': 'retro burger',
        }),
    })
};



// export const useEffect(() => {
//     fetch('https://lab-api-bq.herokuapp.com/products', {
//         headers: {
//             accept: 'application/json',
//             Authorization: `${token}`,
//         },
//     })

//         .then((response) => {
//             response.json()
//                 .then((json) => {
//                     setProducts(json)
//                 })
//         })
// }, [token])








// export const RegisterUser = (users) => {
//     return fetch('https://lab-api-bq.herokuapp.com/products', {
//         method:'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authentication': 'Token'
//         },
//         body: JSON.stringify({
//             'name': users.name,
//             'email': users.email,
//             'password': users.password,
//             'role': users.role,
//             'restaurant': 'retro burger',
//         }),
//     })
// };


// export const getAllProducts = () => {
//     fetch('https://lab-api-bq.herokuapp.com/products', {
//       headers: {
//         accept: 'application/json',
//         Authorization: `${token}`,

//       },

//     })
//       .then((response) => response.json())
//       .then((json) => {
//         const breakfast = json.filter((item) => item.type === 'breakfast');
//         setMenuCafe(breakfast);
//         const allDayMenu = json.filter((item) => item.type === 'all-day');
//         setMenuAlmoco(allDayMenu);
//       });
//   };


// export const RegisterSuccess = () => {
//     return (
//         alert('Sua conta foi criada com sucesso!')
//     )
// }




