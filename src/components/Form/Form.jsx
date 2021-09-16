import React, {useState} from 'react';

import { RegisterSuccess } from '../../services/auth';
import Register from '../../Pages/Register/Register'

const FormRegister = () => {
    const [formIsSubmitted, setFormSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormSubmitted(true);
    }

    return <div>{!formIsSubmitted ? <Register submitForm={submitForm} /> : RegisterSuccess}</div>     

}

export default FormRegister;