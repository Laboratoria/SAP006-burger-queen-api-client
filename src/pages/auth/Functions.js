export function showOrNotShowPassword (event) {
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

export function moveLabelUpEvenWhenInputValueIsInvalid (event) {
  if (event.target.value.length >= 1) {
    event.target.classList.add('move-label-up')
  }
}