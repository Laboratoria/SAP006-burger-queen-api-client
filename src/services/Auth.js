const host = 'https://lab-api-bq.herokuapp.com';
const request = (endpoint, method, body) => {
    return fetch(`${host}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Token'
        },
        body: JSON.stringify (body),
    }) 

}

export const LoginWithEmail = (users) => {
    return request ('/auth', 'POST', {
        email: users.email,
        password: users.password,
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
