import React from 'react';

import useForm from './useForm';

const SignUp = () => {
  const { handleChange, handleSubmit } = useForm();
  
  return (
    <div>
      <h1>Página de Cadastro</h1>
      <input type='text' placeholder='Nome' name='name' onChange={handleChange} />
      <select autoComplete='off' name='role' onChange={handleChange}>
        <option value=''>Selecione um cargo</option>
        <option value='attendant'>Atendente</option>
        <option value='chef'>Chef de Cozinha</option>
      </select>
      <input type='email' placeholder='Email' name='email'onChange={handleChange} />
      <input type='password' placeholder='Senha' name='password' onChange={handleChange} />
      <input type='password' placeholder='Confirme sua senha' name='confirmPassword'onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>Cadastrar</button>  
    </div>
  );
}

export default SignUp;