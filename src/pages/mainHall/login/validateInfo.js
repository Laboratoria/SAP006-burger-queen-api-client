 /* export default function ValidateInfo(values){
  const errors = {}

  if(!values.email){
    errors.email = 'Por favor, insira um e-mail válido!'
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'E-mail é inválido!'
  }

  if (!values.password) {
    errors.password = 'Por favor, digite sua senha!';
  } else if (values.password.length < 6) {
    errors.password = 'Sua senha deve ter 6 caracteres ou mais!';
  }

  return errors;

} */



// trim () - para espaços em branco
// if(!values.name.trim()){
//  errors.name = 'Por favor, insira um e-mail válido!'
// }

// export default function validateInfo(values) {
//   let errors = {};

//   if (!values.username.trim()) {
//     errors.username = 'Username required';
//   }
//   // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
//   //   errors.name = 'Enter a valid name';
//   // }

//   if (!values.email) {
//     errors.email = 'Email required';
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = 'Email address is invalid';
//   }
//   if (!values.password) {
//     errors.password = 'Password is required';
//   } else if (values.password.length < 6) {
//     errors.password = 'Password needs to be 6 characters or more';
//   }

//   if (!values.password2) {
//     errors.password2 = 'Password is required';
//   } else if (values.password2 !== values.password) {
//     errors.password2 = 'Passwords do not match';
//   }
//   return errors;
// }