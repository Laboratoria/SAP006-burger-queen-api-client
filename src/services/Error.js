const Error = (values) => {

    let errors={};

    if(!values.name){
        errors.name = 'Insira seu nome completo.'
    } else if(values.name.length < 4){
        errors.email='Insira um nome válido.'
    }

    if(!values.email){
        errors.email='Insira um e-mail válido.'
    } else if(!/\S+@\S+/.test(values.email)){
        errors.email='Este e-mail é inválido'
    }

    if(!values.password){
        errors.password='Insira uma senha válida.'
    } else if (values.password.length <= 5){
        errors.password='Essa senha é muito curta.'
    }

    if(!values.role){
        errors.role='Selecione uma opção.'
    }

    return errors;
};

export default Error;