const host = 'https://lab-api-bq.herokuapp.com';
const auth = (endpoint, method, body) => {
    return fetch(`${host}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Token'
        },
        body: JSON.stringify (body),
    }) 
};

export const LoginWithEmail = (users) => {
    return auth ('/auth', 'POST', {
        email: users.email,
        password: users.password,
    }) 
};

export const RegisterUser = (users) => {
    return auth ('/users', 'POST', {
        name: users.name,
        email: users.email,
        password: users.password,
        role: users.role,
        restaurant: 'retro burger',
    }) 
};
