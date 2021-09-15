/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import { Button } from './Button'

afterEach(cleanup)

describe('Testing the Button component', () => {

  const label = 'btnLabel';

  it ('Should render the component button with the given text.', () => {
    render(<Button>{label}</Button>);
    const btn = screen.getByText(label);
    expect(btn).toBeInTheDocument();
  });

  it ('Should dispatch a function when clicked.', () => {
    const fn = jest.fn();
    render(<Button buttonEvent={fn}>{label}</Button>)
    const btn = screen.getByText(label);
    fireEvent.click(btn)
    expect(fn).toHaveBeenCalledTimes(1);
  });
});