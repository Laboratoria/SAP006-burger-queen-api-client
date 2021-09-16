import React, {useState} from 'react';
import { Button } from '../Button/Button';

import inputName from '../../assets/icons/input-name.png';
import inputEmail from '../../assets/icons/input-email.png';
import inputPassword from '../../assets/icons/input-password.png';
import inputRole from '../../assets/icons/input-role.png';

import { showOrNotShowPassword } from '../../services/auth';

import './UserData.scss'

export function InputContentUserData ({Subject, InputValue, InputOnChange}) {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const UserDataProps = {
    'name': {
      'data-content':'name',
      'InputClass': '',
      'InputType':'text',
      'InputPlaceholder':'Nome',
      'LabelClass':'',
      'IconSrc':inputName,
      'IconAlt':'Full Name',
    },
    'email': {
      'data-content':'email',
      'InputClass':InputValue.length < 1 ? 'auth-correct-input' : InputValue.includes('@') ? 'auth-correct-input' : 'auth-wrong-input',
      'InputType':'email',
      'InputPlaceholder':'Email',
      'LabelClass':InputValue.length > 1 ? 'move-label-up' : '',
      'IconSrc':inputEmail,
      'IconAlt':'Email', 
    },
    'password': {
      'data-content':'password',
      'InputClass':InputValue.length < 1 ? 'auth-correct-input' : InputValue.length >= 6 ? 'auth-correct-input' : 'auth-wrong-input',
      'InputType':showPassword ? 'text' : 'password',
      'InputPlaceholder':'Senha',
      'LabelClass':'',
      'IconSrc':inputPassword,
      'IconAlt':'Password',
      'ButtonOnClick':(event) => showOrNotShowPassword(event, showPassword, setShowPassword),
    },
    'confirmPassword': {
      'data-content':'confirmPassword',
      'InputClass': '',
      'InputType':showPassword ? 'text' : 'password',
      'InputPlaceholder':'Senha',
      'LabelClass':'',
      'IconSrc':inputPassword,
      'IconAlt':'Confirm Password',
      'ButtonOnClick':(event) => showOrNotShowPassword(event, showConfirmPassword, setShowConfirmPassword),
    },
    'role': {
      'data-content':'role',
      'InputClass':'',
      'InputType':'radio',
      'InputPlaceholder':'',
      'LabelClass':'',
      'IconSrc':inputRole,
      'IconAlt':'Role'
    },
  }

  return (
    <div>
      <input 
        required
        autoComplete='off'
        data-content={Subject}

        className={UserDataProps[Subject].InputClass}
        type={UserDataProps[Subject].InputType}       
        placeholder={UserDataProps[Subject].InputPlaceholder}

        onChange={InputOnChange}
        value={InputValue}
      />
      <label className={UserDataProps[Subject].LabelClass} > 
        {UserDataProps[Subject].InputPlaceholder}
      </label>
      <img
        src={UserDataProps[Subject].IconSrc}
        alt={UserDataProps[Subject].IconAlt}
      />
      { Subject === 'password' || Subject === 'confirmPassword' ?
       <Button
          Role='authShowOrNotShowPassword'
          Conditional = {showPassword}
          ButtonOnClick={UserDataProps[Subject].ButtonOnClick}
       /> : null
      }  
    </div>
  )
}


export function InputRadioUserData ({
  divClass,
  inputData,
  inputType,
  inputValue,
  inputChecked,
  inputOnChange,
  inputOnKeyUp,
  labelText,
  errorMessage
}) {
  return (
    <div>
      <div className={divClass} data-testid='user-data-div-radio-content'>
        <input 
          data-testid='user-data-input-radio-content'
          data-input={inputData}
          type={inputType}
          name='role'
          required
          value={inputValue}
          checked={inputChecked}
          onChange={inputOnChange}
          onKeyPress={inputOnKeyUp}
        />
        <label data-testid='user-data-label-radio-content'> 
          {labelText}
        </label>
      </div>
      <p className='auth-error-message' data-testid='user-data-p-radio-content'>
        {errorMessage}
      </p>
    </div>
  )
}

