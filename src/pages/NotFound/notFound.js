import { useHistory } from 'react-router';
//import { Button } from '../../components/Button/index.js';
//import './login.css';

export const NotFound = () => {

    const history = useHistory()

    return (
        <div className="container-notFound">
            <h1>Page 404! Está página não foi encontrada</h1>
            <button className="return" onClick={() => {
                localStorage.removeItem('token')
                history.push('/')
            }}>Sair
        </button>
        </div >
    );
};
