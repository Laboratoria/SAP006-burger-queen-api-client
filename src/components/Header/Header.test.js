import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { Header } from './Header'

afterEach(cleanup)

describe('Testing the Header component', () => {
  
  it('The Header component should rendered in the document.', () => {
    const {queryByTestId} = render(<Header Location='test' />);
    expect(queryByTestId('header')).toBeInTheDocument();
  });

  it ('The background image inside of the component Header (which has the Location = "test") should have class="test-class"', () => {
    const {queryByTestId} = render(<Header Location='test'/>);
    expect(queryByTestId('img-bg')).toHaveClass('test-class');
  });
  
  it ('The logo image inside of the component Header (which has the Location = "test") should have alt="Ilustração Background"', () => {
    const {queryByAltText} = render(<Header Location='test'/>);
    expect(queryByAltText('Ilustração de Background')).toBeInTheDocument();
  });

  it ('The logo image inside of the component Header (which has the Location = "test") should have alt="Logo Combos Burger"', () => {
    const {queryByAltText} = render(<Header Location='test'/>);
    expect(queryByAltText('Logo Combos Burguer')).toBeInTheDocument();
  });

  it ('The background image inside of the component Header (which has the Location = "test") should have src="test"', () => {
    const {queryByAltText} = render(<Header Location='test'/>);
    expect(queryByAltText('Ilustração de Background')).toHaveAttribute('src', 'test')
  });

  it ('The logo image inside of the component Header (which has the Location = "test")should have src="test"', () => {
    const {queryByAltText} = render(<Header Location='test'/>);
    expect(queryByAltText('Logo Combos Burguer')).toHaveAttribute('src', 'logo-combos-burger.png')
  });
  
});