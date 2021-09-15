/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import { Header } from './Header'

afterEach(cleanup)

describe('Testing the Header component', () => {
  it('renders', () => {
  const {getByText} = render(<Header/>);
  expect(getByText(/'Logo Combos Burger'/i)).toBeInTheDocument()
  });
});

