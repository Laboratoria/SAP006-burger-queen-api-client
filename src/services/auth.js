// import { useState } from "react";

// import { useHistory } from "react-router";

export const RegisterUser = (users) => {
    return fetch('https://lab-api-bq.herokuapp.com/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': users.name,
            'email': users.email,
            'password': users.password,
        })
    });
};

export const loginWithEmail = (users) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const history = useHistory;

    return fetch('https://lab-api-bq.herokuapp.com/auth', {
        method:'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify ({
            "email": users.email,
            "password": users.password
        })
        // body: `email=${email}&password=${password}`
    })
        // .then((response) => response.json())
        // .then((json) => {
        //     const { token } = json;
        //     if(token) {
        //         history.push('/tables')
        //     } else {
        //         alert('erro no token');
        //     }
        // })
};

// export const isAuthenticated = () => true;

// export default isAuthenticated; 