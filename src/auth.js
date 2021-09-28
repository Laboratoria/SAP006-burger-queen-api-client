

export const logout = () => {
    localStorage.clear()
};

export const registerUser = async (emailUser, passwordUser) => {
    const url = 'https://lab-api-bq.herokuapp.com/users';
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            email: emailUser,
            password: passwordUser,
            role: 'atendente',
            restaurant: 'BQ'
            
        }),
    });
    return response;
};
