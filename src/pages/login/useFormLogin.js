import { useEffect, useState } from 'react';
import { loginUser } from '../../services/auth';
import { useHistory } from 'react-router';

const useFormLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState('');

  useEffect(() => {
    return errors;
  })

  const handleChange = (e) => {
    const auxValues = { ...values };
    auxValues[e.target.name] = e.target.value;
    setValues(auxValues);
  }

  const history = useHistory();
  const saveToken = (token) => {
    localStorage.setItem('token', token)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(values)
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if (data.role === 'attendant') {
          history.push('/menu')
        }
        if (data.role === 'chef') {
          history.push('/kitchen')
        }
        if (data.code === 400) {
          setErrors(data.message)
        } else {
          saveToken(data.token)
        }

      })
      .catch(error => console.log(error))
  }

  return { handleChange, handleSubmit, errors };
}

export default useFormLogin;