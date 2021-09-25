import { useState } from 'react';

import { Button } from '../Button/Button';

import inputName from '../../assets/icons/input-name.png';
import inputEmail from '../../assets/icons/input-email.png';
import inputPassword from '../../assets/icons/input-password.png';

import './UserData.scss'
import './UserData2.scss'

export function InputContentUserData ({Subject, Error, InputValue, InputOnChange}) {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const authInput = {
    'name': {
      'data-content':'name',
      'InputClass': Error ? 'auth-input auth-wrong-input' : InputValue.length < 1 ? 'auth-input auth-correct-input' : InputValue.length >= 7 ? 'auth-input auth-correct-input' : 'auth-input auth-wrong-input',
      'InputType':'text',
      'InputPlaceholder':'Nome Completo',
      'LabelClass':'auth-input-label',
      'IconSrc':inputName,
      'IconAlt':'Full Name',
    },
    'email': {
      'data-content':'email',
      'InputClass': Error ? 'auth-input auth-wrong-input' : InputValue.length < 1 ? 'auth-input auth-correct-input' : InputValue.includes('@') ? 'auth-input auth-correct-input' : 'auth-input auth-wrong-input',
      'InputType':'email',
      'InputPlaceholder':'Email',
      'LabelClass':InputValue.length > 1 ? 'auth-input-label move-label-up' : 'auth-input-label',
      'IconSrc':inputEmail,
      'IconAlt':'Email', 
    },
    'password': {
      'data-content':'password',
      'InputClass': Error ? 'auth-input auth-wrong-input' : InputValue.length < 1 ? 'auth-input auth-correct-input' : InputValue.length >= 6 ? 'auth-input auth-correct-input' : 'auth-input auth-wrong-input',
      'InputType':showPassword ? 'text' : 'password',
      'InputPlaceholder':'Senha',
      'LabelClass':'auth-input-label',
      'IconSrc':inputPassword,
      'IconAlt':'Password',
      'ButtonOnClick':(event) => [event.preventDefault(), showPassword === false ? setShowPassword(true) : setShowPassword(false)] 
    },
    'confirmPassword': {
      'data-content':'confirmPassword',
      'InputClass': Error ? 'auth-input auth-wrong-input' : InputValue.length < 1 ? 'auth-input auth-correct-input' : InputValue.length >= 6 ? 'auth-input auth-correct-input' : 'auth-input auth-wrong-input',
      'InputType':showConfirmPassword ? 'text' : 'password',
      'InputPlaceholder':'Confirme a Senha',
      'LabelClass':'auth-input-label',
      'IconSrc':inputPassword,
      'IconAlt':'Confirm Password',
      'ButtonOnClick':(event) => [event.preventDefault(), showConfirmPassword === false ? setShowConfirmPassword(true) : setShowConfirmPassword(false)]
    },
    'test': {
      'data-content':'test',
      'InputClass': 'test',
      'InputType':'test',
      'InputPlaceholder':'test',
      'LabelClass':'test',
      'IconSrc':'test',
      'IconAlt':'test',
      'ButtonOnClick':'test',
    },
  }

  return (
    <div data-testid='userDataDiv' className='auth-input-div'>
      <input 
        data-testid='userDataInput'
        required
        autoComplete='off'
        data-content={Subject}

        className={authInput[Subject].InputClass}
        type={authInput[Subject].InputType}       
        placeholder={authInput[Subject].InputPlaceholder}

        onChange={InputOnChange}
        value={InputValue}
      />
      <label data-testid='userDataLabel'
        className={authInput[Subject].LabelClass}> 
        {authInput[Subject].InputPlaceholder}
      </label>
      <img data-testid='userDataImg'
        className='auth-input-img'
        src={authInput[Subject].IconSrc}
        alt={authInput[Subject].IconAlt}
      />
      {Subject === 'password' || Subject === 'confirmPassword' ?
       <Button 
          ButtonClass={showPassword ? 
          'auth-show-or-not-password-button auth-show-password-button' : 
          'auth-show-or-not-password-button auth-not-show-password-button'}
          ButtonOnClick={authInput[Subject].ButtonOnClick}
       /> : null
      }  
    </div>
  )
}

export function InputRadioUserData ({Subject, InputChecked, InputOnChange}) {
  const authInput = {
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
      'test': {
        'data-content':'test',
        'InputClass':'test',
        'InputValue':'test',
        'LabelText':'test',
        'LabelClass':'test',
      },
    }

  return (
      <div data-testid='userDataDiv'>
        <input 
          required
          data-content = {Subject}
          className={authInput[Subject].InputClass}
          name='role'
          type='radio'
          
          value={authInput[Subject].InputValue}

          checked={InputChecked}
          onChange={InputOnChange}
        />
        <label className={authInput[Subject].LabelClass}> 
          {authInput[Subject].LabelText}
        </label>
    </div>
  )
}

