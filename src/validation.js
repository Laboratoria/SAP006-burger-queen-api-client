export default function validation(values) {
    let errors = {};

    if (values.email === '') {
        errors.email = 'Email inválido'
    }

    if (values.password === '') {
        errors.password = 'Favor digitar a senha.'
    } else if (values.password.length < 6) {
        errors.password = 'Senha precisa ter 6 caracteres ou mais.'
    }

    if (values.role === '') {
        errors.role = 'Setor de trabalho não selecionado.'
    }

    return errors;
}