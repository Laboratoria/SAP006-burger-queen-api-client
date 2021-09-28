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


// export const Products = (product) => {
//     return fetch('https://lab-api-bq.herokuapp.com/products', {
//         method:'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authentication': 'Token'
//         },
//         body: JSON.stringify({
//             'name': product.name,
//             'price': product.price,
//             'flavor': product.flavor,
//             'complement': product.complement,
//             'image': '',
//             'type': '',
//             'subtype': '',
//         }),
//     })
// };

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




    //   export const LoginWithEmail = async (users) => {
    //     try {
    //       const response = await fetch("https://lab-api-bq.herokuapp.com/auth", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           email: workerInfo.emailLogin,
    //           password: workerInfo.passLogin,
    //         }),
    //       });
    //       const json = await response.json();
    //       const token = json.token;
    //       const email = json.email;
    //       const occupation = json.role;
    //       localStorage.setItem("workerToken", token);
    //       localStorage.setItem("workerEmail", email);
    //       localStorage.setItem("workerOccupation", occupation);
    //       if (token) {
    //         console.log("Usuário logado!");
    //       }
    //     } catch (json) {
    //       const code = json.code;
    //       if (code === 400 || code === 403) {
    //         throw new Error(json.message);
    //       }
    //     }
    //   };



// export const role = () => localStorage.getItem('role');
// export const token = () => localStorage.getItem('token');