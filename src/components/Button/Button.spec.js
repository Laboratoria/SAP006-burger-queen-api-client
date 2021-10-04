import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button'


describe('test compoment button', () => {
  it('should call a function', () => {
    const mockFunction = jest.fn()
    render(<Button buttonOnClick={mockFunction}></Button>);
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(mockFunction).toHaveBeenCalledTimes(1);
  })
})