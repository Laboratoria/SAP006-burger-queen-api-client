import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorMessage from './index'


describe('Tests for errorMessage component', () => {
  it('Deve renderizar uma mensagem de erro com o texto fornecido', () => {
    const texto = "Mensagem de erro"
    render(<ErrorMessage>{texto}</ErrorMessage>)
    const error = screen.getByText(texto)
    expect(error).toBeInTheDocument();
  });
});
