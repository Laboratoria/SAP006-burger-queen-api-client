import React, { useState } from 'react';
import { render, fireEvent, cleanup, queryByTestId} from '@testing-library/react';
import { checkUserDataToSignin, authSignin, authLogin, showOrNotShowPassword } from '../services/auth'

import Login from '../pages/auth/Login'

afterEach(cleanup)


describe('checkUserDataToSignin', () => { 

  const userData = {
    'name':'test',
    'email':'test',
    'password':'test',
    'confirmPassword':'test',
    'role':'test'
  } 

  it('checkUserDataToSignin should be a function', () => {
    expect(typeof checkUserDataToSignin).toBe('function');
  });


  test('useState mock', () => {
    const initialStateForFirstUseStateCall = 'My First Initial State'
    const initialStateForSecondUseStateCall = 'My Second Initial State'
    const initialStateForThirdUseStateCall = 'My Third Initial State'
    const initialStateForForthUseStateCall = 'My Forth Initial State'

 
    React.useState = jest.fn()
      .mockReturnValueOnce([initialStateForFirstUseStateCall, false])
      .mockReturnValueOnce([initialStateForSecondUseStateCall, false])
      .mockReturnValueOnce([initialStateForThirdUseStateCall, false])
      .mockReturnValueOnce([initialStateForForthUseStateCall,false])
    
    const {queryByTestId} = render(<Login />)
  })


  describe('authSignin', () => { 
    it('authSignin should be a function', () => {
      expect(typeof authSignin).toBe('function');
    });
  })

  describe('authLogin', () => { 
    it('authLogin should be a function', () => {
      expect(typeof authLogin).toBe('function');
    });
  })

  describe('showOrNotShowPassword', () => { 
    it('showOrNotShowPassword should be a function', () => {
      expect(typeof showOrNotShowPassword).toBe('function');
    });
  })

})