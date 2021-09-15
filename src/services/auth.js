
export const createUser = (name, email, password, role) => {
  fetch('https://613fa643e9d92a0017e177b1.mockapi.io/test/mockUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: 'Fight Club Burger',
    })
  }).then(res => res.json())
    .then(data => console.log(data))
}
export const isAuthenticated = () => {
    const token = localStorage.getItem('userToken');
        if (token) {
            return true;
        } else {
        return false;
    }
}

 export const logOut = () => {
            localStorage.removeItem('userToken');
        }
