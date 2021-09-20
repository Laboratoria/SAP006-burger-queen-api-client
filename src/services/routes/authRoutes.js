const isAuth = () => {
    const token = localStorage.setItem('userLogin', 'token');
        if (token) {
            return true;
        } else {
            return false;
        }
}

export default isAuth;

