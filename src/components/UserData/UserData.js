import React, {useState} from 'react';
import { Button } from '../Button/Button';

import inputName from '../../assets/icons/input-name.png';
import inputEmail from '../../assets/icons/input-email.png';
import inputPassword from '../../assets/icons/input-password.png';


import { showOrNotShowPassword } from '../../services/auth';

import './UserData.scss'

export function InputContentUserData ({Subject, Error, InputValue, InputOnChange}) {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const UserDataProps = {
    'name': {
      'data-content':'name',
      'InputClass': Error ? 'auth-wrong-input' : InputValue.length < 1 ? 'auth-correct-input' : InputValue.length >= 7 ? 'auth-correct-input' : 'auth-wrong-input',
      'InputType':'text',
      'InputPlaceholder':'Nome',
      'LabelClass':'',
      'IconSrc':inputName,
      'IconAlt':'Full Name',
    },
    'email': {
      'data-content':'email',
      'InputClass': Error ? 'auth-wrong-input' : InputValue.length < 1 ? 'auth-correct-input' : InputValue.includes('@') ? 'auth-correct-input' : 'auth-wrong-input',
      'InputType':'email',
      'InputPlaceholder':'Email',
      'LabelClass':InputValue.length > 1 ? 'move-label-up' : '',
      'IconSrc':inputEmail,
      'IconAlt':'Email', 
    },
    'password': {
      'data-content':'password',
      'InputClass': Error ? 'auth-wrong-input' : InputValue.length < 1 ? 'auth-correct-input' : InputValue.length >= 6 ? 'auth-correct-input' : 'auth-wrong-input',
      'InputType':showPassword ? 'text' : 'password',
      'InputPlaceholder':'Senha',
      'LabelClass':'',
      'IconSrc':inputPassword,
      'IconAlt':'Password',
      'ButtonOnClick':(event) => showOrNotShowPassword(event, showPassword, setShowPassword),
    },
    'confirmPassword': {
      'data-content':'confirmPassword',
      'InputClass': Error ? 'auth-wrong-input' : InputValue.length < 1 ? 'auth-correct-input' : InputValue.length >= 6 ? 'auth-correct-input' : 'auth-wrong-input',
      'InputType':showConfirmPassword ? 'text' : 'password',
      'InputPlaceholder':'Confirme a Senha',
      'LabelClass':'',
      'IconSrc':inputPassword,
      'IconAlt':'Confirm Password',
      'ButtonOnClick':(event) => showOrNotShowPassword(event, showConfirmPassword, setShowConfirmPassword),
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
          Conditional = {showPassword || showConfirmPassword}
          ButtonOnClick={UserDataProps[Subject].ButtonOnClick}
       /> : null
      }  
    </div>
  )
}

export function InputRadioUserData ({Subject, InputChecked, InputOnChange}) {
  const UserDataProps = {
      'room': {
        'data-content':'role',
        'InputClass':'auth-radio-input',
        'InputValue':'room',
        'LabelText':'Salão',
        'LabelClass':'auth-label-radio-input',
      },
      'kitchen': {
        'data-content':'role',
        'InputClass':'auth-radio-input',
        'InputValue':'kitchen',
        'LabelText':'Cozinha',
        'LabelClass':'auth-label-radio-input',
      },
    }

  return (
      <div>
        <input 
          required
          data-content = {Subject}
          className={UserDataProps[Subject].InputClass}
          name='role'
          type='radio'
          
          value={UserDataProps[Subject].InputValue}

          checked={InputChecked}
          onChange={InputOnChange}
        />
        <label className={UserDataProps[Subject].LabelClass}> 
          {UserDataProps[Subject].LabelText}
        </label>
    </div>
  )
}

