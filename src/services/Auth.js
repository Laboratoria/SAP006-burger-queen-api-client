
export const LoginWithEmail = (users) => {
    console.log('entrou aqui')
    return fetch('https://lab-api-bq.herokuapp.com/auth', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
            "email": users.email,
            "password": users.password,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            const { token } = json;
            return token
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
            'name': 'thalita',
            'email': users.email,
            'password': users.password,
            'role': users.role,
            'restaurant': 'Retro Burger',
        }),
    })
        // .then ((response) => response.json())
        // .then ((json) => {
        //     const { token } = json;
        //     return token
        // })
};


export const RegisterSuccess = () => {
    return (
        alert('Sua conta foi criada com sucesso!')
    )
}




// // import { Redirect } from "react-router";

// export const loginWithEmailAndPassword = (email, password) => {
    
//     return fetch("https://lab-api-bq.herokuapp.com/auth", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify ({
//         "email": email,
//         "password": password
//     })
//   });
// };

// export default loginWithEmailAndPassword;

// export const isAuthenticated = () => true;
