import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { Header } from './Header'

afterEach(cleanup)

describe('Testing the Header component', () => {
  
  it('The "data-testid=header" should be truthy.', () => {
    const {queryByTestId} = render(<Header />);
    expect(queryByTestId('header')).toBeTruthy();
  });
});