import { useState, useEffect } from 'react';

const useForm = (signInValidation) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(signInValidation(values));
    }



    return {handleChange, values, handleSubmit, errors}
}

export default useForm;