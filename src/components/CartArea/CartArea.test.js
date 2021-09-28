import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CartArea from './index';

const content = [{
  complement: null,
  flavor: "frango",
  name: "Hambúrguer simples",
  price: "R$ 10,00",
  priceComplement: null,
  quantity: 1
}]


describe('Tests for CartArea component', () => {
  it('should render "Carrinho", "Item", "Qtd." and "Price"', () => {
   
    render(<CartArea content={content}/>)
    const cart = screen.getByText(/Carrinho/i);
    const item = screen.getByText(/Item/i);
    const qty = screen.getByText(/Qtd./i);
    const price = screen.getByText(/Preço/i);

    expect(cart).toBeInTheDocument();
    expect(item).toBeInTheDocument();
    expect(qty).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should render cart content data', () => {
   
    render(<CartArea content={content}/>)
    const product = screen.getByText(/Hambúrguer Simples/i);
    const flavor = screen.getByText(/frango/i);
    const price = screen.getByText("R$10,00");

    expect(product).toBeInTheDocument();
    expect(flavor).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should render a cancel button and a confirm button that call functions when clicked', () => {
    const onClick = jest.fn()
    render(<CartArea content={content} openPopupCancel={onClick} sendOrder={onClick}/>)
    const btnConfirm = screen.getByText("Confirmar")
    const btnCancel = screen.getByText("Cancelar")
    expect(btnConfirm).toBeInTheDocument();
    expect(btnCancel).toBeInTheDocument();
    fireEvent.click(btnConfirm)
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(btnCancel)
    expect(onClick).toHaveBeenCalledTimes(2)

  });

});
