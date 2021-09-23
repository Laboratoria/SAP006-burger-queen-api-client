const isAuth = () => {
    const token = localStorage.getItem('userName');
        if (token) {
            return true;
        } else {
            return false;
        }
}

export default isAuth;

