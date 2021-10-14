const isAuth = () => {
    const token = localStorage.getItem('userToken');
        if (token) {
            return true;
        } else {
            return false;
        }
}

export default isAuth;

