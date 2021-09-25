import React from 'react';
import './Input.css';

const Input = ({label, type, name}) => {
    return (
        <div className='wrapper'> 
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <input id={name} name={name} className='input' type={type} />
            <p className='error'> Error</p>
        </div>
    );
}

export default Input;


/*

<form action="" onSubmit={handleSubmit}>

    <Input label="Usuário" type="text" name="username" />
    <Input label="Senha" type="password" name="password" />
    
    <Button> Entrar </Button>
</form>

*/
