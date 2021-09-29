
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
    // .then((response) => {
    //     if (!response.ok) {
    //         return response.json().then(err => { throw new Error(err.message)})
    //     }
    //     return response.json()
    // })
    
    
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




// export const getAllProducts = () => {
//     fetch('https://lab-api-bq.herokuapp.com/products', {
         //method: 'GET',
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

