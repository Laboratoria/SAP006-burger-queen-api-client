import { registerAnEmployee } from "../../services/auth";


export const showOrNotShowPassword = (event) => {
  const inputToHideOrShow = event.target.previousElementSibling.previousElementSibling.previousElementSibling;
  const eyeClass =  event.target.classList
  if (event.target.classList[1] === 'not-show-password'){
    eyeClass.remove('not-show-password')
    eyeClass.add('show-password')
    inputToHideOrShow.type = 'text'
  } else {
    eyeClass.remove('show-password')
    eyeClass.add('not-show-password')
    inputToHideOrShow.type = 'password'
  }
}

export const moveLabelUpEvenWhenInputValueIsInvalid = (event) => {
  if (event.target.value.length >= 1) {
    event.target.classList.add('move-label-up')
  }
}

export const processRegisterAnEmployeeRequest = (event, {userData}) => {
  const variableWithError = registerAnEmployee(event, {userData});
  const variablesWithoutError = Object.keys(userData).filter((input) => input !== variableWithError);
 
  variablesWithoutError.forEach((input) => {
    document.querySelectorAll(`[data-input="${input}"]`)
    .forEach(element => element.parentNode.classList.remove('input-content-is-wrong'));
  })

  document.querySelectorAll(`[data-input="${variableWithError}"], [data-input-confirm-password="${variableWithError}"]`)
  .forEach(element => { 
    element.parentNode.classList.add('input-content-is-wrong')
    if(variableWithError === 'confirmPassword') {
     element.parentNode.nextSibling.textContent = 'As senhas não conferem.'
    }
  });
  
}