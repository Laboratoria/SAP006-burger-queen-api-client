export default function validateLogin(user) {
    let errors = {}


    if (!user.email) {
        errors.email = 'Email obrigatório!';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.email = 'Ops! Endereço de email inválido';
    }
    if (!user.password) {
        errors.password = 'Senha obrigatória!';
    } else if (user.password.length < 6) {
        errors.password = 'Ops! A senha precisa ter 6 ou mais caracteres';
    }

    return errors;
}