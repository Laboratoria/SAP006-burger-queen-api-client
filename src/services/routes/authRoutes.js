const isAuth = () => {
    const tokenAuth = localStorage.setItem('userToken');
        if (tokenAuth) {
            return true;
        } else {
            return false;
        }
}

export default isAuth;