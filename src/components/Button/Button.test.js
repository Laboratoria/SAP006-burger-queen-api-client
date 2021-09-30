import Button from '../../components/button/Button.js';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
// userEvent - simula evento do DOM

describe('Button.js', () => {
    test('deve renderizar o botão sem erros', () => {
        render(<Button onChange={() => {}} />)
        expect(screen.getByRole('button', {name: 'Entrar'})).toBeInTheDocument()
    })
})

// userEvent.click(screen.getByText('Load Greeting'))

// test('efetuar login', done => {
//     function handleClick(e) {
//       expect(e.target.value).toEqual('salon');
//       done();
//     }
//     const { findByLabelText } = render(
//       <Button onChange={handleClick} label="Entrar" />);
//     const infoLabel = findByLabelText('Entrar');
//     fireEvent.change(infoLabel, { target: { value: "Entrar" } });
//   });

// describe('Button Component', () => {
//     test('efetuar login do usuário', () => {
//         render(<Button />);

//         const buttonTitle = screen.getByText('buttons')

//         expect(buttonTitle).toBeInTheDocument('/mesas');
//     });

//     test('deve conter a classe button no titulo', () => {
//         render(<Button />);

//         const buttonTitle = screen.getByText('Entrar')

//         expect(buttonTitle).toHaveClass('buttons');
//     });
// })
