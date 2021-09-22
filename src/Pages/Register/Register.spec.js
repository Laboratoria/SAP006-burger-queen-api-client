import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import RegisterForm from './RegisterForm';
import { BrowserRouter } from 'react-router-dom'


describe('Register', () => {
    describe('check valid inputs', () => {

        it('calls the fetchRegister function', async () => {
            const mockFetchRegister = jest.fn()
            const {getByTestId, getByRole} = render(<BrowserRouter><RegisterForm submitForm={mockFetchRegister}/></BrowserRouter>)

            act(() => {
                fireEvent.change(getByTestId("input-name"), {target: {value: "ana silva"}})
                fireEvent.change(getByTestId("input-email"), {target: {value: "email@test.com"}})
                fireEvent.change(getByTestId("input-password"), {target: {value: "1234567"}})
                fireEvent.change(getByTestId("input-confirm-password"), {target: {value: "1234567"}})
                fireEvent.change(getByTestId('select-role'), {target: {value: 'salão'}})
            })

            act(() => {
                fireEvent.click(getByRole('button'))
            })

            expect(mockFetchRegister).toHaveBeenCalled()
        })
    })
})