// import { useHistory } from "react-router";
// let history = useHistory;

import { Redirect } from 'react';

export const RegisterUser = (users) => {
    return fetch('https://lab-api-bq.herokuapp.com/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Token'
        },
        body: JSON.stringify({
            'name': 'joao',
            'email': users.email,
            'password': users.password,
            'role': users.role,
            'restaurant': 'Vixi',
        })
    });
};

export const RegisterSuccess = () => {
    return (
        alert('Sua conta foi criada com sucesso! :)')
    )
}

export const LoginWithEmail = (users) => {
    return fetch('https://lab-api-bq.herokuapp.com/auth', {
        method:'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify ({
            "email": users.email,
            "password": users.password,
        }),
        // body: `email=${email}&password=${password}`
    })
        .then((response) => response.json())
        .then((json) => {
            const { token } = json;
            if(token) {
                <Redirect push to='/tables' />
                // window.push('/tables')
            } else {
                // history().push('/');
                <Redirect push to='/' />
                alert('erro no token');
            }
        })
};


// export const isAuthenticated = () => true;

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
    