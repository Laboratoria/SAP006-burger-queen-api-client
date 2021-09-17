import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import { AuthErrorMessages } from './ErrorMessages'

afterEach(cleanup)

describe('Testing the AuthErrorMessage component', () => {

  it ('The AuthErrorMessage component should be rendered in the document.', () => {
    const {queryByTestId} = render(<AuthErrorMessages Subject='test'/>);
    expect(queryByTestId('errorMessage')).toBeInTheDocument();
  });

  it ('The AuthErrorMessage component should be rendered in the document with the given text.', () => {
    render(<AuthErrorMessages Subject='test'></AuthErrorMessages>);
    const error = screen.getByText('Test error message');
    expect(error).toBeInTheDocument();
  });

  it ('The Rendered AuthErrorMessage component should have class="auth-error-message"', () => {
    const {queryByTestId} = render(<AuthErrorMessages Subject='test'/>);
    expect(queryByTestId('errorMessage')).toHaveClass('auth-error-message');
  });

  it ('The Rendered AuthErrorMessage component should have class="auth-error-message-of-role"', () => {
    const {queryByTestId} = render(<AuthErrorMessages Subject='role'/>);
    expect(queryByTestId('errorMessage')).toHaveClass('auth-error-message-of-role');
  });

});
