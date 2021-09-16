import React from 'react';
import { Link } from 'react-router-dom'
import useFormLogin from './useFormLogin';

const Login = () => {
  const { handleChange, handleSubmit } = useFormLogin();

  return (
    <div className='loginPage'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='exemplo@exemplo.com' onChange={handleChange} />
        <input type='password' name='password' placeholder='Senha' onChange={handleChange} />
        <div>
        <button type='submit'>Logar</button>
        </div>
      </form>
      <p className='new-user'>Não possuí cadastro?</p>
                <div><Link className="link" to='/signup'>Cadastre-se</Link></div>
    </div>
    
  );
}

export default Login;