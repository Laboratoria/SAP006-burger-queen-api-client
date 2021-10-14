import Button from '../../components/button/Button.js';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
// userEvent - simula evento do DOM

describe('Button.js', () => {
    test('deve renderizar o botão sem erros', () => {
        render(<Button text='Entrar' onChange={() => {}} />)
        expect(screen.getByText('Entrar')).toBeInTheDocument()
    })
})


