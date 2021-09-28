import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import ButtonDefault from './index'


describe('Tests for ButtonDefault component', () => {
  it('should render a button with the text provided', () => {
    const texto = "Nome botão";
    render(<ButtonDefault>{texto}</ButtonDefault>);
    const btn = screen.getByText(texto)
    expect(btn).toBeInTheDocument();
  });

  it('should call a function when clicked', () => {
    const onClick = jest.fn()
    render(<ButtonDefault onClick={onClick}/>)
    const btn = screen.getByRole('button')
    expect(onClick).toHaveBeenCalledTimes(0)
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
});