import React from 'react';
import  styles  from './Button.css'

const Button = ({children, ...props }) => {
    return (
    <Button {...props} className={styles.Button}>
        {children}
    </Button>
    );
};

export default Button;


/*

<form action="" onSubmit={handleSubmit}>

    <Input label="Usuário" type="text" name="username" />
    <Input label="Senha" type="password" name="password" />
    <p>Error</p>
    
    <Button> Entrar </Button>
</form>

*/