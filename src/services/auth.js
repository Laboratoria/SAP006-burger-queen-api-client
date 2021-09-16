export const RegisterUser = (users) => {
    console.log(users);
    const body = {
        'name': users.fullName,
        'email': users.email,
        'password': users.password,
        'role': users.role,
        'restaurant': 'Vixi', 
    }
    console.log(body);

    return fetch('https://lab-api-bq.herokuapp.com/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
};

export const LoginWithEmail = (users) => {
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
            return token;
        })
};


// export const isAuthenticated = () => true;

// export const RegisterSuccess = () => {
//     return (
//         alert('Sua conta foi criada com sucesso! :)')
//     )
// }

// const objectAPI = {
    //     'name': users.name,
    //     'email': users.email,
    //     'password': users.password,
    //     'role': users.role,
    //     'restaurant': 'Vixi',
    // }

// function getAPI (endpoint) {
//     return fetch(`https://lab-api-bq.herokuapp.com/${endpoint}`, {

//     }) 
//         .then(function(response) {

//         })
//         .then(function(res) {

//         })
// } 
    