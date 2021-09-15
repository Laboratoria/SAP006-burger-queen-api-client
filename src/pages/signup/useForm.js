import { useState } from 'react';
// import { createUser } from '../../services/auth';

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
    console.log(values)
  }

  // const handleSubmit = (callback) => (e) => {
  //   e.preventDefault();
  //   callback();
  //   // createUser(name, email, password, role);
  // }

  return [{values}, handleChange];
}

export default useForm;