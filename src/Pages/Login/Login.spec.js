import { render, fireEvent, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { getRouteByRole } from '../../routes/redirections'

import Login from './Login'

describe('Login', () => {
    // beforeEach(() => {
    //     jest.resetAllMocks();
    // })

    describe('login button redirect to tables or kitchen page', () => {
        it('calls the authUserLogin function', async (json) => {
            const mockOnClick = jest.fn();
            render(<Router><Login onClick={mockOnClick} /></Router>);

            userEvent.click(screen.getByRole('button'))
            const route = getRouteByRole(json.role);
            useHistory().push(route); 

            await waitFor (() => {
                expect(mockOnClick).toHaveBeenCalled();
            })
        })
    })

    describe('with valid inputs', () => {
        it.only('returns the equivalent strings', async () => {
            const mockOnChange = jest.fn();
            render(<Router><Login/></Router>);

            userEvent.type(screen.getByPlaceholderText('email'), 'email@test.com')
            userEvent.type(screen.getByPlaceholderText('senha'), '123456')

            await waitFor (() => {
                expect(mockOnChange).toHaveBeenCalled();
            })
        })
    });

    describe('with empty inputs', () => {
        it('renders the inputs errors and dont call the Register function', async() => {
            const mockOnSubmit = jest.fn();
            render(<Router><Login onSubmit={mockOnSubmit} /></Router>);

            (async() => {
                fireEvent.change(screen.getByPlaceholderText('email'), {target: {value: ''}})
                fireEvent.change(screen.getByPlaceholderText('senha'), {target: {value: ''}})
            })

            (async() => {
                fireEvent.click(screen.getByRole('button'))
            })

            expect(mockOnSubmit).toHaveBeenCalled();
        })
    });
});
