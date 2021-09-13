import React from 'react'
import { render, screen, cleanup} from '@testing-library/react'
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
    render(<ButtonDefault onClick={onClick}></ButtonDefault>)
    const btn = screen.getByRole('button')
    const spy = jest.spyOn(btn,'click');
    expect(onClick).toHaveBeenCalledTimes(0)
    // fireEvent.click(btn)
    // btn.click()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
});