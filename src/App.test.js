
//import useFormLogin from './pages/login/useFormLogin';
import Login from './pages/login/login';
import { render, screen } from '@testing-library/react';


describe('testando classe', () => {
  it('deve ter a classe loginTitle no título', () => {
    render(<Login/>);
    const loginTitle = screen.getByText('Login');
    expect(loginTitle).toHaveClass('login-title');
  });
})


describe('Testando botão', () => {
  it('deve ter um botão logar', () => {
    render(<Login/>);
    const buttonLogin = screen.getByRole('button');
    expect(buttonLogin).toBeInTheDocument();
  });
})

