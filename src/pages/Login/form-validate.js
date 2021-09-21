
export const validate = (values) => {
    const errors = {};
  
    if (!values.email.includes('@')) {
      errors.email = 'Please, insert a valid email with @!'
    }
    if (values.email === '') {
      errors.email = 'Please, insert an email!'
    }
  
    if (values.password.length < 6) {
      errors.password = 'Please, insert a valid password with six, or more, caracters'
    }
    
    if (values.password === '') {
      errors.password = 'Please, insert a valid password'
    }
    
  
    return errors;
  }