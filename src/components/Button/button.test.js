import { fireEvent, render, screen } from '@testing-library/react';
import  Button  from './Button';

test('click button in screen login', () => {
    const handleSubmit = jest.fn()
    render(
        <Button onClick={handleSubmit}>Entrar</Button>);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText(/Entrar/i));
    expect(handleSubmit).toHaveBeenCalledTimes(1)
});

test('click button in screen register', () => {
    const handleSubmit = jest.fn()
    render(
        <Button onClick={handleSubmit}>Cadastrar</Button>);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText(/Cadastrar/i));
    expect(handleSubmit).toHaveBeenCalledTimes(1)
});