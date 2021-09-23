import React from 'react';

const Input = ({label, type, name}) => {
    return (
        <div> 
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} /*className={styles.input}*/ type={type} />;
        </div>
    );
};

export default Input;


/*

<form action="" onSubmit={handleSubmit}>

    <Input label="Usuário" type="text" name="username" />
    <Input label="Senha" type="password" name="password" />
    
    <Button> Entrar </Button>
</form>

*/
