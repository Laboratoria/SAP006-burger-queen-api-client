import { useState } from 'react';
import { validateForm } from '../../services/validate';
import { createUser } from '../../services/auth';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  })

  const handleChange = (e) => {
    const auxValues = { ...values };
    auxValues[e.target.name] = e.target.value;
    setValues(auxValues);
    validateForm(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(values) === true) {
      createUser(values)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
  }

  return { handleChange, handleSubmit };
}

export default useForm;