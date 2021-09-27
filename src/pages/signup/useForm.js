import { useEffect, useState } from 'react';
import { validateForm } from '../../services/validate';
import { createUser } from '../../services/auth';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [errors, setErrors] = useState('');

  useEffect(() => {
    return { errors }
  }, [errors])

  const handleChange = (e) => {
    const auxValues = { ...values };
    auxValues[e.target.name] = e.target.value;
    setValues(auxValues);
    setErrors(() => validateForm(values).message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(() => validateForm(values).message)
    if (validateForm(values).validationFulfilled === true) {
      createUser(values)
        .then(res => res.json())
        .then(data => {
          if (data.code === 403) {
            setErrors(data.message);
          } else {
            setErrors('Email cadastrado com sucesso!')
          }
        })
        .catch(error => console.log(error))
    }
  };

  return { handleChange, handleSubmit, errors };
}

export default useForm;