import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './input'

describe('Input component', () => {
  it('should pass a valid email', () => {  
    render(<Input placeholder='E-mail'></Input>)

    const inputEl = screen.getByPlaceholderText("E-mail"); 
    fireEvent.change(inputEl, {target: {value: 'teste@mail.com'}})
    expect(inputEl.value).toMatch("teste@mail.com");  
  
  })
})

