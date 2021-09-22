// import { render, fireEvent } from '@testing-library/react'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { act } from 'react-dom/test-utils'
// import Login from './Login'

// describe('Login', () => {
//     // beforeEach(() => {
//     //     jest.resetAllMocks();
//     // })

//     describe('with valid inputs', () => {
//         it.only('calls the onSubmit function', async () => {
//             const mockOnSubmit = jest.fn();
//             const {getByPlaceholderText, getByRole} = render(<Router><Login onSubmit={mockOnSubmit} /></Router>);

//             await act(async(event)  => {
//                 expect(event.target.value).toEqual('email@test.com')
//                 fireEvent.change(getByPlaceholderText('email'), {target: {value:'email@test.com'}})
//                 fireEvent.change(getByPlaceholderText('senha'), {target: {value:'123456'}})
//             })

//             await act(async() => {
//                 fireEvent.click(getByRole('button'))
//             })

//             expect(mockOnSubmit).toHaveBeenCalled();
//         })
//     });

//     describe('with empty inputs', () => {
//         it('renders the inputs errors and dont call the Register function', async() => {
//             const mockOnSubmit = jest.fn();
//             const {getByPlaceholderText, getByRole} = render(<Router><Login onSubmit={mockOnSubmit} /></Router>);

//             await act(async() => {
//                 fireEvent.change(getByPlaceholderText('email'), {target: {value: ''}})
//                 fireEvent.change(getByPlaceholderText('senha'), {target: {value: ''}})
//             })

//             await act(async() => {
//                 fireEvent.click(getByRole('button'))
//             })

//             expect(mockOnSubmit).toHaveBeenCalled();
//         })
//     });
// });
