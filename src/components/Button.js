import React from 'react';

const Button = ({children, ...props }) => {
    return (
    <button {...props} /*className={styles.button}*/>
        {children}
    </button>
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