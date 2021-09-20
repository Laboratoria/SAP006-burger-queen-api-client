const validation = (values) => {

    let errors={};

    if(!values.fullName){
        errors.fullName = 'Insira seu nome completo.'
    } else if(values.fullName.length < 4){
        errors.email='Este e-mail é inválido'
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

    if(!values.confirmPassword){
        errors.password='Insira uma senha válida.'
    } else if(values.confirmPassword !== values.password){
        errors.password='As senhas não conferem.'
    }

    if(!values.role){
        errors.role='Selecione uma opção.'
    }

    return errors;
};

export default validation;