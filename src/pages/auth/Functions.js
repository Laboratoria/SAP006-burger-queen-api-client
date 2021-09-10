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
  const inputToHighlight = registerAnEmployee(event, {userData});
  console.log(inputToHighlight)
}