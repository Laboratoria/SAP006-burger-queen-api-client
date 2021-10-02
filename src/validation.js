export const validation = (values) => {
    const errors = {};

    if (!values.name === '') {
        errors.name = 'Por favor, insira seu nome completo!'
    }
    if (!values.email.includes('@')) {
        errors.email = 'Por favor, insira um email válido!'
    }
    if (values.email === '') {
        errors.email = 'Por favor, insira um email!'
    }
    if (values.password.length < 6) {
        errors.password = 'Por favor, insira uma senha com seis ou mais caracteres'
    }
    if (values.password === '') {
        errors.password = 'Por favor, insira uma senha válida'
    }
    if (values.role === '') {
        errors.role = 'Setor de trabalho não selecionado.'
    }

    return errors;
}