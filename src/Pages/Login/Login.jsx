import { Redirect } from 'react-router-dom';

import Button from '../../components/Button';

const Login = (props) => {
    console.log(props);

    if(props.history) {
        return <Redirect to='/register' />
    }

    return (
        <div className='div-style'>
            Login
            <Button />
        </div>
    )
}

export default Login;