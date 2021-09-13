import { useHistory } from 'react-router-dom';

const Button = (props) => {
    const history = useHistory();

    return (
        <button variant='primary' onClick={() => {history.push('/register');}}>Cadastro</button>
    );
}

export default Button;

 