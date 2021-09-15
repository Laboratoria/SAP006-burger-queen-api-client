/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import { AuthErrorMessages } from './ErrorMessages'

afterEach(cleanup)

describe('Testing the AuthErrorMessage component', () => {

  const label = 'errorMessageLabel';

  it ('Should render the component errorMessage (which is a <p> element) with the given text.', () => {
    render(<AuthErrorMessages>{label}</AuthErrorMessages>);
    const p = screen.getByText(label);
    expect(p).toBeInTheDocument();
  });
});