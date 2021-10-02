
const STORAGE_KEY = 'BurguerQueen';
export const isLogged = () => !!localStorage.getItem(STORAGE_KEY);

export const isUserActive = localStorage[STORAGE_KEY]; 
export const loginConfirmed = (token) => { //Aqui terei de chamar a função com os parametros infoUser
    localStorage.setItem(STORAGE_KEY, token)
};
// export const logout = () => {
//     localStorage.clear()
// };

export const registerUser = async (nameUser, emailUser, passwordUser, roleUser) => {
    const url = 'https://lab-api-bq.herokuapp.com/users';
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            name:nameUser,
            email: emailUser,
            password: passwordUser,
            role: roleUser,
            restaurant: 'MagBru'
            
        }),
    });
    return response.json();
};


export const loginUser = async (emailUser, passwordUser) => {
    const url = 'https://lab-api-bq.herokuapp.com/auth';
    const responseLogin = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            email: emailUser,
            password: passwordUser
        }),
    });
    return responseLogin;
};