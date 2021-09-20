export default function validateInfo(values) {
    let errors = {}


    if (!values.email) {
        errors.email = 'Email obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Endereço de email invalido';
    }
    if (!values.password) {
        errors.password = 'Senha obrigatória';
    } else if (values.password.length < 6) {
        errors.password = 'Senha precisa ter 6 ou mais caracteres';
    }

    return errors;
}