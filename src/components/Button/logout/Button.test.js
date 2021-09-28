import Button from '../Button'
import { render } from '@testing-library/react'

describe('Button.js', () => {
    test('deve renderizar o botão sem erros', () => {
        render(<Button onChange={() => {}} />)
    })
})




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
