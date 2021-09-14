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
