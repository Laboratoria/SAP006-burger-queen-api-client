const isAuth = () => {
    const token = localStorage.setItem('userLogin', 'userToken');
        if (token) {
            return true;
        } else {
            return false;
        }
}

export default isAuth;