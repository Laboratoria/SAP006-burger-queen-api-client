import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { Header } from './Header'

afterEach(cleanup)

describe('Testing the Header component', () => {
  
  it('The Header component should rendered in the document.', () => {
    const {queryByTestId} = render(<Header/>);
    expect(queryByTestId('header')).toBeInTheDocument();
  });


  it ('The logo image inside of the component Header (which has the Location = "test") should have alt="Logo Combos Burger"', () => {
    const {queryByAltText} = render(<Header Location='test'/>);
    expect(queryByAltText('Logo Berg')).toBeInTheDocument();
  });


  it ('The logo image inside of the component Header (which has the Location = "test")should have src="test"', () => {
    const {queryByAltText} = render(<Header Location='test'/>);
    expect(queryByAltText('Logo Berg')).toHaveAttribute('src', 'logo-berg.png')
  });
  
});