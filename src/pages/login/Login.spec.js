import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import Login from './Login'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

describe('Login Form', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Login />
    </Router>)

  it('should render the login page', () => {  
    expect(screen.getByText(/Não tem uma conta?/i)).toBeInTheDocument();
  })

  
})