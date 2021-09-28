import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorMessage from './index'


describe('Tests for errorMessage component', () => {
  it('should render an error message with the text provided', () => {
    const texto = "Mensagem de erro"
    render(<ErrorMessage>{texto}</ErrorMessage>)
    const error = screen.getByText(texto)
    expect(error).toBeInTheDocument();
  });
});
