const isAuth = () => {
    const token = localStorage.setItem('userToken');
        if (token) {
            return true;
        } else {
            return false;
        }
}

export default isAuth;