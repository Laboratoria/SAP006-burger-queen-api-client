import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import CartItem from './index'


describe('Tests for CartItem component', () => {
  it('should render a text with the name provided', () => {
    const text = "Nome do produto";
    const price = "R$ 40,00"
    render(<CartItem name={text} price={price}/>)
    const name = screen.getByText(text)
    expect(name).toBeInTheDocument();
  });

  it('should render a text with the flavor provided', () => {
    const text = "Nome do produto";
    const price = "R$ 40,00"
    const flavor = "sabor"
    render(<CartItem name={text} price={price} flavor={flavor}/>)
    const flavorText = screen.getByText(flavor)
    expect(flavorText).toBeInTheDocument();
  });

  it('should render a text with the complement provided', () => {
    const text = "Nome do produto";
    const price = "R$ 40,00"
    const complement = "extra"
    render(<CartItem name={text} price={price} complement={complement}/>)
    const complementText = screen.getByText(complement)
    expect(complementText).toBeInTheDocument();
  });

  it('should render a input that iniciate with the number 1', () => {
    const text = "Nome do produto";
    const price = "R$ 40,00"
    render(<CartItem name={text} price={price} qty="1" />)
    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("1")
  });

  it('should call a function by clicking the button +', () => {
    const text = "Nome do produto";
    const price = "R$ 40,00"
    const onClick = jest.fn()
    render(<CartItem name={text} price={price} qty="1" plus={onClick} />)
    const btn = screen.getByTestId('plus-btn')
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  });

  it('should call a function by clicking the button -', () => {
    const text = "Nome do produto";
    const price = "R$ 40,00"
    const onClick = jest.fn()
    render(<CartItem name={text} price={price} qty="1" minus={onClick} />)
    const btn = screen.getByTestId('minus-btn')
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  });

  it('should show the total price -', () => {
    const text = "Nome do produto";
    const price = "R$ 40,00"
    render(<CartItem name={text} price={price} qty="3" />)
    expect(screen.getByText("R$120,00")).toBeInTheDocument()
  });

});