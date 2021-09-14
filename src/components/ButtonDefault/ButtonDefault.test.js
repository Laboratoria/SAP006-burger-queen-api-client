import React from 'react'
import { render, screen, cleanup, fireEvent} from '@testing-library/react'
// import user from "@testing-library/user-event";
// import act from 'react-dom/test-utils'
import ButtonDefault from './index'

afterEach(cleanup)

describe('Tests for ButtonFefault component', () => {
  it('Deve renderizar um botão com o texto fornecido', () => {
    const texto = "Nome botão";
    render(<ButtonDefault>{texto}</ButtonDefault>);
    const btn = screen.getByText(texto)
    expect(btn).toBeInTheDocument();
  });

  it('Deve disparar uma função quando clicado', () => {
    const onClick = jest.fn()
    render(<ButtonDefault onClick={onClick}/>)
    const btn = screen.getByRole('button')
    expect(onClick).toHaveBeenCalledTimes(0)
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
});