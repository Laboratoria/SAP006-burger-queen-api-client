import { useState } from 'react';
import { loginUser } from '../../services/auth';
import { useHistory } from 'react-router';

const useFormLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const auxValues = { ...values };
    auxValues[e.target.name] = e.target.value;
    setValues(auxValues);

  }

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(values)
      .then(res => res.json())
      .then((data) => {
          if (data.role === 'attendant') {
            history.push('/menu')
          }

          if (data.role === 'chef') {
            history.push('/kitchen')
          }
        })
      .catch(error => console.log(error))
  }

  return { handleChange, handleSubmit };
}

export default useFormLogin;