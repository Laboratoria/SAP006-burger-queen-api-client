const isAuth = () => {
    const token = localStorage.getItem('arroz');
        if (token) {
            return true;
        } else {
            return false;
        }
}

export default isAuth;

