import React from 'react';
import { Link } from 'react-router-dom'
import useFormLogin from './useFormLogin';
import { BrowserRouter as Router} from 'react-router-dom';

const Login = () => {
  const { handleChange, handleSubmit } = useFormLogin();

  return (
    <Router>
     <div className='login-page'>
      <h2 className='login-title'>Login</h2>
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
    </Router>
  );
}

export default Login;