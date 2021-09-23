import React, {useState} from 'react';
import Register from '../../Pages/Register/Register'

export const RegisterSuccess = () => {
    return (
        alert('Sua conta foi criada com sucesso! :)')
    )
}

const FormRegister = () => {
    const [formIsSubmitted, setFormSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormSubmitted(true);
    }

    return <div>{!formIsSubmitted ? <Register submitForm={submitForm} /> : RegisterSuccess}</div>     

}

export default FormRegister;