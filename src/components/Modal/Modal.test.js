import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import { Button } from '../Button/Button';
import { AuthModal } from './Modal'

afterEach(cleanup)

describe('Testing the AuthModal component', () => {
  const label = 'modalContent';
  const labelButton = 'modalLabelButton';

  it ('Should render the modal message with the given label.', () => {
    render(<AuthModal>{label}</AuthModal>);
    const p = screen.getByText(label);
    expect(p).toBeInTheDocument();
  });

  it ('The buttons inside a modal should dispatch a function.', () => {
    const fn = jest.fn();
    render(<AuthModal> <Button buttonEvent={fn}>{labelButton}</Button></AuthModal>)
    const btn = screen.getByText(labelButton);
    fireEvent.click(btn)
    expect(fn).toHaveBeenCalledTimes(1);
  });

});