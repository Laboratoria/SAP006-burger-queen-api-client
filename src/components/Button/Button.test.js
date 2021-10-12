import Button from '../../components/button/Button.js';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
// userEvent - simula evento do DOM

// describe('Button.js', () => {
//     test('deve renderizar o botão sem erros', () => {
//         render(<Button onChange={() => {}} />)
//         expect(screen.queryAllByText('button', {name: 'Entrar'})).toBeInTheDocument()
//     })
// })

describe('Test for Button component', () => {
    test('Should render a button with the text provided', () => {
        const textName = 'Text Name';
      render(<Button>{textName}</Button>);
      const button = screen.getByText(textName)
      expect(button).toBeInTheDocument();
    });
  });
