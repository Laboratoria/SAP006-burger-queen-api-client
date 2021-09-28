import React from 'react'
import { Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent} from '@testing-library/react'
import {createMemoryHistory} from 'history'

import ButtonLogout from './index'


afterEach(cleanup)

describe('Tests for ButtonLogout component', () => {
  it('should render a button', () => {
    
    render(<ButtonLogout></ButtonLogout>);
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument();
  });
 

  it('should handle navigation', () => {
    const history = createMemoryHistory()
    const pushSpy = jest.spyOn(history, 'push') 
    render(
        <Router history={history}>
          <ButtonLogout/>
        </Router>
    )
    fireEvent.click(screen.getByRole('button')) 
    expect(pushSpy).toHaveBeenCalled()
  })

  
});